import { Menu } from "lucide-react";
import { useState } from "react";
import { Theme } from "./taskContent/Theme";
import { House, CircleCheckBig, NotebookPen } from "lucide-react";
import { LuCheckCheck } from "react-icons/lu";

export const Sidebar = ({ activeTab, setActiveTab, pendingTasks, completedTasks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    {
      name: "Tasks",
      icon: <House className="size-5 text-primary" />,
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
                  closeMenu();
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
          <Theme />
        </ul>
      </div>
    </div>
  );
};
