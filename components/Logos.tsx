import React from 'react';

const brands = ['AMAZON', 'GOOGLE', 'TESLA', 'NOTION', 'APPLE', 'META'];

const Logos: React.FC = () => {
  return (
    <section className="py-24 bg-matte border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xs font-black tracking-[0.4em] text-matte-grey uppercase mb-12">Trusted By Forward-Thinking Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="text-2xl md:text-3xl font-black tracking-tighter text-white hover:text-lavender transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;