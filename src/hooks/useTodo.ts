import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addTodo as addTodoSlice,
  deleteTodo,
  selectTodo,
  toggleTodo,
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

  const handleDeleteTodo = (id: number) => {
    return () => {
      dispatch(deleteTodo(id));
    };
  };

  const handleToggleTodo = (id: number) => {
    return () => {
      dispatch(toggleTodo(id));
    };
  };

  return {
    todos,
    addTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
}
