/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Users, DollarSign, ShoppingBag, TrendingUp } from "lucide-react";

const StatisticsCard = ({ title, value, icon: Icon, className = "" }): any => (
  <div
    className={`bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 ${className}`}
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-white/80 text-sm font-medium">{title}</h3>
      <div className="text-white/60">
        <Icon size={20} />
      </div>
    </div>
    <div className="text-white text-3xl font-bold">{value}</div>
  </div>
);

const StatisticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 Days");

  const periods = ["Last 7 Days", "Last 30 Days", "Last 3 Months", "Last Year"];

  const statsData = {
    "Last 7 Days": {
      totalUser: "500",
      earnFromAura: "500",
      earnFromShop: "2000",
      totalRevenue: "$30000",
    },
    "Last 30 Days": {
      totalUser: "2,100",
      earnFromAura: "1,850",
      earnFromShop: "8,500",
      totalRevenue: "$125,000",
    },
    "Last 3 Months": {
      totalUser: "5,200",
      earnFromAura: "4,300",
      earnFromShop: "22,000",
      totalRevenue: "$380,000",
    },
    "Last Year": {
      totalUser: "18,500",
      earnFromAura: "15,200",
      earnFromShop: "75,000",
      totalRevenue: "$1,250,000",
    },
  };

  const currentStats = statsData[selectedPeriod];

  return (
    <div className="">
      <div className="mx-auto">
        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white p-8 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Statistics</h1>

            {/* Period Selector */}
            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-white text-sm font-medium focus:outline-none focus:border-white/50 appearance-none cursor-pointer min-w-[140px]"
              >
                {periods.map((period) => (
                  <option
                    key={period}
                    value={period}
                    className="bg-slate-800 text-white"
                  >
                    {period}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total User */}
            <StatisticsCard
              title="Total User"
              value={currentStats.totalUser}
              icon={Users}
            />

            {/* Earn From AURA+ */}
            <StatisticsCard
              title="Earn From AURA+"
              value={currentStats.earnFromAura}
              icon={DollarSign}
            />

            {/* Earn From AP Shop */}
            <StatisticsCard
              title="Earn From AP Shop"
              value={currentStats.earnFromShop}
              icon={ShoppingBag}
            />

            {/* Total Revenue */}
            <StatisticsCard
              title="Total Revenue"
              value={currentStats.totalRevenue}
              icon={TrendingUp}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Data updated in real-time • Last sync: 2 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
