import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="h-screen bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        <Sidebar />
        <Task />
      </div>
    </div>
  );
}

export default App;
