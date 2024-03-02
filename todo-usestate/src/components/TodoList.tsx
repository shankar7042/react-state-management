import { Todo } from "../store";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onDelete, onToggle }: TodoListProps) => {
  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  ));
};

export default TodoList;
