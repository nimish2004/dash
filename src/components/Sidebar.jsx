// File: src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { path: "/orders", label: "Orders", icon: "shopping_cart" },
    { path: "/employees", label: "Employees", icon: "people" },
    { path: "/tables", label: "Tables", icon: "table_chart" },
    { path: "/charts", label: "Charts", icon: "bar_chart" },
    { path: "/calendar", label: "Calendar", icon: "calendar_month" },
    { path: "/kanban", label: "Kanban", icon: "view_kanban" },
    { path: "/editor", label: "Editor", icon: "edit_document" },
    { path: "/map", label: "Map", icon: "map" },
    { path: "/chat", label: "Chat", icon: "chat" },
    { path: "/settings", label: "Settings", icon: "settings" },




  ];

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-white shadow-md z-50">

    <aside className="w-64 min-h-screen bg-gray-900 p-6 shadow-md text-white">
      <nav className="flex flex-col gap-4">
        {links.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
              pathname === path
                ? "bg-blue-600 text-white font-semibold"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            <span className="material-symbols-outlined text-xl">{icon}</span>
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
    </div>
  );
};

export default Sidebar;
