import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
import './App.css'


function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList />
      <Stats />
    </div>
  );
}

export default App
