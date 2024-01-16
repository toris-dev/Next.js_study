import Image from "next/image";
import styles from "./page.module.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
}
