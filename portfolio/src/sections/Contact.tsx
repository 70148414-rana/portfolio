import React from "react";

function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-[#07080a] text-white py-24 px-6 flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* PREMIUM SECTION HEADER */}
        <div className="text-left mb-4">
          <span className="text-[#e28743] uppercase text-xs font-mono font-bold tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Connect With Me
          </h2>
        </div>

        {/* METALLIC BACKGROUND CONTAINER CARD (Matching your reference screenshot style) */}
        <div className="bg-[#121316] border border-[#22242a] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-10">
          
          {/* BLOCK 1: EMAIL CHANNELS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Left Column Label */}
            <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1">
              EMAIL
            </div>
            
            {/* Right Column Content */}
            <div className="md:col-span-9 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Drop an Email
              </h3>
              <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                I am currently open to internship opportunities, tech roles, and collaborative software projects.
              </p>
              <div className="mt-2">
                <a 
                  href="mailto:rg526511@gmail.com" 
                  className="text-[#e28743] hover:underline text-sm font-mono flex items-center gap-2"
                >
                  <span className="text-xs">•</span> rg526511@gmail.com ↗
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER LINE */}
          <div className="border-t border-[#22242a] w-full" />

          {/* BLOCK 2: SOCIALS & PROFESSIONAL CHANNELS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Left Column Label */}
            <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1">
              NETWORKS
            </div>
            
            {/* Right Column Content */}
            <div className="md:col-span-9 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Professional Profiles & Phone
              </h3>
              <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                Let's discuss development setups, clear code reviews, or potential career positions.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                  <span className="text-[#e28743] text-xs">•</span>
                  <span className="text-gray-500">LinkedIn:</span>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#e28743] hover:underline"
                  >
                    View LinkedIn Profile ↗
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                  <span className="text-[#e28743] text-xs">•</span>
                  <span className="text-gray-500">Contact Number:</span>
                  <span className="text-gray-300">+92-301-3922011</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER LINE */}
          <div className="border-t border-[#22242a] w-full" />

          {/* BLOCK 3: GEOGRAPHY AREA */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Left Column Label */}
            <div className="md:col-span-3 text-gray-500 text-sm font-medium font-mono pt-1">
              LOCATION
            </div>
            
            {/* Right Column Content */}
            <div className="md:col-span-9 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Current Location
              </h3>
              <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                Operating locally from my academic base in Punjab.
              </p>
              <div className="flex items-center gap-2 text-gray-300 text-sm font-mono mt-2">
                <span className="text-[#e28743] text-xs">•</span>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;