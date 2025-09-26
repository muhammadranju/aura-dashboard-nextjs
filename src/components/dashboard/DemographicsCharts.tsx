"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const retentionData = [
  { period: "Day-1", retention: 60 },
  { period: "Day-7", retention: 65 },
  { period: "Day-30", retention: 75 },
];

const raceData = [
  { race: "White", value: 56 },
  { race: "Asian", value: 64 },
  { race: "Hispanic", value: 78 },
  { race: "Black", value: 78 },
  { race: "Others", value: 70 },
];

const ageData = [
  { age: "18-24", value: 45 },
  { age: "25-34", value: 65 },
  { age: "35-44", value: 85 },
  { age: "45-54", value: 75 },
  { age: "55+", value: 55 },
];

const genderData = [
  { name: "Man", value: 33.3, color: "#8b5cf6" },
  { name: "Woman", value: 38.33, color: "#10b981" },
  { name: "Non-Binary", value: 7.78, color: "#f59e0b" },
  { name: "Trans Men", value: 14.44, color: "#06b6d4" },
  { name: "Trans Women", value: 6.67, color: "#ec4899" },
];

export function DemographicsCharts() {
  return (
    <div className="space-y-6">
      {/* User Retention */}
      <Card className="bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 text-lg">
            User Retention
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              retention: {
                label: "Retention %",
                color: "#8b5cf6",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={retentionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="period"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="retention" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Churn Rate */}
      <Card className="bg-slate-400/30 text-white">
        <CardContent className="p-6 text-center">
          <div className="text-sm text-slate-300 mb-2">CHURN RATE</div>
          <div className="text-4xl font-bold text-white mb-2">3.5%</div>
          <div className="text-xs text-slate-300">
            PERCENTAGE OF USERS WHO DID NOT RETURN IN THE LAST 30 DAYS
          </div>
        </CardContent>
      </Card>

      {/* Race/Ethnicity */}
      <Card className="bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 text-lg">
            Race / Ethnicity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Percentage",
                color: "#8b5cf6",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={raceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="race"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Age Distribution */}
      <Card className="bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 text-lg">
            Age Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Percentage",
                color: "#8b5cf6",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ageData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="age"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Gender Distribution */}
      <Card className="bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 text-lg">
            Gender Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <ChartContainer
                config={{
                  value: {
                    label: "Percentage",
                  },
                }}
                className="h-[200px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="space-y-2">
              {genderData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-slate-600">{item.name}</span>
                  <span className="text-slate-900 font-medium">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
