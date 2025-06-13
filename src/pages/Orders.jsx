import { useState } from "react";

const initialOrders = [
  { id: 1, customer: "Alice", product: "Laptop", amount: "$1200" },
  { id: 2, customer: "Bob", product: "Phone", amount: "$800" },
  { id: 3, customer: "Charlie", product: "Monitor", amount: "$300" },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [form, setForm] = useState({ id: null, customer: "", product: "", amount: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = (e) => {
    e.preventDefault();
    if (editingId) {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === editingId ? { ...form, id: editingId } : order
        )
      );
    } else {
      setOrders([...orders, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, customer: "", product: "", amount: "" });
    setEditingId(null);
  };

  const handleEdit = (order) => {
    setForm(order);
    setEditingId(order.id);
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg">
        Orders 📦
      </h2>

      <form
        onSubmit={handleAddOrEdit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
      >
        <input
          name="customer"
          placeholder="Customer"
          value={form.customer}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <input
          name="product"
          placeholder="Product"
          value={form.product}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <input
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md flex-grow"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No orders available.
          </p>
        )}
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg border-l-8 border-blue-600 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">{order.customer}</h3>
              <p className="text-gray-700 mb-1">Product: <span className="font-medium">{order.product}</span></p>
              <p className="text-blue-600 font-bold text-lg">{order.amount}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(order)}
                className="text-yellow-600 hover:text-yellow-800 font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(order.id)}
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

export default Orders;
