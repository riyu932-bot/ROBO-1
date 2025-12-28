import React from 'react';

const QuickLinksSection: React.FC = () => {
  const socials = ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Twitter'];
  const links = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Reviews'];

  return (
    <section className="py-24 bg-matteBlackLighter px-6 border-t border-neonLavender/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-neonLavender font-bold uppercase tracking-[0.3em] text-xs mb-8">Follow Us</h3>
          <div className="flex flex-wrap gap-8">
            {socials.map((s) => (
              <a 
                key={s} 
                href="#" 
                className="text-white/40 hover:text-neonLavender hover:scale-110 transition-all font-bold text-sm tracking-widest"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:text-right">
          <h3 className="text-neonLavender font-bold uppercase tracking-[0.3em] text-xs mb-8">Navigation</h3>
          <div className="flex flex-wrap md:justify-end gap-x-12 gap-y-4">
            {links.map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase().replace(' ', '-')}`} 
                className="text-white/40 hover:text-white transition-all text-sm font-bold tracking-widest"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;