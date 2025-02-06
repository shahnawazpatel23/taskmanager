'use server';

import { connectToDB } from '../db/connectToDb';
import TaskModel from '../db/TaskModel';
import { revalidatePath } from 'next/cache';

export async function addTask(formData) {
  await connectToDB();
  const newTask = new TaskModel({
    title: formData.title,
    description: formData.description,
    dueDate: formData.dueDate,
    completed: false,
  });
  await newTask.save();
  revalidatePath('/'); // Trigger revalidation after adding task
}

export async function deleteTask(id) {
  await connectToDB();
  await TaskModel.findByIdAndDelete(id);
  revalidatePath('/'); // Trigger revalidation after deleting task
}

export async function toggleTaskStatus(id, completed) {
  await connectToDB();
  await TaskModel.findByIdAndUpdate(id, { completed: !completed });
  revalidatePath('/'); // Trigger revalidation after toggling task status
}

export async function fetchTasks() {
  await connectToDB();
  const tasks = await TaskModel.find();
  return tasks.map(task => ({
    id: task._id.toString(),
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    completed: task.completed,
  }));
}
