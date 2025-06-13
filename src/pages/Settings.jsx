// src/pages/Settings.jsx
import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Nimish Berwal");
  const [email, setEmail] = useState("nimish@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Settings Saved:
Name: ${name}
Email: ${email}
Notifications: ${notificationsEnabled}
Dark Mode: ${darkMode}
Language: ${language}`);
  };

  const handleReset = () => {
    setName("Nimish Berwal");
    setEmail("nimish@example.com");
    setNotificationsEnabled(true);
    setDarkMode(false);
    setLanguage("en");
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-3xl font-semibold mb-6">Settings</h2>

      <form className="flex flex-col gap-6 max-w-md" onSubmit={handleSubmit}>
        {/* Name */}
        <label className="flex flex-col gap-1">
          <span>Full Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded border border-gray-300"
          />
        </label>

        {/* Email */}
        <label className="flex flex-col gap-1">
          <span>Email Address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border border-gray-300"
          />
        </label>

        {/* Notifications Toggle */}
        <label className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
            className="w-5 h-5 rounded cursor-pointer"
          />
        </label>

        {/* Dark Mode Toggle (Still toggles value but UI is light only) */}
        <label className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="w-5 h-5 rounded cursor-pointer"
          />
        </label>

        {/* Language Selector */}
        <label className="flex flex-col gap-1">
          <span>Preferred Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 rounded border border-gray-300"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
          </select>
        </label>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
          >
            Save Settings
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
