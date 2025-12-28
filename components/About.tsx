import React from 'react';

const About: React.FC = () => {
  const content = [
    { title: 'Mission', text: 'Empower businesses with intelligent automation to drive unprecedented growth.' },
    { title: 'Vision', text: 'A future where humans only focus on meaningful work while AI handles the complexity.' },
    { title: 'Values', text: 'Innovation, Efficiency, Transparency, and Measurable Impact in every workflow.' },
  ];

  return (
    <section id="about-us" className="py-32 relative overflow-hidden bg-matteBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-neonLavender to-electricBlue rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale opacity-60 rounded-[3rem] border border-neonLavender/20" 
                alt="Robotics Concept" 
              />
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter">
              Who We <span className="text-neonLavender">Are</span>
            </h2>
            
            <div className="space-y-12">
              {content.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-1.5 h-auto bg-neonLavender/20 group-hover:bg-neonLavender transition-colors rounded-full"></div>
                  <div>
                    <h4 className="text-2xl font-bold text-neonLavender mb-3 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;