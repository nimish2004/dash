import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useSidebar } from "../context/SidebarContext"; // Make sure you created this
import { Link } from "react-router-dom";

const user = {
  name: "Nimish Berwal",
  email: "nimish@example.com",
  role: "Administrator",
  joined: "Jan 2024",
  avatar: "https://i.pravatar.cc/100?img=3",
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
    <div className="flex-1 overflow-y-auto pl-64">
      <header className="w-full flex justify-between items-center px-4 sm:px-6 py-4 pl-14 bg-gray-900 shadow-md dark:bg-gray-800 relative">
        {/* Left Section: Sidebar toggle + Branding */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-md shadow-lg hover:bg-gray-700 transition md:hidden"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>

          <Link to="/dashboard" className="text-xl font-bold text-white tracking-wide hover:text-blue-300 transition">
  Admin<span className="text-blue-400 hover:text-white transition">Board</span>
</Link>

        </div>

        {/* Right Section: Theme + Profile */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setShowProfile(true)}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
          >
            <img
              src={user.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            <span className="hidden sm:inline text-sm font-medium">
              Hi, <span className="font-semibold">{user.name.split(" ")[0]}</span>
            </span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      {showProfile && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40 transition-opacity duration-300"
          onClick={() => setShowProfile(false)}
        ></div>
      )}

      {/* Slide-in Profile Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 rounded-l-2xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          showProfile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            User Profile
          </h2>
          <button
            onClick={() => setShowProfile(false)}
            className="text-gray-500 hover:text-black dark:hover:text-white text-xl"
          >
            &times;
          </button>
        </div>

        <div className="p-6 text-center">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full mx-auto mb-3 shadow"
          />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.role}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>

        <div className="mt-2 px-5 space-y-1">
          <Link
            to="/profile"
            className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setShowProfile(false)}
          >
            <span className="material-symbols-outlined bg-blue-100 text-blue-500 dark:bg-blue-900 p-2 rounded-full">
              account_circle
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">My Profile</p>
              <p className="text-xs text-gray-500">Account Settings</p>
            </div>
          </Link>

          <Link
                to="/chat"
                 className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left"
                  onClick={() => setShowProfile(false)} // optional: close profile panel
 >
                  <span className="material-symbols-outlined bg-green-100 text-green-500 dark:bg-green-900 p-2 rounded-full">
                  mail
                      </span>
                      <div>
                     <p className="text-sm font-semibold text-gray-800 dark:text-white">My Inbox</p>
                        <p className="text-xs text-gray-500">Messages & Emails</p>
                                </div>
                        </Link>

          <Link
  to="/kanban"
  className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left"
  onClick={() => setShowProfile(false)} // optional to close the profile drawer
>
  <span className="material-symbols-outlined bg-yellow-100 text-yellow-500 dark:bg-yellow-900 p-2 rounded-full">
    assignment
  </span>
  <div>
    <p className="text-sm font-semibold text-gray-800 dark:text-white">My Tasks</p>
    <p className="text-xs text-gray-500">To-do and daily logs</p>
  </div>
</Link>
        </div>

        <div className="mt-6 px-5">
          <button
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  }}
  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
>
  Logout
</button>
</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
