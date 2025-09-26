"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const signupData = [
  { month: "Jan", signups: 65, line: 79 },
  { month: "Feb", signups: 25, line: 60 },
  { month: "Mar", signups: 35, line: 74 },
  { month: "Apr", signups: 20, line: 68 },
  { month: "May", signups: 40, line: 72 },
  { month: "Jun", signups: 45, line: 87 },
  { month: "Jul", signups: 60, line: 98 },
  { month: "Aug", signups: 55, line: 72 },
  { month: "Sep", signups: 50, line: 74 },
  { month: "Oct", signups: 95, line: 75 },
  { month: "Nov", signups: 50, line: 93 },
  { month: "Dec", signups: 35, line: 68 },
];

export function NewSignupsChart() {
  return (
    <Card className="bg-slate-400/20 border-slate-400/30 text-white">
      <CardHeader>
        <CardTitle className="text-white text-lg">New Sign-ups</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            signups: {
              label: "Sign-ups",
              color: "hsl(var(--chart-1))",
            },
            line: {
              label: "Trend",
              color: "#60a5fa",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={signupData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#64748b"
                opacity={0.3}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#cbd5e1", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#cbd5e1", fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="signups"
                fill="#94a3b8"
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
              <Line
                type="monotone"
                dataKey="line"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={{ fill: "#60a5fa", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#60a5fa" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="flex items-center justify-center mt-4 gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-slate-300">2021</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-slate-300">2022</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
