'use client';

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { PROJECTS, generateSrcSet } from "../constants";

// --- Animated Website Preview Component ---
const WebsitePreview: React.FC<{ 
  url: string; 
  image: string; 
  title: string;
  imgWidth?: number;
  imgHeight?: number;
  priority?: boolean;
}> = ({ url, image, title, imgWidth = 400, imgHeight = 225, priority = false }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div
      className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Live URL Badge */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
      >
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        Live Site ↗
      </a>

      {/* Mobile/Desktop View Toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); setShowMobile(!showMobile); }}
        className={`absolute top-4 left-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 ${showMobile ? 'bg-blue-600 text-white border-blue-600' : ''}`}
      >
        {showMobile ? 'Desktop' : 'Mobile'}
      </button>

      {/* Preview Container - Phone Frame or Full Width */}
      <div className={`relative ${showMobile ? 'flex justify-center py-8' : ''}`}>
        {showMobile ? (
          // Mobile Phone Frame
          <div className="relative w-[280px] h-[550px] rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-800 rounded-b-lg z-10"></div>
            {!iframeError ? (
              <iframe
                src={url}
                title={title}
                className="w-full h-full border-0"
                style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
              />
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                width={imgWidth}
                height={imgHeight}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                decoding="async"
                srcSet={
                  !image.startsWith('http')
                    ? generateSrcSet(image.replace(/\.webp$/, ''), imgWidth)
                    : undefined
                }
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        ) : (
          // Desktop Full View
          <div className="aspect-[4/3] relative overflow-hidden rounded-[2.5rem]">
            {/* Static Image - Always visible */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              width={imgWidth}
              height={imgHeight}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              srcSet={
                !image.startsWith('http')
                  ? generateSrcSet(image.replace(/\.webp$/, ''), imgWidth)
                  : undefined
              }
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* iframe Preview - Only on hover */}
            {isHovered && !iframeError && (
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src={url}
                  title={title}
                  className="w-full h-full border-0"
                  style={{
                    height: "300vh",
                    transform: "translateY(0)",
                    pointerEvents: "none",
                  }}
                  onLoad={() => setIframeLoaded(true)}
                  onError={() => setIframeError(true)}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hover overlay: "Visit Site" */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${
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

const FEATURED_PROJECT_IDS = ["djcuppy", "auraex", "benlytics", "construction", "ecommerce"];
const SUPPORTING_OFFERS = [
  {
    title: "Brand identity",
    description: "Create a recognizable visual system before the website build, or bring an existing identity into a more consistent digital experience.",
    value: "A coherent first impression across the website and customer touchpoints."
  },
  {
    title: "Hosting & deployment",
    description: "Get help choosing a suitable hosting setup and taking the finished product live.",
    value: "A managed route from approved build to a production-ready launch."
  },
  {
    title: "Website maintenance",
    description: "Keep the site cared for with updates, performance checks, and practical technical support.",
    value: "Less operational risk after launch and a clear path when needs change."
  },
  {
    title: "Long-term SEO",
    description: "Build on technical foundations with ongoing content and search improvements tied to business goals.",
    value: "A sustained plan for discoverability rather than a one-off launch checklist."
  }
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

// --- Main Portfolio Component ---
const Portfolio: React.FC = () => {
  const featuredProjects = FEATURED_PROJECT_IDS
    .map((projectId) => PROJECTS.find((project) => project.id === projectId))
    .filter((project) => project !== undefined);

  // Scroll to project on page load if hash exists
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-5">
            Selected case studies
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Built around <span className="text-blue-600">business outcomes.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Five selected projects spanning SaaS, marketplaces, personal
            brands, e-commerce, and commercial lead
            generation. Each case study explains the business problem, what we
            built, why key decisions were made, and the reported result.
          </motion.p>
        </motion.div>

        <section className="mb-24 overflow-hidden rounded-[2rem] bg-slate-900 text-white" aria-labelledby="executive-focus-heading">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-sm font-bold text-blue-300 uppercase tracking-[0.2em] mb-5">
                Featured focus this season
              </p>
              <h2 id="executive-focus-heading" className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Executive websites for leaders with something worth being known for.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We’re putting extra focus on CEOs, founders, executives, and
                thought leaders whose online presence should reflect the level
                they operate at. The goal is to turn a track record into a
                credible, considered digital presence—not just another profile
                page.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                That can mean clarifying your positioning, shaping your
                leadership story, and bringing achievements, speaking, media,
                advisory work, and contact opportunities together in one
                purposeful experience.
              </p>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed mb-8">
                Built for CEOs and C-suite leaders, founders, executive
                speakers and authors, coaches, consultants, board members,
                fractional executives, and thought leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-4 font-bold text-white transition hover:bg-blue-600"
                >
                  Build my executive website
                </a>
                <a
                  href="#djcuppy"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-4 font-bold text-white transition hover:border-white"
                >
                  See a personal-brand project
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src="/assets/djcuppy.webp"
                alt="Personal brand website project for DJ Cuppy"
                className="absolute inset-0 h-full w-full object-cover"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-slate-900/10 lg:to-slate-900/50" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">
                  Personal brand work
                </p>
                <p className="text-2xl font-black text-white">DJ Cuppy</p>
                <p className="text-slate-200">Portfolio, media, and booking in one destination</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-24">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} id={project.id} className="scroll-mt-28">
              <motion.div
                custom={idx}
                variants={projectVariants} initial="hidden" animate="visible"
                className="flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-24 last:border-0"
              >
                
                <div className="w-full md:w-1/2">
                <WebsitePreview
                  url={project.liveUrl}   
                  image={project.image}
                  title={project.title}
                  imgWidth={project.imgWidth}
                  imgHeight={project.imgHeight}
                  priority={project.id === 'brands'}
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
                  <p className="text-slate-600 leading-relaxed -mt-5 mb-8">
                    {project.description}
                  </p>

                  <div className="space-y-8 mb-8">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span> The Business Problem
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-400 rounded-full"></span> What We Built
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                    </motion.div>
                  </div>

                  <section className="mb-8" aria-label={`Key design decisions for ${project.title}`}>
                    <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-violet-400 rounded-full"></span> Key Design Decisions
                    </h4>
                    <ol className="space-y-4">
                      {project.designDecisions.map((item, decisionIndex) => (
                        <li key={item.decision} className="flex gap-4">
                          <span className="shrink-0 text-sm font-bold text-blue-600 pt-0.5">
                            {String(decisionIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900">{item.decision}</p>
                            <p className="text-slate-600 leading-relaxed mt-1">{item.rationale}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8" aria-label={`Hero and call to action rationale for ${project.title}`}>
                    <h4 className="font-bold text-slate-900 text-lg mb-5">
                      How the page earns the next click
                    </h4>
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Hero section</p>
                        <p className="text-slate-700 leading-relaxed">{project.heroRationale}</p>
                      </div>
                      <div className="border-t border-slate-200 pt-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Call to action placement</p>
                        <p className="text-slate-700 leading-relaxed">{project.ctaRationale}</p>
                      </div>
                    </div>
                  </section>

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

                  <motion.div
                    className="mt-8 bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-blue-500/10"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <h4 className="font-bold text-blue-400 text-sm mb-3 uppercase tracking-wider">Reported Result</h4>
                    <p className="text-xl font-medium leading-relaxed">{project.impact}</p>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
              </div>
            ))}
        </div>

        <section className="mt-8 border-y border-slate-200 py-20" aria-labelledby="collaboration-heading">
          <div className="max-w-4xl mb-12">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              A considered process
            </p>
            <h2 id="collaboration-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-5">
              You see the reasoning before we spend the budget.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We work through the important decisions with you: agree what the
              business needs to achieve, make the page and product structure
              visible before build, and review progress against the agreed scope.
              That keeps design choices connected to the brief—not personal
              preference—and gives you clear points to approve or adjust.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Align on the outcome",
                detail: "Clarify the audience, business goal, constraints, and what a successful launch needs to do."
              },
              {
                step: "02",
                title: "Review the experience",
                detail: "Walk through the content hierarchy, key screens, hero message, proof, and calls to action before development."
              },
              {
                step: "03",
                title: "Build with clear checkpoints",
                detail: "Review working progress against scope, test key journeys, and agree launch readiness together."
              }
            ].map((item) => (
              <li key={item.step} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-black text-blue-600">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-20" aria-labelledby="support-heading">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              Beyond the build
            </p>
            <h2 id="support-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-5">
              The launch is a starting point, not the finish line.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Bring in the right support for your stage—from brand foundations
              and launch infrastructure to ongoing care and organic growth.
              These can be scoped alongside a project or as a separate need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SUPPORTING_OFFERS.map((offer) => (
              <article key={offer.title} className="rounded-2xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{offer.description}</p>
                <p className="text-sm font-semibold text-slate-800">{offer.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center md:px-16 md:py-16">
          <p className="text-sm font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">
            The right moment to talk
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Have a business problem worth solving?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            By this point, you’ve seen the problems we take on, how we reason
            through the work, and what support can continue after launch.
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-8">
            That’s why the main invitation sits here: after the evidence and
            service options, when you can judge whether the approach fits.
          </p>
          <a
            href="/booking"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600"
          >
            Talk through your project
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
