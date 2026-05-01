"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES, PROJECTS, generateSrcSet } from "../constants";

// Map services to their related projects
const serviceProjects: Record<string, typeof PROJECTS> = {
	"web-dev": PROJECTS.filter((p) =>
		["E-Commerce", "B2B Platform", "Personal Brand"].includes(p.category),
	).slice(0, 2),
	"ui-ux": PROJECTS.filter((p) =>
		["Personal Brand", "Luxury Retail"].includes(p.category),
	).slice(0, 2),
	"full-stack": PROJECTS.filter((p) =>
		["B2B Platform", "Healthcare", "Construction"].includes(p.category),
	).slice(0, 2),
	branding: PROJECTS.filter((p) =>
		["Personal Brand", "Entertainment", "Luxury Retail"].includes(
			p.category,
		),
	).slice(0, 2),
};

// Desktop Horizontal Scroll Component
const DesktopShowcase: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const totalServices = SERVICES.length;

	return (
		<div ref={containerRef} className="relative h-[400vh] hidden lg:block">
			{/* Sticky container */}
			<div className="sticky top-0 h-screen overflow-hidden">
				{SERVICES.map((service, index) => {
					const projects = serviceProjects[service.id] || [];
					const isEven = index % 2 === 0;

					// Each service: starts at index position, moves left by totalServices-1 positions
					const x = useTransform(
						scrollYProgress,
						[0, 1],
						[
							`${index * 100}%`,
							`${(index - (totalServices - 1)) * 100}%`,
						],
					);

					return (
						<motion.div
							key={service.id}
							className="absolute inset-0 flex items-center justify-center py-20 px-6 md:px-20 w-full"
							style={{
								background: isEven
									? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
									: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
								zIndex: totalServices - index,
								x,
								left: 0,
								right: 0,
								width: "100%",
							}}
						>
							<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
								{/* LEFT SIDE - Service Info */}
								<div>
									<div
										className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${
											isEven
												? "bg-blue-100 text-blue-700"
												: "bg-blue-900/50 text-blue-300"
										}`}
									>
										<span
											className={`w-2 h-2 rounded-full ${
												isEven
													? "bg-blue-600"
													: "bg-blue-400"
											}`}
										></span>
										Service {index + 1} of {totalServices}
									</div>

									<h2
										className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${
											isEven
												? "text-slate-900"
												: "text-white"
										}`}
									>
										{service.title}
									</h2>

									<p
										className={`text-xl md:text-2xl mb-8 leading-relaxed ${
											isEven
												? "text-slate-600"
												: "text-slate-300"
										}`}
									>
										{service.description}
									</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-3 mb-10">
										{service.tools.map((tool, i) => (
											<span
												key={i}
												className={`px-5 py-2 rounded-xl text-sm font-bold ${
													isEven
														? "bg-white text-slate-800 border border-slate-200"
														: "bg-slate-800 text-slate-200 border border-slate-700"
												}`}
											>
												{tool}
											</span>
										))}
									</div>

									{/* Stats */}
									<div
										className={`grid grid-cols-3 gap-6 ${
											isEven
												? "text-slate-900"
												: "text-white"
										}`}
									>
										<div>
											<div className="text-3xl font-black">
												20+
											</div>
											<div className="text-sm font-medium opacity-70">
												Projects
											</div>
										</div>
										<div>
											<div className="text-3xl font-black">
												100%
											</div>
											<div className="text-sm font-medium opacity-70">
												Satisfaction
											</div>
										</div>
										<div>
											<div className="text-3xl font-black">
												24/7
											</div>
											<div className="text-sm font-medium opacity-70">
												Support
											</div>
										</div>
									</div>
								</div>

								{/* RIGHT SIDE - Project Showcase */}
								<div className="space-y-4">
									<div
										className={`text-sm font-bold uppercase tracking-wider mb-4 ${
											isEven
												? "text-slate-500"
												: "text-slate-400"
										}`}
									>
										Our Work in {service.title}
									</div>

									{projects.length > 0 ? (
										<div className="grid grid-cols-2 gap-4">
											{projects.map((project) => (
												<a
													href={`/portfolio#${project.id}`}
													key={project.id}
													className={`rounded-3xl overflow-hidden aspect-video relative ${
														isEven
															? "bg-white shadow-2xl shadow-slate-200"
															: "bg-slate-800 shadow-2xl shadow-black/50"
													}`}
												>
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-full object-cover"
													width={project.imgWidth || 400}
													height={project.imgHeight || 300}
													srcSet={
														project.imgWidth
															? generateSrcSet(project.image.replace(/\.webp$/, ''), project.imgWidth)
															: undefined
													}
													sizes="(max-width: 768px) 100vw, 50vw"
												/>
													<div
														className={`absolute bottom-0 left-0 right-0 p-4 ${
															isEven
																? "bg-gradient-to-t from-white/90 to-transparent"
																: "bg-gradient-to-t from-slate-900/90 to-transparent"
														}`}
													>
														<p
															className={`font-bold text-sm ${
																isEven
																	? "text-slate-900"
																	: "text-white"
															}`}
														>
															{project.title}
														</p>
													</div>
												</a>
											))}
										</div>
									) : (
										<div
											className={`rounded-3xl aspect-video flex items-center justify-center ${
												isEven
													? "bg-white shadow-2xl shadow-slate-200"
													: "bg-slate-800 shadow-2xl shadow-black/50"
											}`}
										>
											<p
												className={
													isEven
														? "text-slate-400"
														: "text-slate-500"
												}
											>
												Project showcase coming soon
											</p>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

// Mobile Vertical Scroll Component
const MobileShowcase: React.FC = () => {
	return (
		<div className="lg:hidden">
			{SERVICES.map((service, index) => {
				const projects = serviceProjects[service.id] || [];
				const isEven = index % 2 === 0;

				return (
					<motion.div
						key={service.id}
						className="min-h-screen flex items-center justify-center py-20 px-6"
						style={{
							background: isEven
								? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
								: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
						}}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						<div className="max-w-7xl w-full space-y-12">
							{/* Service Info */}
							<div>
								<div
									className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${
										isEven
											? "bg-blue-100 text-blue-700"
											: "bg-blue-900/50 text-blue-300"
									}`}
								>
									<span
										className={`w-2 h-2 rounded-full ${
											isEven
												? "bg-blue-600"
												: "bg-blue-400"
										}`}
									></span>
									Service {index + 1} of {SERVICES.length}
								</div>

								<h2
									className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${
										isEven ? "text-slate-900" : "text-white"
									}`}
								>
									{service.title}
								</h2>

								<p
									className={`text-lg md:text-xl mb-8 leading-relaxed ${
										isEven
											? "text-slate-600"
											: "text-slate-300"
									}`}
								>
									{service.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-3 mb-10">
									{service.tools.map((tool, i) => (
										<span
											key={i}
											className={`px-4 py-2 rounded-xl text-sm font-bold ${
												isEven
													? "bg-white text-slate-800 border border-slate-200"
													: "bg-slate-800 text-slate-200 border border-slate-700"
											}`}
										>
											{tool}
										</span>
									))}
								</div>

								{/* Stats */}
								<div
									className={`grid grid-cols-3 gap-4 ${
										isEven ? "text-slate-900" : "text-white"
									}`}
								>
									<div>
										<div className="text-2xl md:text-3xl font-black">
											50+
										</div>
										<div className="text-xs md:text-sm font-medium opacity-70">
											Projects
										</div>
									</div>
									<div>
										<div className="text-2xl md:text-3xl font-black">
											98%
										</div>
										<div className="text-xs md:text-sm font-medium opacity-70">
											Satisfaction
										</div>
									</div>
									<div>
										<div className="text-2xl md:text-3xl font-black">
											24/7
										</div>
										<div className="text-xs md:text-sm font-medium opacity-70">
											Support
										</div>
									</div>
								</div>
							</div>

							{/* Project Showcase */}
							<div className="space-y-4">
								<div
									className={`text-sm font-bold uppercase tracking-wider ${
										isEven
											? "text-slate-500"
											: "text-slate-400"
									}`}
								>
									Our Work in {service.title}
								</div>

								{projects.length > 0 ? (
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										{projects.map((project) => (
											<a
												href={`/portfolio#${project.id}`}
												key={project.id}
												className={`rounded-2xl overflow-hidden aspect-video relative ${
													isEven
														? "bg-white shadow-xl shadow-slate-200"
														: "bg-slate-800 shadow-xl shadow-black/50"
												}`}
											>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                    width={project.imgWidth || 400}
                                                    height={project.imgHeight || 300}
                                                    srcSet={
                                                        project.imgWidth
                                                            ? `${project.image.replace(/\.webp$/, '')}-400.webp 400w, ${project.image.replace(/\.webp$/, '')}-600.webp 600w, ${project.image.replace(/\.webp$/, '')}-800.webp 800w, ${project.image.replace(/\.webp$/, '')}-1200.webp 1200w, ${project.image.replace(/\.webp$/, '')}-1600.webp 1600w`
                                                            : undefined
                                                    }
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
												<div
													className={`absolute bottom-0 left-0 right-0 p-3 ${
														isEven
															? "bg-gradient-to-t from-white/90 to-transparent"
															: "bg-gradient-to-t from-slate-900/90 to-transparent"
													}`}
												>
													<p
														className={`font-bold text-sm ${
															isEven
																? "text-slate-900"
																: "text-white"
														}`}
													>
														{project.title}
													</p>
												</div>
											</a>
										))}
									</div>
								) : (
									<div
										className={`rounded-2xl aspect-video flex items-center justify-center ${
											isEven
												? "bg-white shadow-xl shadow-slate-200"
												: "bg-slate-800 shadow-xl shadow-black/50"
										}`}
									>
										<p
											className={
												isEven
													? "text-slate-400"
													: "text-slate-500"
											}
										>
											Project showcase coming soon
										</p>
									</div>
								)}
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

const ServicesShowcase: React.FC = () => {
	return (
		<>
			{/* Desktop: Horizontal scroll effect */}
			<DesktopShowcase />

			{/* Mobile: Normal vertical scrolling */}
			<MobileShowcase />
		</>
	);
};

export default ServicesShowcase;
