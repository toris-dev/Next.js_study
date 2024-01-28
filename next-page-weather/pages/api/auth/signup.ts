import { hashPassword } from "@/lib/auth-services";
import { connectDataBase } from "@/lib/db";
import { User } from "@/models/customTypes";
import { NextApiRequest, NextApiResponse } from "next";

interface IApiReqeust<T> extends NextApiRequest {
  body: T;
}

const handler = async (req: IApiReqeust<User>, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { enteredEmail, enteredPassword } = data;
      if (
        !enteredEmail ||
        !enteredEmail?.includes("@") ||
        !enteredPassword ||
        enteredPassword.trim().length < 5
      ) {
        return res.status(422).json({
          message: "입력이 잘못되었습니다.",
        });
      }

      const client = await connectDataBase();

      const db = client.db("dbName");
      const emailExisting = await db
        .collection("users")
        .findOne({ enteredEmail });

      if (emailExisting) {
        return res.status(409).json({
          message: "유저가 이미 존재합니다.",
        });
      }

      const hashedPassword = await hashPassword(enteredPassword);
      const userCollection = db.collection("users");
      const result = await userCollection.insertOne({
        enteredEmail,
        hashedPassword,
      });

      console.log(result);
      res.status(201).json({
        message: "유저가 생성되었습니다.",
      });
      client.close();
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
