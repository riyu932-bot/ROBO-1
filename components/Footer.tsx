import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-0 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neonLavender to-transparent mb-16 shadow-[0_0_10px_#b57edc]"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black border border-neonLavender rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-neonLavender rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-white uppercase tracking-tighter">ROBO WORLD</span>
          </div>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
            Copyright © Robo World 2025 • Precision in Progress
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-neonLavender transition-colors">Legal Policies</a>
            <a href="#" className="hover:text-neonLavender transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-neonLavender transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;