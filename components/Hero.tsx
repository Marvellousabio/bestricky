import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Hero: React.FC = () => {
	const reduceMotion = useReducedMotion();
	const reveal = (delay: number) => ({
		initial: reduceMotion ? false : { opacity: 0, y: 18 },
		animate: { opacity: 1, y: 0 },
		transition: {
			duration: reduceMotion ? 0 : 0.65,
			delay: reduceMotion ? 0 : delay,
			ease: "easeOut" as const,
		},
	});

	return (
		<section className="editorial-light-field relative overflow-hidden bg-[#f6f3ed]">
			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 md:gap-16 md:pb-24 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
				<div className="max-w-2xl">
					<motion.p
						{...reveal(0.08)}
						className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600"
					>
						Executive digital presence
					</motion.p>

					<h1 className="mb-7 font-serif text-5xl font-medium leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
						{[
							"Your reputation",
							"deserves a digital",
							"presence that matches it.",
						].map((line, index) => (
							<span key={line} className="block overflow-hidden pb-1">
								<motion.span
									{...reveal(0.18 + index * 0.1)}
									className="block"
								>
									{line}
								</motion.span>
							</span>
						))}
					</h1>

					<motion.p
						{...reveal(0.55)}
						className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
					>
						Premium personal websites for CEOs, founders, executives,
						and thought leaders—alongside considered digital products
						for businesses, SaaS teams, and ambitious startups.
					</motion.p>

					<motion.div
						{...reveal(0.66)}
						className="mb-8 flex flex-col gap-3 sm:flex-row"
					>
						<a
							href="/booking"
							className="group inline-flex min-h-14 items-center justify-center gap-3 bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
						>
							Build my digital presence
							<span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
						</a>
						<a
							href="/portfolio"
							className="group inline-flex min-h-14 items-center justify-center gap-2 border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:border-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
						>
							Explore selected work
							<span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
						</a>
					</motion.div>

					<motion.p
						{...reveal(0.74)}
						className="text-sm leading-relaxed text-slate-500"
					>
						Featured focus this season: executive and founder websites.
						Our work also spans business websites, SaaS, and idea-to-MVP builds.
					</motion.p>
				</div>

				<motion.figure
					initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: reduceMotion ? 0 : 1.1,
						delay: reduceMotion ? 0 : 0.3,
						ease: "easeOut",
					}}
					className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[660px]"
				>
					<img
						src="/assets/djcuppy.webp"
						alt="DJ Cuppy personal-brand website project"
						className="absolute inset-0 h-full w-full object-cover object-top"
						width="1200"
						height="800"
						fetchPriority="high"
						decoding="async"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
					<figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 text-white md:p-9">
						<div>
							<p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
								Personal brand website
							</p>
							<p className="font-serif text-3xl md:text-4xl">DJ Cuppy</p>
						</div>
						<a
							href="/portfolio#djcuppy"
							className="shrink-0 border-b border-white/70 pb-1 text-xs font-semibold transition-colors hover:border-white"
						>
							View case study <span aria-hidden="true">↗</span>
						</a>
					</figcaption>
				</motion.figure>
			</div>
		</section>
	);
};

export default Hero;
