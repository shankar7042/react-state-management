import { ReactNode, createContext, useState } from "react";
import { Todo, addTodo, deleteTodo, toggleTodo } from "../store";

export const TodoContext = createContext<{
  todos: Todo[];
  newTodo: string;
  handleChange: (text: string) => void;
  handleSubmit: () => void;
  handleToggleTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}>({
  todos: [],
  newTodo: "",
  handleChange: () => {},
  handleSubmit: () => {},
  handleToggleTodo: () => {},
  handleDeleteTodo: () => {},
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    setTodos((currentTodos) => addTodo(currentTodos, text));
    setText("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos((currentTodos) => toggleTodo(currentTodos, id));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((currentTodos) => deleteTodo(currentTodos, id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo: text,
        handleChange,
        handleSubmit,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
