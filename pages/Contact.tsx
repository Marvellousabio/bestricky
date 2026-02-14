
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic to send data to an API would go here.
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Let's Build <br /><span className="text-blue-600">Something Great</span></h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Ready to take your business to the next level? Fill out the form or reach out directly via email or phone. We respond to all inquiries within 24 business hours.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl">📧</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600 text-lg">marvellousabiola08@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl">📞</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600 text-lg">+234 802 287 1344</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl">📍</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600 text-lg">Lagos, Nigeria (Serving clients globally)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
               <h4 className="font-black text-slate-900 text-2xl mb-4">Fast Response Promise</h4>
               <p className="text-slate-600">Your time is valuable. We treat every inquiry with priority and ensure a strategic response within 24 hours.</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-slate-100 relative">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8">✓</div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h3>
                <p className="text-slate-600 text-lg">Thank you for reaching out. A strategy expert from Bestricky will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-blue-600 font-bold">Send another message</button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <h3 className="text-3xl font-black text-slate-900 mb-8">Start Your Project</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                      <option>Custom Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Full-Stack Solutions</option>
                      <option>Brand Identity</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Project Details</label>
                    <textarea required rows={5} placeholder="Tell us about your project goals and timeline..." className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-6 rounded-2xl text-xl font-black shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95">
                  Send Your Inquiry
                </button>
                <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest">Secure & Confidential Inquiries</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
