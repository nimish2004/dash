import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 border-b pb-4">
          User Profile
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label className="flex flex-col text-gray-700 font-medium">
            Name
            <input
              type="text"
              className="mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Email
            <input
              type="email"
              className="mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-transform active:scale-95"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
