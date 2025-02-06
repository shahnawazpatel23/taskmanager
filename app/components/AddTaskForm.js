
'use client'
// export default function AddTaskForm({ addTask }) {
//     console.log(addTask)
//     return (
//       <section className="mt-6">
//         <h2 className="text-xl font-bold">Add New Task</h2>
//         <form action={addTask} className="mt-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Task Title"
//             className="border p-2 w-full mb-2"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Task Description"
//             className="border p-2 w-full mb-2"
//             required
//           />
//           <input
//             type="date"
//             name="dueDate"
//             className="border p-2 w-full mb-2"
        
//           />
//           <button type="submit" className="bg-green-500 text-white p-2 mt-2">
//             Add Task
//           </button>
//         </form>
//       </section>
//     );
//   }


// 'use client'

import { Router } from "next/router";

export default function AddTaskForm({ addTask }) {
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries()); // Convert form data to an object
  
      try {
        await addTask(data); // Call the addTask server action
        console.log('Task added successfully');
        event.target.reset(); // Reset the form
        window.location.reload(); // Refresh the page to update the UI
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };

  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold">Add New Task</h2>
      <form onSubmit={handleSubmit} className="mt-4 ">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border p-2 w-full mb-2 text-black rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          className="border p-2 w-full mb-2 text-black rounded-md"
          required
        />
        <input
          type="date"
          name="dueDate"
          className="border p-2 w-full mb-2 text-black rounded-md"
        />
        <div className="w-full flex justify-center items-center m-4">

        <button type="submit" className="bg-green-500 text-white p-2 mt-2 rounded-md hover:bg-green-600" >
          Add Task
        </button>
        </div>
      </form>
    </section>
  );
}

  