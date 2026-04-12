import React from "react";
import { motion } from "motion/react";
import { Clock, Calendar as CalendarIcon, Info, Sparkles } from "lucide-react";

export default function Schedule() {
  const scheduleData = [
    {
      day: "Monday - Friday",
      times: [
        { time: "6:00 AM", detail: "English (M, W, F) / Cebuano (T, TH)" },
        { time: "12:00 NN", detail: "English" }
      ],
      color: "from-[#54433a]/20 to-[#54433a]/5",
      accent: "bg-[#54433a]"
    },
    {
      day: "Saturday",
      times: [
        { time: "6:00 AM", detail: "English" },
        { time: "5:30 PM", detail: "Cebuano" }
      ],
      color: "from-[#1a237e]/20 to-[#1a237e]/5",
      accent: "bg-[#1a237e]"
    },
    {
      day: "Sunday",
      times: [
        { time: "5:30 AM", detail: "Cebuano" },
        { time: "7:00 AM", detail: "Cebuano" },
        { time: "9:00 AM", detail: "English" },
        { time: "10:30 AM", detail: "Baptism Mass" },
        { time: "12:00 NN", detail: "English" },
        { time: "3:30 PM", detail: "Cebuano" },
        { time: "5:00 PM", detail: "English" }
      ],
      color: "from-[#54433a]/20 to-[#54433a]/5",
      accent: "bg-[#54433a]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="relative z-10 px-6 md:px-16 py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="flex items-center gap-3 text-[#54433a] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Sacramental Life & Liturgy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#1a237e] leading-none font-display">
              MASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a237e] to-[#54433a]">SCHEDULE</span>
            </h1>
            
            {/* Decorative Line */}
            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-[#54433a] to-transparent" />
          </motion.div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {scheduleData.map((section, idx) => (
              <motion.div
                key={section.day}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Card Background with Gradient Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${section.color} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-col h-full overflow-hidden">
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${section.accent} opacity-80`} />
                  
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`p-3 rounded-2xl ${section.accent} text-white shadow-lg`}>
                      <CalendarIcon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#1a237e] font-display uppercase leading-none">
                      {section.day}
                    </h2>
                  </div>

                  <div className="space-y-8 flex-1">
                    {section.times.map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="group/item relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-2xl font-black text-[#1a237e] font-display tabular-nums tracking-tight">
                            {item.time}
                          </span>
                          <div className="h-[1px] flex-1 bg-[#1a237e]/10 group-hover/item:bg-[#1a237e]/40 transition-all duration-500" />
                        </div>
                        <p className="text-sm md:text-base font-medium text-[#54433a] mt-2 italic font-serif opacity-80 group-hover/item:opacity-100 transition-opacity">
                          {item.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtle Decorative Icon in Corner */}
                  <Clock className="absolute -bottom-4 -right-4 h-24 w-24 text-[#1a237e]/5 -rotate-12" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-6 pt-12"
          >
            <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-[#1a237e]/20 to-transparent" />
            <div className="flex items-center justify-center gap-3 text-[#1a237e]/60 text-sm md:text-base font-medium italic text-center px-4">
              <Info className="h-5 w-5 text-[#54433a]" />
              <p className="font-serif">Schedule may change during holidays or special liturgical seasons. Please check our official announcements.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
