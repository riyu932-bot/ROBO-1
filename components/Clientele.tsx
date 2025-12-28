import React from 'react';

const logos = [
  'AMAZON', 'GOOGLE', 'NOTION', 'APPLE', 'TESLA', 'META', 'ADOBE', 'OPENAI',
  'MICROSOFT', 'REVOLUT', 'STRIPE', 'UBER'
];

const Clientele: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-matteBlackLighter border-y border-neonLavender/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Trusted by Forward-Thinking Brands</h3>
      </div>
      
      <div className="flex gap-20 animate-scroll-carousel whitespace-nowrap">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="text-4xl font-black text-white/20 hover:text-neonLavender hover:shadow-[0_0_20px_rgba(181,126,220,0.2)] transition-all cursor-default px-12 border-x border-neonLavender/5 group">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientele;