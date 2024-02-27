import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addTodo as addTodoSlice,
  deleteTodo as deleteTodoSlice,
  selectTodo,
  toggleTodo as toggleTodoSlice,
} from "../store/todoSlice";

export default function useTodo() {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  const addTodo = (content: string) => {
    const newTodo = {
      id: Date.now(),
      content,
      isDone: false,
    };

    dispatch(addTodoSlice(newTodo));
  };

  const toggleTodo = (id: number) => {
    dispatch(toggleTodoSlice(id));
  };

  const deleteTodo = (id: number) => {
    dispatch(deleteTodoSlice(id));
  };

  const handleDeleteTodo = (id: number) => {
    return () => {
      deleteTodo(id);
    };
  };

  const handleToggleTodo = (id: number) => {
    return () => {
      toggleTodo(id);
    };
  };

  return {
    todos,
    addTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
}
