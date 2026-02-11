"use client";

const features = [
  {
    id: "integrations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v4m-5.59.41 2.83 2.83M2 12h4m.41 5.59 2.83-2.83M12 18v4m5.59-2.41-2.83-2.83M18 12h4m-2.41-5.59-2.83 2.83" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
    title: "Integrations",
    description: "Connect with legal apps to bring Silent Witness intelligence into your favorite workflows.",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: "biomechanics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Injury Severity",
    description: "Calculate forces and injury probability by body region using crash inputs and client data.",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: "physics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Accident Reconstruction",
    description: "Scientific crash metrics without waiting on third-party engineers.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "timeline",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Case Analysis",
    description: "From photos, TCRs, and repair bills to technical conclusions.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "liability",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Liability Determination",
    description: "Automated fault analysis backed by physics-based crash reconstruction.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "technical-letter",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Technical Letter",
    description: "Generate expert-backed technical letters that strengthen demand packages and support dispute resolution with scientific credibility.",
    gradient: "from-cyan-500 to-blue-600"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-white/70">Capabilities</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Truth Doesn't Need Guesswork.{" "}
            <span className="gradient-text">It Needs Intelligence.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 blur-xl`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                  <div className={`text-transparent bg-gradient-to-br ${feature.gradient} bg-clip-text`}>
                    <div className="text-white/90">
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">
                {feature.description}
              </p>
              
              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-white/30 group-hover:text-white/60 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://app.silentwitness.ai" 
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <span className="font-medium">Explore all features</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
