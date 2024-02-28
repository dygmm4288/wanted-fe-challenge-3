import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import useTodo from "../../hooks/useTodo";
import { Todo } from "../../store/todoSlice";
import Button from "../common/Button";
import { StButtonContainer, StP } from "./TodoList.styles";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { id, content, isDone } = todo;
  const { handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <div onClick={handleToggleTodo(id)}>
        {isDone ? (
          <MdCheckBox fontSize={25} cursor={"pointer"} />
        ) : (
          <MdCheckBoxOutlineBlank fontSize={25} cursor={"pointer"} />
        )}
      </div>
      <StP $isDone={isDone}>{content}</StP>
      <StButtonContainer>
        <Button
          onClick={handleDeleteTodo(id)}
          type='button'
          buttonType={"danger"}>
          Delete
        </Button>
        <Button onClick={handleToggleTodo(id)} type='button'>
          {isDone ? "Working" : "Done"}
        </Button>
      </StButtonContainer>
    </>
  );
}
