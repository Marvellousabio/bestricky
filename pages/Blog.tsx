
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Expert <br /><span className="text-blue-600">Digital Strategy</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Resources and insights to help you navigate the modern digital landscape and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <a key={post.id} href={`#/blog/${post.slug}`} className="group block glass-card rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold">
                  Read Article <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* SEO Newsletter Section */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Want more digital insights?</h3>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get strategic updates on web technology, SEO, and digital growth.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your business email" className="flex-1 px-8 py-5 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            <button className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
