import React from "react";
import { motion } from "motion/react";
import { History, Calendar, MapPin } from "lucide-react";

export default function About() {
  return (
    <main className="relative z-10 px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-12 md:gap-20"
        >
          {/* Left Column: Title and Key Info */}
          <div className="md:w-1/3 flex flex-col justify-start">
            <div className="sticky top-24 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#54433a] font-bold tracking-widest text-xs uppercase">
                  <History className="h-4 w-4" />
                  <span>Our Journey</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a237e] leading-none font-display">
                  PARISH<br />HISTORY
                </h1>
              </div>

              <div className="space-y-6 pt-8 border-t border-[#1a237e]/10">
                <div className="flex items-start gap-4">
                  <div className="bg-[#54433a] p-2 rounded-lg text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#54433a] uppercase tracking-wider">Established</p>
                    <p className="text-lg font-bold text-[#1a237e]">May 15, 2002</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1a237e] p-2 rounded-lg text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#1a237e] uppercase tracking-wider">Location</p>
                    <p className="text-lg font-bold text-[#1a237e]">GSIS Heights, Matina</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden md:block pt-12">
                <div className="h-32 w-[1px] bg-gradient-to-b from-[#54433a] to-transparent ml-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="md:w-2/3">
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 space-y-10 font-serif text-[#1a237e]/90 leading-relaxed text-lg md:text-xl">
              <div className="space-y-6">
                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-[#54433a] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:font-display">
                  The history of the Ascension of the Lord Parish in GSIS Heights, Matina, began with the humble spiritual aspirations of a small group of residents who sought a place of worship closer to home. In the early 1970s, before a formal structure existed, the community gathered for the Holy Eucharist in the makeshift setting of the GSIS building's garage.
                </p>
                <p>
                  While initial requests for a regular Sunday mass were met with hesitation due to diocesan policies, the persistence of the local faithful eventually secured permission to hold services, provided they worked toward establishing a permanent chapel.
                </p>
              </div>

              <div className="relative py-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-[#1a237e]/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white/80 px-4 text-sm font-bold text-[#54433a] uppercase tracking-[0.3em]">1975 Milestone</span>
                </div>
              </div>

              <div className="space-y-6">
                <p>
                  On July 11, 1975, the community reached a significant milestone when it was officially recognized as a <span className="font-bold italic text-[#54433a]">Gagmay’ng Kristohanong Katilingban (GKK)</span>, or Small Christian Community, under the jurisdiction of the San Pedro Cathedral. It was during this period that Fr. Rogelio Antalan designated the community as the Ascension Chapel, and the current site in GSIS Heights was selected as its permanent home.
                </p>
                <p>
                  For the next twenty-seven years, the chapel served as a vital spiritual hub for the rapidly developing neighborhoods of Matina Pangi, Balusong, and Bangkal, eventually outgrowing its status as a mere sub-parish.
                </p>
              </div>

              <div className="bg-[#54433a]/5 p-8 rounded-2xl border-l-4 border-[#54433a] italic">
                <p className="text-xl md:text-2xl text-[#54433a] font-medium leading-relaxed">
                  "The community’s journey culminated on May 15, 2002, when the Archdiocese of Davao formally elevated the chapel to the status of a full-fledged parish."
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Most Rev. Julius Tonel was installed as the very first parish priest, marking the beginning of a new era of pastoral care and community service. Since its canonical establishment, the parish has been a cornerstone of the Matina area, led by various dedicated clergy including Most Rev. George B. Rimando, Fr. Leonardo Dublan Jr., and Fr. Zenon Ampong.
                </p>
                <p>
                  Through their leadership and the unwavering faith of the community, they have helped transform the "garage chapel" into the vibrant, landmark parish it is today, serving as a beacon of light for all who seek spiritual guidance and fellowship.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
