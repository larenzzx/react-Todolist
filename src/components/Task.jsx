import { House, NotebookPen, CircleCheckBig } from "lucide-react";
import { TaskList } from "./taskContent/TaskList";
import { AddTask } from "./taskContent/AddTask";
import { useState } from "react";

export const Task = ({ activeTab, tasks, setTasks }) => {
  const [editingTask, setEditingTask] = useState(null);

  let filteredTasks = tasks;
  if (activeTab === "Pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (activeTab === "Completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  const getIcon = () => {
    switch (activeTab) {
      case "Pending":
        return <NotebookPen className="text-secondary size-6 md:size-8" />;
      case "Completed":
        return <CircleCheckBig className="text-accent size-6 md:size-8" />;
      default:
        return <House className="text-primary size-6 md:size-8" />;
    }
  };

  return (
    <div className="py-2 px-4 md:pt-4 md:px-12 w-full">
      <div className="flex items-center gap-3 md:gap-2 pb-2 mb-4 sticky top-11 bg-base-100 md:bg-transparent md:pt-2 md:top-0 md:backdrop-blur-md z-20">
        {getIcon()}
        <h2 className="text-primary font-semibold text-2xl md:text-3xl">
          {activeTab}
        </h2>
      </div>

      <TaskList 
        tasks={filteredTasks} 
        setTasks={setTasks} 
        setEditingTask={setEditingTask} 
        activeTab={activeTab} 
      />
      <AddTask 
        tasks={tasks} 
        setTasks={setTasks} 
        editingTask={editingTask} 
        setEditingTask={setEditingTask} 
        hideCompletedButton={activeTab === "Pending"} 
      />
    </div>
  );
};
