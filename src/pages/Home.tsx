import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col md:flex-row min-h-[calc(100vh-80px)] px-6 md:px-16 gap-8 md:gap-12">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center md:justify-between pt-4 pb-12 md:pt-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black md:leading-[1.05] tracking-wide text-[#1a237e] mb-4 font-display">
            ASCENSION<br />
            OF THE LORD<br />
            PARISH
          </h1>
          <p className="text-base sm:text-lg md:text-2xl tracking-tighter text-[#1a237e] font-display opacity-90 uppercase">
            ARCHDIOCESE OF DAVAO
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-0"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 md:gap-4 cursor-pointer"
            >
              <div 
                className="bg-[#54433a] text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[12px] md:text-[14px] tracking-widest uppercase overflow-hidden"
                style={{ 
                  textShadow: '1px 1px 0px #2d2424, 2px 2px 0px #2d2424, 3px 3px 0px #2d2424, 4px 4px 0px #2d2424, 5px 5px 0px #2d2424, 6px 6px 0px #2d2424, 7px 7px 0px #2d2424, 8px 8px 0px #2d2424' 
                }}
              >
                READ MORE
              </div>
              <div className="bg-[#262626] h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-xl">
                <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-white/90" strokeWidth={1.5} />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Right Section - Dark Square with Images */}
      <div className="flex flex-1 items-center justify-center md:justify-end pt-4 pb-12 md:pt-8 md:pb-24">
        <div className="relative h-[350px] sm:h-[450px] md:h-[620px] w-full max-w-[480px] bg-[#2d2424] shadow-2xl">
          {/* Top Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -left-12 sm:-left-32 md:-left-56 -top-4 md:-top-5 z-20 h-[150px] sm:h-[200px] md:h-[280px] w-[110%] sm:w-[120%] md:w-[650px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202603/28/lv88dTFNUlrGxl8WUtlr/image.jpg" 
              alt="Parish interior top" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute -left-12 sm:-left-32 md:-left-56 bottom-4 md:bottom-8 z-20 h-[150px] sm:h-[200px] md:h-[280px] w-[110%] sm:w-[120%] md:w-[600px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202603/28/yeUMV8OS3lbW0z3ixR6X/image.jpg" 
              alt="Parish interior bottom" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Decorative Dots */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 grid grid-cols-2 gap-2 md:gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 md:h-2 w-2 rounded-full bg-white/30" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
