import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? '399' : '499',
      features: ['Basic AI Workflows', 'Single Channel Bot', 'Weekly Reporting', 'Email Support'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: isYearly ? '799' : '999',
      features: ['Advanced Multi-step flows', 'Unlimited Channels', 'Real-time Dashboards', 'Priority Support'],
      cta: 'Scale Now',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Dedicated AI Architects', 'On-premise Deployment', 'SLA & Success Manager', 'Full Custom Integration'],
      cta: "Let's Talk",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">
            Flexible <span className="text-lavender">Investment</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-matte-accent rounded-full relative p-1 transition-colors duration-300"
            >
              <div className={`w-5 h-5 bg-lavender rounded-full shadow-lg transition-all duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-white' : 'text-white/40'}`}>
              Yearly <span className="text-[10px] text-lavender ml-1">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`reveal glass-panel p-12 rounded-[3rem] transition-all duration-500 relative ${
                plan.popular ? 'border-lavender/40 bg-lavender/[0.04] scale-105 z-10' : 'hover:bg-white/[0.02]'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-lavender text-matte text-[10px] font-black uppercase tracking-widest rounded-full">
                  Best Value
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-display font-black text-white uppercase tracking-widest mb-4">{plan.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-6xl font-display font-black text-white leading-none">
                    {plan.price !== 'Custom' && '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-white/40 font-bold mb-2">/mo</span>}
                </div>
              </div>

              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-4 text-white/50 text-sm">
                    <svg className="w-5 h-5 text-lavender flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 ${
                plan.popular ? 'bg-lavender text-matte shadow-2xl shadow-lavender/30' : 'bg-white/5 text-white border border-white/10 hover:border-lavender'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;