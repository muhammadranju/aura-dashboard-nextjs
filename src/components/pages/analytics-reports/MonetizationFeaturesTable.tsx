import { Card, CardContent } from "@/components/ui/card";

const MonetizationFeaturesTable = () => {
  return (
    <Card className=" bg-transparent p-4 border-none shadow-none px-6">
      <CardContent className="p-0">
        <h4 className="text-lg font-semibold text-white mb-4">
          Top Monetization Features
        </h4>
        <Card className="grid grid-cols-3 gap-4 p-4 px-10 bg-white/20 text-white font-semibold">
          <div>Rank</div>
          <div>Feature Name</div>
          <div className="text-right">Revenue</div>
        </Card>
        <Card className="rounded-lg bg-white/20 overflow-hidden mt-2">
          <div className="space-y-2 p-4 ">
            <div className="grid grid-cols-3 gap-4 p-3 px-10 bg-white rounded text-gray-800">
              <div>1</div>
              <div>Monthly Aura+ Subscription</div>
              <div className="text-right">$8000</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-3 px-10 bg-white rounded text-gray-800">
              <div>2</div>
              <div>100 Coin Pack</div>
              <div className="text-right">$3000</div>
            </div>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
};

export default MonetizationFeaturesTable;
