"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { GoBellFill } from "react-icons/go";

const routeToTitleMap: Record<string, string> = {
  "analytics-reports": "ANALYTICS & REPORTS",
  "video-call-settings": "VIDEO CALL SETTINGS",
  "aura-package": "AURA PACKAGE",
  "community-guidelines": "COMMUNITY GUIDELINES",
  dashboard: "DASHBOARD",
  "event-management": "EVENT MANAGEMENT",
  "game-management": "GAME MANAGEMENT",
  "promo-code-management": "PROMO CODE MANAGEMENT",
  "push-notification": "PUSH NOTIFICATION",
  settings: "SETTINGS",
  "shop-management": "SHOP MANAGEMENT",
  "users-management": "USERS MANAGEMENT",
};

const Header = ({
  setActiveTabShow,
  activeTabShow,
  showButtons = true,
  title = "ANALYTICS & REPORTS",
}: any) => {
  const pathname = usePathname();
  const currentTab = pathname.split("/")[1] || "dashboard"; // Default to 'dashboard' if at root path
  console.log("Current tab:", currentTab);

  // Dynamically get title based on current route (falls back to prop if no match)
  const dynamicTitle = routeToTitleMap[currentTab] || title;

  const handleTabChange = (tab: string) => {
    console.log("Tab changed to:", tab);
    console.log("Current activeTabShow:", activeTabShow);
    setActiveTabShow(tab);
  };

  // Common button styles
  const getButtonStyles = (tabName: string) => {
    const isActive = activeTabShow === tabName;
    return `px-4 py-6 rounded-lg text-gray-50 transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-[#00bcd4] hover:bg-[#00acc1] text-white border-none shadow-md"
        : "border-gray-400 hover:bg-gray-400 bg-transparent border hover:border-gray-400 "
    }`;
  };

  return (
    <div className="flex items-center justify-between mb-6 pb-6 border-b-1 border-white/80">
      <div className="flex items-center space-x-4 px-6">
        <h2 className="text-4xl text-white  font-[Bebas_Neue]">
          {dynamicTitle}
        </h2>
        {showButtons && (
          <div className="flex space-x-2">
            <Button
              onClick={() => handleTabChange("revenue")}
              className={getButtonStyles("revenue")}
              variant={activeTabShow === "revenue" ? "default" : "outline"}
            >
              Revenue & Monetization
            </Button>
            <Button
              onClick={() => handleTabChange("engagement")}
              className={getButtonStyles("engagement")}
              variant={activeTabShow === "engagement" ? "default" : "outline"}
            >
              Engagement & App Usage
            </Button>
            <Button
              onClick={() => handleTabChange("server-load")}
              className={getButtonStyles("server-load")}
              variant={activeTabShow === "server-load" ? "default" : "outline"}
            >
              Real-time Server Load
            </Button>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4 px-6">
        <span className="text-gray-50">Hello, Sabbir</span>
        <Avatar className="w-10 h-10 border rounded-full">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback className="text-gray-800">S</AvatarFallback>
        </Avatar>
        <div className="flex items-center border p-1 rounded-full">
          <GoBellFill className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
