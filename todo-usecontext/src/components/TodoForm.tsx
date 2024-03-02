import { useTodo } from "../context/useTodo";

const TodoForm = () => {
  const { handleSubmit: onSubmit, newTodo, handleChange: onChange } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="rounded-md overflow-hidden border">
      <form className="flex items-center h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 block h-full flex-1 outline-none"
          value={newTodo}
          onChange={handleChange}
          autoFocus
        />
        <button className="text-white px-4 py-2 bg-purple-500 h-full hover:bg-purple-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
