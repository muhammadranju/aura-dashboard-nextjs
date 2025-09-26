import { Card, CardContent } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ChartHeader from "../../dashboard/ChartHeader";

const sessionLengthData = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 78 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 75 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 35 },
];

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

const conversationsData = [
  { month: "Jan", messages: 75, videoCalls: 20 },
  { month: "Feb", messages: 40, videoCalls: 50 },
  { month: "Mar", messages: 35, videoCalls: 35 },
  { month: "Apr", messages: 20, videoCalls: 80 },
  { month: "May", messages: 40, videoCalls: 15 },
  { month: "Jun", messages: 15, videoCalls: 60 },
  { month: "Jul", messages: 35, videoCalls: 15 },
  { month: "Aug", messages: 60, videoCalls: 40 },
  { month: "Sep", messages: 95, videoCalls: 55 },
  { month: "Oct", messages: 95, videoCalls: 55 },
  { month: "Nov", matches: 85, videoCalls: 40 },
  { month: "Dec", messages: 60, videoCalls: 85 },
];

export default function EngagementAppUsage() {
  return (
    <div className="min-h-screen   text-white flex">
      {/* Main Content */}
      <div className="flex-1 ">
        <div className=" rounded-lg px-6 mb-6">
          <ChartHeader />

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Average Session Length */}
            <Card className="bg-white rounded-lg p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Average Session Length
                </h4>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sessionLengthData}>
                    <defs>
                      <linearGradient
                        id="sessionGradient"
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
                      fill="url(#sessionGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Matches Created */}
            <Card className="bg-white/20 rounded-lg p-6">
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
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Conversations Started - spans 2 columns */}
            <div className="col-span-2">
              <Card className="bg-white rounded-lg p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Conversations Started
                  </h4>
                  <span className="text-sm text-gray-500">MORE</span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversationsData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis axisLine={false} tickLine={false} />
                      <Legend />
                      <Bar dataKey="messages" fill="#10b981" name="Messages" />
                      <Bar
                        dataKey="videoCalls"
                        fill="#6366f1"
                        name="Video Calls"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Metric Cards - spans 1 column */}
            <div className="flex flex-col space-y-4  bg-white/20 p-5 rounded-md border">
              {/* <div className="flex flex-col space-y-4 "></div> */}
              <Card className="bg-white/50 p-4 flex-1 h-full">
                <CardContent className="p-0 ">
                  <div className="text-sm text-gray-50 uppercase mb-1">
                    REGISTERED GAMES PLAYED
                  </div>
                  <div className="text-2xl font-bold text-white">1,240,890</div>
                  <div className="text-xs text-gray-50">
                    Avg. 3.5 games per user
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/50 p-4 flex-1 h-full">
                <CardContent className="h-full">
                  <div className="text-sm text-gray-50 uppercase mb-1">
                    RUSH HOUR PARTICIPATION
                  </div>
                  <div className="text-2xl font-bold text-white">78,540</div>
                  <div className="text-xs text-gray-50">
                    Peak: 8-11 PM Daily
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="px-6">
          <Card className="bg-white/20 p-6">
            <CardContent className="p-0">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">
                  Feature Adoption Rate
                </h4>
                <p className="text-sm text-gray-300">
                  Percentage of active users utilizing key features.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Select City</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-64 bg-gray-400 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">68%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Revive Chat</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-64 bg-gray-400 rounded-full h-2">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{ width: "22%" }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">22%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Boosts</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-64 bg-gray-400 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold">15%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
