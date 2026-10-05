import React from "react";
import { motion } from "framer-motion";
import { PROJECTS, TESTIMONIALS, FAQS, TEAM, generateSrcSet } from "../constants";
import { ScrollFade } from "../components/Animations";
import Hero from "../components/Hero";

const Home: React.FC = () => {
	const selectedWork = ["djcuppy", "benlytics", "auraex"]
		.map((projectId) => PROJECTS.find((project) => project.id === projectId))
		.filter((project) => project !== undefined);

	return (
		<div className="flex flex-col">
			{/* Calm editorial hero with a seasonal executive focus and broader studio offer. */}
			<Hero />

			<section className="border-y border-stone-300 bg-[#fbfaf7] py-9" aria-label="Selected client work">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-3 sm:gap-8">
					{[
						{ client: "DJ Cuppy", work: "Personal brand · Portfolio, media & booking" },
						{ client: "Benlytics", work: "SaaS · Analytics & reporting platform" },
						{ client: "AuraEx", work: "Marketplace · Brand and creator partnerships" },
					].map((item) => (
						<div key={item.client} className="border-l-2 border-blue-700 pl-4">
							<p className="font-serif text-lg text-slate-950">{item.client}</p>
							<p className="mt-1 text-xs leading-relaxed text-slate-600">{item.work}</p>
						</div>
					))}
				</div>
			</section>

			<section className="border-y border-stone-200 bg-[#fbfaf7] py-20 md:py-28" id="services">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 max-w-3xl">
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">What we create</p>
						<h2 className="font-serif text-4xl leading-tight tracking-tight text-slate-950 md:text-5xl">
							A focused specialty. A broader digital studio.
						</h2>
						<p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
							This season, we’re giving executive and founder websites
							particular attention. We continue to work with businesses
							at every stage—from first product idea to established platform.
						</p>
					</div>
					<div className="divide-y divide-stone-300 border-y border-stone-300">
						{[
							{
								number: "01",
								title: "Executive personal websites",
								description: "Position a leader’s story, achievements, ideas, and opportunities in one credible digital presence.",
								featured: true,
							},
							{
								number: "02",
								title: "SaaS & startup MVPs",
								description: "Turn an early-stage idea into a clear product experience built around the first essential user journeys.",
							},
							{
								number: "03",
								title: "Business & e-commerce websites",
								description: "Give established businesses a more useful digital front door for explaining, selling, and serving.",
							},
							{
								number: "04",
								title: "Platforms & custom web applications",
								description: "Connect workflows, data, and customer experiences in a product shaped for the business problem.",
							},
						].map((offer) => (
							<a
								key={offer.number}
								href={offer.featured ? "/portfolio#djcuppy" : "/services"}
								className="group grid grid-cols-[2.5rem_1fr] gap-4 py-6 transition-colors hover:bg-white/70 md:grid-cols-[4rem_1fr_1.1fr_auto] md:items-center md:gap-7 md:py-8"
							>
								<span className="pt-1 text-xs font-semibold text-slate-500 transition-transform duration-300 group-hover:translate-x-1">
									{offer.number}
								</span>
								<h3 className="font-serif text-2xl text-slate-950 transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
									{offer.title}
									{offer.featured && (
										<span className="ml-3 align-middle font-sans text-[10px] font-semibold uppercase tracking-widest text-blue-700">
											This season
										</span>
									)}
								</h3>
								<p className="col-start-2 text-sm leading-relaxed text-slate-600 md:col-start-auto md:max-w-md">
									{offer.description}
								</p>
								<span className="hidden text-lg text-slate-500 transition-transform group-hover:translate-x-1 md:block" aria-hidden="true">↗</span>
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="scroll-mt-24 overflow-hidden bg-slate-950 py-20 text-white md:py-28" id="approach">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
						<div>
							<p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Authority is built with intention</p>
							<h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
								Your website shouldn’t simply describe your career. It should position you.
							</h2>
						</div>
						<p className="max-w-xl text-lg leading-relaxed text-slate-300 lg:justify-self-end">
							For executive work, the design begins with what a leader
							needs to be known for. We shape the story, organize the
							proof, and build a digital experience that makes the next
							opportunity easier to see.
						</p>
					</div>

					<div className="mt-16 grid grid-cols-2 gap-y-8 md:grid-cols-5 md:gap-0">
						{["Reputation", "Positioning", "Narrative", "Digital experience", "Opportunity"].map((step, index) => (
							<div key={step} className="relative pr-4 md:pr-6">
								{index < 4 && (
									<motion.div
										initial={{ scaleX: 0 }}
										whileInView={{ scaleX: 1 }}
										viewport={{ once: true, amount: 0.8 }}
										transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
										className="absolute left-0 top-3 hidden h-px w-full origin-left bg-slate-600 md:block"
									/>
								)}
								<span className="relative z-10 mb-4 block h-6 w-6 rounded-full border border-blue-300 bg-slate-950" />
								<p className="text-sm font-semibold leading-snug text-slate-100 md:pr-4">{step}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-[#f6f3ed] py-20 md:py-28" aria-labelledby="selected-work-heading">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div className="max-w-3xl">
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Selected work</p>
							<h2 id="selected-work-heading" className="font-serif text-4xl leading-tight tracking-tight text-slate-950 md:text-6xl">
								Different briefs. The same care for the details that matter.
							</h2>
						</div>
						<a href="/portfolio" className="group inline-flex shrink-0 items-center gap-2 border-b border-slate-400 pb-2 text-sm font-semibold text-slate-900 hover:border-slate-950">
							Explore all five case studies
							<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
						</a>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
						{selectedWork.map((project, index) => (
							<a key={project.id} href={`/portfolio#${project.id}`} className="group block">
								<div className="relative mb-6 aspect-[4/3] overflow-hidden bg-stone-200">
									<img
										src={project.image}
										alt={`${project.title} — ${project.subtitle}`}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
										width={project.imgWidth || 600}
										height={project.imgHeight || 450}
										loading="lazy"
										decoding="async"
										srcSet={
											project.imgWidth
												? generateSrcSet(project.image.replace(/\.webp$/, ""), project.imgWidth)
												: undefined
										}
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
									<span className="absolute left-4 top-4 text-xs font-semibold text-white drop-shadow">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
									{project.category}
								</p>
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="font-serif text-2xl text-slate-950">{project.title}</h3>
									<span className="text-sm font-medium text-slate-500 transition-transform group-hover:translate-x-1">
										View case study →
									</span>
								</div>
								<p className="mt-2 text-sm leading-relaxed text-slate-600">{project.subtitle}</p>
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="bg-white py-20 md:py-24" aria-labelledby="testimonials-heading">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 max-w-2xl">
						<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Client perspective</p>
						<h2 id="testimonials-heading" className="font-serif text-4xl tracking-tight text-slate-950 md:text-5xl">
							Work that earns trust.
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
						{TESTIMONIALS.slice(0, 2).map((testimonial) => (
							<blockquote key={testimonial.id} className="border-t border-slate-300 pt-6">
								<p className="mb-7 font-serif text-2xl leading-relaxed text-slate-800">
									“{testimonial.content}”
								</p>
								<footer className="text-sm">
									<strong className="font-semibold uppercase tracking-wide text-slate-950">{testimonial.name}</strong>
									<span className="text-slate-500"> · {testimonial.role}, {testimonial.company}</span>
								</footer>
							</blockquote>
						))}
					</div>
				</div>
			</section>

			<section className="bg-slate-950 py-20 text-white md:py-28" aria-labelledby="process-heading">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
						<div>
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">A clear process</p>
							<h2 id="process-heading" className="font-serif text-4xl tracking-tight md:text-6xl">
								Good decisions, made together.
							</h2>
						</div>
						<p className="max-w-xl text-base leading-relaxed text-slate-300 lg:justify-self-end">
							You stay close to the important calls: positioning and
							scope first, experience and design before development,
							then review and launch. We make trade-offs visible so
							decisions stay aligned with the goal and budget.
						</p>
					</div>
					<ol className="grid grid-cols-1 divide-y divide-slate-700 border-y border-slate-700 md:grid-cols-5 md:divide-x md:divide-y-0">
						{[
							{
								title: "Discover",
								description: "Understand the audience, ambition, constraints, and measures of success."
							},
							{
								title: "Define",
								description: "Agree positioning, story, content, and what belongs in the first release."
							},
							{
								title: "Design",
								description: "Review the hierarchy, key screens, visual direction, and user journeys."
							},
							{
								title: "Develop",
								description: "Build the agreed experience with progress reviews and clear checkpoints."
							},
							{
								title: "Launch",
								description: "Test key journeys, confirm readiness, deploy, and plan what comes next."
							}
						].map((step, index) => (
							<li key={step.title} className="group py-6 md:px-5 md:py-7 first:md:pl-0 last:md:pr-0">
								<p className="mb-7 text-xs font-semibold tracking-widest text-blue-300 transition-transform duration-300 group-hover:translate-x-1">
									{String(index + 1).padStart(2, "0")}
								</p>
								<h3 className="mb-3 font-serif text-2xl text-white">{step.title}</h3>
								<p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
							</li>
						))}
					</ol>
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
