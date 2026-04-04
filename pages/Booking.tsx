
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight"
          >
            Let's Grow Your <br />
            <span className="text-blue-600">Business Together</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8"
          >
            Schedule your free 30-minute consultation and let's discuss how we can help transform your digital presence.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-500 mb-12"
          >
            Whether you're just starting out or looking to upgrade your existing website, we'll provide actionable insights to help you succeed online.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="space-y-8 mb-12"
          >
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">What You'll Get:</h3>
            <div className="space-y-4">
              {[
                { title: "Free Website Audit", desc: "We'll review your current site and identify improvement opportunities." },
                { title: "Custom Strategy", desc: "Tailored recommendations based on your specific business goals." },
                { title: "No Obligation Quote", desc: "Get a transparent pricing overview for your project." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-lg font-bold text-slate-900 mb-4 italic">"The best investment we made for our business. Our new website doubled our leads in just 3 months!"</h4>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <img src="https://i.pravatar.cc/150?u=emily" alt="Client" />
              </motion.div>
              <div>
                <p className="font-bold text-slate-900">Emily Chen</p>
                <p className="text-sm text-slate-500">Founder, Sparkly AI</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 h-fit sticky top-32"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-black text-slate-900">Pick a Time That Works</h3>
            <p className="text-slate-500 mt-2">Select a slot below to book your free consultation</p>
          </motion.div>
          
          {/* Calendly inline widget begin */}
          <motion.div 
            className="calendly-inline-widget w-full min-w-[320px] h-[700px] relative overflow-hidden rounded-2xl"
            data-url="https://calendly.com/marvellousabiola08/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=2563eb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* Loading Skeleton */}
            {isLoading && (
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-700 mb-2">Loading Calendar...</p>
                  <p className="text-sm text-slate-500">Please wait while we connect you with our booking system</p>
                </div>
                {/* Skeleton cards */}
                <div className="mt-8 w-full max-w-md space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-slate-200 rounded-xl animate-pulse"></div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          {/* Calendly inline widget end */}
          
          <motion.p 
            className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            🔒 Your information is secure. We never share your details.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
