"use client";

import React, { useState, useEffect, useRef } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "framer-motion";

// Niche data with images
const niches = [
	{
		id: "brands",
		label: "Brands",
		image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
		color: "#3B82F6",
	},
	{
		id: "real-estate",
		label: "Real Estate",
		image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
		color: "#10B981",
	},
	{
		id: "healthcare",
		label: "Healthcare",
		image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
		color: "#EC4899",
	},
	{
		id: "construction",
		label: "Construction",
		image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
		color: "#F59E0B",
	},
	{
		id: "ecommerce",
		label: "E-commerce",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
		color: "#8B5CF6",
	},
];

// Mobile Carousel Component - horizontal swipe carousel
const MobileCarousel: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;

		const handleScroll = () => {
			const scrollLeft = container.scrollLeft;
			const cardWidth = 240 + 16; // card width + gap
			const newIndex = Math.round(scrollLeft / cardWidth);
			setActiveIndex(Math.min(newIndex, niches.length - 1));
		};

		container.addEventListener("scroll", handleScroll, { passive: true });
		return () => container.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative w-full">
			{/* Horizontal scroll container */}
			<div
				ref={scrollRef}
				className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 py-8"
				style={{ scrollBehavior: "smooth" }}
			>
				{niches.map((niche, index) => (
					<motion.div
						key={niche.id}
						className={`flex-shrink-0 snap-center ${
							index === activeIndex ? "scale-100" : "scale-90 opacity-60"
						}`}
						animate={{
							scale: index === activeIndex ? 1 : 0.9,
							opacity: index === activeIndex ? 1 : 0.5,
						}}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						<div className="w-[240px] h-[300px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
							<img
								src={niche.image}
								alt={niche.label}
								className="w-full h-full object-cover"
								width="240"
								height="300"
								decoding="async"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
							<div className="absolute bottom-4 left-4 right-4">
								<div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl">
									<p className="text-slate-900 font-bold text-base">
										{niche.label}
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Dots indicator */}
			<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
				{niches.map((_, idx) => (
					<div
						key={idx}
						className={`h-1.5 rounded-full transition-all ${
							idx === activeIndex ? "bg-white w-6" : "bg-white/40 w-1.5"
						}`}
					/>
				))}
			</div>

			{/* Swipe hint */}
			<motion.div
				className="absolute top-2 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-medium"
				animate={{ opacity: [0.3, 0.6, 0.3] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				← Swipe →
			</motion.div>
		</div>
	);
};

const Hero: React.FC = () => {
	const [activeNiche, setActiveNiche] = useState(0);

	// Auto-cycle through niches every 3 seconds (desktop only)
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveNiche((prev) => (prev + 1) % niches.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	// Calculate positions for rotating niches
	const getPosition = (index: number, total: number, radius: number) => {
		const angle = index * (360 / total) - 90;
		const radian = (angle * Math.PI) / 180;
		return {
			x: Math.cos(radian) * radius,
			y: Math.sin(radian) * radius,
		};
	};

	return (
		<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
			{/* Original background elements */}
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-slate-200 rounded-full blur-3xl opacity-50 z-0"></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Mobile: Stacked layout with carousel */}
				<div className="lg:hidden">
					{/* Left side - Text */}
					<div className="mb-12">
						<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
							<span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
							Now Accepting New Projects
						</div>
						<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
							Websites That{" "}
							<span className="gradient-text">
								Convert
							</span>.
						</h1>
						<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
							Your 24/7 salesperson. Built to generate leads and close deals while you sleep.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="/booking"
								className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
							>
								Start Your Project
							</a>
							<a
								href="/portfolio"
								className="bg-white text-slate-700 px-8 py-4 rounded-2xl text-base font-bold border border-slate-200 hover:bg-slate-50 transition-all transform hover:-translate-y-1 text-center"
							>
								See Our Work
							</a>
						</div>
					</div>

					{/* Right side - Mobile Carousel */}
					<MobileCarousel />
				</div>

				{/* Desktop: Original two-column layout */}
				<div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
					{/* LEFT SIDE - Original Text */}
					<div>
						<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
							<span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
							Now Accepting New Projects
						</div>
						<h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
							Websites That{" "}
							<span className="gradient-text">
								Convert
							</span>.
						</h1>
						<p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
							Your 24/7 salesperson. Built to generate leads and close deals while you sleep.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="/booking"
								className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-2xl transition-all transform hover:-translate-y-1"
							>
								Start Your Project
							</a>
							<a
								href="/portfolio"
								className="bg-white text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all transform hover:-translate-y-1"
							>
								See Our Work
							</a>
						</div>
					</div>

					{/* RIGHT SIDE - Rotating Niche Carousel */}
					<div className="relative flex items-center justify-center">
						<div className="relative w-[500px] h-[500px]">
							{/* Bold thick outer ring */}
							<div className="absolute inset-0 rounded-full border-[12px] border-slate-900"></div>

							{/* Inner decorative ring */}
							<div className="absolute inset-6 rounded-full border-[2px] border-slate-300"></div>

							{/* Rotating niches on the ring */}
							{niches.map((niche, index) => {
								const pos = getPosition(
									index,
									niches.length,
									210,
								);
								const isActive = index === activeNiche;

								return (
									<motion.div
										key={niche.id}
										className="absolute"
										style={{
											left: "50%",
											top: "50%",
											x: pos.x,
											y: pos.y,
											marginLeft: "-50px",
											marginTop: "-25px",
										}}
										animate={{
											scale: isActive ? 1.3 : 1,
											zIndex: isActive ? 10 : 1,
										}}
										transition={{ duration: 0.5 }}
									>
										<motion.button
											className={`w-[100px] h-[50px] rounded-full text-xs font-bold transition-all ${
												isActive
													? "bg-slate-900 text-white shadow-2xl"
													: "bg-white text-slate-700 border-2 border-slate-900"
											}`}
											style={{
												boxShadow: isActive
													? "0 10px 40px rgba(0,0,0,0.3)"
													: "none",
											}}
										>
											{niche.label}
										</motion.button>
									</motion.div>
								);
							})}

							{/* Large central image container */}
							<div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-100">
								<AnimatePresence mode="wait">
									<motion.div
										key={activeNiche}
										initial={{
											opacity: 0,
											scale: 0.8,
											rotate: -10,
										}}
										animate={{
											opacity: 1,
											scale: 1,
											rotate: 0,
										}}
										exit={{
											opacity: 0,
											scale: 1.2,
											rotate: 10,
										}}
										transition={{ duration: 0.5 }}
										className="w-full h-full"
									>
                                        <img
                                          src={niches[activeNiche].image}
                                          alt={niches[activeNiche].label}
                                          className="w-full h-full object-cover"
                                          width="300"
                                          height="300"
                                          fetchPriority="high"
                                          loading="eager"
                                          decoding="async"
                                        />
									</motion.div>
								</AnimatePresence>

								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

								{/* Active label at bottom */}
								<div className="absolute bottom-4 left-0 right-0 text-center">
									<motion.span
										className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase bg-white text-slate-900"
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										key={activeNiche}
									>
										{niches[activeNiche].label}
									</motion.span>
								</div>
							</div>

							{/* Center dot */}
							<div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-slate-900 z-20"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
