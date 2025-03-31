import { Menu } from "lucide-react";
import { useState } from "react";
import { House, CircleCheckBig, NotebookPen } from "lucide-react";
import { LuCheckCheck } from "react-icons/lu";

export const Sidebar = ({ activeTab, setActiveTab, tasks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Compute pending & completed counts dynamically
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  const menuItems = [
    {
      name: "Tasks",
      icon: <House className="size-5 text-primary" />,
      count: tasks.length,
    },
    {
      name: "Pending",
      icon: <NotebookPen className="size-5 text-secondary" />,
      count: pendingTasks,
    },
    {
      name: "Completed",
      icon: <CircleCheckBig className="size-5 text-accent" />,
      count: completedTasks,
    },
  ];

  return (
    <div className="drawer md:drawer-open z-50 w-full md:w-70 xl:w-80 sticky top-0 bg-base-100">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <div className="drawer-content">
        <button
          className="px-4 pt-4 drawer-button md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="text-primary" />
        </button>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay"
          onClick={closeMenu}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 xl:w-70 p-4 space-y-2 md:space-y-4">
          <button className="font-bold md:hidden" onClick={toggleMenu}>
            <Menu className="w-5" />
          </button>

          <div className="flex items-center gap-2 py-2 mb-8">
            <LuCheckCheck className="animate-pulse size-5 md:size-6" />
            <h1 className="text-xl md:text-2xl font-bold">My Todo-list</h1>
          </div>

          {/* Sidebar Menu */}
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                className={`flex items-center justify-between ${
                  activeTab === item.name ? "bg-base-300" : ""
                }`}
                onClick={() => {
                  setActiveTab(item.name);
                  closeMenu(); // Close menu after clicking a tab
                }}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-lg">{item.name}</p>
                </div>
                {item.name !== "Tasks" && (
                  <span className="badge badge-xs">{item.count}</span>
                )}
              </a>
            </li>
          ))}
          {/* === theme === */}
          <li className="absolute bottom-0 left-1/2 transform -translate-1/2">
            <label className="flex justify-center cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="corporate"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
