"use server";

import { Todo } from "@/app/components/TodoList";
import { revalidatePath } from "next/cache";
import sleep from "./sleep";

// create
export async function actionAddTodo(data: FormData) {
  const title = data.get("title");
  await fetch("http://localhost:3001/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  });

  revalidatePath("/");
}

//delete
export async function actionDeleteTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Cotent-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  });
  await res.json();
  revalidatePath("/");
}

// update
export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });

  await res.json();

  // 하는 이유는 CheckBox에서 disabled를 isPending값으로 설정을 하였기 때문에 트랜잭션 되지 않았을 때는 disabled 시킨다. 처리 된후 revalidate 시킨다.
  await sleep(2000);

  revalidatePath("/");
}
