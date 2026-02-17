
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Expert <br />
            <span className="text-blue-600">Digital Strategy</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Resources and insights to help you navigate the modern digital landscape and grow your business.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {BLOG_POSTS.map((post) => (
            <motion.a 
              key={post.id} 
              href={`/blog/${post.slug}`}
              variants={itemVariants}
              className="group block glass-card rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="aspect-video relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.category}
                </motion.div>
              </motion.div>
              <div className="p-10">
                <motion.div 
                  className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight"
                >
                  {post.title}
                </motion.h3>
                <motion.p 
                  className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed"
                >
                  {post.excerpt}
                </motion.p>
                <motion.div 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold"
                  whileHover={{ x: 10 }}
                >
                  Read Article <span>→</span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* SEO Newsletter Section */}
        <motion.div 
          className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl md:text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Want more digital insights?
          </motion.h3>
          <motion.p 
            className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Subscribe to our newsletter and get strategic updates on web technology, SEO, and digital growth.
          </motion.p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={e => e.preventDefault()}
          >
            <motion.input 
              type="email" 
              placeholder="Enter your business email" 
              className="flex-1 px-8 py-5 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button 
              className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
