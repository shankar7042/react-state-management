import { useTodo } from "../context/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TodoList;
