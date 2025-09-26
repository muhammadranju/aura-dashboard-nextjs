/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Filter, Edit3, Trash2, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample package data based on the new design
const packageData = [
  {
    id: 1,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 2,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 3,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 4,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 5,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 6,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 7,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 8,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 9,
    packageName: "Weekly",
    duration: "1 week",
    price: "$50",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
];

export function AuraPackage() {
  const [statusFilter, setStatusFilter] = useState("Active");
  const [toggleStates, setToggleStates] = useState(
    packageData.reduce((acc, pkg) => {
      acc[pkg.id] = true;
      return acc;
    }, {})
  );

  const handleToggle = (id: any) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full mx-auto space-y-6">
      {/* Header Controls Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end">
        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl h-12 py-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-white" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl h-12 px-6 hover:bg-white/30 transition-all duration-200">
            Add New Aura Package
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
        {/* Table Header */}
        <div className="bg-white/20 backdrop-blur-sm px-6 py-4">
          <div className="grid grid-cols-7 gap-4 text-sm font-medium text-white">
            <div>SL</div>
            <div>Package Name</div>
            <div>Duration</div>
            <div>Price</div>
            <div>User Purchase</div>
            <div>Created On</div>
            <div>Status</div>
            <div className="text-center">Action</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="p-4 space-y-4">
          {packageData.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 p-4 hover:bg-white/95 transition-all duration-200"
            >
              <div className="grid grid-cols-8 gap-4 items-center text-sm">
                <div className="text-slate-700 font-medium">{pkg.id}</div>
                <div className="text-slate-700 font-medium">
                  {pkg.packageName}
                </div>
                <div className="text-slate-600">{pkg.duration}</div>
                <div className="text-slate-600">{pkg.price}</div>
                <div className="text-slate-600">{pkg.userPurchase}</div>
                <div className="text-slate-600">{pkg.createdOn}</div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {pkg.status}
                  </span>
                </div>

                {/* Action Column with Edit, Toggle, and Delete */}
                <div className="flex items-center justify-center gap-3 p-2 bg-white/60 rounded-lg border border-white/40">
                  {/* Edit Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 text-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => handleToggle(pkg.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      toggleStates[pkg.id] ? "bg-cyan-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        toggleStates[pkg.id] ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>

                  {/* Delete Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
