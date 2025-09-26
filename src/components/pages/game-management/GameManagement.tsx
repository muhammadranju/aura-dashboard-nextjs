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
import Image from "next/image";

// Sample bundle data based on the new design
const bundleData = [
  {
    id: 1,
    totalAura: "550",
    image: "/aura-logo.png",
    totalPrice: "$4.99",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 2,
    totalAura: "550",
    image: "/aura-logo.png",
    totalPrice: "$4.99",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 3,
    totalAura: "550",
    totalPrice: "$4.99",
    image: "/aura-logo.png",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 4,
    totalAura: "550",
    totalPrice: "$4.99",
    image: "/aura-logo.png",
    userPurchase: "2000",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 5,
    totalAura: "550",
    totalPrice: "$4.99",
    userPurchase: "2000",
    image: "/aura-logo.png",

    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 6,
    totalAura: "550",
    totalPrice: "$4.99",
    userPurchase: "2000",
    image: "/aura-logo.png",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 7,
    totalAura: "550",
    totalPrice: "$4.99",
    userPurchase: "2000",
    image: "/aura-logo.png",
    createdOn: "01-02-2025",
    status: "Active",
  },
  {
    id: 8,
    totalAura: "550",
    totalPrice: "$4.99",
    userPurchase: "2000",
    image: "/aura-logo.png",
    createdOn: "01-02-2025",
    status: "Active",
  },
];

export function GameManagement() {
  const [statusFilter, setStatusFilter] = useState("Active");
  const [bundleFilter, setBundleFilter] = useState("Aura Bundle");
  const [toggleStates, setToggleStates] = useState(
    bundleData.reduce((acc, bundle) => {
      acc[bundle.id] = true;
      return acc;
    }, {})
  );

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full mx-auto space-y-6 my-5">
      {/* Header Controls Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-3">
          <div>
            <h2 className="text-2xl font-[Bebas_Neue] text-white mb-1">
              Game Management
            </h2>
          </div>
        </div>

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
            Create New Game
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
        {/* Table Header */}
        <div className="bg-white/20 backdrop-blur-sm px-6 py-4">
          <div className="grid grid-cols-7 gap-4 text-sm font-medium text-white">
            <div>SL</div>
            <div>Image</div>
            <div>Game Title</div>
            <div>Description</div>
            <div>Created On</div>
            <div>Status</div>
            <div className="text-center">Action</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="p-4 space-y-4">
          {bundleData.map((bundle, index) => (
            <div
              key={bundle.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 p-4 hover:bg-white/95 transition-all duration-200"
            >
              <div className="grid grid-cols-7 gap-4 items-center text-sm">
                <div className="text-slate-700 font-medium">{bundle.id}</div>
                <div className="text-slate-700 font-medium">
                  <Image
                    src={bundle.image}
                    alt="Aura Logo"
                    width={50}
                    height={50}
                    className="rounded-full invert"
                  />
                </div>
                <div className="text-slate-600">{bundle.totalPrice}</div>
                <div className="text-slate-600">{bundle.userPurchase}</div>
                <div className="text-slate-600">{bundle.createdOn}</div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {bundle.status}
                  </span>
                </div>

                {/* Action Column with Edit, Toggle, and Delete */}
                <div className="flex items-center justify-center gap-3">
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
                    onClick={() => handleToggle(bundle.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      toggleStates[bundle.id] ? "bg-cyan-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        toggleStates[bundle.id]
                          ? "translate-x-6"
                          : "translate-x-1"
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
