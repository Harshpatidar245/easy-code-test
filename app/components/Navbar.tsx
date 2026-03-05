"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Programs", "Courses", "Practice", "Resources", "FAQ"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#5c3e8e] rounded-lg flex items-center justify-center -skew-x-6">
                <span className="text-white font-bold text-lg leading-none mt-1">▶️</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#5c3e8e]">EasyCode</span>
                <span className="text-[12px] block -mt-1 text-gray-400 font-medium">Academy</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 translate-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base text-gray-500 hover:text-[#5c3e8e] transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-dark"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-2 px-4 text-sm text-text-dark hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
