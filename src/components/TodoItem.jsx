export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "gray" : "black",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button
        onClick={() => {
          if (window.confirm("¿Seguro que deseas eliminar esta tarea?")) {
            deleteTodo(todo.id);
          }
        }}
      >
        ❌
      </button>
    </li>
  );
}
