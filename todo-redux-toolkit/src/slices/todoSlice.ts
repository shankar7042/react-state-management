import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../utils";
import { RootState } from "../store";

interface TodoState {
  todos: Todo[];
  newTodo: string;
}

const initialState: TodoState = {
  todos: [],
  newTodo: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoText: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload;
    },
    addTodo: (state) => {
      state.todos.push({
        id: crypto.randomUUID(),
        text: state.newTodo,
        done: false,
      });
      state.newTodo = "";
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const ind = state.todos.findIndex((todo) => todo.id === action.payload);
      if (ind !== -1) {
        state.todos[ind].done = !state.todos[ind].done;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const ind = state.todos.findIndex((todo) => todo.id === action.payload);
      if (ind !== -1) {
        state.todos.splice(ind, 1);
      }
    },
  },
});

export const { setTodoText, addTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

export const todosSelector = (state: RootState) => state.todoState.todos;
export const newTodoSelector = (state: RootState) => state.todoState.newTodo;

export const getTodoById = createSelector(
  [todosSelector, (_, id: string) => id],
  (todos, id) => {
    const ind = todos.findIndex((todo) => todo.id === id);
    if (ind !== -1) {
      return todos[ind];
    }
    return null;
  }
);
