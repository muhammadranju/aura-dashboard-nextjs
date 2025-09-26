"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react";

export function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset attempt:", { password, confirmPassword });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-neutral-50 border-2 border-neutral-50 flex items-center justify-center">
          <Key className="h-6 w-6 text-black" />
        </div>
        <h1 className="text-3xl font-semibold text-white">Set new password</h1>
        <p className="text-neutral-300 text-lg">
          Your new password must be different from previously used passwords.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Password Input */}
        <div className="space-y-2 relative">
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-neutral-300/50 border-neutral-50 text-white placeholder:text-neutral-50 focus:border-cyan-400 focus:ring-cyan-200/20"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-white" />
            ) : (
              <Eye className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-2 relative">
          <Label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12 bg-neutral-300/50 border-neutral-50 text-white placeholder:text-neutral-50 focus:border-cyan-400 focus:ring-cyan-200/20"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword2(!showPassword2)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword2 ? (
              <EyeOff className="h-5 w-5 text-white" />
            ) : (
              <Eye className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Reset Password Button */}
        <Button
          type="submit"
          className="w-full h-12 border bg-sky-400 hover:bg-sky-500 text-neutral-50 font-semibold text-lg transition-colors"
        >
          Reset Password
        </Button>

        {/* Back to Login Link */}
        <div className="text-center flex justify-center">
          <Link href={"/auth/login"}>
            <button
              type="button"
              className=" text-sm transition-colors flex items-center "
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to log in
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
