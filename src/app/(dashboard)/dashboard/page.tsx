"use client";
import ChartHeader from "@/components/dashboard/ChartHeader";
import { DemographicsCharts } from "@/components/dashboard/DemographicsCharts";
import EthnicityChart from "@/components/dashboard/EthnicityChart";
import StatisticsDashboard from "@/components/dashboard/StatisticsDashboard";
import MonetizationFeaturesTable from "@/components/pages/analytics-reports/MonetizationFeaturesTable";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const matchesCreatedData = [
  { month: "Jan", matches: 20, line: 60 },
  { month: "Feb", matches: 35, line: 65 },
  { month: "Mar", matches: 25, line: 76 },
  { month: "Apr", matches: 40, line: 68 },
  { month: "May", matches: 15, line: 78 },
  { month: "Jun", matches: 60, line: 87 },
  { month: "Jul", matches: 20, line: 72 },
  { month: "Aug", matches: 55, line: 74 },
  { month: "Sep", matches: 60, line: 76 },
  { month: "Oct", matches: 45, line: 93 },
  { month: "Nov", matches: 35, line: 63 },
  { month: "Dec", matches: 25, line: 58 },
];
const crashFreeData = [
  { version: "V2.1.0", percentage: 56 },
  { version: "V2.1.0", percentage: 64 },
  { version: "V2.1.0", percentage: 76 },
  { version: "V2.1.0", percentage: 78 },
  { version: "V2.1.0", percentage: 70 },
  { version: "V3.1.0", percentage: 37 },
];
const page = () => {
  return (
    <div>
      <div className="flex gap-6 mb-6">
        {/* Matches Created */}
        <Card className="bg-white/20 rounded-lg p-6 flex-1 w-full  shadow-2xl">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white">
              Matches Created
            </h4>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={matchesCreatedData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "white" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "white" }}
                />
                <Bar dataKey="matches" fill="#BBC2C5" />
                <Line
                  type="monotone"
                  dataKey="line"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <StatisticsDashboard />
      </div>
      {/* // Charts Row */}
      <ChartHeader /> {/* // Real-time Server Load */}
      <div className="bg-white/20 p-8 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-white pb-2">
          REAL-TIME SERVER LOAD
        </h3>
        <div className="grid grid-cols-3 gap-4             ">
          <Card className="bg-white/50 flex flex-col items-center  p-4 ">
            <CardContent className="p-0 ">
              <div className="text-3xl font-bold text-white mb-1 ">99.98%</div>
              <div className="text-sm text-gray-50 uppercase">Uptime (24h)</div>
              <div className="text-xs text-gray-50">Last 24 hours</div>
            </CardContent>
          </Card>
          <Card className="bg-white/50 flex flex-col items-center  p-4 ">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-white mb-1">82</div>
              <div className="text-sm text-gray-50 uppercase">
                API Latency (p95)
              </div>
              <div className="text-xs text-gray-50">Target &lt; 100ms</div>
            </CardContent>
          </Card>
          <Card className="bg-white/50 flex flex-col items-center  p-4 ">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-white mb-1">0.03%</div>
              <div className="text-sm text-gray-50 uppercase">
                API Error Rate
              </div>
              <div className="text-xs text-gray-50">Last 60 minutes</div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Matches Created 2 */}
      <Card className="bg-white/20 rounded-lg p-6 flex-1 w-full  shadow-2xl">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white">Matches Created</h4>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={matchesCreatedData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "white" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "white" }}
              />
              <Bar dataKey="matches" fill="#BBC2C5" />
              <Line
                type="monotone"
                dataKey="line"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>
      {/* Crash-Free Users by App Version */}
      <div className="flex gap-6 my-6">
        <div className="  flex-1 w-full ">
          <Card className="bg-white rounded-lg p-6 ">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Crash-Free Users by App Version
              </h4>
              <div className="border-b-2 border-gray-200 mb-4"></div>

              <p className="text-sm text-gray-800">
                Percentage of users who did not experience a crash in the last 7
                days.
              </p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={crashFreeData}>
                  <XAxis dataKey="version" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Bar dataKey="percentage" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        <Card className="bg-white/20 rounded-lg p-6   shadow-2xl">
          <div className="flex flex-col items-center uppercase p-14 text-white max-w-5xl font-[Bebas_Neue] justify-center bg-white/50 rounded-md h-full w-full">
            <span className="font-bold text-2xl">Churn Rate</span>
            <span className="font-bold text-7xl">3.5%</span>
            <p className=" w-64 text-center">
              Percentage of users who did not return in the last 30 days.
            </p>
          </div>
        </Card>
      </div>
      <div className="flex gap-5 my-6">
        <EthnicityChart />
        <EthnicityChart />
        <EthnicityChart />
      </div>
      <MonetizationFeaturesTable />
    </div>
  );
};

export default page;
