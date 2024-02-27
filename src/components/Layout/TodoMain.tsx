import TodoForm from "../Form/TodoForm";
import TodoList from "../List/TodoList";
import { StMain } from "./layout.styles";

export default function TodoMain() {
  return (
    <StMain>
      <TodoForm />
      <TodoList />
    </StMain>
  );
}
