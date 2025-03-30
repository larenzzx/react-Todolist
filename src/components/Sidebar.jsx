import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="drawer md:drawer-open z-50 sticky top-0 bg-neutral-900">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <div className="drawer-content">
        {/* Open Button */}
        <button className="p-2 drawer-button md:hidden" onClick={toggleMenu}>
          <Menu className="text-primary" />
        </button>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay"
          onClick={toggleMenu}
        ></label>
        <ul className="menu bg-neutral-800 text-base-content min-h-full w-60 md:w-70 xl:w-80 p-4">
          {/* Close Button */}
          <button
            className="flex justify-between items-center border-2 w-full text-xl font-bold mb-2 self-end md:hidden"
            onClick={toggleMenu}
          >
            Todo-list
            <X />
          </button>
          <h1 className="hidden md:block text-2xl mb-4 font-bold">Todo-list</h1>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
