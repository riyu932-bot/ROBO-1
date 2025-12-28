import React from 'react';

const services = [
  { 
    title: 'AI Chatbot Automation', 
    desc: 'Intelligent conversational agents that work 24/7 for support and sales.', 
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Lead Generation AI', 
    desc: 'Automated pipelines that find, score and nurture your leads effectively.', 
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Marketing AI Content', 
    desc: 'Smart content generation systems to scale your social and email presence.', 
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
    img: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Sales Automation', 
    desc: 'End-to-end workflows to handle prospect follow-ups and meeting bookings.', 
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'CRM Integration', 
    desc: 'Auto follow-ups and data sync across your existing stack.', 
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Process Automation (RPA)', 
    desc: 'Replace boring tasks with robotic accuracy and speed.', 
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-matteBlack px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our AI <span className="text-neonLavender">Services</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
            Scalable automation solutions tailored for the high-performance modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="reveal p-0 bg-matteBlackLighter border border-neonLavender/10 rounded-[2.5rem] transition-all duration-500 hover:scale-105 neon-glow-lavender-hover group overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-matteBlackLighter to-transparent"></div>
              </div>
              <div className="p-10 -mt-12 relative z-10">
                <div className="w-14 h-14 bg-matteBlack border border-neonLavender/30 text-neonLavender rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_10px_#b57edc] transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;