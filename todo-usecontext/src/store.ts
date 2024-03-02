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
