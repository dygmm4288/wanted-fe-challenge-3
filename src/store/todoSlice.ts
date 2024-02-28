import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
};

const initialState = {
  todos: [] as Todo[],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      state.todos.splice(0, 0, todo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);

      state.todos.splice(index, 1);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);

      state.todos[index].isDone = !state.todos[index].isDone;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
