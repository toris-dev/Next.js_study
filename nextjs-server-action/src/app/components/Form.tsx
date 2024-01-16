import { actionAddTodo, actionDeleteTodo } from "@/lib/actions";
import React from "react";

const Form = () => {
  return (
    <form className="flex items-center gap-2" action={actionAddTodo}>
      <input
        type="text"
        name="title"
        className="flex-grow w-full p1 text-2xl rounded-lg"
        placeholder="새로운 할 일을 생성하세요."
        autoFocus
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
