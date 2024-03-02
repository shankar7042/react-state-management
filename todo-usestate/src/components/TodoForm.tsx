import { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
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
