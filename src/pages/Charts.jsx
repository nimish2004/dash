import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";

const sampleData = [
  { name: "Jan", sales: 4000, users: 2400, revenue: 2400 },
  { name: "Feb", sales: 3000, users: 1398, revenue: 2210 },
  { name: "Mar", sales: 2000, users: 9800, revenue: 2290 },
  { name: "Apr", sales: 2780, users: 3908, revenue: 2000 },
  { name: "May", sales: 1890, users: 4800, revenue: 2181 },
  { name: "Jun", sales: 2390, users: 3800, revenue: 2500 },
  { name: "Jul", sales: 3490, users: 4300, revenue: 2100 },
];

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 200 },
];

const radarData = [
  { metric: "Ease of Use", A: 120, B: 110 },
  { metric: "Performance", A: 98, B: 130 },
  { metric: "Design", A: 86, B: 130 },
  { metric: "Support", A: 99, B: 100 },
  { metric: "Features", A: 85, B: 90 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = () => {
  return (
    <div className="flex-1 overflow-y-auto pl-64 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Charts Dashboard</h2>

      {/* Line Chart */}
      <div className="mb-10 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Sales and Users Over Months</h3>
        <LineChart
          width={700}
          height={300}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="users" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className="mb-10 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Revenue per Month</h3>
        <BarChart
          width={700}
          height={300}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#38A169" />
        </BarChart>
      </div>

      {/* Area Chart */}
      <div className="mb-10 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Engagement Overview</h3>
        <AreaChart
          width={700}
          height={300}
          data={sampleData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
        </AreaChart>
      </div>

      {/* Pie Chart */}
      <div className="mb-10 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Radar Chart */}
      <div className="mb-10 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">User Satisfaction Comparison</h3>
        <RadarChart outerRadius={90} width={500} height={300} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis />
          <Radar name="Current" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Previous" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default Charts;
