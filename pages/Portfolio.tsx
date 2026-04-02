'use client';

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from "../constants";

// --- Animated Website Preview Component ---
const WebsitePreview: React.FC<{ url: string; image: string; title: string }> = ({ url, image, title }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-[4/3] shadow-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Live URL Badge */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
      >
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        Live Site ↗
      </a>

      {/* Fallback static image (always rendered underneath) */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        width="400"
        height="300"
        loading="lazy"
        decoding="async"
      />

      {/* iframe Scroll Preview */}
      {!iframeError && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="w-full"
            style={{
              height: "300%", // iframe is 3x taller than container = enables scroll effect
              animation: isHovered
                ? "none"
                : "scrollPreview 12s linear infinite alternate",
            }}
          >
            <iframe
              src={url}
              title={title}
              className="w-full border-0"
              style={{
                height: "33.33%", // iframe itself is 1/3 of the wrapper (= 100% of container)
                transformOrigin: "top left",
                pointerEvents: "none",
              }}
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
            />
          </div>
        </div>
      )}

      {/* Hover overlay: "Visit Site" */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-slate-900 font-black rounded-2xl text-sm shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          Visit Live Site ↗
        </a>
      </div>
    </div>
  );
};

// --- Category Filter Variants ---
const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// --- Main Portfolio Component ---
const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Case Studies <br />
            <span className="text-blue-600">& Business Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            We don't just build projects; we create assets that move the needle.
            Here's how we've helped our clients succeed.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category} custom={i}
              variants={categoryVariants} initial="hidden" animate="visible"
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id} custom={idx}
                variants={projectVariants} initial="hidden" animate="visible" exit="exit"
                layout
                className="flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-24 last:border-0"
              >
                
                <div className="w-full md:w-1/2">
                  <WebsitePreview
                    url={project.liveUrl}   
                    image={project.image}
                    title={project.title}
                  />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 flex flex-col pt-4">
                  <motion.span
                    className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h2
                    className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.h3
                    className="text-xl font-bold text-slate-500 mb-8"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.subtitle}
                  </motion.h3>

                  <div className="space-y-8 mb-10">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span> The Challenge
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-400 rounded-full"></span> The Solution
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                    </motion.div>
                    <motion.div
                      className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-blue-500/10"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }} whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-bold text-blue-400 text-lg mb-3 uppercase tracking-wider">The Result</h4>
                      <p className="text-xl font-medium leading-relaxed italic">"{project.impact}"</p>
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>

                  <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black text-slate-800"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
