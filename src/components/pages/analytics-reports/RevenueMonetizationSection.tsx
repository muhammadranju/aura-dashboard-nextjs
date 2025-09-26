// import MetricsCards from "@/components/MetricsCards";
// import PurchasesCard from "@/components/PurchasesCard";
// import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ChartHeader from "../../dashboard/ChartHeader";
import MetricsCards from "./MetricsCards";
import PurchasesCard from "./PurchasesCard";
import { Card, CardContent } from "@/components/ui/card";

const conversionData = [
  { month: "Jan", freeUser: 70, trialSignup: 40, convertedToPaid: 45 },
  { month: "Feb", freeUser: 20, trialSignup: 25, convertedToPaid: 50 },
  { month: "Mar", freeUser: 35, trialSignup: 35, convertedToPaid: 35 },
  { month: "Apr", freeUser: 25, trialSignup: 40, convertedToPaid: 80 },
  { month: "May", freeUser: 45, trialSignup: 20, convertedToPaid: 70 },
  { month: "Jun", freeUser: 15, trialSignup: 15, convertedToPaid: 20 },
  { month: "Jul", freeUser: 65, trialSignup: 50, convertedToPaid: 85 },
  { month: "Aug", freeUser: 20, trialSignup: 35, convertedToPaid: 35 },
  { month: "Sep", freeUser: 60, trialSignup: 75, convertedToPaid: 90 },
  { month: "Oct", freeUser: 50, trialSignup: 30, convertedToPaid: 85 },
  { month: "Nov", freeUser: 75, trialSignup: 60, convertedToPaid: 40 },
  { month: "Dec", freeUser: 40, trialSignup: 95, convertedToPaid: 20 },
];

const RevenueMonetizationSection = () => {
  return (
    <div className="rounded-lg px-6 mb-6 ">
      <ChartHeader />

      {/* Chart */}
      <Card className="bg-white rounded-lg p-6 mb-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            Conversion Funnel
          </h4>
          <div className="border-b-2 border-gray-200 mb-4" />
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={conversionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Legend />
              <Bar dataKey="freeUser" fill="#6366f1" name="Free User" />
              <Bar dataKey="trialSignup" fill="#f59e0b" name="Trial Signup" />
              <Bar
                dataKey="convertedToPaid"
                fill="#10b981"
                name="Converted to Paid"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Metrics Cards */}
      <Card className=" mb-6 backdrop-blur-md bg-white/20 px-6 ">
        <h4 className="text-lg  text-white font-[Bebas_Neue]">
          Aura+ Subscriptions
        </h4>
        <div className="grid grid-cols-4 gap-4">
          <MetricsCards
            value="12,450"
            label="Active Subscriptions"
            icons={<ChevronUp className="w-4 h-4 text-green-500" />}
            percentage="12"
          />
          <MetricsCards
            value="312"
            label="New Subscriptions"
            icons={<ChevronDown className="w-4 h-4 text-red-500" />}
            percentage="12"
          />
          <MetricsCards
            value="88"
            label="Cancellations"
            icons={<ChevronDown className="w-4 h-4 text-red-500" />}
            percentage="12"
          />
          <MetricsCards
            value="92.8%"
            label="Renewal Rate"
            icons={<ChevronDown className="w-4 h-4 text-red-500" />}
            percentage="12"
          />
        </div>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* In-App Purchases */}
        <Card className="bg-white/20  p-4">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold text-white mb-4">
              In-App Purchases
            </h4>
            <div className="space-y-4 ">
              <PurchasesCard value="1.2M" text="GROSS REVENUE" />

              <PurchasesCard value="2,840" text="BUYERS / ONE-TIME PURCHASES" />

              <PurchasesCard value="$9.99" text="AVERAGE BASKET VALUE (ABV)" />
            </div>
          </CardContent>
        </Card>

        {/* ARPU & ARPPU */}
        <Card className="bg-white/20 p-4">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold text-white mb-4">
              ARPU & ARPPU
            </h4>
            <div className="space-y-4">
              <PurchasesCard
                value="$1.75"
                text="  AVERAGE REVENUE PER USER (ARPU)"
              />

              <PurchasesCard
                value="$15.20"
                text="  AVG. REVENUE PER PAYING USER (ARPPU)"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RevenueMonetizationSection;
