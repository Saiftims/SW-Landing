"use client";

const techFeatures = [
  {
    id: "physics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Crash Physics Engine",
    description: "Reconstructs collisions with precise ΔV calculations and force direction analysis using real-world crash data.",
    color: "blue"
  },
  {
    id: "biomechanics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Biomechanics Engine",
    description: "Simulates occupant motion and force exposure to assess injury probability across body regions.",
    color: "purple"
  },
  {
    id: "vision",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Vision AI Analysis",
    description: "Extracts forensic-grade data from damage photos and medical records—identifying details experts often miss.",
    color: "emerald"
  },
  {
    id: "sdk",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Silent Witness SDK",
    description: "Bring Silent Witness into your existing apps and workflows.",
    color: "orange"
  }
];

const stats = [
  { value: "2.3s", label: "Analysis Time", sublabel: "Average processing" },
  { value: "95%", label: "Accuracy Rate", sublabel: "Court-defensible" },
  { value: "500K+", label: "Training Data", sublabel: "Crash datasets" },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
};

const TechnologySection = () => {
  return (
    <section id="technology" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm font-medium text-white/70">Patent-Pending Technology</span>
          </div>

          <h2 className="heading-section text-white mb-6">
            Built on Science.{" "}
            <span className="gradient-text">Trusted Across Claims.</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Silent Witness fuses physics engines, vision models, and legal AI to deliver court-defensible outputs at unmatched speed.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {techFeatures.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} ${colors.text} ${colors.border} border mb-5`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-white/40">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 mt-8 pt-6 text-center">
            <p className="text-sm text-white/40">
              Powered by machine learning algorithms trained on real-world collision and injury data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
