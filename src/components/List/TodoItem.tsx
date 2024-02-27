import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import useTodo from "../../hooks/useTodo";
import { Todo } from "../../store/todoSlice";
import Button from "../common/Button";
import { StP } from "./TodoList.styles";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { id, content, isDone } = todo;
  const { handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      {isDone ? (
        <MdCheckBox fontSize={25} />
      ) : (
        <MdCheckBoxOutlineBlank fontSize={25} />
      )}
      <StP $isDone={isDone}>{content}</StP>
      <div>
        <Button
          onClick={handleDeleteTodo(id)}
          type='button'
          buttonType={"danger"}>
          Delete
        </Button>
        <Button onClick={handleToggleTodo(id)} type='button'>
          {isDone ? "Working" : "Done"}
        </Button>
      </div>
    </>
  );
}
