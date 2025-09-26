import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDown } from "lucide-react";

const ChartHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold text-white">
          Revenue & Monetization
        </h3>
        <p className="text-gray-300 text-sm">
          An overview of Aura&apos;s financial performance.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="border-gray-400 py-6 text-gray-50 hover:bg-gray-400 flex items-center space-x-2 bg-transparent"
        >
          <span>Last 24 Hours</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="border-gray-400 text-gray-50  py-6 hover:bg-gray-400 bg-[#7C8B93] flex items-center space-x-2 "
          >
            <CalendarIcon className="w-4 h-4" />
            <span>09/02/2025</span>
          </Button>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-50  py-6 hover:bg-gray-400 bg-[#7C8B93] flex items-center space-x-2"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>09/03/2025</span>
          </Button>
          <Button className="hover:bg-gray-400 bg-[#7C8B93] text-white px-4  py-6">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
