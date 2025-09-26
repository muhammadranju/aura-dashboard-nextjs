import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Main container with rounded border */}
      <div className="relative w-full max-w-7xl bg-white/20 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Illustration placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square  rounded-2xl flex items-center justify-center">
              <Image
                width={500}
                height={500}
                src="/forgot-password.svg"
                alt="Login illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
