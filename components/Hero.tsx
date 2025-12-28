import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-matteBlack flex items-center pt-24 overflow-hidden">
      {/* Moving Neon Particles background placeholder animation via radial gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neonLavender rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-electricBlue rounded-full blur-sm animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-neonLavender rounded-full blur-sm animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-electricBlue rounded-full blur-md opacity-30 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Build smarter <br />
            workflows with <br />
            <span className="text-neonLavender waving-underline cursor-default">AI automation</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg leading-relaxed">
            From daily tasks to full business systems — automate everything. Smarter systems, faster growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-4 bg-neonLavender text-matteBlack font-bold rounded-lg hover:shadow-[0_0_20px_#b57edc] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
              Get Started
            </button>
            <button className="px-10 py-4 border-2 border-neonLavender text-neonLavender font-bold rounded-lg hover:bg-neonLavender/10 transition-all active:scale-95 uppercase tracking-widest text-sm shadow-[0_0_10px_rgba(181,126,220,0.2)]">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="aspect-square bg-matteBlackLighter rounded-[3rem] border border-neonLavender/20 overflow-hidden relative group shadow-[0_0_50px_rgba(181,126,220,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200" 
              alt="Futuristic AI Robot" 
              className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matteBlack via-transparent to-transparent"></div>
            {/* Holographic accents */}
            <div className="absolute top-10 right-10 w-24 h-24 border border-neonLavender/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 left-10 p-4 bg-matteBlack/60 backdrop-blur-md rounded-xl border border-neonLavender/30 text-xs font-mono text-neonLavender">
              SYSTEM_STATUS: ONLINE<br/>
              AI_LOAD: 2.5%
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-neonLavender to-transparent rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;