import Task from "../Task/Task";

export default function Tasks({ tasks, isLoading, error }) {
  return (
    <div>
      <h1>Tasks</h1>
      {isLoading && <div>Loading tasks...</div>}
      {error && <div>{error}</div>}
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
}
