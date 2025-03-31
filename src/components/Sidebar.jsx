import { Menu } from "lucide-react";
import { useState } from "react";
import { House, CircleCheckBig, NotebookPen } from "lucide-react";
import { LuCheckCheck } from "react-icons/lu";

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tasks");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: "Tasks",
      icon: <House className="size-5 text-primary" />,
      count: 20,
    },
    {
      name: "Pending",
      icon: <NotebookPen className="size-5 text-secondary" />,
      count: 18,
    },
    {
      name: "Completed",
      icon: <CircleCheckBig className="size-5 text-accent" />,
      count: 2,
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
        {/* Open Button */}
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
          onClick={toggleMenu}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 xl:w-70 p-4 space-y-2 md:space-y-4">
          {/* ==== menu close ==== */}
          <button className="font-bold md:hidden" onClick={toggleMenu}>
            <Menu className="w-5" />
          </button>

          <div className="flex items-center gap-2 py-2 mb-4">
            <LuCheckCheck className="animate-pulse size-5 md:size-6" />
            <h1 className="text-xl md:text-2xl font-bold">My Todo-list</h1>
          </div>

          {/* === search === */}
          <label className="input mb-4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="Search" />
          </label>

          {/* === sidebar menu === */}
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                className={`flex items-center justify-between ${
                  activeTab === item.name ? "bg-neutral text-white" : ""
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-lg">{item.name}</p>
                </div>
                <span className="badge badge-xs">{item.count}</span>
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
