import { useState } from "react";
import { FiEdit2, FiTrash2, FiSave, FiXCircle } from "react-icons/fi";

const Tables = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", email: "" });

  // Add new user
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return alert("Please fill all fields");
    const newEntry = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
    };
    setUsers([...users, newEntry]);
    setNewUser({ name: "", email: "" });
  };

  // Start editing
  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditFormData({ name: user.name, email: user.email });
  };

  // Cancel editing
  const handleCancelClick = () => {
    setEditUserId(null);
  };

  // Save edited user
  const handleSaveClick = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...editFormData } : user
    );
    setUsers(updatedUsers);
    setEditUserId(null);
  };

  // Delete user
  const handleDeleteClick = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="pl-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Users List</h2>

      {/* Add new user form */}
      <div className="max-w-lg mx-auto mb-10 p-6 bg-white rounded-xl shadow-lg flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 rounded-md border border-gray-300 px-8 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button
          onClick={handleAddUser}
          className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add User
        </button>
      </div>

      {/* Users list */}
      <div className="max-w-3xl mx-auto space-y-5">
        {users.length === 0 && (
          <p className="text-center text-gray-500 text-lg font-medium">
            No users found.
          </p>
        )}

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              {editUserId === user.id ? (
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Name"
                />
              ) : (
                <p className="text-lg font-semibold text-gray-900 truncate">{user.name}</p>
              )}
              {editUserId === user.id ? (
                <input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, email: e.target.value })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Email"
                />
              ) : (
                <p className="mt-1 text-gray-600 truncate">{user.email}</p>
              )}
            </div>
            <div className="flex space-x-3">
              {editUserId === user.id ? (
                <>
                  <button
                    onClick={() => handleSaveClick(user.id)}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    aria-label="Save"
                  >
                    <FiSave />
                    Save
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                    aria-label="Cancel"
                  >
                    <FiXCircle />
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditClick(user)}
                    className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                    aria-label="Edit"
                  >
                    <FiEdit2 />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    aria-label="Delete"
                  >
                    <FiTrash2 />
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
