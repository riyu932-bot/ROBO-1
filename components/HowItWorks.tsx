import React from 'react';

const steps = [
  { name: 'Discover', desc: 'We audit your manual workflows and identify automation opportunities.' },
  { name: 'Design', desc: 'Building custom AI architecture tailored to your unique business logic.' },
  { name: 'Automate', desc: 'Implementation of smart agents and robust, scalable pipelines.' },
  { name: 'Scale', desc: 'Continuous optimization and growing your digital workforce capacity.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="steps" className="py-32 bg-matteBlackLighter px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How It <span className="text-neonLavender">Works</span>
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">The precision Roadmap</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Horizontal Line - Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neonLavender/20 -translate-y-1/2 hidden md:block">
            <div className="h-full bg-neonLavender animate-[grow_4s_ease-out_infinite] origin-left shadow-[0_0_10px_#b57edc]"></div>
          </div>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="reveal flex-1 relative z-10 flex flex-col items-center text-center group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-20 h-20 bg-matteBlack text-neonLavender rounded-full flex items-center justify-center mb-8 text-3xl font-black shadow-[0_0_15px_rgba(181,126,220,0.1)] group-hover:shadow-[0_0_25px_#b57edc] transition-all border-2 border-neonLavender/20 group-hover:border-neonLavender group-hover:scale-110">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.name}</h3>
              <p className="text-white/40 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;