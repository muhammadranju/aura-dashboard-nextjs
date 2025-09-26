"use client";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { usePathname } from "next/navigation"; // Import this

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen   text-white flex"
      style={{
        backgroundImage: "url('/screen.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Sidebar />
      <div className="flex-1 pt-6">
        {pathname === "/analytics-reports" ? (
          ""
        ) : (
          <Header showButtons={false} />
        )}

        <div className="px-6">{children}</div>
      </div>
    </div>
  );
}
