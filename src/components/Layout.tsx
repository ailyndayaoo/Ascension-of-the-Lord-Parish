import React from "react";
import { Search, Church } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const bgImage = "https://plain-apac-prod-public.komododecks.com/202603/28/yWhWSu5ahttAA4oU4Elg/image.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-[#1a237e]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-referrer"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(1.1) contrast(0.9)"
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 pt-2 pb-4 md:px-16">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Church className="h-6 w-6" />
          </Link>
        </div>
        
        <div className="hidden flex-1 items-center justify-center px-12 md:flex">
          <div className="h-[1px] w-full bg-[#1a237e]/10" />
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <Search className="h-3.5 w-3.5" />
          </div>
          <Link 
            to="/" 
            className={`hover:opacity-70 transition-opacity ${location.pathname === "/" ? "border-b-2 border-[#1a237e]" : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`hover:opacity-70 transition-opacity ${location.pathname === "/about" ? "border-b-2 border-[#1a237e]" : ""}`}
          >
            About
          </Link>
          <Link 
            to="/schedule" 
            className={`hover:opacity-70 transition-opacity ${location.pathname === "/schedule" ? "border-b-2 border-[#1a237e]" : ""}`}
          >
            Schedule
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">Others</Link>
        </div>
      </nav>

      {children}

      {/* Decorative Dots Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 grid grid-cols-1 gap-2 opacity-15">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-white" />
        ))}
      </div>
    </div>
  );
}
