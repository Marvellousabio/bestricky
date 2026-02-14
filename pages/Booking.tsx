
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', details: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Book Your Free <br /><span className="text-blue-600">Strategy Call</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            During this 30-minute session, we'll dive into your business goals and provide a high-level roadmap for your digital success.
          </p>

          <div className="space-y-8 mb-12">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">What You'll Get:</h3>
            <div className="space-y-4">
              {[
                { title: "Website Audit", desc: "Actionable insights on your current site's performance." },
                { title: "Growth Roadmap", desc: "A clear plan for scaling your digital presence." },
                { title: "Technical Consultation", desc: "Advice on the best tech stack for your specific needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-4 italic">"This call was the turning point for our digital strategy. Highly recommended for any founder."</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=emily" alt="Client" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Emily Chen</p>
                <p className="text-sm text-slate-500">Founder, Sparkly AI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 h-fit sticky top-32">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">Let's Get Started</h3>
              <div className="space-y-4">
                <input 
                  required 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  required 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
                <textarea 
                  required 
                  rows={4} 
                  placeholder="Briefly describe your project..." 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={e => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-black shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                Pick a Time Slot
              </button>
              <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                No credit card required. Free for businesses.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-8">✓</div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">You're All Set!</h3>
              <p className="text-slate-600 text-lg mb-10">We've received your inquiry. Check your inbox for a link to finalize your preferred time slot on our calendar.</p>
              <a href="#/" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-xl font-bold">Back to Home</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
