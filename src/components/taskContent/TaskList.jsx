import { Pencil, Trash, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const TaskList = ({
  tasks,
  setTasks,
  setEditingTask,
  activeTab,
  setActiveTab,
}) => {
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    if (activeTab === "Completed") {
      setShowCompleted(true);
    } else {
      setShowCompleted(false);
    }
  }, [activeTab]);

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      }
    });
  };

  const editTask = (task) => {
    setEditingTask(task);
    document.getElementById("task-modal").checked = true;
  };

  return (
    <>
      {/* === PENDING TASKS LIST === */}
      {activeTab !== "Completed" && (
        <ul className="list bg-base-200 rounded-box shadow-md">
          {tasks.filter((task) => !task.completed).length > 0
            ? tasks
                .filter((task) => !task.completed)
                .map((task) => {
                  const isDue = new Date(task.dueDate) < new Date();
                  return (
                    <li key={task.id} className="list-row items-center">
                      {activeTab !== "Pending" && (
                        <div>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm checkbox-primary"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                          />
                        </div>
                      )}
                      {activeTab === "Pending" && <div></div>}
                      <div className={isDue ? "text-error" : ""}>
                        <div>{task.title}</div>
                        <div className="text-xs opacity-60">
                          Due: {new Date(task.dueDate).toLocaleString()}
                        </div>
                      </div>
                      {activeTab !== "Pending" && (
                        <button
                          className="btn btn-square btn-primary btn-ghost"
                          onClick={() => editTask(task)}
                        >
                          <Pencil className="w-4" />
                        </button>
                      )}
                      {activeTab !== "Pending" && (
                        <button
                          className="btn btn-square btn-error btn-ghost"
                          onClick={() => handleDelete(task.id)}
                        >
                          <Trash className="w-4" />
                        </button>
                      )}
                    </li>
                  );
                })
            : activeTab === "Pending" && (
                <li className="p-4 text-sm text-center text-gray-500">
                  No pending tasks
                </li>
              )}
        </ul>
      )}

      {/* === ALL TASKS === */}
      {activeTab === "Tasks" && (
        <div className="my-2">
          <button
            className="btn bg-base-200 shadow-none"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {!showCompleted ? (
              <ChevronRight className="w-4" />
            ) : (
              <ChevronDown className="w-4" />
            )}
            Completed
            <span>{tasks.filter((task) => task.completed).length}</span>
          </button>
        </div>
      )}

      {/* === COMPLETED TASKS LIST === */}
      {(showCompleted || activeTab === "Completed") && (
        <ul className="list bg-base-200 rounded-box shadow-md">
          {tasks.filter((task) => task.completed).length > 0 ? (
            tasks
              .filter((task) => task.completed)
              .map((task) => (
                <li key={task.id} className="list-row items-center">
                  {activeTab !== "Completed" && (
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-primary"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task.id)}
                      />
                    </div>
                  )}
                  {activeTab === "Completed" && <div></div>}
                  <div className="line-through">
                    <div>{task.title}</div>
                    <div className="text-xs opacity-60">
                      Due: {new Date(task.dueDate).toLocaleString()}
                    </div>
                  </div>
                  {activeTab !== "Completed" && (
                    <button
                      className="btn btn-square btn-error btn-ghost"
                      onClick={() => handleDelete(task.id)}
                    >
                      <Trash className="w-4" />
                    </button>
                  )}
                </li>
              ))
          ) : (
            <li className="p-4 text-sm text-center text-gray-500">
              No completed tasks
            </li>
          )}
        </ul>
      )}
    </>
  );
};
