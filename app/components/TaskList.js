import TaskItem from './TaskItem';

export default function TaskList({ tasks, loading, error, toggleTaskStatus, deleteTask }) {
  return (
    <>
      {loading ? <p>Loading tasks...</p>: <h2 className='font-bold '>Your Tasks</h2>}
      {error && <p className="text-red-500">{error}</p>}
      
      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleTaskStatus={toggleTaskStatus} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
    </>
  );
}
