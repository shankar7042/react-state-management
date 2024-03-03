import { create } from "zustand";

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  return [...todos, { id: crypto.randomUUID(), text, done: false }];
};

export const toggleTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
};

export const deleteTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

interface TodoStore {
  todos: Todo[];
  newTodo: string;
  setTodoText: (text: string) => void;
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodo = create<TodoStore>((set) => ({
  todos: [],
  newTodo: "",
  setTodoText: (text: string) => set(() => ({ newTodo: text })),
  addTodo: () =>
    set((state) => ({ todos: addTodo(state.todos, state.newTodo) })),
  toggleTodo: (id: string) =>
    set((state) => ({ todos: toggleTodo(state.todos, id) })),
  deleteTodo: (id: string) =>
    set((state) => ({ todos: deleteTodo(state.todos, id) })),
}));
