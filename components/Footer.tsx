
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xl">B</div>
              <span className="font-bold text-xl tracking-tight text-white">Bestricky<span className="text-blue-600">.</span></span>
            </a>
            <p className="max-w-md text-slate-400 leading-relaxed mb-8">
              Innovative and results-driven digital solutions for the modern era. We transform complex problems into elegant, high-performance digital products.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                🐦
              </span>
              <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                🔗
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#/services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#/portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#/blog" className="hover:text-blue-400 transition-colors">Expert Insights</a></li>
              <li><a href="#/contact" className="hover:text-blue-400 transition-colors">Work with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Lagos, Nigeria (Serving Globally)</li>
              <li>marvellousabiola08@gmail.com</li>
              <li>+234 802 287 1344</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Bestricky Web Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
