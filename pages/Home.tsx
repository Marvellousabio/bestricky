
import React, { useState, useEffect, useCallback } from 'react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-slate-200 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Now Accepting New Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              We Build <span className="gradient-text">High-Performance</span> Digital Assets.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              Innovative and results-driven digital solutions designed to transform your ideas into scalable products that solve real business problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#/booking" className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Schedule a Strategy Call
              </a>
              <a href="#/portfolio" className="bg-white text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                View Our Work
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Bestricky Agency Work" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-slate-200 rounded-3xl -z-10 transform -rotate-6"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Years Expertise', value: '3+' },
            { label: 'Tech Mastered', value: '15+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Departments</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Solutions for Modern Challenges</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in turning vision into reality through specialized digital departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 font-bold">
                  {service.icon.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <a href={`#/services`} className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-16">
             <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Success Stories</h2>
             <h3 className="text-4xl font-black text-slate-900">What Our Partners Say</h3>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col items-center text-center ${
                  index === activeTestimonial
                    ? 'opacity-100 translate-x-0 scale-100 z-10'
                    : 'opacity-0 translate-x-12 scale-95 z-0'
                }`}
              >
                <div className="mb-8 relative">
                   <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-lg mx-auto mb-6">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-serif">“</div>
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-8 italic max-w-3xl">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 font-medium">{testimonial.role} at <span className="text-blue-600">{testimonial.company}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-600"
              aria-label="Previous Testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-600"
              aria-label="Next Testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Featured Work</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Proven ROI Through Excellence</h3>
            </div>
            <a href="#/portfolio" className="text-slate-900 font-bold flex items-center gap-2 pb-2 border-b-2 border-blue-600 hover:text-blue-600 transition-colors">
              Explore All Case Studies
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group relative">
                <div className="overflow-hidden rounded-3xl mb-6 bg-slate-100 aspect-video relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold">View Project Details</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-black text-slate-900">{project.title}</h4>
                  <p className="text-slate-600 line-clamp-2">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Our Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">The Bestricky Way</h3>
            <p className="text-slate-400">A professional process designed for predictability, transparency, and results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-slate-800 z-0"></div>
            {[
              { phase: 'Phase 1', title: 'Discovery', desc: 'Market research, goals, and strategic planning.' },
              { phase: 'Phase 2', title: 'Design', desc: 'UI/UX wireframes and prototypes in Figma.' },
              { phase: 'Phase 3', title: 'Development', desc: 'Scalable build using Next.js & TypeScript.' },
              { phase: 'Phase 4', title: 'Launch', desc: 'SEO, optimization, and cloud deployment.' },
            ].map((step, i) => (
              <div key={step.title} className="relative z-10 group">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform border-4 border-slate-900">{i + 1}</div>
                <h4 className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">{step.phase}</h4>
                <h5 className="text-xl font-bold mb-3">{step.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">Ready to build your <br /> next success story?</h3>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
              Join the 50+ businesses that have transformed their digital presence with Bestricky Web Agency.
            </p>
            <a href="#/booking" className="inline-block bg-white text-blue-600 px-12 py-6 rounded-2xl text-xl font-black shadow-2xl transform transition-all hover:scale-105 active:scale-95 relative z-10">
              Schedule Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
