import { Todo, useTodo } from "../store";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const toggleTodo = useTodo((state) => state.toggleTodo);
  const deleteTodo = useTodo((state) => state.deleteTodo);

  const handleToggle = (id: string) => {
    toggleTodo(id);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <div
      key={todo.id}
      className="px-4 py-2 flex justify-between w-full items-center border shadow-md rounded-md"
    >
      <div className="flex gap-4">
        <input
          type="checkbox"
          className="accent-green-600"
          checked={todo.done}
          onChange={() => handleToggle(todo.id)}
        />
        <p className="capitalize">{todo.text}</p>
      </div>
      <button
        onClick={() => handleDelete(todo.id)}
        className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-300 transition duration-300"
      >
        &#10060;
      </button>
    </div>
  );
};

export default TodoItem;
