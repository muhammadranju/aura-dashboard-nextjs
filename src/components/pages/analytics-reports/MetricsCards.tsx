/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
interface MetricsCardsProps {
  value: string;
  label: string;
  icons?: any;
  percentage?: string;
}

const MetricsCards = ({
  value,
  label,
  icons,
  percentage,
}: MetricsCardsProps) => {
  return (
    <Card className="bg-white/50 p-7 flex flex-col items-center">
      <CardContent className="p-0 flex flex-col items-start">
        <div className="text-4xl font-bold text-white">{value}</div>
        <div className="text-sm text-white font-light">{label}</div>
        <div className=" flex items-center space-x-2 text-white">
          <span className="bg-white rounded-full p-1">{icons}</span>
          <span className="text-sm">{percentage}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCards;
