import React from "react";
import { SERVICES, PROJECTS, TESTIMONIALS, BRAND } from "../constants";
import { ScrollFade, CountUp } from "../components/Animations";
import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";

const Home: React.FC = () => {
	return (
		<div className="flex flex-col">
			{/* Hero Section - Niche Wheel Style */}
			<Hero />

			{/* Trust Stats - Apple Style */}
			<section className="bg-slate-900 border-y border-slate-800 py-12">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
					{BRAND.metrics.map((stat, index) => (
						<ScrollFade key={stat.label} delay={index * 100}>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-black text-white mb-1">
									{stat.value}
								</div>
								<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
									{stat.label}
								</div>
							</div>
						</ScrollFade>
					))}
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
                                      width="400"
                                      height="225"
                                      loading="lazy"
                                      decoding="async"
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

			{/* Process Section - Diagonal Layout */}
			<section className="py-32 bg-slate-900 text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-24">
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

				{/* Diagonal Layout - Each phase offset diagonally */}
				<div className="relative">
					{[
						{
							phase: "Phase 1",
							title: "Discovery",
							desc: "Market research, goals, and strategic planning.",
							video: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
						},
						{
							phase: "Phase 2",
							title: "Design",
							desc: "UI/UX wireframes and prototypes in Figma.",
							video: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
						},
						{
							phase: "Phase 3",
							title: "Development",
							desc: "Scalable build using Next.js & TypeScript.",
							video: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
						},
						{
							phase: "Phase 4",
							title: "Launch",
							desc: "SEO, optimization, and cloud deployment.",
							video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
						},
					].map((step, i) => (
						<ScrollFade key={step.title} delay={i * 150}>
							<div 
								className={`relative ${
								i === 0 ? 'md:ml-0' : 
								i === 1 ? 'md:ml-[25%] md:-mt-32' : 
								i === 2 ? 'md:ml-[50%] md:-mt-32' : 
								'md:ml-[75%] md:-mt-32'
							}`}
							>
								{/* Connection Line */}
								{i < 3 && (
									<div className="hidden md:block absolute top-1/2 left-full w-[25%] h-0.5 bg-blue-600 z-0"></div>
								)}
								<div className="group">
									{/* Video/Illustration Container */}
									<div className="relative rounded-3xl overflow-hidden aspect-video mb-8 bg-slate-800">
                                      <img
                                        src={step.video}
                                        alt={step.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        width="400"
                                        height="225"
                                        loading="lazy"
                                        decoding="async"
                                      />
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
										{/* Play Button Overlay */}
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
												<svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
											</div>
										</div>
										{/* Phase Badge */}
										<div className="absolute top-4 left-4">
											<span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full">
												{step.phase}
											</span>
										</div>
									</div>

									<h4 className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">
									{step.phase}
								</h4>
								<h5 className="text-3xl font-black mb-4">
									{step.title}
								</h5>
								<p className="text-slate-400 text-lg leading-relaxed">
									{step.desc}
								</p>
								</div>
							</div>
						</ScrollFade>
					))}
				</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-6">
					<div className="relative rounded-[3rem] p-12 md:p-24 text-center text-white overflow-hidden">
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
						<div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
						<div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
						{/* Content */}
						<div className="relative z-10">
							<h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
								Ready to build your <br /> next success story?
							</h3>
							<p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
								Join the 50+ businesses that have transformed their
								digital presence with Bestricky Web Agency.
							</p>
							<a
								href="/booking"
								className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl transform transition-all hover:scale-105 active:scale-95 border-2 border-blue-400/50"
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
