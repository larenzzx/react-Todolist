import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="h-screen bg-neutral-900">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <Task />
      </div>
    </div>
  );
}

export default App;
