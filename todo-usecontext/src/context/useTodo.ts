import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("Please wrap your parent component with TodoProvider");
  return context;
};
