import { Password } from "@/models/customTypes";
import { compare, hash } from "bcryptjs";

export const hashPassword = (password: string) => {
  const hashedPassword = hash(password, 10);
  return hashedPassword;
};

export const checkPassword = async ({
  enteredPassword,
  userPassword,
}: Password) => {
  const passwordIsValid = compare(enteredPassword, userPassword);
  return passwordIsValid;
};
