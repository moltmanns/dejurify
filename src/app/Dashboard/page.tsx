"use client";

import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiClock,
  FiBarChart2,
  FiPlus,
  FiFolderPlus,
  FiMail,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import GoogleAnalyticsModal from "./Components/GoogleAnalyticsModal";
import DashboardAnalyticsCharts from "./Components/DashboardAnalyticsCharts";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const topPages = [
  { page: "/home", views: 1460 },
  { page: "/about", views: 1210 },
  { page: "/contact", views: 980 },
  { page: "/pricing", views: 870 },
  { page: "/blog/how-to-choose-a-lawyer", views: 725 },
];

const trafficSources = [
  { source: "Organic Search", visits: 1450 },
  { source: "Direct", visits: 860 },
  { source: "Referral", visits: 540 },
  { source: "Paid Search", visits: 430 },
  { source: "Social", visits: 290 },
];

const newSubscribers = [
  { name: "Michael Lee", email: "michael@example.com", date: "Mar 25" },
  { name: "Sarah Smith", email: "sarah@example.com", date: "Mar 24" },
  { name: "John Wick", email: "john@example.com", date: "Mar 23" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10 p-4">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold">Website Analytics</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          See just how well your website is doing, with metrics right from Google Analytics.
        </p>
      </div>

      {/* Connect GA4 Modal */}
      <GoogleAnalyticsModal />

      <DashboardAnalyticsCharts />


      {/* 3-Column Widget Row: Subscribers + Traffic + Top Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* New Subscribers */}
        <div className="bg-muted p-6 rounded-lg shadow-sm">
          <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiMail className="text-muted-foreground" /> New Email Subscribers
          </h5>
          <ul className="text-sm space-y-3">
            {newSubscribers.map((sub, idx) => (
              <li
                key={idx}
                className="border-b border-border pb-2 flex flex-col"
              >
                <span className="font-medium">{sub.name}</span>
                <span className="text-muted-foreground text-xs">
                  {sub.email} • {sub.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Traffic Sources */}
        <div className="bg-muted p-6 rounded-lg shadow-sm">
          <h5 className="text-lg font-semibold mb-4">Traffic Sources</h5>
          <ul className="space-y-2 text-sm">
            {trafficSources.map((source, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b border-border py-2"
              >
                <span className="text-muted-foreground">{source.source}</span>
                <span className="font-medium">{source.visits}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Pages */}
        <div className="bg-muted p-6 rounded-lg shadow-sm">
          <h5 className="text-lg font-semibold mb-4">Top Pages</h5>
          <ul className="space-y-2 text-sm">
            {topPages.map((page, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b border-border py-2"
              >
                <span className="text-muted-foreground">{page.page}</span>
                <span className="font-medium">{page.views} views</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-muted text-foreground p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-semibold mb-4">Quick Actions</h5>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" className="flex items-center gap-2">
            <FiPlus />
            Create New Site
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FiFolderPlus />
            Add New Template
          </Button>
        </div>
      </div>

    </div>
  );
}
