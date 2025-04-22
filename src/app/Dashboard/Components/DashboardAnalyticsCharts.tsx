"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiClock,
  FiUsers,
  FiBarChart2,
  FiMousePointer,
} from "react-icons/fi";

const chartColors = ["#1f2937", "#3b82f6", "#6b7280"];
const bounceRate = 38;

const bounceBarData = [
  {
    name: "Bounce",
    Bounced: bounceRate,
    Engaged: 100 - bounceRate,
  },
];

const returningVsNewData = [
  { type: "New Visitors", value: 1250 },
  { type: "Returning Visitors", value: 700 },
];

const deviceData = [
  { name: "Desktop", value: 52 },
  { name: "Mobile", value: 42 },
  { name: "Tablet", value: 6 },
];

const sessionData = [
  { day: "Mon", value: 3.1 },
  { day: "Tue", value: 3.4 },
  { day: "Wed", value: 3.6 },
  { day: "Thu", value: 3.2 },
  { day: "Fri", value: 3.8 },
  { day: "Sat", value: 2.7 },
  { day: "Sun", value: 3.0 },
];

const ctrData = [
  { day: "Mon", value: 3.8 },
  { day: "Tue", value: 4.2 },
  { day: "Wed", value: 4.0 },
  { day: "Thu", value: 4.3 },
  { day: "Fri", value: 4.1 },
  { day: "Sat", value: 3.7 },
  { day: "Sun", value: 3.9 },
];

const visitorsData = [
  { day: "Mon", value: 110 },
  { day: "Tue", value: 135 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 165 },
  { day: "Fri", value: 180 },
  { day: "Sat", value: 140 },
  { day: "Sun", value: 155 },
];

const contactFormData = [
  { day: "Mon", value: 5 },
  { day: "Tue", value: 8 },
  { day: "Wed", value: 6 },
  { day: "Thu", value: 7 },
  { day: "Fri", value: 10 },
];

export default function DashboardAnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-foreground">
      
      {/* New Visitors */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium flex items-center gap-2 text-sm mb-1">
            <FiUsers className="text-blue-500" />
            New Visitors
          </p>
          <p className="text-xl font-bold">1,135</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorsData}>
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Click-Through Rate */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium flex items-center gap-2 text-sm mb-1">
            <FiMousePointer className="text-green-500" />
            Click-Through Rate
          </p>
          <p className="text-xl font-bold">4.1%</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ctrData}>
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Avg. Session Duration */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium flex items-center gap-2 text-sm mb-1">
            <FiClock className="text-purple-500" />
            Session Duration
          </p>
          <p className="text-xl font-bold">3.2 min</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sessionData}>
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Contact Form Submissions */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium flex items-center gap-2 text-sm mb-1">
            <FiActivity className="text-red-500" />
            Form Submissions
          </p>
          <p className="text-xl font-bold">36</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contactFormData}>
              <Bar dataKey="value" fill="#ef4444" />
              <XAxis dataKey="day" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
  <div className="mb-4">
    <p className="font-medium text-sm mb-1">Bounce Rate</p>
    <p className="text-xl font-bold">{bounceRate}%</p>
  </div>

  <div className="h-[120px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={bounceBarData}
        margin={{ top: 10, right: 20, left: 30, bottom: 0 }}
      >
        {/* Show the category (Bounce Rate) on the Y-axis */}
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 12, fill: "currentColor" }}
          axisLine={false}
          tickLine={false}
        />

        <XAxis
          type="number"
          hide
          domain={[0, 100]}
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{ backgroundColor: "#0a0a0a", borderRadius: 6 }}
          labelStyle={{ display: "none" }}
        />

        {/* Bounced */}
        <Bar
          dataKey="Bounced"
          stackId="a"
          fill="#ef4444"
          radius={[6, 0, 0, 6]}
          label={{
            position: "insideLeft",
            fill: "white",
            fontSize: 12,
            formatter: () => `${bounceRate}% Bounced`,
          }}
        />

        {/* Engaged */}
        <Bar
          dataKey="Engaged"
          stackId="a"
          fill="#10b981"
          radius={[0, 6, 6, 0]}
          label={{
            position: "insideRight",
            fill: "white",
            fontSize: 12,
            formatter: () => `${100 - bounceRate}% Engaged`,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</motion.div>




      {/* New vs Returning Visitors */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium text-sm mb-1">New vs Returning Visitors</p>
          <p className="text-xl font-bold">1250 / 700</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={returningVsNewData}>
              <XAxis dataKey="type" />
              <Bar dataKey="value" fill="#3b82f6" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Device Usage */}
      <motion.div className="bg-muted p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <p className="font-medium text-sm mb-1">Device Usage</p>
        </div>
        <div className="h-[100px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={deviceData} dataKey="value" innerRadius={30} outerRadius={45}>
                {deviceData.map((_, idx) => (
                  <Cell key={idx} fill={chartColors[idx % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="text-xs text-muted-foreground mt-3 space-y-1">
          {deviceData.map((d, i) => (
            <li key={i} className="flex justify-between">
              <span>{d.name}</span> <span>{d.value}%</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
