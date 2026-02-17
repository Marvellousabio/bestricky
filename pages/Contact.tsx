
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactInfoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5
    }
  })
};

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic to send data to an API would go here.
  };

  const contactInfo = [
    { icon: "📧", title: "Email Us", value: "marvellousabiola08@gmail.com" },
    { icon: "📞", title: "Call Us", value: "+234 802 287 1344" },
    { icon: "📍", title: "Our Location", value: "Lagos, Nigeria (Serving clients globally)" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.div className="mb-12" variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                Let's Build <br />
                <span className="text-blue-600">Something Great</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Ready to take your business to the next level? Fill out the form or reach out directly via email or phone. We respond to all inquiries within 24 business hours.
              </p>
            </motion.div>

            <div className="space-y-12">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={contactInfoVariants}
                  className="flex gap-6 items-start"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-16 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
               <h4 className="font-black text-slate-900 text-2xl mb-4">Fast Response Promise</h4>
               <p className="text-slate-600">Your time is valuable. We treat every inquiry with priority and ensure a strategic response within 24 hours.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-slate-100 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h3>
                  <p className="text-slate-600 text-lg">Thank you for reaching out. A strategy expert from Bestricky will contact you shortly.</p>
                  <motion.button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-10 text-blue-600 font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  className="space-y-8"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.h3 
                    className="text-3xl font-black text-slate-900 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Start Your Project
                  </motion.h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div 
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Needed</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                        <option>Custom Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Full-Stack Solutions</option>
                        <option>Brand Identity</option>
                      </select>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Project Details</label>
                      <textarea required rows={5} placeholder="Tell us about your project goals and timeline..." className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
                    </motion.div>
                  </div>
                  <motion.button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-6 rounded-2xl text-xl font-black shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Send Your Inquiry
                  </motion.button>
                  <motion.p 
                    className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Secure & Confidential Inquiries
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
