import React from 'react';

const reviews = [
  { name: 'Sarah Jenkins', role: 'COO, HealthNode', text: "Robo World re-engineered our backend in weeks. The accuracy is unmatched.", avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Marcus Chen', role: 'CTO, DataPeak', text: "Seamless integration. Our team is finally focusing on innovation, not manual entry.", avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Elena Vance', role: 'Founder, OmniRetail', text: "The most scalable AI partner we've found. Truly high-performance systems.", avatar: 'https://i.pravatar.cc/150?u=elena' },
  { name: 'James Wilson', role: 'VP Operations, FinFlow', text: "A game-changer for our lead gen. Automated every follow-up flawlessly.", avatar: 'https://i.pravatar.cc/150?u=james' },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-matteBlack px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">What Our <span className="text-neonLavender">Clients Say</span></h2>
        </div>

        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 reveal">
          {/* We'll use a CSS-based carousel effect or just simple flex row for horizontal scrolling */}
          <div className="flex gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex-shrink-0 w-[400px] bg-matteBlackLighter p-10 rounded-[2.5rem] border border-neonLavender/10 hover:border-neonLavender transition-all group">
                <div className="flex text-neonLavender mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-white/70 italic leading-relaxed mb-10 font-light">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-neonLavender shadow-[0_0_10px_rgba(181,126,220,0.4)]" />
                  <div>
                    <div className="text-white font-bold">{review.name}</div>
                    <div className="text-neonLavender text-xs font-bold uppercase tracking-widest">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;