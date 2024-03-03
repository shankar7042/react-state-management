import { ChangeEvent, FormEvent } from "react";
import { useTodo } from "../store";

const TodoForm = () => {
  const todoText = useTodo((state) => state.newTodo);
  const addTodo = useTodo((state) => state.addTodo);
  const setTodoText = useTodo((state) => state.setTodoText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText) return;
    addTodo();
    setTodoText("");
  };

  return (
    <div className="rounded-md overflow-hidden border">
      <form className="flex items-center h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 block h-full flex-1 outline-none"
          value={todoText}
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
