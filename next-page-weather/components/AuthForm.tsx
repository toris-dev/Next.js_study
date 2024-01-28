import { User } from "@/models/customTypes";
import emailIcon from "@/public/email_envelope_mail_send_icon.svg";
import lockIcon from "@/public/lock_locker_icon.svg";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import InputContainer from "./InputContainer";

async function reisterUser(userData: User) {
  const response = await fetch("api/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.method || "Something went wrong");
  }
  return data;
}
const AuthForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const authModeHandler = () => {
    setIsLogin((prev) => !prev);
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");
  };
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: User = { enteredEmail, enteredPassword };

    if (
      enteredEmail?.trim().length === 0 ||
      enteredPassword?.trim().length === 0
    ) {
      alert("먼저 유저이름과 비밀번호를 입력해주세요.");
      return;
    }

    if (!isLogin) {
      if (enteredPassword !== enteredConfirmPassword) {
        alert("비밀번호가 일지하지 않습니다!!");
        return;
      }
      try {
        const response = await reisterUser(userData);
        alert("회원가입에 성공하였습니다!");
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  };
  return (
    <form className="auth__form" onSubmit={submitHandler}>
      <InputContainer
        type="email"
        value={enteredEmail}
        onChangedHandler={setEnteredEmail}
        placeholder="이메일을 입력해주세요."
        iconAlt="email icon"
        iconSrc={emailIcon}
      />
      <InputContainer
        type="password"
        value={enteredPassword}
        onChangedHandler={setEnteredPassword}
        placeholder="패스워드를 입력해주세요."
        iconAlt="password icon"
        iconSrc={lockIcon}
      />

      {!isLogin && (
        <InputContainer
          type="password"
          value={enteredConfirmPassword}
          onChangedHandler={setEnteredConfirmPassword}
          placeholder="비밀번호 다시 입력해주세요."
          iconAlt="password icon"
          iconSrc={lockIcon}
        />
      )}
      <button className="auth__btn">
        {isLogin ? "Login" : "Create Account"}
      </button>
      <div className="auth__mode">
        {isLogin ? "이미 계정이 있습니까?" : "존재하는 아이디로 로그인하기"}
        <button
          className="ml-2 text-primary"
          onClick={authModeHandler}
          type="button"
        >
          {isLogin ? "회원가입" : "로그인"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
