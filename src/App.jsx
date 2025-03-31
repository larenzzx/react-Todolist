import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

function App() {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the app starts
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tasks={tasks} />
        <Task activeTab={activeTab} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
//
