import useTodo from "../../hooks/useTodo";
import { Todo } from "../../store/todoSlice";
import Button from "../common/Button";

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  const { id, content, isDone } = todo;
  const { handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <p>{content}</p>
      <Button onClick={handleDeleteTodo(id)} type='button'>
        Delete
      </Button>
      <Button onClick={handleToggleTodo(id)} type='button'>
        {isDone ? "Working" : "Done"}
      </Button>
    </>
  );
}
