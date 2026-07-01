import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // State controller to handle toggling the mobile menu view drawer open/closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f7ebd3] shadow-md border-b border-[#e6d4b2]">
      {/* Container tracking horizontal grid alignment parameters */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
        
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-[#121316] tracking-wide whitespace-nowrap">
          Mehran Ahmad
        </h1>

        {/* 1. DESKTOP NAVIGATION LINKS 
          - Hidden on mobile screens (`hidden`)
          - Displayed horizontally starting at medium viewport breakpoints (`md:flex`)
          - Comfortably shifted away from the right border edge via margin (`md:mr-24`)
        */}
        <nav className="hidden md:flex items-center gap-10 text-[0.95rem] font-bold text-[#2c241e] md:mr-24">
          <a href="#skills" className="transition-all duration-300 hover:text-[#e28743] hover:scale-105">
            Skills
          </a>
          <a href="#projects" className="transition-all duration-300 hover:text-[#e28743] hover:scale-105">
            Work
          </a>
          <a href="#contact" className="transition-all duration-300 hover:text-[#e28743] hover:scale-105">
            Contact
          </a>
          <a
            href="/Mehran_Ahmad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-[#e28743] hover:scale-105"
          >
            Resume
          </a>
        </nav>

        {/* 2. MOBILE MENU INTERACTION ICON TRIGGER 
          - Visible on small phone touchscreens (`block`)
          - Disappears completely on desktop interfaces (`md:hidden`)
        */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#121316] p-1 focus:outline-none transition-transform active:scale-90"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
      </div>

      {/* 3. MOBILE MENU SLIDE-DOWN DRAWER LAYOUT
        - Only renders visible structures when tracking state evaluates to true (`isOpen`)
        - Injected directly below the primary light golden bar header strip
      */}
      {isOpen && (
        <div className="md:hidden bg-[#f7ebd3] border-t border-[#e6d4b2] px-6 py-4 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-[1rem] font-bold text-[#2c241e]">
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)} // Closes menu layer drawer smoothly upon link activation
              className="py-2 border-b border-[#e6d4b2]/50 hover:text-[#e28743] transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-[#e6d4b2]/50 hover:text-[#e28743] transition-colors"
            >
              Work
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-[#e6d4b2]/50 hover:text-[#e28743] transition-colors"
            >
              Contact
            </a>
            <a
              href="/Mehran_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="py-2 text-[#e28743] hover:underline transition-all"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;