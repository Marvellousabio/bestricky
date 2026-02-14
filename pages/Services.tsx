
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">How We Deliver <br /><span className="text-blue-600">Business Value</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We've refined our offerings into four core departments to provide specialized expertise that covers the entire digital product lifecycle.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              <div className="flex-1 w-full">
                <div className="bg-slate-100 rounded-[2.5rem] aspect-square overflow-hidden relative group">
                  <img src={`https://picsum.photos/seed/${service.id}/800/800`} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
                    {service.tools.map(tool => (
                      <span key={tool} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-slate-200 shadow-sm">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8">
                  {idx + 1}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">{service.longDescription}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Problem We Solve</h4>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{service.problem}</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Business Value</h4>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{service.value}</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                   <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-3">Expected Outcome</h4>
                   <p className="text-blue-900 font-bold leading-relaxed">{service.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
