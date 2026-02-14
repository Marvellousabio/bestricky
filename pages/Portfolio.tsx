
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Case Studies <br /><span className="text-blue-600">& Business Impact</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We don't just build projects; we create assets that move the needle. Here's how we've helped our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-24 last:border-0">
              <div className="w-full md:w-1/2 group">
                <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-[4/3] shadow-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col pt-4">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">{project.category}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{project.title}</h2>
                <h3 className="text-xl font-bold text-slate-500 mb-8">{project.subtitle}</h3>

                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-red-400 rounded-full"></span> The Challenge
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-400 rounded-full"></span> The Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-blue-500/10">
                    <h4 className="font-bold text-blue-400 text-lg mb-3 uppercase tracking-wider">The Result</h4>
                    <p className="text-xl font-medium leading-relaxed italic">"{project.impact}"</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black text-slate-800">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
