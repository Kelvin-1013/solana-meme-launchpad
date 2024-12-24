import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, Users, TrendingUp, Activity } from "lucide-react";

const mockData = {
  stats: [
    { title: "Total Raised", value: "$1.2M", icon: Wallet, change: "+12.5%" },
    { title: "Active IDOs", value: "3", icon: Activity, change: "0%" },
    { title: "Total Participants", value: "2.5K", icon: Users, change: "+5.2%" },
    { title: "Success Rate", value: "95%", icon: TrendingUp, change: "+2.3%" },
  ],
  chartData: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 700 },
    { name: "Jun", value: 900 },
  ],
};

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockData.stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/70">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="bg-primary/10 rounded-full p-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className={`text-sm mt-2 ${stat.change.startsWith("+") ? "text-green-500" : "text-foreground/70"}`}>
                {stat.change} from last month
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Fundraising Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#9b87f5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;