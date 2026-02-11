"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: "submit",
    title: "Submit Evidence",
    description: "Upload crash photos, repair estimates, police reports, and medical records. Our AI extracts and processes all the relevant case information.",
    features: ["Crash photos", "Repair estimates", "Police reports", "Medical records"],
    color: "blue"
  },
  {
    id: "analyze",
    title: "Case Analysis",
    description: "Our AI analyzes your case evidence and generates a comprehensive score breakdown including overall case strength, liability determination, and injury severity.",
    features: ["Overall strength", "Liability score", "Injury severity", "Delta-V calculation"],
    color: "purple"
  },
  {
    id: "generate",
    title: "Technical Report",
    description: "Receive a comprehensive, court-admissible expert witness report that includes crash analysis, injury causation, and supporting evidence.",
    features: ["Court-admissible", "Expert analysis", "Supporting evidence", "Instant delivery"],
    color: "emerald"
  },
  {
    id: "integrate",
    title: "Silent Witness SDK",
    description: "Integrate Silent Witness intelligence into your existing legal tech stack. Our SDK connects seamlessly with case management platforms.",
    features: ["Clio integration", "Filevine sync", "API access", "Custom workflows"],
    color: "orange"
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "bg-blue-500/20"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "bg-purple-500/20"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "bg-emerald-500/20"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    glow: "bg-orange-500/20"
  }
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState("submit");
  const activeStepData = steps.find(s => s.id === activeStep) || steps[0];
  const colors = colorMap[activeStepData.color as keyof typeof colorMap];

  return (
    <section id="howitworks" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-white/70">How it works</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            From Evidence to Insight{" "}
            <span className="gradient-text">in Minutes</span>
          </h2>
          
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Our streamlined process takes you from case submission to court-ready expert reports in minutes, not weeks.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-white text-gray-900 shadow-lg shadow-white/10"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/5"
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-semibold text-white">
              {activeStepData.title}
            </h3>
            
            <p className="text-lg text-white/60 leading-relaxed">
              {activeStepData.description}
            </p>
            
            {/* Features list */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {activeStepData.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <svg className={`w-3 h-3 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className={`absolute -inset-8 ${colors.glow} rounded-3xl blur-3xl opacity-30`} />
            
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Visual based on step */}
              {activeStep === "submit" && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Evidence Upload</span>
                    <span className="text-xs text-white/40">3 of 4 files</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Crash Photos", "Repair Estimate", "Police Report", "Medical Records"].map((item, i) => (
                      <div 
                        key={item}
                        className={`p-4 rounded-xl ${i < 3 ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-white/5 border border-white/10 border-dashed'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${i < 3 ? 'bg-emerald-500/20' : 'bg-white/10'} flex items-center justify-center mb-2`}>
                          {i < 3 ? (
                            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                        </div>
                        <p className={`text-xs font-medium ${i < 3 ? 'text-emerald-400' : 'text-white/40'}`}>{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>
              )}

              {activeStep === "analyze" && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Case Score</span>
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Complete
                    </span>
                  </div>
                  
                  {/* Score circle */}
                  <div className="flex justify-center py-4">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="url(#scoreGrad)" strokeWidth="6" fill="none" strokeDasharray="251.2" strokeDashoffset="50" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-white">8.2</span>
                        <span className="text-xs text-white/50">Overall</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Strength", score: "8.5", color: "emerald" },
                      { label: "Liability", score: "9.1", color: "blue" },
                      { label: "Injury", score: "7.2", color: "amber" },
                    ].map((item) => (
                      <div key={item.label} className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 text-center`}>
                        <div className={`text-xl font-bold text-${item.color}-400`}>{item.score}</div>
                        <div className={`text-xs text-${item.color}-400/70`}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === "generate" && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Expert Report</span>
                    <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">Ready</span>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    {["Crash Analysis", "Biomechanics Assessment", "TBI Risk Analysis"].map((item, i) => (
                      <div key={item} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-sm text-white/70">{item}</span>
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 rounded-xl bg-white/10 text-white/70 text-sm font-medium">PDF</button>
                    <button className="flex-1 py-3 rounded-xl bg-white/10 text-white/70 text-sm font-medium">DOCX</button>
                    <button className="flex-1 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium">Download</button>
                  </div>
                </div>
              )}

              {activeStep === "integrate" && (
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Background gradient effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px]" />
                  
                  {/* Code window chrome */}
                  <div className="relative">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs text-white/30 ml-2 font-mono">silentwitness-sdk.ts</span>
                    </div>
                    
                    {/* Code content */}
                    <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
                      <div className="space-y-1">
                        <div>
                          <span className="text-purple-400">await</span>
                          <span className="text-white/90"> client.</span>
                          <span className="text-blue-400">analyzeCase</span>
                          <span className="text-white/60">(</span>
                          <span className="text-amber-300">&apos;case_id&apos;</span>
                          <span className="text-white/60">, {'{'}</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-white/60">evidence:</span>
                          <span className="text-amber-300"> &apos;crash_photos.zip&apos;</span>
                          <span className="text-white/60">,</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-white/60">report_type:</span>
                          <span className="text-amber-300"> &apos;full_analysis&apos;</span>
                          <span className="text-white/60">,</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-white/60">include:</span>
                          <span className="text-white/60"> [</span>
                          <span className="text-amber-300">&apos;liability&apos;</span>
                          <span className="text-white/60">, </span>
                          <span className="text-amber-300">&apos;injury&apos;</span>
                          <span className="text-white/60">],</span>
                        </div>
                        <div>
                          <span className="text-white/60">{'}'});</span>
                        </div>
                      </div>
                      
                      {/* Response preview */}
                      <div className="mt-6 pt-4 border-t border-white/5">
                        <div className="text-white/30 text-xs mb-2">// Response</div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs">Analysis complete</span>
                            <span className="text-white/30 text-xs ml-auto">2.3s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
