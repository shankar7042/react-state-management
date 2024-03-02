import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todosSelector } from "./slices/todoSlice";
import { useAppSelector } from "./store";

function App() {
  const todos = useAppSelector(todosSelector);

  return (
    <div className="max-w-[700px] p-4 space-y-4 mx-auto border shadow-sm rounded-b-md">
      <h1 className="text-center font-semibold text-4xl">Todos</h1>
      <TodoForm />
      {todos.length === 0 && (
        <p className="text-center text-slate-400">
          No Todos. Please create one!!!
        </p>
      )}
      <TodoList />
    </div>
  );
}

export default App;
