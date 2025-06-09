import { useState } from "react";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Settings saved:\nNotifications: ${notificationsEnabled}\nDark Mode: ${darkMode}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Settings</h2>
      <form className="flex flex-col gap-6 max-w-md" onSubmit={handleSubmit}>
        <label className="flex items-center justify-between text-gray-800">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
            className="w-5 h-5 rounded cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between text-gray-800">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="w-5 h-5 rounded cursor-pointer"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-2 rounded"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
