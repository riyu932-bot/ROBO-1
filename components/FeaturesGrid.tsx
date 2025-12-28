import React, { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Intelligent Automation',
    desc: 'Reduce manual tasks by 85% with cognitive workflows.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Predictive AI',
    desc: 'Decision intelligence powered by high-frequency data models.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Robotic Integration',
    desc: 'Physical automation bridge for manufacturing and logistics.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Smart Analytics',
    desc: 'Real-time dashboards providing 360° visibility into performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'AI Voice Agents',
    desc: 'Natural language communication systems for automated customer care.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Secure Workflows',
    desc: 'Private infrastructure designed for maximum data confidentiality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const FeaturesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 bg-matte/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Intelligent <span className="text-lavender">Features</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Engineered for performance. Optimized for scale. Built for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-matte-lighter border border-white/5 rounded-[2rem] transition-all duration-500 glow-hover reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-lavender/5 text-lavender rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-lavender group-hover:text-matte transition-all duration-500 shadow-neon/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-lavender">
                {feature.title}
              </h3>
              <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;