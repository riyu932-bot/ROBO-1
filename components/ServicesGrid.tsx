import React from 'react';

const services = [
  {
    title: 'Workflow Automation',
    desc: 'Connecting your stack into a seamless engine of productivity.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'AI Agents for Teams',
    desc: 'Bespoke virtual colleagues trained on your company knowledge.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Data Intelligence',
    desc: 'Turning raw silos into actionable automated insights.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Lead Capture Bots',
    desc: 'Never miss a prospect with high-conversion automated chat.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
      </svg>
    ),
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-matte/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            Elite <span className="text-lavender">Services</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Propelling your operations into the autonomous era.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="reveal glass-panel p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-3 hover:bg-lavender/5 group border-transparent hover:border-lavender/40 shadow-xl"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-matte-light text-lavender rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-lavender group-hover:text-matte transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;