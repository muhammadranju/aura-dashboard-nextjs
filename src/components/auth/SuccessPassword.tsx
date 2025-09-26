"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SuccessPasswordForm() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-white">Password reset</h1>
        <p className="text-neutral-300 text-lg">
          Your password has been successfully reset. Click below to log in
          magically.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => router.push("/auth/login")}
          className="w-full h-12 border bg-sky-400 hover:bg-sky-500 text-neutral-50 font-semibold text-lg transition-colors"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
