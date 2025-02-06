export default function TaskItem({ task, toggleTaskStatus, deleteTask }) {
    return (
      <li className="p-2 border mb-2">
        <h2 className="font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
        {!task.completed &&<button
          className="bg-blue-500 text-white p-1 mr-2 hover:bg-blue-700"
          onClick={() => toggleTaskStatus(task.id, task.completed)}
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>}
        <button
          className="bg-red-500 text-white p-1 hover:bg-red-600"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </li>
    );
  }
  