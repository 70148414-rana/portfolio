import React from "react";

function Projects() {
  // Projects array updated exactly according to your CV data and technical stack
  const projectList = [
    {
      title: "Hotel Management System",
      category: "SEMESTER PROJECT",
      description:
        "Developed a complete Hotel Management System featuring an intuitive user interface integrated with robust backend business logic. Optimized for room bookings, handling customer information logs, and streamlining system payment processing records.",
      technologies: ["HTML", "C++", "Logic Architecture"],
      github: "https://github.com/rg526511/hotel-management",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      category: "WEB APPLICATION",
      description:
        "A highly responsive, production-ready personal portfolio website built to showcase core engineering skills, clean code components, and academic achievements.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rg526511/portfolio",
      demo: "#",
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-[#07080a] text-white py-24 px-6 flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* PREMIUM SECTION HEADER */}
        <div className="text-left mb-4">
          <span className="text-[#e28743] uppercase text-xs font-mono font-bold tracking-widest block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Projects
          </h2>
        </div>

        {/* PREMIUM CONTAINER CARD MATCHING YOUR SCREENSHOT STYLE */}
        <div className="bg-[#121316] border border-[#22242a] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
          
          {projectList.map((project, index) => (
            <div key={index} className="flex flex-col gap-10">
              
              {/* ASYMMETRIC GRID BLOCK */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Left Side Category / Label (Matches your screenshot's date column layout) */}
                <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1 uppercase tracking-wider">
                  {project.category}
                </div>
                
                {/* Right Side Project Details */}
                <div className="md:col-span-9 flex flex-col gap-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {project.title}
                    </h3>
                    
                    {/* Action Links */}
                    <div className="flex gap-4 text-xs font-mono font-medium">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer" 
                        className="text-[#e28743] hover:underline"
                      >
                        GitHub ↗
                      </a>
                      {project.demo !== "#" && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer" 
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology Badges listed as bullet points like your screenshot style */}
                  <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                        <span className="text-[#e28743] text-xs">•</span>
                        {tech}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Only render divider line between items, not after the last one */}
              {index < projectList.length - 1 && (
                <div className="border-t border-[#22242a] w-full" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;