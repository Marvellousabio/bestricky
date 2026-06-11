
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  lastUpdated?: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  excerpt: string;
  content: string;
  htmlContent: string;
  tags?: string[];
  relatedServiceId?: string;
  featured?: boolean;
  schemaMarkup?: object;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  internalLinks?: Array<{text: string, url: string}>;
  externalLinks?: Array<{text: string, url: string}>;
}

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

type BlogCategory = 'All' | 'Guides' | 'Pillars';

const Blog: React.FC = () => {
  const [blogData, setBlogData] = useState<{posts: BlogPost[], pillars: BlogPost[]} | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const response = await fetch('/blog/_data/blog-data.json');
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        }
      } catch (error) {
        console.error('Failed to load blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
  }, []);

  const getFilteredPosts = () => {
    if (!blogData) return [];

    if (activeCategory === 'All') return [...blogData.posts, ...blogData.pillars];
    if (activeCategory === 'Pillars') return blogData.pillars;
    if (activeCategory === 'Guides') return blogData.posts;
    return [...blogData.posts, ...blogData.pillars];
  };

  if (loading) {
    return <div className="pt-40 text-center">Loading blog...</div>;
  }

  if (!blogData) {
    return <div className="pt-40 text-center">Blog data not available.</div>;
  }

  const filteredPosts = getFilteredPosts();
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

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {(['All', 'Pillars', 'Guides'] as BlogCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {filteredPosts.map((post) => (
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
                  width="400"
                  height="225"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.category}
                </motion.div>
                {post.featured && (
                  <motion.div
                    className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Featured
                  </motion.div>
                )}
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
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h4 className="text-xl font-black text-white mb-2">Thanks for subscribing!</h4>
                <p className="text-slate-400">You'll receive our latest insights soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onSubmit={e => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <motion.input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-8 py-5 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
