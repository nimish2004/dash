import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import Tables from "./pages/Tables";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Orders from './pages/Orders';
import Employees from "./pages/Employees";
import Charts from "./pages/Charts"; 


const App = () => (
  <ThemeProvider>
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;