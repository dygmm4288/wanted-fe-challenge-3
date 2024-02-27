import useTodo from "../../hooks/useTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
