import { Menu } from "lucide-react";
import { useState } from "react";
import { House, CircleCheckBig, NotebookPen } from "lucide-react";
import { LuCheckCheck } from "react-icons/lu";

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="drawer md:drawer-open z-50 w-full md:w-70 xl:w-80 sticky top-0 bg-neutral-900">
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
        <ul className="menu bg-neutral-800 text-base-content min-h-full w-60 xl:w-70 p-4">
          {/* Close Button */}
          <button className="font-bold md:hidden" onClick={toggleMenu}>
            <Menu className="w-5" />
          </button>

          <div className="flex items-center gap-2 py-2 mb-4">
            <LuCheckCheck className="animate-pulse size-5 md:size-6" />
            <h1 className="text-xl md:text-2xl font-bold">My Todo-list</h1>
          </div>

          <label className="input mb-4 bg-neutral-800">
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

          <li>
            <a className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <House className="text-primary size-5" />
                <p className="text-lg">Tasks</p>
              </div>
              <span className="bg-neutral-900 px-2 text-center shadow-lg rounded-full">
                20
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <NotebookPen className="text-secondary size-5" />
                <p className="text-lg">Pending</p>
              </div>
              <span className="bg-neutral-900 px-2 text-center shadow-lg rounded-full">
                18
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CircleCheckBig className="text-accent size-5" />
                <p className="text-lg">Completed</p>
              </div>
              <span className="bg-neutral-900 px-2 text-center shadow-lg rounded-full">
                2
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
