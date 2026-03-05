"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 18,
    minutes: 57,
    seconds: 47,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(timer);
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden py-8 sm:py-12">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/20 rounded-full blur-xl hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl hidden lg:block" />

      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title Section - Centered */}
        <div className="text-center mb-8">
          <h1 className="text-gray-600 text-lg sm:text-xl font-medium mb-2">EasyCode Academy - Python Using AI Live Workshop</h1>
          <h2 className="text-gray-600 text-lg sm:text-xl font-medium mb-2">
            Master Python Using AI & Build Tech Career Skills
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left content */}
            <div className="space-y-6">
              {/* Info badges */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📅</span>
                  </div>
                  <span className="text-gray-700 font-medium text-base">30 Jan, 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🕖</span>
                  </div>
                  <span className="text-gray-700 font-medium text-base">7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎥</span>
                  </div>
                  <span className="text-gray-700 font-medium text-base">Live Workshop</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="relative inline-block">
                  <span className="absolute -top-2 -left-2 bg-yellow-400 text-purple-900 text-xs px-3 py-1 rounded-md font-bold shadow-sm z-10">
                    Limited Seats Only
                  </span>
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg">
                    Register Now at ₹99{" "}
                    <span className="line-through text-purple-200 text-sm ml-1">
                      ₹999
                    </span>
                  </button>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex gap-3 sm:gap-4">
                {[
                  { label: "Days", value: pad(timeLeft.days) },
                  { label: "Hours", value: pad(timeLeft.hours) },
                  { label: "Minutes", value: pad(timeLeft.minutes) },
                  { label: "Seconds", value: pad(timeLeft.seconds) },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex flex-col items-center justify-center shadow-sm min-w-[60px]"
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {item.value}
                    </span>
                    <span className="text-[10px] uppercase font-medium text-gray-500 mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center min-h-[320px] relative overflow-visible">
                  {/* Floating icon cards */}
                  <div className="absolute -right-4 top-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl z-20 animate-bounce hover:scale-110 transition-transform">
                    📊
                  </div>
                  <div className="absolute -left-4 top-20 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl z-20 animate-pulse hover:scale-110 transition-transform">
                    🎯
                  </div>
                  <div className="absolute -right-6 bottom-16 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl z-20 hover:scale-110 transition-transform">
                    🚀
                  </div>
                  
                  {/* Main laptop/screen illustration */}
                  <div className="text-center space-y-3 relative z-10 w-full">
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl flex items-center justify-center shadow-2xl relative">
                      {/* Browser dots */}
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      
                      {/* Python icon */}
                      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-5xl z-30">
                        🐍
                      </div>
                      
                      {/* Code text */}
                      <div className="text-purple-200 font-mono text-sm">
                        &lt; Python AI /&gt;
                      </div>
                    </div>
                    
                    {/* Laptop base */}
                    <div className="w-[95%] h-3 bg-gradient-to-b from-purple-300 to-purple-400 rounded-b-xl mx-auto shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
