"use client";

import { Button } from "@/components/ui/button";
import { ScheduleCallForm } from "@/components/ScheduleCallForm";

const CourtroomToolsSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/courtroom-background.mp4" type="video/mp4" />
          {/* Fallback background image if video doesn't load */}
        </video>
        {/* Fallback background image */}
        <div className="absolute inset-0 bg-[url('/images/courtroom-bg.jpg')] bg-cover bg-center"></div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-20"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 z-30"></div>
      
      <div className="container-custom relative z-40">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-medium">
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
            </svg>
            COURTROOM TOOLS
          </span>
          <h2 className="heading-section mb-6 text-white">Built for Trial. Not Just for Reports.</h2>
          
          {/* Intro description */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-5 mb-12">
            <p className="text-white text-base font-medium">
              Silent Witness doesn't stop at technical analysis—it arms you for battle in the courtroom.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Cross-Examination Generator */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg mb-5 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cross-Examination Generator</h3>
              <p className="text-white/90 mb-4">
                Auto-generates razor-sharp deposition and trial questions based on opposing expert reports—targeting weak assumptions, flawed logic, and scientific overreach.
              </p>
            </div>
          </div>

          {/* Card 2: Research Scrutinizer */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg mb-5 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Research Scrutinizer</h3>
              <p className="text-white/90 mb-4">
                Instantly audits cited studies, biomechanical papers, and crash research—flagging outdated, irrelevant, or misapplied science so you can dismantle opposing testimony with precision.
              </p>
            </div>
          </div>

          {/* Card 3: Expert Strategy Companion */}
          <div className="group relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg mb-5 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Expert Strategy Companion
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30">
                  Coming Soon
                </span>
              </h3>
              <p className="text-white/90 mb-4">
                Upload opposing expert CVs and past reports to surface patterns, vulnerabilities, and prior contradictions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <ScheduleCallForm
            trigger={
              <Button size="lg" variant="glass" className="font-semibold">
                Schedule a Demo
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CourtroomToolsSection; 