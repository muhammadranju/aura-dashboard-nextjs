"use client";
import { useState } from "react";
import Header from "../dashboard/Header";
import RevenueMonetizationSection from "./analytics-reports/RevenueMonetizationSection";
import MonetizationFeaturesTable from "./analytics-reports/MonetizationFeaturesTable";
import EngagementAppUsage from "./analytics-reports/EngagementAppUsage";
import RealTimeServerLoad from "./analytics-reports/RealTimeServerLoad";

const AnalyticsReports = () => {
  // Initialize with "revenue" so the first tab shows by default
  const [activeTabShow, setActiveTabShow] = useState("revenue");

  return (
    <>
      {/* Sidebar */}

      {/* Main Content */}
      {activeTabShow === "revenue" && (
        <>
          {/* Header */}
          <Header
            setActiveTabShow={setActiveTabShow}
            activeTabShow={activeTabShow}
          />

          {/* Revenue & Monetization Section */}
          <RevenueMonetizationSection />
          {/* Top Monetization Features Table */}
          <MonetizationFeaturesTable />
        </>
      )}

      {activeTabShow === "engagement" && (
        <>
          {/* Header */}
          <Header
            setActiveTabShow={setActiveTabShow}
            activeTabShow={activeTabShow}
          />

          {/* Engagement & App Usage Section */}
          <EngagementAppUsage />
        </>
      )}

      {activeTabShow === "server-load" && (
        <>
          {/* Header */}
          <Header
            setActiveTabShow={setActiveTabShow}
            activeTabShow={activeTabShow}
          />

          {/* Real-time Server Load Section */}
          <RealTimeServerLoad />
        </>
      )}
    </>
  );
};

export default AnalyticsReports;
