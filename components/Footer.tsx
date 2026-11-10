
import React, { useState } from 'react';
import { Link } from '../App';

const API_BASE = import.meta.env.VITE_API_URL || '';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE}/api/newsletter`, {
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
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  const socials = [
    { name: "TikTok", href: "https://www.tiktok.com/@bestrickywebdesign", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg> },
    { name: "Instagram", href: "https://www.instagram.com/bestrickydesign", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { name: "Twitter", href: "https://twitter.com/marvellousabio", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: "LinkedIn", href: "https://linkedin.com/in/marvellous-ogunleke2025", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  ];

  const columns = [
    {
      title: "Studio",
      links: [
        { label: "Work", to: "/portfolio" },
        { label: "Services", to: "/services" },
        { label: "About", to: "/about" },
        { label: "Insights", to: "/blog" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Web Design Lagos", to: "/web-design-lagos" },
        { label: "FAQ", to: "/faq" },
        { label: "Contact", to: "/contact" },
        { label: "Start a project", to: "/booking" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
        {/* Invitation */}
        <div className="grid gap-12 border-b border-white/10 pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm text-slate-400">Have a project in mind?</p>
            <a
              href="mailto:bestrickywebdesign@gmail.com"
              className="group inline-block text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-7xl"
            >
              Let’s talk
              <span className="ml-3 inline-block text-blue-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" aria-hidden="true">↗</span>
            </a>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
              <a
                href="mailto:bestrickywebdesign@gmail.com"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold transition-colors hover:border-white"
              >
                bestrickywebdesign@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-medium tracking-[-0.02em]">Insights, occasionally</h2>
            <p className="mt-2 text-sm text-slate-400">Digital growth tips, web strategy and studio news.</p>
            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex items-center border-b border-white/25 focus-within:border-white">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  placeholder="Your email"
                  className="w-full bg-transparent py-4 text-base text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="shrink-0 py-4 pl-4 text-sm font-semibold text-white transition-colors hover:text-blue-400 disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : status === "success" ? "Subscribed ✓" : "Subscribe →"}
                </button>
              </div>
              {message && (
                <p role="status" className={`mt-3 text-xs font-medium ${status === "success" ? "text-emerald-400" : "text-red-300"}`}>
                  {message}
                </p>
              )}
              <p className="mt-3 text-xs text-slate-500">
                By subscribing, you agree to our <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-sm text-slate-500">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[15px] text-slate-200 transition-colors hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-5 text-sm text-slate-500">Contact</h3>
            <ul className="space-y-3 text-[15px] text-slate-200">
              <li>Lagos, Nigeria · Working globally</li>
              <li><a href="tel:+2348022871344" className="hover:text-white">+234 802 287 1344</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm text-slate-500">Follow</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-white hover:bg-white hover:text-slate-950"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bestricky. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms</Link>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="pointer-events-none select-none px-4 md:px-8" aria-hidden="true">
        <p className="translate-y-[18%] text-center text-[19vw] font-semibold leading-[0.8] tracking-[-0.07em] text-white/[0.06]">
          bestricky
        </p>
      </div>
    </footer>
  );
};

export default Footer;
