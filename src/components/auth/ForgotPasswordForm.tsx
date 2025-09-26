"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Key } from "lucide-react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email });
  };

  return (
    <div className="space-y-6">
       <div className="space-y-2 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-neutral-50 border-2 border-neutral-50 flex items-center justify-center">
          <Key className="h-6 w-6 text-black" />
        </div>
        <h1 className="text-3xl font-semibold text-white">Forgot password?</h1>
        <p className="text-neutral-300 text-lg">
          No worries, we’ll send you reset instructions.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-neutral-300/50 border-neutral-50 text-white placeholder:text-neutral-50 focus:border-cyan-400 focus:ring-cyan-200/20"
            required
          />
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          className="w-full h-12 bg-sky-400 hover:bg-sky-500 text-neutral-50 font-semibold text-lg transition-colors"
        >
          Submit
        </Button>
        {/* Forgot Password Link */}
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
