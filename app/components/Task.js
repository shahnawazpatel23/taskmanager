'use client';

import { useState, useEffect } from 'react';
import { addTask, deleteTask, toggleTaskStatus, fetchTasks } from '../lib/serverActions';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export default function TaskManagementApp() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count,setCount] = useState(0);

  useEffect(() => {
    fetchInitialTasks();
  }, []);

  async function fetchInitialTasks() {
    setLoading(true);
    try {
      const taskList = await fetchTasks();
      setTasks(taskList);
    } catch (err) {
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTask(formData) {
    try {
      await addTask(formData);  // Server handles revalidation
    } catch (err) {
      console.error("Error creating task", err);
    }
  }

  async function handleDeleteTask(id) {
    try {
      await deleteTask(id);  // Server handles revalidation
      window.location.reload();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  }

  async function handleToggleTaskStatus(id, completed) {
    try {
      await toggleTaskStatus(id, completed);  // Server handles revalidation
      window.location.reload();
    } catch (err) {
      console.error("Error updating task status", err);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <AddTaskForm addTask={handleAddTask}  />
      <TaskList
        tasks={tasks}
        loading={loading}
        error={error}
        toggleTaskStatus={handleToggleTaskStatus}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
}
