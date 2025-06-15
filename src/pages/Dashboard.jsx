import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
} from "recharts";
import { Star } from "lucide-react";

const userData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1000 },
  { month: "May", users: 1240 },
];

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 20000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 42000 },
];

const topDrivers = [
  {
    name: "Rahul Verma",
    orders: 128,
    rating: 4.9,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sana Sheikh",
    orders: 113,
    rating: 4.8,
    avatar: "https://i.pravatar.cc/100?img=34",
  },
  {
    name: "Amit Mehra",
    orders: 95,
    rating: 4.7,
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const Dashboard = () => (
  <div className="flex-1 overflow-y-auto pl-64 relative z-10">
    <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Welcome to the Dashboard</h2>
    
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
        <span className="text-4xl">📈</span>
        <div>
          <p className="text-lg font-semibold">Users</p>
          <p className="text-2xl font-bold">1,240</p>
        </div>
      </div>

      <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
        <span className="text-4xl">💰</span>
        <div>
          <p className="text-lg font-semibold">Revenue</p>
          <p className="text-2xl font-bold">$42,000</p>
        </div>
      </div>

      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
        <span className="text-4xl">📦</span>
        <div>
          <p className="text-lg font-semibold">Orders</p>
          <p className="text-2xl font-bold">321</p>
        </div>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">User Growth (Last 5 Months)</h3>
        <LineChart
          width={500}
          height={300}
          data={userData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#3182CE" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Revenue (Last 5 Months)</h3>
        <BarChart
          width={500}
          height={300}
          data={revenueData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#38A169" />
        </BarChart>
      </div>
    </div>

    {/* Top Drivers Section */}
    <div className="mt-12 bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Top Performing Drivers</h3>
      <div className="space-y-4">
        {topDrivers.map((driver, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <img
                src={driver.avatar}
                alt={driver.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{driver.name}</p>
                <p className="text-sm text-gray-500">{driver.orders} orders completed</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="text-sm font-medium text-gray-800">{driver.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
