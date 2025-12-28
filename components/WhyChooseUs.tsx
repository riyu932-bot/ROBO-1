import React from 'react';

const reasons = [
  { title: 'Individualised Protocols', desc: 'Bespoke automation logic unique to your operations.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { title: 'Advanced Technology', desc: 'Leveraging cutting-edge LLMs and orchestration engines.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'High Success Rates', desc: '99% system reliability for business-critical processes.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Personalised Support', desc: 'Affordable scaling with direct expert assistance.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 bg-why-gradient px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            The Robo <span className="text-matte">World Advantage</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item, idx) => (
            <div key={idx} className="reveal text-center group" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20 group-hover:bg-matte group-hover:text-lavender transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-display font-black text-white mb-3">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;