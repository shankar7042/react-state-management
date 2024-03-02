import { todosSelector } from "../slices/todoSlice";
import { useAppSelector } from "../store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useAppSelector(todosSelector);

  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TodoList;
