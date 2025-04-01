import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

function App() {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          pendingTasks={tasks.filter((task) => !task.completed).length}
          completedTasks={tasks.filter((task) => task.completed).length}
        />        
        <Task activeTab={activeTab} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
