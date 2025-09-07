export default function Stats({ todos }) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Completadas: {completed}</p>
      <p>Pendientes: {pending}</p>
    </div>
  );
}
