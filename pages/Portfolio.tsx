'use client';

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from 'framer-motion';
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
  const reduceMotion = useReducedMotion();

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
        className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors duration-300"
      >
        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
        Live Site ↗
      </a>

      {/* Mobile/Desktop View Toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); setShowMobile(!showMobile); }}
        className={`absolute top-4 left-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors duration-300 ${showMobile ? 'bg-slate-950 text-white border-slate-950' : ''}`}
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
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${isHovered && !reduceMotion ? "scale-[1.02]" : "scale-100"}`}
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
        className={`absolute inset-0 z-20 flex items-center justify-center bg-slate-950/20 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 border border-white/80 bg-white px-6 py-3 text-slate-950 font-semibold text-sm shadow-lg transition-colors duration-300 hover:bg-slate-950 hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          View live site <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">↗</span>
        </a>
      </div>


    </div>
  );
};

const FEATURED_PROJECT_IDS = ["djcuppy", "auraex", "benlytics", "construction", "ecommerce"];
const ADDITIONAL_PROJECT_IDS = ["necole-bitchie", "precision-apex", "mtn-clarity-ai", "victor-osimhen"];
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

const revealTransition = { duration: 0.65, ease: "easeOut" as const };

// --- Main Portfolio Component ---
const Portfolio: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const featuredProjects = FEATURED_PROJECT_IDS
    .map((projectId) => PROJECTS.find((project) => project.id === projectId))
    .filter((project) => project !== undefined);
  const additionalProjects = ADDITIONAL_PROJECT_IDS
    .map((projectId) => PROJECTS.find((project) => project.id === projectId))
    .filter((project) => project !== undefined);

  // Scroll to project on page load if hash exists
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [reduceMotion]);

  return (
    <div className="min-h-screen bg-[#fbfaf7] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
          className="editorial-light-field relative isolate mb-20 overflow-hidden px-6 py-12 text-center max-w-4xl mx-auto md:py-16"
        >
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: 0.08 }}
            className="relative z-10 text-sm font-bold text-blue-700 uppercase tracking-[0.2em] mb-5"
          >
            Selected case studies
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: 0.16 }}
            className="relative z-10 text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tight"
          >
            Built around <span className="text-blue-600">business outcomes.</span>
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: 0.24 }}
            className="relative z-10 text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Five selected projects spanning SaaS, marketplaces, personal
            brands, e-commerce, and commercial lead
            generation. Each case study explains the business problem, what we
            built, why key decisions were made, and the reported result.
          </motion.p>
        </motion.div>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
          className="mb-24 overflow-hidden rounded-[2rem] bg-slate-900 text-white"
          aria-labelledby="executive-focus-heading"
        >
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
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-bold text-white transition-colors duration-300 hover:bg-blue-600"
                >
                  Build my executive website <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
                <a
                  href="#djcuppy"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-4 font-bold text-white transition-colors duration-300 hover:border-white"
                >
                  See a personal-brand project <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src="/assets/djcuppy.webp"
                alt="Personal brand website project for DJ Cuppy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
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
        </motion.section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-24">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} id={project.id} className="scroll-mt-28">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: idx === 0 ? 0 : 0.08 }}
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
                  <span
                    className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4"
                  >
                    {project.category}
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                  >
                    {project.title}
                  </h2>
                  <h3
                    className="text-xl font-bold text-slate-500 mb-8"
                  >
                    {project.subtitle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed -mt-5 mb-8">
                    {project.description}
                  </p>

                  <div className="space-y-8 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span> The Business Problem
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-400 rounded-full"></span> What We Built
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                    </div>
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

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={t}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: 0.08 }}
                    className="relative mt-8 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/10"
                  >
                    <h4 className="font-bold text-blue-400 text-sm mb-3 uppercase tracking-wider">Reported Result</h4>
                    <p className="text-xl font-medium leading-relaxed">{project.impact}</p>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
              </div>
            ))}
        </div>

        <section className="border-t border-slate-200 py-20" aria-labelledby="additional-work-heading">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              More selected work
            </p>
            <h2 id="additional-work-heading" className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              More live products and digital experiences.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The five stories above are our in-depth case studies. These
              additional projects show more of the range—from editorial
              publishing and industrial websites to AI and personal-brand
              experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {additionalProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: index * 0.07 }}
                className="group relative grid grid-cols-1 gap-5 border-t border-slate-200 pt-5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-500 hover:after:scale-x-100 sm:grid-cols-[0.9fr_1.1fr] sm:items-center"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                    width={project.imgWidth}
                    height={project.imgHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Visit live project <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

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
            ].map((item, index) => (
              <motion.li
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-colors duration-300 hover:border-slate-400"
              >
                <span className="text-sm font-black text-blue-600">{item.step}</span>
                <h3 className="mt-4 mb-3 text-xl font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.detail}</p>
              </motion.li>
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
            {SUPPORTING_OFFERS.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={reduceMotion ? { duration: 0 } : { ...revealTransition, delay: index * 0.07 }}
                className="group rounded-2xl border border-slate-200 bg-white/60 p-7 transition-colors duration-300 hover:border-slate-400 hover:bg-white"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-transform duration-300 group-hover:translate-x-1">{offer.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{offer.description}</p>
                <p className="text-sm font-semibold text-slate-800">{offer.value}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
          className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-12 text-center md:px-16 md:py-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,rgba(59,130,246,0.2),transparent_55%)]" />
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
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-colors duration-300 hover:bg-blue-600"
          >
            Talk through your project <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
