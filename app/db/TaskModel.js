'use server'
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date,  },
  completed: { type: Boolean, default: false },
});

const TaskModel = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default TaskModel;
