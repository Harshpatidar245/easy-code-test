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
    <section className="relative bg-linear-to-br from-primary-light via-white to-bg-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark leading-tight">
              EasyCode Academy –{" "}
              <span className="text-primary">Python Using AI</span> Live Workshop
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-gray">
              Master Python Using AI & Build Tech Career Skills
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm">
                <span className="text-primary">📅</span>
                <span className="text-text-dark font-medium">30 Jan, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm">
                <span className="text-primary">🕖</span>
                <span className="text-text-dark font-medium">7:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm">
                <span className="text-primary">🎥</span>
                <span className="text-text-dark font-medium">Live Workshop</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="relative">
                <span className="absolute -top-3 -left-2 bg-accent text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                  Limited Seats Only
                </span>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                  Register Now at ₹99{" "}
                  <span className="line-through text-white/60 text-sm">₹999</span>
                </button>
              </div>
            </div>

            {/* Countdown */}
            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { label: "Days", value: pad(timeLeft.days) },
                { label: "Hours", value: pad(timeLeft.hours) },
                { label: "Mins", value: pad(timeLeft.minutes) },
                { label: "Secs", value: pad(timeLeft.seconds) },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-primary text-white rounded-xl w-14 h-16 sm:w-16 sm:h-18 flex flex-col items-center justify-center shadow-lg animate-pulse-slow"
                >
                  <span className="text-xl sm:text-2xl font-bold">{item.value}</span>
                  <span className="text-[10px] sm:text-xs opacity-80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl p-8 flex items-center justify-center min-h-[350px]">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-5xl">🐍</span>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <code className="text-primary text-sm font-mono">
                      print(&quot;Hello AI World!&quot;)
                    </code>
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-lg">🤖</div>
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-lg">💻</div>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">📊</div>
                  </div>
                </div>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center rotate-12">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
