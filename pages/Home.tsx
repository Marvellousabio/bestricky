import React from "react";
import { SERVICES, PROJECTS, TESTIMONIALS, BRAND, CLIENT_LOGOS, FAQS, TEAM, generateSrcSet } from "../constants";
import { ScrollFade, CountUp } from "../components/Animations";
import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";

const Home: React.FC = () => {
	return (
		<div className="flex flex-col">
			{/* Hero Section - Niche Wheel Style */}
			<Hero />

			{/* Trust Stats - Apple Style */}
			<section className="py-8 md:py-12">
				<div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					{BRAND.metrics.map((stat, index) => (
						<ScrollFade key={stat.label} delay={index * 100}>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1">
									{stat.value}
								</div>
								<div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wide">
									{stat.label}
								</div>
							</div>
						</ScrollFade>
					))}
				</div>
			</section>

			{/* Client Logo Marquee */}
			<section className="py-12 bg-slate-900 border-b border-slate-800 overflow-hidden">
				<ScrollFade>
					<div className="text-center mb-8">
						<h3 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">
							Trusted By Industry Leaders
						</h3>
					</div>
				</ScrollFade>
				<div className="relative">
					<div className="flex animate-scroll gap-16 items-center">
						{[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
							<div key={`${client.name}-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all">
								<img 
									src={
										client.width && client.width > 400
											? `${client.logo.replace(/\.webp$/, '')}-400.webp`
											: client.logo
									}
									alt={client.name}
									className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all"
									width={client.width || client.displayWidth}
									height={client.height || client.displayHeight}
									loading="lazy"
									decoding="async"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Showcase - Full Screen Scroll */}
			<ServicesShowcase />

			{/* Testimonials - Auto-scrolling Carousel */}
			<section className="py-24 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-4xl mx-auto mb-16">
						<ScrollFade>
							<h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
								Success Stories
							</h2>
						</ScrollFade>
						<ScrollFade delay={100}>
							<h3 className="text-4xl font-black text-slate-900">
								What Our Partners Say
							</h3>
						</ScrollFade>
					</div>

					{/* Auto-scrolling carousel */}
					<div className="relative overflow-hidden">
						<div className="flex animate-scroll gap-6">
							{[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
								<div 
									key={`${testimonial.id}-${index}`}
									className="flex-shrink-0 w-[400px] bg-slate-50 rounded-3xl p-8 border border-slate-100"
								>
									{/* Quote Icon */}
									<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-serif mb-6">
										"
									</div>

									{/* Content */}
									<blockquote className="text-lg text-slate-700 leading-relaxed mb-8">
										{testimonial.content}
									</blockquote>

									{/* Author */}
									<div className="flex items-center gap-4 pt-6 border-t border-slate-200">
										<div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-100">
                                        <img
                                          src={testimonial.image}
                                          alt={testimonial.name}
                                          className="w-full h-full object-cover"
                                          width="56"
                                          height="56"
                                          loading="lazy"
                                          decoding="async"
                                        />
										</div>
										<div>
											<h4 className="font-bold text-slate-900">
												{testimonial.name}
											</h4>
											<p className="text-sm text-slate-500">
												{testimonial.role} at <span className="text-blue-600 font-medium">{testimonial.company}</span>
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Preview */}
			<section className="py-24 bg-slate-50 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
						<div className="max-w-2xl">
							<ScrollFade>
								<h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
									Featured Work
								</h2>
							</ScrollFade>
							<ScrollFade delay={100}>
								<h3 className="text-4xl md:text-5xl font-black text-slate-900">
									Proven ROI Through Excellence
								</h3>
							</ScrollFade>
						</div>
						<ScrollFade delay={200}>
							<a
								href="/portfolio"
								className="text-slate-900 font-bold flex items-center gap-2 pb-2 border-b-2 border-blue-600 hover:text-blue-600 transition-colors"
							>
								Explore All Case Studies
							</a>
						</ScrollFade>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{PROJECTS.slice(0, 2).map((project) => (
							<a key={project.id} href={`/portfolio#${project.id}`} className="group block">
                                <div className="overflow-hidden rounded-3xl mb-6 bg-slate-100 aspect-video relative">
                                     <img
                                       src={project.image}
                                       alt={project.title}
                                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                       width={project.imgWidth || 400}
                                       height={project.imgHeight || 225}
                                       loading="lazy"
                                       decoding="async"
                                       srcSet={
                                         project.imgWidth
                                           ? generateSrcSet(project.image.replace(/\.webp$/, ''), project.imgWidth)
                                           : undefined
                                       }
                                       sizes="(max-width: 768px) 100vw, 50vw"
                                     />
                                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
                                            View Project Details
                                        </span>
                                    </div>
                                </div>
								<div className="flex flex-col gap-2">
									<span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
										{project.category}
									</span>
									<h4 className="text-2xl font-black text-slate-900">
										{project.title}
									</h4>
									<p className="text-slate-600 line-clamp-2">
										{project.subtitle}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Process Section - Horizontal Timeline */}
			<section className="py-32 bg-slate-900 text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-20">
						<h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
							Our Workflow
						</h2>
						<h3 className="text-5xl md:text-7xl font-black mb-6">
							The Bestricky Way
						</h3>
						<p className="text-xl text-slate-400">
							A professional process designed for predictability,
							transparency, and results.
						</p>
					</div>

					{/* Timeline Container */}
					<div className="relative">
						{/* Timeline Line - Desktop */}
						<div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-700"></div>
						
						{/* Timeline Line - Mobile */}
						<div className="md:hidden absolute top-8 left-8 w-0.5 h-full bg-slate-700"></div>

						{/* Cards Grid */}
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
							{[
								{
									phase: "01",
									title: "Discovery",
									desc: "Market research, goals, and strategic planning.",
									video: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
								},
								{
									phase: "02",
									title: "Design",
									desc: "UI/UX wireframes and prototypes in Figma.",
									video: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
								},
								{
									phase: "03",
									title: "Development",
									desc: "Scalable build using Next.js & TypeScript.",
									video: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
								},
								{
									phase: "04",
									title: "Launch",
									desc: "SEO, optimization, and cloud deployment.",
									video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
								},
							].map((step, i) => (
								<ScrollFade key={step.title} delay={i * 150}>
									<div className="relative group">
										{/* Timeline Dot - Desktop */}
										<div className="hidden md:block absolute top-[-1.5rem] left-8 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform"></div>
										
										{/* Timeline Dot - Mobile */}
										<div className="md:hidden absolute top-8 left-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform"></div>

										{/* Card */}
										<div className="md:mt-8">
											<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700 group-hover:border-blue-500/50 transition-colors">
												<img
													src={step.video}
													alt={step.title}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
													width="400"
													height="300"
													loading="lazy"
													decoding="async"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
												
												{/* Phase Number Badge */}
												<div className="absolute top-4 left-4">
													<span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-bold rounded-lg backdrop-blur-sm">
														{step.phase}
													</span>
												</div>

												{/* Icon */}
												<div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/80 transition-all">
													<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														{i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
														{i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />}
														{i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
														{i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3l4 4v-4m4 4l-4-4m4 4l4-4" />}
													</svg>
												</div>
											</div>

											{/* Content */}
											<div className="mt-6">
												<h4 className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">
													Step {step.phase}
												</h4>
												<h5 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors">
													{step.title}
												</h5>
												<p className="text-slate-400 text-base leading-relaxed">
													{step.desc}
												</p>
											</div>
										</div>
									</div>
								</ScrollFade>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Case Study Highlights */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<ScrollFade>
						<div className="text-center max-w-3xl mx-auto mb-16">
							<h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
								Featured Work
							</h2>
							<h3 className="text-4xl font-black text-slate-900">
								Projects That Delivered Results
							</h3>
						</div>
					</ScrollFade>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{PROJECTS.slice(0, 3).map((project, index) => (
							<ScrollFade key={project.id} delay={index * 150}>
								<div className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            width={project.imgWidth || 400}
                                            height={project.imgHeight || 300}
                                            srcSet={
                                                project.imgWidth
                                                    ? `${project.image.replace(/\.webp$/, '')}-400.webp 400w, ${project.image.replace(/\.webp$/, '')}-600.webp 600w, ${project.image.replace(/\.webp$/, '')}-800.webp 800w, ${project.image.replace(/\.webp$/, '')}-1200.webp 1200w, ${project.image.replace(/\.webp$/, '')}-1600.webp 1600w`
                                                    : undefined
                                            }
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
										<div className="absolute bottom-4 left-4">
											<span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
												{project.category}
											</span>
										</div>
									</div>
									<div className="p-6">
										<h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
											{project.title}
										</h4>
										<p className="text-slate-600 text-sm mb-4 line-clamp-2">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tech.slice(0, 3).map(t => (
												<span key={t} className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded">
													{t}
												</span>
											))}
										</div>
									</div>
								</div>
							</ScrollFade>
						))}
					</div>

					<div className="text-center mt-12">
						<a href="/projects" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
							View All Projects
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 bg-slate-900 text-white">
				<div className="max-w-7xl mx-auto px-6">
					<ScrollFade>
						<div className="text-center max-w-3xl mx-auto mb-16">
							<h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
								Meet The Team
							</h2>
							<h3 className="text-4xl md:text-5xl font-black">
								The People Behind Bestricky
							</h3>
							<p className="text-xl text-slate-400 mt-4">
								Talented professionals passionate about building great digital experiences.
							</p>
						</div>
					</ScrollFade>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{TEAM.map((member, index) => (
							<ScrollFade key={member.id} delay={index * 100}>
								<div className="text-center group">
									<div className="relative inline-block mb-6">
										<img
											src={member.image}
											alt={member.name}
											className="w-32 h-32 rounded-full object-cover border-4 border-slate-800 group-hover:border-blue-500 transition-all"
											width="128"
											height="128"
											loading="lazy"
											decoding="async"
										/>
										<div className="absolute bottom-0 right-0 flex gap-2">
											{member.linkedin && (
												<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
													<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
														<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
													</svg>
												</a>
											)}
											{member.website && (
												<a href={member.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
													<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
													</svg>
												</a>
											)}
										</div>
									</div>
									<h4 className="text-xl font-black mb-1">{member.name}</h4>
									<p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
									<p className="text-slate-400 text-sm">{member.bio}</p>
								</div>
							</ScrollFade>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Accordion */}
			<section className="py-24 bg-slate-50">
				<div className="max-w-4xl mx-auto px-6">
					<ScrollFade>
						<div className="text-center mb-16">
							<h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
								Got Questions?
							</h2>
							<h3 className="text-4xl font-black text-slate-900">
								Frequently Asked Questions
							</h3>
						</div>
					</ScrollFade>

					<div className="space-y-4">
						{FAQS.map((faq, index) => (
							<ScrollFade key={index} delay={index * 100}>
								<details className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
									<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
										<div className="flex items-start gap-4">
											<span className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-sm">
												{String(index + 1).padStart(2, '0')}
											</span>
											<span className="text-lg font-bold text-slate-900 pr-4">{faq.question}</span>
										</div>
										<span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-open:bg-blue-600 group-open:text-white transition-all">
											<svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</span>
									</summary>
									<div className="px-6 pb-6 pl-[5.5rem]">
										<p className="text-slate-600 leading-relaxed">{faq.answer}</p>
									</div>
								</details>
							</ScrollFade>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="relative rounded-2xl md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center text-white overflow-hidden">
						{/* Professional business background */}
						<div className="absolute inset-0">
                        <img
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                          alt="Business background"
                          className="w-full h-full object-cover"
                          width="1200"
                          height="600"
                          loading="lazy"
                          decoding="async"
                        />
							<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
						</div>
						{/* Decorative elements */}
						<div className="absolute top-0 right-0 w-40 md:w-80 h-40 md:h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
						<div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
						{/* Content */}
						<div className="relative z-10">
							<h3 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
								Ready to build your <br /> next success story?
							</h3>
							<p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto">
								Join the 50+ businesses that have transformed their
								digital presence with Bestricky Web Agency.
							</p>
							<a
								href="/booking"
								className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-base md:text-xl font-black shadow-2xl transform transition-all hover:scale-105 active:scale-95 border-2 border-blue-400/50"
							>
								Get Your Free Consultation
							</a>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
};

export default Home;
