"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

// Sample user data
const userData = [
  {
    id: 1,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "No Report",
    status: "Active",
  },
  {
    id: 2,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "View Report",
    status: "Active",
    reportType: "red",
  },
  {
    id: 3,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "No Report",
    status: "Active",
  },
  {
    id: 4,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "View Report",
    status: "Active",
  },
  {
    id: 5,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "No Report",
    status: "Active",
  },
  {
    id: 6,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "View Report",
    status: "Active",
  },
  {
    id: 7,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "No Report",
    status: "Active",
  },
  {
    id: 8,
    name: "John",
    email: "example@email.com",
    location: "Demo Location",
    phone: "12345-678901",
    joiningDate: "01-02-2025",
    report: "View Report",
    status: "Active",
  },
];

export function UserManagementTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Active");
  const [userFilter, setUserFilter] = useState("All User");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full mx-auto space-y-6 my-5">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          <Input
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl h-12"
          />
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

          <Select value={userFilter} onValueChange={setUserFilter}>
            <SelectTrigger className="w-32 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl h-12 py-6">
              <div className="flex items-center gap-2 ">
                <SlidersHorizontal className="h-4 w-4 text-white" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All User">All User</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
              <SelectItem value="Basic">Basic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
        {/* Table Header */}
        <div className="bg-white/20 backdrop-blur-sm px-6 py-4">
          <div className="grid grid-cols-9 gap-4 text-sm font-medium text-white">
            <div>SL</div>
            <div>User Name</div>
            <div>Email</div>
            <div>Location</div>
            <div>Phone Number</div>
            <div>Joining Date</div>
            <div>Report</div>
            <div>Status</div>
            <div className="text-center">Action</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="p-4 space-y-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 p-4 hover:bg-white/95 transition-all duration-200"
            >
              <div className="grid grid-cols-9 gap-4 items-center text-sm">
                <div className="text-slate-700 font-medium">{user.id}</div>
                <div className="text-slate-700 font-medium">{user.name}</div>
                <div className="text-slate-600">{user.email}</div>
                <div className="text-slate-600">{user.location}</div>
                <div className="text-slate-600">{user.phone}</div>
                <div className="text-slate-600">{user.joiningDate}</div>
                <div>
                  {user.report === "No Report" ? (
                    <span className="text-slate-600">{user.report}</span>
                  ) : (
                    <button
                      className={`text-sm font-medium hover:underline ${
                        user.reportType === "red"
                          ? "text-red-500"
                          : "text-slate-700"
                      }`}
                    >
                      {user.report}
                    </button>
                  )}
                </div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </div>

                {/* Action Column */}
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-3 py-1 h-8 border-slate-300 text-slate-700 hover:bg-slate-50 bg-white rounded-lg"
                  >
                    View Details
                  </Button>

                  <Select defaultValue="Active">
                    <SelectTrigger className="w-24 h-8 text-xs bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-10 h-10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {[1, 2].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="sm"
              className={`w-10 h-10 rounded-lg ${
                currentPage === page
                  ? "bg-white text-slate-900"
                  : "text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <span className="text-white px-2">...</span>

          {[9, 10].map((page) => (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              className="w-10 h-10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-10 h-10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg"
          onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
