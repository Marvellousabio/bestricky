import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Sculpted 3D object: a tilted half-sphere with two glossy orbs in brand colors. */
export const Sculpture: React.FC<{ dark?: boolean; className?: string }> = ({ dark = false, className = "" }) => {
	const reduceMotion = useReducedMotion();
	const float = (y: number, duration: number) =>
		reduceMotion
			? {}
			: { animate: { y: [0, y, 0] }, transition: { duration, repeat: Infinity, ease: "easeInOut" as const } };

	return (
		<div className={`pointer-events-none relative aspect-square ${className}`} aria-hidden="true">
			<motion.div
				{...float(-14, 9)}
				className="absolute inset-[6%] rotate-[-28deg] rounded-full"
				style={{
					clipPath: "polygon(0 0, 62% 0, 62% 100%, 0 100%)",
					background: dark
						? "radial-gradient(circle at 30% 30%, #4b5563 0%, #1f2937 45%, #0b0f19 100%)"
						: "radial-gradient(circle at 28% 28%, #ffffff 0%, #f3f1ee 40%, #d9dde6 100%)",
					boxShadow: dark
						? "inset -30px -40px 80px rgba(0,0,0,.6), 0 40px 80px rgba(0,0,0,.45)"
						: "inset -30px -40px 90px rgba(148,163,184,.35), 0 50px 90px rgba(15,23,42,.12)",
				}}
			/>
			<motion.span
				{...float(-22, 6)}
				className="absolute left-[54%] top-[4%] h-[11%] w-[11%] rounded-full"
				style={{
					background: "radial-gradient(circle at 32% 30%, #bfdbfe 0%, #2563eb 45%, #1e3a8a 100%)",
					boxShadow: "0 18px 30px rgba(29,78,216,.35)",
				}}
			/>
			<motion.span
				{...float(16, 7.5)}
				className="absolute left-[30%] top-[66%] h-[7.5%] w-[7.5%] rounded-full"
				style={{
					background: "radial-gradient(circle at 32% 30%, #fed7aa 0%, #f97316 50%, #9a3412 100%)",
					boxShadow: "0 14px 24px rgba(249,115,22,.35)",
				}}
			/>
		</div>
	);
};

const Hero: React.FC = () => {
	const reduceMotion = useReducedMotion();
	const reveal = (delay: number) => ({
		initial: reduceMotion ? false : { opacity: 0, y: 24 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
	});

	return (
		<section className="relative overflow-hidden bg-[#f6f3ed]">
			<div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] items-center px-6 pb-20 pt-36 md:px-10 md:pt-40">
				<div className="relative z-10 max-w-4xl">
					<h1 className="text-[2.75rem] font-medium leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[6.25rem]">
						{["Bestricky is a global", "web design & product", "studio"].map((line, i) => (
							<span key={line} className="block overflow-hidden pb-2">
								<motion.span {...reveal(0.1 + i * 0.1)} className="block">
									{line}
								</motion.span>
							</span>
						))}
					</h1>
					<motion.p {...reveal(0.5)} className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
						We design and build personal brands, websites and digital products for
						executives, founders and ambitious teams — from Lagos to the world.
					</motion.p>
					<motion.div {...reveal(0.62)} className="mt-10 flex flex-col gap-3 sm:flex-row">
						<a
							href="/booking"
							className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
						>
							Start a project
							<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
						</a>
						<a
							href="/portfolio"
							className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 px-8 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-950"
						>
							See our work
						</a>
					</motion.div>
				</div>

				<motion.div
					initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: reduceMotion ? 0 : 1.4, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
					className="absolute -right-[18%] top-24 w-[85vw] max-w-[720px] opacity-60 sm:opacity-80 md:-right-[6%] md:top-16 md:w-[52vw] lg:opacity-100"
				>
					<Sculpture />
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
