import { Pencil, Trash, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  const [showCompleted, setShowCompleted] = useState(false);

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    setEditingTask(task);
    document.getElementById("task-modal").checked = true;
  };

  return (
    <>
      <ul className="list bg-base-200 rounded-box shadow-md">
        {tasks.filter((task) => !task.completed).length > 0 ? (
          tasks
            .filter((task) => !task.completed)
            .map((task) => {
              const isDue = new Date(task.dueDate) < new Date();
              return (
                <li key={task.id} className="list-row items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                    />
                  </div>
                  <div className={`${isDue ? "text-error" : ""}`}>
                    <div>{task.title}</div>
                    <div className="text-xs opacity-60">
                      Due: {new Date(task.dueDate).toLocaleString()}
                    </div>
                  </div>
                  <button
                    className="btn btn-square btn-error btn-ghost"
                    onClick={() => editTask(task)}
                  >
                    <Pencil className="w-4" />
                  </button>
                  <button
                    className="btn btn-square btn-error btn-ghost"
                    onClick={() => handleDelete(task.id)}
                  >
                    <Trash className="w-4" />
                  </button>
                </li>
              );
            })
        ) : (
          <li className="p-4 text-sm text-center text-gray-500">
            No pending tasks
          </li>
        )}
      </ul>

      <div className="my-2">
        <button
          className="btn bg-base-200 shadow-none"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {!showCompleted ? <ChevronRight className="w-4" /> : <ChevronDown className="w-4" />}
          Completed
          <span>{tasks.filter((task) => task.completed).length}</span>
        </button>
      </div>

      {/* === completed === */}
      {showCompleted && (
        <ul className="list bg-base-200 rounded-box shadow-md">
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <li key={task.id} className="list-row items-center">
                <div>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                </div>
                <div className="line-through">
                  <div>{task.title}</div>
                  <div className="text-xs opacity-60">
                    Due: {new Date(task.dueDate).toLocaleString()}
                  </div>
                </div>
                <button
                  className="btn btn-square btn-error btn-ghost"
                  onClick={() => handleDelete(task.id)}
                >
                  <Trash className="w-4" />
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
