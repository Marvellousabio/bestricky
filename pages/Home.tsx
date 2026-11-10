import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS, TESTIMONIALS, FAQS, TEAM, generateSrcSet } from "../constants";
import Hero, { Sculpture } from "../components/Hero";

const ease = [0.22, 1, 0.36, 1] as const;

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className }) => {
	const reduceMotion = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: reduceMotion ? 0 : 0.9, delay, ease }}
		>
			{children}
		</motion.div>
	);
};

const SERVICES = [
	{
		title: "Personal brands",
		body: "We position founders, executives and public figures with digital homes that carry their reputation — story, proof, media and opportunity in one considered experience.",
		items: ["Brand positioning", "Narrative & copy", "Portfolio & media", "Speaking & booking", "Press kits"],
		image: "/assets/djcuppy.webp",
		alt: "DJ Cuppy personal brand website",
	},
	{
		title: "Websites",
		body: "Business and e-commerce websites built as a useful front door: clear to explain, fast to load, simple to sell from, and easy for your team to run.",
		items: ["UX strategy", "Visual design", "Content systems", "E-commerce", "SEO & performance"],
		image: "/assets/construction.webp",
		alt: "JOO Design and Build website",
	},
	{
		title: "Digital products",
		body: "From idea to MVP to established platform — SaaS, marketplaces and custom web applications shaped around the first essential user journeys.",
		items: ["Product discovery", "UI/UX design", "MVP development", "Dashboards & platforms", "Ongoing iteration"],
		image: "/assets/benlytics.webp",
		alt: "Benlytics analytics platform",
	},
];

const Home: React.FC = () => {
	const selectedWork = ["djcuppy", "benlytics", "auraex", "construction"]
		.map((id) => PROJECTS.find((p) => p.id === id))
		.filter((p) => p !== undefined);

	return (
		<div className="flex flex-col">
			<Hero />

			{/* Dark statement band + full-bleed image */}
			<section id="approach" className="scroll-mt-24 bg-slate-950 text-white">
				<div className="relative mx-auto max-w-[1400px] overflow-hidden px-6 py-24 md:px-10 md:py-36">
					<Reveal>
						<h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
							We turn reputations into elevated digital experiences
						</h2>
					</Reveal>
					<div className="absolute -right-24 -top-24 w-[420px] md:w-[560px]">
						<Sculpture dark />
					</div>
				</div>
				<div className="relative h-[52vh] min-h-[340px] w-full overflow-hidden md:h-[80vh]">
					<img
						src="/assets/djcuppy.webp"
						alt="Personal brand website for DJ Cuppy"
						className="h-full w-full object-cover object-top"
						loading="lazy"
						decoding="async"
					/>
				</div>
			</section>

			{/* Client strip */}
			<section className="border-b border-stone-200 bg-[#fbfaf7] py-10" aria-label="Selected clients">
				<div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-12 gap-y-4 px-6 md:px-10">
					{["DJ Cuppy", "Benlytics", "AuraEx", "Necole Bitchie", "JOO Design & Build", "Receiptr"].map((c) => (
						<span key={c} className="text-xl font-semibold tracking-[-0.03em] text-slate-400 md:text-2xl">
							{c}
						</span>
					))}
				</div>
			</section>

			{/* Services */}
			<section id="services" className="bg-white py-24 md:py-36">
				<div className="mx-auto max-w-[1400px] px-6 md:px-10">
					<Reveal className="max-w-3xl">
						<h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl">
							A full-service digital studio
						</h2>
						<p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
							Strategy, design and engineering under one roof — so the brand,
							the experience and the build all say the same thing.
						</p>
					</Reveal>

					<div className="mt-24 space-y-28 md:mt-36 md:space-y-44">
						{SERVICES.map((s, i) => (
							<div key={s.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
								<Reveal className={i % 2 ? "lg:order-2" : ""}>
									<h3 className="text-3xl font-medium tracking-[-0.035em] text-slate-950 md:text-5xl">{s.title}</h3>
									<p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">{s.body}</p>
									<ul className="mt-10 space-y-3">
										{s.items.map((item) => (
											<li key={item} className="text-[15px] font-semibold text-slate-900">
												{item}
											</li>
										))}
									</ul>
									<a href="/services" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
										Explore {s.title.toLowerCase()}
										<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
									</a>
								</Reveal>
								<Reveal delay={0.1} className="relative">
									<div className="absolute -left-10 -top-10 hidden w-48 opacity-90 lg:block">
										<Sculpture />
									</div>
									<div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
										<img src={s.image} alt={s.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
									</div>
								</Reveal>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Selected work */}
			<section className="bg-[#f6f3ed] py-24 md:py-36" aria-labelledby="work-heading">
				<div className="mx-auto max-w-[1400px] px-6 md:px-10">
					<div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<Reveal>
							<h2 id="work-heading" className="text-4xl font-medium tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl">
								Selected work
							</h2>
						</Reveal>
						<a href="/portfolio" className="inline-flex shrink-0 items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-950">
							All projects
						</a>
					</div>
					<div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
						{selectedWork.map((p, i) => (
							<Reveal key={p.id} delay={(i % 2) * 0.12} className={i % 2 ? "md:mt-32" : ""}>
								<a href={`/portfolio#${p.id}`} className="group block">
									<div className="aspect-[4/5] overflow-hidden bg-stone-200">
										<img
											src={p.image}
											alt={`${p.title} — ${p.subtitle}`}
											className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
											loading="lazy"
											decoding="async"
											srcSet={p.imgWidth ? generateSrcSet(p.image.replace(/\.webp$/, ""), p.imgWidth) : undefined}
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
									<h3 className="mt-7 text-3xl font-medium tracking-[-0.035em] text-slate-950">{p.title}</h3>
									<p className="mt-2 text-lg text-slate-600">{p.subtitle}</p>
								</a>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-white py-24 md:py-36" aria-label="Client testimonials">
				<div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-2 md:px-10">
					{TESTIMONIALS.slice(0, 2).map((t, i) => (
						<Reveal key={t.id} delay={i * 0.1}>
							<blockquote>
								<p className="text-2xl font-medium leading-snug tracking-[-0.025em] text-slate-950 md:text-3xl">“{t.content}”</p>
								<footer className="mt-8 text-sm">
									<strong className="font-semibold text-slate-950">{t.name}</strong>
									<span className="text-slate-500"> — {t.role}, {t.company}</span>
								</footer>
							</blockquote>
						</Reveal>
					))}
				</div>
			</section>

			{/* Process */}
			<section className="bg-slate-950 py-24 text-white md:py-36" aria-labelledby="process-heading">
				<div className="mx-auto max-w-[1400px] px-6 md:px-10">
					<Reveal className="max-w-3xl">
						<h2 id="process-heading" className="text-4xl font-medium tracking-[-0.04em] md:text-6xl lg:text-7xl">
							Good decisions, made together
						</h2>
					</Reveal>
					<ol className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-8">
						{[
							["Discover", "Understand the audience, ambition, constraints and measures of success."],
							["Define", "Agree positioning, story, content and what belongs in the first release."],
							["Design", "Review the hierarchy, key screens, visual direction and user journeys."],
							["Develop", "Build the agreed experience with progress reviews and clear checkpoints."],
							["Launch", "Test key journeys, deploy, and plan what comes next."],
						].map(([title, desc], i) => (
							<Reveal key={title} delay={i * 0.08}>
								<li className="list-none border-t border-white/15 pt-6">
									<p className="text-sm text-blue-300">{String(i + 1).padStart(2, "0")}</p>
									<h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{title}</h3>
									<p className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</p>
								</li>
							</Reveal>
						))}
					</ol>
				</div>
			</section>

			{/* Team */}
			<section className="bg-[#fbfaf7] py-24 md:py-36">
				<div className="mx-auto max-w-[1400px] px-6 md:px-10">
					<Reveal className="max-w-3xl">
						<h2 className="text-4xl font-medium tracking-[-0.04em] text-slate-950 md:text-6xl">The people behind Bestricky</h2>
					</Reveal>
					<div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{TEAM.map((m, i) => (
							<Reveal key={m.id} delay={i * 0.08}>
								<div className="aspect-[4/5] overflow-hidden bg-stone-200">
									<img src={m.image} alt={m.name} className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" loading="lazy" decoding="async" />
								</div>
								<h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">{m.name}</h3>
								<p className="text-sm text-slate-500">{m.role}</p>
								<div className="mt-3 flex gap-4 text-sm font-semibold text-blue-700">
									{m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
									{m.website && <a href={m.website} target="_blank" rel="noopener noreferrer">Website ↗</a>}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-white py-24 md:py-36">
				<div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
					<Reveal>
						<h2 className="text-4xl font-medium tracking-[-0.04em] text-slate-950 md:text-6xl">Questions, answered</h2>
					</Reveal>
					<div className="border-t border-slate-200">
						{FAQS.map((faq, i) => (
							<details key={i} className="group border-b border-slate-200">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
									<span className="text-lg font-semibold tracking-[-0.02em] text-slate-950 md:text-xl">{faq.question}</span>
									<span className="text-2xl text-slate-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
								</summary>
								<p className="max-w-2xl pb-7 leading-relaxed text-slate-600">{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden bg-slate-950 text-white">
				<div className="absolute -bottom-40 -right-32 w-[520px] md:w-[720px]">
					<Sculpture dark />
				</div>
				<div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
					<Reveal>
						<h2 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.045em] md:text-7xl lg:text-8xl">
							Let’s build what’s next
						</h2>
						<a
							href="/booking"
							className="group mt-12 inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-8 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-600 hover:text-white"
						>
							Start a project
							<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
						</a>
					</Reveal>
				</div>
			</section>
		</div>
	);
};

export default Home;
