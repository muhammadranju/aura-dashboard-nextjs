"use client";
import Image from "next/image";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="w-64 border-r-1 border-white/80 bg-gradient-to-b  ">
      <div className="p-10 ">
        <Image
          src="/aura-logo.png"
          alt="Aura Logo"
          width={200}
          height={200}
          className="w-full "
        />
      </div>
      <div className="border-b-1 border-white/80"></div>

      <Navbar />
    </div>
  );
};

export default Sidebar;
