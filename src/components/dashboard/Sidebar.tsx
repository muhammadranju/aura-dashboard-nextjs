"use client";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="w-64 border-r-1 border-white/80 bg-gradient-to-b  ">
      <div className="p-10 ">
        <img src="/aura-logo.png" alt="Aura Logo" className="w-full " />
      </div>
      <div className="border-b-1 border-white/80"></div>

      <Navbar />
    </div>
  );
};

export default Sidebar;
