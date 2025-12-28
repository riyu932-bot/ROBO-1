import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200'
];

const VisualShowcase: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-lavender to-matte overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            See How AI Transforms <br />
            <span className="text-matte">Real Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="reveal relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src={img} 
                alt="Automation Visualization" 
                className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;