import { ChangeEvent, FormEvent, useState } from "react";
import { validateInput } from "../lib/Todo/validation";
import useTodo from "./useTodo";

export default function useTodoForm() {
  const [content, setContent] = useState("");
  const { addTodo } = useTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput(content)) {
      alert("올바른 Todo 내용을 작성해주세요.");
      return;
    }

    addTodo(content);

    setContent("");
  };

  return {
    content,
    handleChange,
    handleSubmit,
  };
}
