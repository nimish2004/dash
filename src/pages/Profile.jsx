import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Nimish Berwal");
  const [email, setEmail] = useState("nimish@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-white to-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        <div className="flex flex-col items-center mb-6">
          <span className="material-symbols-outlined text-6xl text-blue-500 mb-2">
            account_circle
          </span>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Edit Profile
        </h3>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label className="flex flex-col text-gray-700 font-medium">
            Name
            <input
              type="text"
              className="mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Email
            <input
              type="email"
              className="mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
