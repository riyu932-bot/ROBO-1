import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-matte px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <div className="h-[500px] w-full bg-matte-light rounded-[2.5rem] overflow-hidden border border-white/5 relative grayscale opacity-70">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
               <svg className="w-16 h-16 text-lavender mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">Our HQ</h3>
               <p className="text-matte-grey font-light">123 Innovation Way, San Francisco, CA</p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_90%)]" />
          </div>
        </div>

        <div className="reveal [transition-delay:200ms]">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10">
            Let's Start Your <span className="text-lavender">Evolution.</span>
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors" />
              <input type="text" placeholder="Company" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors" />
              <input type="tel" placeholder="Phone" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors" />
            </div>
            <textarea rows={4} placeholder="Message" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors resize-none"></textarea>
            
            <div className="flex flex-col gap-4">
              <label className="text-xs font-black uppercase tracking-widest text-lavender ml-1">Preferred Demo Date</label>
              <input type="date" className="w-full bg-matte-light border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-lavender transition-colors text-matte-grey" />
            </div>

            <button type="submit" className="w-full py-5 bg-lavender text-matte font-black rounded-xl hover:shadow-[0_0_30px_rgba(201,167,255,0.4)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-xs">
              Request Roadmap
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;