"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScheduleCallForm } from "@/components/ScheduleCallForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-950/80" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Backed By Badge */}
            <div className="inline-flex items-center gap-2 animate-fade-up">
              <span className="text-sm text-white/50">Backed by</span>
              <a 
                href="https://www.legaltech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0066FF] hover:bg-[#0052CC] transition-all"
              >
                <span className="text-sm font-bold text-white tracking-tight">tltf</span>
                <div className="w-px h-3.5 bg-white/40" />
                <span className="text-xs font-medium text-white">The LegalTech Fund</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-white animate-fade-up stagger-1">
              The Scientific Intelligence Layer{" "}
              <span className="gradient-text">for Claims</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <button 
                onClick={() => window.location.href = 'https://App.silentwitness.ai'}
                className="btn-primary px-8 py-4 text-base"
              >
                Start Free Analysis
                <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <ScheduleCallForm
                trigger={
                  <button className="btn-secondary px-8 py-4 text-base">
                    Schedule Demo
                  </button>
                }
              />
            </div>

          </div>

          {/* Right Side - Analysis Visualization */}
          <div className="relative animate-fade-up stagger-3">
            {/* Floating glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-blue-500/20 rounded-3xl blur-3xl opacity-60 animate-glow-pulse" />
            
            {/* Main Card */}
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Split Screen Image */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                {/* Left side - Heat Map Analysis */}
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Image
                    src="/images/crash1.jpg"
                    alt="Vehicle damage analysis"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  {/* Heat map overlay effect */}
                  <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-green-400 via-yellow-400 via-orange-500 to-red-600 opacity-75" />
                  <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-t from-red-600/60 via-yellow-500/40 to-green-400/50" />
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }} />
                  
                  {/* Label */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-orange-500/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Analysis</span>
                  </div>
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
                      <span className="text-[10px] font-medium text-white drop-shadow-lg">High Impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm" />
                      <span className="text-[10px] font-medium text-white drop-shadow-lg">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-sm" />
                      <span className="text-[10px] font-medium text-white drop-shadow-lg">Low</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Original */}
                <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden bg-gray-900">
                  <Image
                    src="/images/crash1.jpg"
                    alt="Original vehicle photo"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-gray-800">Original</span>
                  </div>
                </div>
                
                {/* Center divider */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/60 transform -translate-x-1/2 z-10" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Bottom Info */}
              <div className="p-5 bg-gray-900/80 backdrop-blur-sm border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-white">Martinez Case</span>
                  </div>
                  <span className="text-sm text-white/50">Accident Reconstruction</span>
                </div>
                
                {/* Score Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-xl font-bold text-emerald-400">8.5</div>
                    <div className="text-xs text-emerald-400/70">Strength</div>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                    <div className="text-xl font-bold text-blue-400">9.1</div>
                    <div className="text-xs text-blue-400/70">Liability</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                    <div className="text-xl font-bold text-amber-400">7.2</div>
                    <div className="text-xs text-amber-400/70">Injury Probability</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-3 glass rounded-xl border border-white/10 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Complete</div>
                  <div className="text-[10px] text-white/50">2.3s</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-3 glass rounded-xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">10 mph</div>
                  <div className="text-[10px] text-white/50">Delta-V</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default HeroSection;
