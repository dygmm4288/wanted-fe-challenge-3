import TodoForm from "../Form/TodoForm";
import TodoList from "../List/TodoList";
import { Main } from "./layout.styles";

export default function TodoMain() {
  return (
    <Main>
      <TodoForm />
      <TodoList />
    </Main>
  );
}
