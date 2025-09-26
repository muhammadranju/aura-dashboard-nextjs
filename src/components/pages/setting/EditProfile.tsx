/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit3, User } from "lucide-react";
import { useState } from "react";

const ProfileEditForm = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [isLoading, setIsLoading] = useState(false);

  // Profile form data
  const [profileData, setProfileData] = useState({
    fullName: "Emily Jane",
    email: "emily@gmail.com",
    contactNumber: "+99-01846875456",
  });

  // Password form data
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Profile saved:", profileData);
    setIsLoading(false);
  };

  const handlePasswordSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Password changed:", passwordData);
    setIsLoading(false);
    // Reset password form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleProfileChange = (field: string, value: any) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field: string, value: any) => {
    setPasswordData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8">
            <button
              onClick={() => setActiveTab("edit-profile")}
              className={`text-xl font-medium transition-colors duration-200 ${
                activeTab === "edit-profile"
                  ? "text-white border-b-2 border-white pb-2"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveTab("change-password")}
              className={`text-xl font-medium transition-colors duration-200 ${
                activeTab === "change-password"
                  ? "text-white border-b-2 border-white pb-2"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              Change Password
            </button>
          </div>

          {/* Edit Profile Tab */}
          {activeTab === "edit-profile" && (
            <div className="space-y-8">
              {/* Profile Photo Section */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                    {/* Profile Image Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Edit3 className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-1">
                    Sabbir Ahmed
                  </h2>
                  <p className="text-white/60">
                    Click the edit icon to change your profile photo
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-white text-sm font-medium"
                  >
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    value={profileData.fullName}
                    onChange={(e) =>
                      handleProfileChange("fullName", e.target.value)
                    }
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-white text-sm font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      handleProfileChange("email", e.target.value)
                    }
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contactNumber"
                    className="text-white text-sm font-medium"
                  >
                    Contact number
                  </Label>
                  <Input
                    id="contactNumber"
                    value={profileData.contactNumber}
                    onChange={(e) =>
                      handleProfileChange("contactNumber", e.target.value)
                    }
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* Save Button */}
                <Button
                  onClick={handleProfileSave}
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Saving Changes...
                    </div>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Change Password Tab */}
          {activeTab === "change-password" && (
            <div className="space-y-8">
              {/* Password Form Fields */}
              <div className="space-y-6">
                {/* Current Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="currentPassword"
                    className="text-white text-sm font-medium"
                  >
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      handlePasswordChange("currentPassword", e.target.value)
                    }
                    placeholder="Enter your current password"
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="newPassword"
                    className="text-white text-sm font-medium"
                  >
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      handlePasswordChange("newPassword", e.target.value)
                    }
                    placeholder="Enter your new password"
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-white text-sm font-medium"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      handlePasswordChange("confirmPassword", e.target.value)
                    }
                    placeholder="Confirm your new password"
                    className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
                  />
                </div>

                {/* Save Password Button */}
                <Button
                  onClick={handlePasswordSave}
                  disabled={
                    isLoading ||
                    !passwordData.currentPassword ||
                    !passwordData.newPassword ||
                    passwordData.newPassword !== passwordData.confirmPassword
                  }
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:bg-white/20 disabled:text-white/60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Updating Password...
                    </div>
                  ) : (
                    "Update Password"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;
