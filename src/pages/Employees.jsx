import { useState } from "react";

const initialEmployees = [
  { id: 1, name: "John Doe", role: "Manager", email: "john@company.com" },
  { id: 2, name: "Jane Smith", role: "Developer", email: "jane@company.com" },
  { id: 3, name: "Sam Wilson", role: "Designer", email: "sam@company.com" },
];

const Employees = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [form, setForm] = useState({ name: "", role: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingId ? { ...form, id: editingId } : emp
        )
      );
    } else {
      setEmployees([...employees, { ...form, id: Date.now() }]);
    }
    setForm({ name: "", role: "", email: "" });
    setEditingId(null);
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setEditingId(emp.id);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-lg shadow-lg">
        Employees 👥
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No employees found.
          </p>
        )}
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white shadow-md rounded-lg border-l-8 border-green-600 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">{emp.name}</h3>
              <p className="text-gray-700 mb-1">
                Role: <span className="font-medium">{emp.role}</span>
              </p>
              <p className="text-teal-600 font-semibold">{emp.email}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(emp)}
                className="text-yellow-600 hover:text-yellow-800 font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(emp.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
