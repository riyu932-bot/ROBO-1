import React from 'react';

const WhatWeDo: React.FC = () => {
  const steps = [
    {
      title: 'AI Automations',
      desc: 'Intelligent multi-step workflows that handle repetitive manual overhead effortlessly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Support Chatbots',
      desc: 'Cognitive agents that understand context, solve problems, and capture leads 24/7.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Predictive Analytics',
      desc: 'Bridge data gaps with autonomous agents that forecast trends and optimize performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="what-we-do" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            Everything You Need to <span className="text-lavender">Excel</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            We build the future of business operations using the world's most advanced AI orchestration tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="reveal glass-panel p-12 rounded-[2.5rem] group hover:bg-lavender/5 transition-all duration-500 glow-lavender"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 bg-lavender/10 text-lavender rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-lavender group-hover:text-matte transition-all duration-500 shadow-xl shadow-lavender/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
                {step.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="text-lavender text-sm font-bold flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;