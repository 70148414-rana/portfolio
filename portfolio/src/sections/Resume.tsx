import React from "react";

function Resume() {
  // Experience timeline mapped from your CV profile details
  const experiences = [
    {
      period: "JUN 2025 - AUG 2025",
      title: "Internship Experience",
      institution: "SHA Solutions",
      description:
        "Created and optimized developer portfolio nodes on global engineering platforms. Identified and scoped out specialized technical client requirements relating to Agentic AI, modern Web Development layouts, RPA architectures, and automated Quality Assurance parameters.",
    },
    {
      period: "JAN 2023 - APR 2023",
      title: "Professional Experience",
      institution: "Quick Loadings LLC",
      description:
        "Assisted dispatch carriers with log routing operations and target load acquisitions. Maintained clear client communications and critical error resolutions to optimize daily target retention rates.",
    },
    {
      period: "2023 - 2027",
      title: "Bachelor of Computer Science",
      institution: "The University of Lahore",
      description:
        "Maintained an exceptional Academic standing with a CGPA of 3.71 / 4.0. Completed extensive core studies in Programming Fundamentals, Object-Oriented Structures (OOP), Complex Data Architectures, and Relational Database Systems.",
    }
  ];

  return (
    <section 
      id="resume" 
      className="bg-[#07080a] text-white py-24 px-6 flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* PREMIUM SECTION HEADER WITH ACTION BUTTON */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div className="text-left">
            <span className="text-[#e28743] uppercase text-xs font-mono font-bold tracking-widest block mb-2">
              History & Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Experience & Education
            </h2>
          </div>
          
          {/* THE DOWNLOAD BUTTON */}
          <a 
            href="/Mehran_Ahmad_Resume.pdf" 
            download="Mehran_Ahmad_Resume.pdf"
            className="inline-flex items-center justify-center bg-[#e28743] text-[#07080a] px-6 py-3 rounded-xl font-medium text-sm transition-all hover:bg-[#ebd0b9] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#e28743]/10 whitespace-nowrap self-start md:self-auto"
          >
            📥 Download Full CV
          </a>
        </div>

        {/* METALLIC BACKGROUND TIMELINE CONTAINER */}
        <div className="bg-[#121316] border border-[#22242a] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
          
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-10">
              
              {/* ASYMMETRIC GRID WORKPLACE ROW */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Left Side: Period/Timeline Track */}
                <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1 tracking-wider">
                  {exp.period}
                </div>
                
                {/* Right Side: Institution Details */}
                <div className="md:col-span-9 flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {exp.title}
                    </h3>
                    <span className="text-gray-500 text-sm hidden sm:inline">—</span>
                    <span className="text-[#e28743] text-sm font-medium font-mono">
                      {exp.institution}
                    </span>
                  </div>

                  <p className="text-gray-400 text-[0.95rem] leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Renders structural line split divider between list elements */}
              {index < experiences.length - 1 && (
                <div className="border-t border-[#22242a] w-full" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Resume;