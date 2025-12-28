import React from 'react';

const reviews = [
  { text: "Automation reduced our workload by 70% within 2 months.", stars: 5 },
  { text: "Beautiful UI + powerful workflows. Best investment we made.", stars: 5 },
  { text: "Robo World is like hiring 10 employees at once.", stars: 5 },
  { text: "Their automation saved us 30+ hours weekly… insane ROI.", stars: 5 },
  { text: "Seamless integration and futuristic approach.", stars: 5 },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-matte-grey/10 border-y border-matte-grey/5">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center">
          What Our <span className="text-lavender">Users Say</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll-left hover:[animation-play-state:paused] gap-8 py-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[400px] p-10 glass-card rounded-[2rem] hover:border-lavender transition-colors cursor-default"
            >
              <div className="flex text-lavender mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-white/80 leading-relaxed font-light">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;