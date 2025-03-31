import { House } from "lucide-react";
import { TaskList } from "./taskContent/TaskList";
import { AddTask } from "./taskContent/AddTask";
import { useState } from "react";

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="py-2 px-4 md:pt-4 md:px-12 w-full">
      <div className="flex items-center gap-3 md:gap-2 pb-2 mb-4 sticky top-11 bg-base-100 md:bg-transparent md:pt-2 md:top-0 md:backdrop-blur-md z-20">
        <House className="text-primary size-6 md:size-8" />
        <h2 className="font bold text-primary font-semibold text-2xl md:text-3xl">
          Tasks
        </h2>
      </div>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setEditingTask={setEditingTask}
      />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
    </div>
  );
};
