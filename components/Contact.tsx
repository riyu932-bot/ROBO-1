import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-matteBlack px-6 relative">
      <div className="max-w-3xl mx-auto text-center reveal mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-none">Let's build the <span className="text-neonLavender">Future</span> together.</h2>
        <p className="text-white/40">Scale your operations with the most advanced AI protocols.</p>
      </div>

      <div className="max-w-4xl mx-auto reveal">
        <form className="grid md:grid-cols-2 gap-6 bg-matteBlackLighter p-10 rounded-[3rem] border border-neonLavender/10 shadow-[0_0_30px_rgba(181,126,220,0.05)]">
          <div className="space-y-6 md:col-span-1">
            <input type="text" placeholder="Name" className="w-full bg-matteBlack border border-neonLavender/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonLavender transition-all placeholder:text-white/20" />
            <input type="email" placeholder="Email" className="w-full bg-matteBlack border border-neonLavender/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonLavender transition-all placeholder:text-white/20" />
            <input type="tel" placeholder="Phone" className="w-full bg-matteBlack border border-neonLavender/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonLavender transition-all placeholder:text-white/20" />
          </div>
          <div className="space-y-6 md:col-span-1">
            <input type="text" placeholder="Service Required" className="w-full bg-matteBlack border border-neonLavender/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonLavender transition-all placeholder:text-white/20" />
            <textarea rows={3} placeholder="Message" className="w-full bg-matteBlack border border-neonLavender/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonLavender transition-all placeholder:text-white/20 resize-none"></textarea>
          </div>
          <div className="md:col-span-2 pt-4">
            <button type="button" className="w-full py-5 bg-matteBlack border-2 border-neonLavender text-neonLavender font-bold rounded-xl hover:bg-neonLavender hover:text-matteBlack hover:shadow-[0_0_20px_#b57edc] transition-all duration-300 uppercase tracking-widest text-xs">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-7xl mx-auto mt-20 reveal">
        <div className="h-[400px] w-full rounded-[3rem] overflow-hidden grayscale opacity-40 border border-neonLavender/10 relative hover:opacity-70 transition-opacity">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;