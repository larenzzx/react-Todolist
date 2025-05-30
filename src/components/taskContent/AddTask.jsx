import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const AddTask = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [taskInput, setTaskInput] = useState({ title: "", dueDate: "" });

  useEffect(() => {
    if (editingTask) {
      setTaskInput({
        title: editingTask.title,
        dueDate: editingTask.dueDate || "",
      });
    } else {
      setTaskInput({ title: "", dueDate: "" });
    }
  }, [editingTask]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  };

  const handleSubmit = () => {
    if (!taskInput.title.trim()) return; 

    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...taskInput, dueDate: taskInput.dueDate || null }
            : task
        )
      );
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Task Successfully Updated!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      setEditingTask(null);
    } else {
      const newTask = {
        id: uuidv4(),
        title: taskInput.title,
        dueDate: taskInput.dueDate || null, 
        completed: false,
      };
      setTasks([...tasks, newTask]);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Task Successfully Added!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }

    setTaskInput({ title: "", dueDate: "" });
    setEditingTask(null);
  };

  return (
    <>
      <label
        htmlFor="task-modal"
        className="btn btn-primary p-0 mb-4 rounded-full size-10 md:size-12 fixed right-5 bottom-0 z-50"
      >
        <Plus />
      </label>
      <input type="checkbox" id="task-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box space-y-2">
          <h2 className="font-bold text-lg">
            {editingTask ? "Edit Task" : "New Task"}
          </h2>
          <div>
            <label htmlFor="title" className="text-gray-400 text-sm">
              Note something
            </label>
            <input
              type="text"
              name="title"
              value={taskInput.title}
              onChange={handleInput}
              placeholder="Input task"
              className="input input-bordered w-full mt-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="dueDate" className="text-gray-400 text-sm">
              Set Due Date (Optional)
            </label>
            <input
              id="dueDate"
              type="datetime-local"
              name="dueDate"
              value={taskInput.dueDate}
              onChange={handleInput}
              className="input input-bordered focus:outline-none w-full mt-2"
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="task-modal"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              {editingTask ? "Update" : "Add"}
            </label>
            <label
              htmlFor="task-modal"
              className="btn btn-primary"
              onClick={() => setEditingTask(null)}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
