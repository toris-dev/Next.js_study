import { checkPassword } from "@/lib/auth-services";
import { connectDataBase } from "@/lib/db";
import NextAuth from "next-auth/next";
import CredentialProvier from "next-auth/providers/credentials";
type Credentials = {
  enteredEmail: string;
  enteredPassword: string;
};
const authOptions = {
  providers: [
    CredentialProvier({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { enteredEmail, enteredPassword } = credentials as Credentials;
        const client = await connectDataBase();
        const db = client.db("dbName");
        const userCollection = db.collection("users");
        const user = await userCollection.findOne({
          enteredEmail,
        });

        if (!user) {
          throw new Error("user not found!");
        }

        const userPassword = user.hashedPassword;
        const userEmail = user.enteredEmail;
        const id = user._id.toString();
        const passwordIsCorrect = await checkPassword({
          enteredPassword,
          userPassword,
        });
        if (!passwordIsCorrect) {
          throw new Error("password is incorrect");
        }

        client.close();
        return { id: id, email: userEmail };
      },
    }),
  ],
};

export default NextAuth(authOptions);
