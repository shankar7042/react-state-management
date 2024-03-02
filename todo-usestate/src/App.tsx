import { useState } from "react";
import { Todo, addTodo, deleteTodo, toggleTodo } from "./store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (text: string) => {
    if (!text.trim()) return;
    setTodos((currentTodos) => addTodo(currentTodos, text));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((currentTodos) => toggleTodo(currentTodos, id));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((currentTodos) => deleteTodo(currentTodos, id));
  };

  return (
    <div className="max-w-[700px] p-4 space-y-4 mx-auto border shadow-sm rounded-b-md">
      <h1 className="text-center font-semibold text-4xl">Todos</h1>
      <TodoForm onSubmit={handleSubmit} />
      {todos.length === 0 && (
        <p className="text-center text-slate-400">
          No Todos. Please create one!!!
        </p>
      )}
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
