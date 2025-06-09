import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const notificationsData = [
  { id: 1, message: "New user registered" },
  { id: 2, message: "Server rebooted" },
  { id: 3, message: "New order received" },
];

// Theme toggle button component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};

const Navbar = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-white tracking-wide">
        Admin<span className="text-blue-400">Board</span>
      </h1>

      <div className="flex items-center gap-6">
        {/* Theme toggle button */}
        <ThemeToggle />

        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen((open) => !open)}
            className="relative hover:scale-110 transition"
            aria-label="Toggle notifications"
          >
            <span className="material-symbols-outlined text-white text-2xl">
              notifications
            </span>
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full px-1.5">
              {notificationsData.length}
            </span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-20">
              <div className="max-h-48 overflow-y-auto">
                {notificationsData.length > 0 ? (
                  notificationsData.map(({ id, message }) => (
                    <div
                      key={id}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer border-b last:border-b-0"
                    >
                      {message}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-400">No notifications</div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative group">
          <button className="flex items-center gap-1 text-white hover:text-blue-400 transition">
            <span className="material-symbols-outlined text-3xl">account_circle</span>
            <span className="text-sm font-medium hidden md:inline">Admin</span>
          </button>
          <div className="absolute right-0 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10 w-40 invisible">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-700 transition"
            >
              Profile
            </Link>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
