
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const serviceVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={serviceVariants}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            We Fix Websites That <br />
            <span className="text-blue-600">Don't Generate Revenue</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Fast. Beautiful. Built to convert. Every service is engineered to turn visitors into paying customers.
          </motion.p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={serviceVariants}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-10 md:gap-16 items-center`}
            >
              <motion.div 
                variants={imageVariants}
                className="flex-1 w-full"
              >
                <div className="bg-slate-100 rounded-3xl md:rounded-[2.5rem] aspect-[4/3] md:aspect-square overflow-hidden relative group">
                  <motion.img
                    src={service.image || `https://picsum.photos/seed/${service.id}/800/800`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async"
                  />
                  <motion.div 
                    className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.tools.map(tool => (
                      <span 
                        key={tool} 
                        className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-slate-200 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </motion.div>
                  
                  {/* Animated overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex-1">
                <motion.div 
                  className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {idx + 1}
                </motion.div>
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl font-black text-slate-900 mb-6"
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-10 leading-relaxed"
                >
                  {service.longDescription || service.description}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Problem We Solve</h4>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{service.problem}</p>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Business Value</h4>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{service.value}</p>
                  </motion.div>
                </div>

                <motion.div 
                  variants={itemVariants}
                  className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                   <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-3">Expected Outcome</h4>
                   <p className="text-blue-900 font-bold leading-relaxed">{service.outcome}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
