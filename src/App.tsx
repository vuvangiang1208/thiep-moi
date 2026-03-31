/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Utensils, Calendar, ShieldCheck } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffafa] flex items-center justify-center p-6 font-serif selection:bg-[#d4a3a3] selection:text-white">
      {/* Elegant Background Texture */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl w-full bg-white border border-[#d4a3a3]/40 shadow-[0_20px_60px_rgba(212,163,163,0.15)] relative overflow-hidden"
      >
        {/* Rose Gold Border Accents */}
        <div className="absolute inset-2 border border-[#d4a3a3]/20 pointer-events-none"></div>
        <div className="absolute inset-4 border border-[#d4a3a3]/10 pointer-events-none"></div>

        <div className="p-12 md:p-20 space-y-16 text-center relative z-10">
          
          {/* Formal Header */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <ShieldCheck className="text-[#d4a3a3] w-10 h-10 opacity-60" />
                <div className="absolute -inset-2 border border-[#d4a3a3]/30 rounded-full"></div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="text-[#b58383] uppercase text-[11px] font-sans font-semibold"
              >
                Thư Mời Trân Trọng Bé Yêu
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="space-y-2"
              >
                <h1 className="text-5xl md:text-7xl text-[#4a3a3a] font-medium tracking-tight">
                  Trần Khánh Chi
                </h1>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4a3a3]/60 to-transparent w-32 mx-auto mt-4"></div>
              </motion.div>
            </div>
          </div>

          {/* Formal Invitation Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-[#7a6a6a] font-light italic leading-relaxed">
                Trân trọng kính mời bé yêu tới tham dự
              </p>
              <h2 className="text-2xl md:text-3xl text-[#b58383] font-medium tracking-wide uppercase font-sans">
                Bữa Cơm Thân Mật
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 font-sans border-t border-[#d4a3a3]/10">
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-[#d4a3a3]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Địa Điểm</span>
                </div>
                <p className="text-sm text-[#5a4a4a] font-light leading-relaxed">
                  Số nhà 40, Ngách 7<br />Ngõ 225 Quan Hoa
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-[#d4a3a3]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Thời Gian</span>
                </div>
                <p className="text-sm text-[#5a4a4a] font-light">
                  20 giờ 30 phút<br />Thứ Ba, ngày 31 tháng 03 năm 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formal Closing */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="pt-12 space-y-6"
          >
            <div className="flex justify-center">
              <Utensils className="text-[#d4a3a3] w-6 h-6 opacity-50" />
            </div>
            <p className="text-[11px] text-[#8a7a7a] uppercase tracking-[0.4em] font-sans leading-loose max-w-xs mx-auto">
              Sự hiện diện của bé yêu là niềm vinh hạnh lớn lao của anh Vũ Văn Giang
            </p>
          </motion.div>
        </div>

        {/* Decorative Corner Flourishes */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
          <div className="absolute top-8 left-8 w-full h-full border-t border-l border-[#d4a3a3]"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
          <div className="absolute bottom-8 right-8 w-full h-full border-b border-r border-[#d4a3a3]"></div>
        </div>
      </motion.div>

      {/* Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-[#fce4ec]/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-[#fce4ec]/40 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}

