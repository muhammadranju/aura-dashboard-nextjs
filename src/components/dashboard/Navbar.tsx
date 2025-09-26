"use client";
import {
  BarChart3,
  Bell,
  Calendar,
  Gamepad2,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
  Tag,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [pathname, setPathname] = useState("");
  const location = usePathname();
  const path = location.split("/")[1] || "/";
  // const path = location.pathname.split("/")[1] || "/";

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <nav className="space-y-2 px-4 mt-5">
      <Link href={"/dashboard"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "dashboard"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard Overview</span>
        </div>
      </Link>
      <Link href={"/event-management"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "event-management"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Calendar className="w-5 h-5" />
          <span>Event Management</span>
        </div>
      </Link>

      <Link href={"/game-management"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "game-management"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Gamepad2 className="w-5 h-5" />
          <span>Game Management</span>
        </div>
      </Link>
      <Link href={"/promo-code-management"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "promo-code-management"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Tag className="w-5 h-5" />
          <span>Promo Code</span>
        </div>
      </Link>

      <Link href={"/users-management"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "users-management"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Users className="w-5 h-5" />
          <span>User Management</span>
        </div>
      </Link>
      <Link href={"/shop-management"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "shop-management"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Shop Management</span>
        </div>
      </Link>
      <Link href={"/aura-package"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "aura-package"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Package className="w-5 h-5" />
          <span>Aura+ Package</span>
        </div>
      </Link>
      <Link href={"/analytics-reports"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "analytics-reports"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Analytics & Reports</span>
        </div>
      </Link>

      <Link href={"/community-guidelines"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "community-guidelines"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Bell className="w-5 h-5" />
          <span>Community Guidelines</span>
        </div>
      </Link>

      <Link href={"/video-call-settings"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "video-call-settings"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Video className="w-5 h-5" />
          <span>Video Call Settings</span>
        </div>
      </Link>
      <Link href={"/push-notification"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "push-notification"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Bell className="w-5 h-5" />
          <span>Push Notification</span>
        </div>
      </Link>
      <Link href={"/settings"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            pathname === "settings"
              ? "font-medium bg-white text-black"
              : "hover:bg-white/10 transition-colors"
          } `}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </div>
      </Link>
      <Link href={"/auth/login"}>
        <div
          className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors`}
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
