import React from "react";
import profilePic from "../assets/profilePic.jpeg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-[#07080a] text-white pt-32 pb-16 px-6"
    >
      <div className="container max-w-6xl mx-auto">
        
        {/* PREMIUM METALLIC CONTAINER CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#121316] border border-[#22242a] p-8 md:p-12 rounded-2xl shadow-2xl items-center">
          
          {/* LEFT SIDE CONTENT COLUMN (Takes 7 of 12 spaces) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div>
              <span className="text-[#e28743] uppercase text-xs font-mono font-bold tracking-widest block mb-2">
                Computer Science & Web Developer
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Mehran Ahmad with a <span className="text-[#ebd0b9] font-serif italic font-normal">frontend specialization</span> in modern web products
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I am a Computer Science student with a passion for building modern, 
              responsive, and user-friendly web applications. I design and ship optimized interfaces 
              using C++, HTML, CSS, JavaScript, and React.
            </p>

            {/* QUICK ACTION NAVIGATION BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="#resume" 
                className="text-[#e28743] hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                See experience <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="/Mehran_Ahmad_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                View CV Preview <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                Email me <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* INTEGRATED INFO MATRIX CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-6 border-t border-[#22242a] pt-6">
              <div className="bg-[#1c1e22]/50 p-4 rounded-xl border border-[#272930]/40">
                <h4 className="text-white text-sm font-semibold mb-1">🎓 Education</h4>
                <p className="text-xs text-gray-400">BS Computer Science (CGPA: 3.71)</p>
              </div>

              <div className="bg-[#1c1e22]/50 p-4 rounded-xl border border-[#272930]/40">
                <h4 className="text-white text-sm font-semibold mb-1">📍 Location</h4>
                <p className="text-xs text-gray-400">Lahore, Pakistan</p>
              </div>

              <div className="bg-[#1c1e22]/50 p-4 rounded-xl border border-[#272930]/40">
                <h4 className="text-white text-sm font-semibold mb-1">💻 Experience</h4>
                <p className="text-xs text-gray-400">React & Web Development</p>
              </div>

              <div className="bg-[#1c1e22]/50 p-4 rounded-xl border border-[#272930]/40">
                <h4 className="text-white text-sm font-semibold mb-1">🌐 Languages</h4>
                <p className="text-xs text-gray-400">English • Urdu</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE COLUMN (Takes 5 of 12 spaces) - Scaled with Object-Contain Frame to prevent chest crop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[340px] lg:max-w-full rounded-2xl border-2 border-[#22242a] bg-[#1a1b1f] overflow-hidden shadow-xl p-2 transition-all duration-300 hover:border-[#31353f]">
              <img 
                src={profilePic} 
                alt="Mehran Ahmad Portrait" 
                className="w-full h-auto rounded-xl object-contain"
                style={{
                  display: "block",
                  maxHeight: "500px"
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;