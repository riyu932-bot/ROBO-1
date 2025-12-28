import React from 'react';

const blogs = [
  { 
    title: 'Generative AI for Modern CRM', 
    summary: 'How LLMs are revolutionizing data entry and customer follow-up strategies.', 
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    title: 'The Rise of Autonomous Agents', 
    summary: 'A look into the next decade of digital workforce management and scaling.', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    title: 'Security in Automated Pipelines', 
    summary: 'Essential protocols for maintaining data integrity in AI workflows.', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' 
  },
];

const BlogHighlights: React.FC = () => {
  return (
    <section id="blog" className="py-32 bg-matteBlack px-6 border-t border-neonLavender/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">AI News & <span className="text-neonLavender">Insights</span></h2>
          <p className="text-white/40">Latest breakthroughs and business automation strategies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div 
              key={idx} 
              className="reveal card-tilt group bg-matteBlackLighter rounded-[2.5rem] border border-neonLavender/10 hover:border-neonLavender p-0 overflow-hidden cursor-pointer" 
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neonLavender transition-colors">{blog.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{blog.summary}</p>
                <button className="text-neonLavender font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read More
                  <span className="animate-pulse">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;