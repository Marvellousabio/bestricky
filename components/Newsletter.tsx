
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! We\'ll keep you updated.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📰</span>
            <h3 className="text-2xl font-bold text-slate-900">Stay Updated</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Subscribe to our newsletter for the latest insights on web development, digital marketing, and tech trends. No spam, just valuable content.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading'}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400 disabled:bg-slate-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Subscribing...</span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          {message && (
            <div className={`mt-3 text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </div>
          )}
          
          <p className="mt-3 text-xs text-slate-500">
            By subscribing, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
