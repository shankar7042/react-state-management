import { useTodo } from "../store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodo((state) => state.todos);

  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TodoList;
