import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    { icon: 'Instagram', href: '#' },
    { icon: 'Facebook', href: '#' },
    { icon: 'LinkedIn', href: '#' },
    { icon: 'YouTube', href: '#' },
    { icon: 'X', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-matteBlack/95 border-b border-neonLavender/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-matteBlack border border-neonLavender rounded-xl flex items-center justify-center group-hover:shadow-[0_0_15px_#b57edc] transition-all">
            <div className="w-5 h-5 border-2 border-neonLavender rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-tighter uppercase">ROBO <span className="text-neonLavender">WORLD</span></span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'Services', 'Steps', 'About Us', 'Clients', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-neonLavender transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-neonLavender transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {socials.map((s) => (
            <a 
              key={s.icon} 
              href={s.href} 
              className="text-white/50 hover:text-neonLavender hover:scale-110 transition-all"
              title={s.icon}
            >
              <span className="text-[10px] font-bold uppercase">{s.icon}</span>
            </a>
          ))}
        </div>

        <button className="lg:hidden text-neonLavender">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;