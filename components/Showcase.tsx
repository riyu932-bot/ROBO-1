import React from 'react';

const cases = [
  {
    title: 'Customer Logic AI',
    category: 'Client Support',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Logistics Optimization',
    category: 'Process Engineering',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Secure FinTech Flow',
    category: 'Compliance Automation',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-matte">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                Case <span className="text-lavender">Showcase</span>
              </h2>
              <p className="text-white/40">Visualizing the impact of 360° automation across global enterprises.</p>
           </div>
           <button className="px-8 py-4 bg-matte-lighter border border-lavender/30 text-white rounded-full transition-all hover:bg-lavender hover:text-matte font-black uppercase text-xs tracking-widest">
              View Case Studies
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-matte-lighter border border-white/5 transition-all duration-700 hover:border-lavender/50"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="text-[10px] uppercase font-black text-lavender tracking-widest mb-3">{c.category}</div>
                <h3 className="text-2xl font-black text-white group-hover:text-lavender transition-colors">{c.title}</h3>
                <div className="mt-6 flex items-center gap-3 text-white/30 text-xs group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500">
                  Read Case Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
              {/* Neon border glow overlay */}
              <div className="absolute inset-0 border-[1px] border-lavender/0 group-hover:border-lavender/30 rounded-[2.5rem] transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;