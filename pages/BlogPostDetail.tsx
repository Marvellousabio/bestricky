
import React, { useEffect } from 'react';
import { BLOG_POSTS, FAQ_BLOGS, SERVICES } from '../constants';

interface Props {
  slug: string;
}

const BlogPostDetail: React.FC<Props> = ({ slug }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const faqPost = FAQ_BLOGS.find(p => p.slug === slug);
  const activePost = post || faqPost;
  const relatedService = activePost && 'relatedServiceId' in activePost && activePost.relatedServiceId ? SERVICES.find(s => s.id === activePost.relatedServiceId) : null;

  useEffect(() => {
    if (activePost) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": activePost.title,
        "description": activePost.excerpt,
        "image": 'image' in activePost ? activePost.image : '',
        "datePublished": 'date' in activePost ? activePost.date : '',
        "author": {
          "@type": "Person",
          "name": 'author' in activePost ? activePost.author : 'Bestricky'
        }
      };
      
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [activePost]);

  if (!activePost) return <div className="pt-40 text-center">Post not found.</div>;

  return (
    <div className="pt-32 pb-24 bg-white">
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          {'category' in activePost && (
            <div className="flex items-center gap-4 text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">
              <span>{'category' in activePost ? activePost.category : 'Q&A'}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>{'readTime' in activePost ? activePost.readTime : '3 min read'}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">{activePost.title}</h1>
          {'author' in activePost && (
            <div className="flex items-center gap-4 border-b border-slate-100 pb-12">
              <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=bestricky" alt={'author' in activePost ? activePost.author : 'Bestricky'} />
              </div>
              <div>
                 <p className="font-bold text-slate-900">{'author' in activePost ? activePost.author : 'Bestricky'}</p>
                 <p className="text-sm text-slate-500">{'date' in activePost ? activePost.date : 'April 2026'}</p>
              </div>
            </div>
          )}
        </div>

        {'image' in activePost && (
          <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" width="800" height="343" loading="eager" decoding="async" />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none mb-20 text-slate-700 leading-relaxed">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: activePost.content }} />
        </div>

        {/* Inline Service CTA */}
        {relatedService && (
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 mb-20">
            <h3 className="text-3xl font-black text-slate-900 mb-6">Looking for {relatedService.title}?</h3>
            <p className="text-xl text-slate-600 mb-10">{relatedService.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                View Service Details
              </a>
              <a href="/booking" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                Schedule a Call
              </a>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="flex justify-between items-center py-12 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-900">Share:</span>
            <button
              className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(activePost.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >𝕏</button>
            <button
              className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >in</button>
          </div>
          <a href="/blog" className="text-blue-600 font-bold">← Back to Blog</a>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;
