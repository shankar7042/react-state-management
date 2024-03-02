import { ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addTodo, newTodoSelector, setTodoText } from "../slices/todoSlice";

const TodoForm = () => {
  const text = useAppSelector(newTodoSelector);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTodoText(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo());
    dispatch(setTodoText(""));
  };

  return (
    <div className="rounded-md overflow-hidden border">
      <form className="flex items-center h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 block h-full flex-1 outline-none"
          value={text}
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
