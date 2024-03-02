import { useTodo } from "../context/useTodo";
import { Todo } from "../store";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { handleToggleTodo, handleDeleteTodo } = useTodo();

  const handleToggle = (id: string) => {
    handleToggleTodo(id);
  };

  const handleDelete = (id: string) => {
    handleDeleteTodo(id);
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
