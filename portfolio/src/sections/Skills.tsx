import React from "react";

function Skills() {
  // Categorized accurately matching your CV file profile data
  const programmingLanguages = ["C++", "COAL", "HTML", "CSS", "JavaScript", "React"];
  const softwareUtilities = ["Dev C++", "emu8086", "Visual Studio"];

  return (
    <section 
      id="skills" 
      className="bg-[#07080a] text-white py-24 px-6 flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* PREMIUM SECTION HEADER */}
        <div className="text-left mb-4">
          <span className="text-[#e28743] uppercase text-xs font-mono font-bold tracking-widest block mb-2">
            Abilities & Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Competencies
          </h2>
        </div>

        {/* METALLIC BACKGROUND LAYOUT CARD (Matching your reference screenshot style) */}
        <div className="bg-[#121316] border border-[#22242a] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
          
          {/* BLOCK 1: PROGRAMMING LANGUAGES */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Timeline/Category Space Left Side */}
            <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1">
              LANGUAGES
            </div>
            
            {/* Core Text Content Right Side */}
            <div className="md:col-span-9 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Programming & Frameworks
              </h3>
              <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                Core technologies used to architect layout templates, handle calculations, and structure application flows.
              </p>
              
              {/* Highlight Bullet Accents */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                {programmingLanguages.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-[#e28743] text-xs">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DIVIDER LINE */}
          <div className="border-t border-[#22242a] w-full" />

          {/* BLOCK 2: SOFTWARE & UTILITIES */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Timeline/Category Space Left Side */}
            <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1">
              ENVIRONMENT
            </div>
            
            {/* Core Text Content Right Side */}
            <div className="md:col-span-9 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Software & IDE Tools
              </h3>
              <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                Compilers, assembly emulators, and local desktop workspaces for debugging application codebases.
              </p>
              
              {/* Highlight Bullet Accents */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                {softwareUtilities.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-[#e28743] text-xs">•</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;