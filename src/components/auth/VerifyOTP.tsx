"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function VerifyOTPForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedValues = value.slice(0, 6).split("");
      const newOtp = [...otp];
      pastedValues.forEach((val, i) => {
        if (index + i < 6 && /^\d*$/.test(val)) {
          newOtp[index + i] = val;
        }
      });
      setOtp(newOtp);

      // Focus the next empty field or the last field
      const nextIndex = Math.min(index + pastedValues.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setIsSubmitting(true);
      // Handle OTP verification logic here
      console.log("OTP verification attempt:", { otp: otpValue });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      // Handle successful verification here
    }
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    // Handle resend logic here
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-white">
          Enter the Verification Code For
        </h1>
        <h2 className="text-2xl font-medium text-white/90">
          Verify Your Email
        </h2>
      </div>

      {/* OTP Form */}
      <div className="space-y-6">
        {/* OTP Input Fields */}
        <div className="space-y-4">
          <Label className="sr-only">Enter 6-digit verification code</Label>

          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-xl font-semibold bg-neutral-300/50 border-2 border-neutral-50 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20 transition-all duration-200"
                placeholder="0"
              />
            ))}
          </div>

          {/* Resend Link */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              If you didn&apos;t receive a code,{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-cyan-400 hover:text-cyan-300 font-medium underline transition-colors duration-200"
              >
                Resend
              </button>
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isComplete || isSubmitting}
          className={`w-full h-12 font-semibold text-lg transition-all duration-200 ${
            isComplete && !isSubmitting
              ? "border bg-sky-400 hover:bg-sky-500 text-neutral-50"
              : "bg-neutral-400/50 text-neutral-300 cursor-not-allowed hover:bg-neutral-400/50"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Verifying...
            </div>
          ) : (
            "Submit"
          )}
        </Button>

        {/* Back to Login Link */}
        <div className="text-center flex justify-center">
          <Link href={"/auth/login"}>
            <button
              type="button"
              className="text-white/70 hover:text-white text-sm transition-colors flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
