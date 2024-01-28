import { hash } from "bcryptjs";

export const hashPassword = (password: string) => {
  const hashedPassword = hash(password, 10);
  return hashedPassword;
};
