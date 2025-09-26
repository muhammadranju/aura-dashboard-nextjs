"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const qualityScoreData = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 78 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 40 },
];

const videoCallData = [
  { name: "Success", value: 98, color: "#6366f1" },
  { name: "Failed", value: 2, color: "#10b981" },
];

const crashFreeData = [
  { version: "V2.1.0", percentage: 56 },
  { version: "V2.1.0", percentage: 64 },
  { version: "V2.1.0", percentage: 76 },
  { version: "V2.1.0", percentage: 78 },
  { version: "V2.1.0", percentage: 70 },
  { version: "V3.1.0", percentage: 37 },
];

export default function RealTimeServerLoad() {
  return (
    <div className="min-h-screen text-white flex">
      {/* Main Content */}
      <div className="flex-1 ">
        {/* Real-time Server Load */}
        <div className=" rounded-lg px-6 ">
          <div className=" ">
            {/* Server Metrics Cards */}
            <div className="bg-white/20 p-8 rounded-md mb-6">
              <h3 className="text-lg font-semibold text-white pb-2">
                REAL-TIME SERVER LOAD
              </h3>
              <div className="grid grid-cols-3 gap-4             ">
                <Card className="bg-white/50 flex flex-col items-center  p-4 ">
                  <CardContent className="p-0 ">
                    <div className="text-3xl font-bold text-white mb-1 ">
                      99.98%
                    </div>
                    <div className="text-sm text-gray-50 uppercase">
                      Uptime (24h)
                    </div>
                    <div className="text-xs text-gray-50">Last 24 hours</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 flex flex-col items-center  p-4 ">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-white mb-1">82</div>
                    <div className="text-sm text-gray-50 uppercase">
                      API Latency (p95)
                    </div>
                    <div className="text-xs text-gray-50">
                      Target &lt; 100ms
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 flex flex-col items-center  p-4 ">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-white mb-1">
                      0.03%
                    </div>
                    <div className="text-sm text-gray-50 uppercase">
                      API Error Rate
                    </div>
                    <div className="text-xs text-gray-50">Last 60 minutes</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 mb-6 px-0">
              {/* Video Call Analytics */}
              <Card className="bg-white rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Video Call Analytics
                  </h4>
                  <div className="border-b-2 border-gray-200 mb-4"></div>
                </div>
                <div className="h-96 flex items-center justify-center">
                  <div className="relative">
                    <ResponsiveContainer width={450} height={450}>
                      <PieChart>
                        <Pie
                          data={videoCallData}
                          cx={225}
                          cy={225}
                          innerRadius={90}
                          outerRadius={135}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {videoCallData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center bg-white rounded-full"
                        style={{ width: "180px", height: "180px" }}
                      >
                        <span className="text-4xl font-bold text-gray-800">
                          98%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Average Quality Score */}
              <Card className="bg-white rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Average Quality Score
                  </h4>
                  <div className="border-b-2 border-gray-200 mb-4"></div>
                </div>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={qualityScoreData}>
                      <defs>
                        <linearGradient
                          id="qualityGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        fill="url(#qualityGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Crash-Free Users by App Version */}
        <div className="px-5">
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
      </div>
    </div>
  );
}
