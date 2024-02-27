import useTodo from "../../hooks/useTodo";
import { Todo } from "../../store/todoSlice";
import Button from "../common/Button";

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  const { id, content, isDone } = todo;
  const { deleteTodo, toggleTodo } = useTodo();

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <>
      <p>{content}</p>
      <Button onClick={handleDelete} type='button'>
        Delete
      </Button>
      <Button onClick={handleToggle} type='button'>
        {isDone ? "Working" : "Done"}
      </Button>
    </>
  );
}
