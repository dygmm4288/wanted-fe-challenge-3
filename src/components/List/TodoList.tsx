import useTodo from "../../hooks/useTodo";
import TodoItem from "./TodoItem";
import { StLi, StUl } from "./TodoList.styles";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <StUl>
      {todos.map((todo) => (
        <StLi key={todo.id}>
          <TodoItem todo={todo} />
        </StLi>
      ))}
    </StUl>
  );
}
