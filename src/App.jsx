import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeContext";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import Tables from "./pages/Tables";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Orders from './pages/Orders';
import Employees from "./pages/Employees";
import Charts from "./pages/Charts"; 
import EditorPage from "./pages/EditorPage";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import 'leaflet/dist/leaflet.css';
import MapPage from "./pages/MapPage";
import Chat from "./pages/Chat";



const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <ThemeProvider>
      <Router>
        {isLoggedIn && (
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
              <Navbar />
              <main className="p-4">
                <Routes>
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
                  <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
                  <Route path="/kanban" element={<PrivateRoute><Kanban /></PrivateRoute>} />
                  <Route path="/tables" element={<PrivateRoute><Tables /></PrivateRoute>} />
                  <Route path="/charts" element={<PrivateRoute><Charts /></PrivateRoute>} />
                  <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
                  <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                  <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                  <Route path="/editor" element={<PrivateRoute><EditorPage /></PrivateRoute>} />
                  <Route path="/map" element={<PrivateRoute><MapPage /></PrivateRoute>} />
                  <Route path="/chat" element={<Chat />} />
                </Routes>
              </main>
            </div>
          </div>
        )}

        {!isLoggedIn && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
