import React from "react";

const About: React.FC = () => {
	const team = [
		{
			name: "Marvellous Abiola",
			role: "Founder & Lead Developer",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
			bio: "Passionate about building high-performance digital solutions with 3+ years of experience in web development.",
		},
		{
			name: "Sarah Johnson",
			role: "UI/UX Designer",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
			bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
		},
		{
			name: "Michael Chen",
			role: "Full Stack Developer",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
			bio: "Expert in building scalable web applications with modern technologies.",
		},
		{
			name: "Emily Davis",
			role: "Project Manager",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
			bio: "Ensuring projects are delivered on time and exceed client expectations.",
		},
	];

	const values = [
		{
			icon: "🎯",
			title: "Client-Centric",
			description:
				"We put your business goals at the center of everything we build.",
		},
		{
			icon: "💡",
			title: "Innovation",
			description:
				"We stay ahead of the curve with cutting-edge technologies.",
		},
		{
			icon: "🤝",
			title: "Transparency",
			description:
				"Clear communication and honest partnerships throughout your project.",
		},
		{
			icon: "🚀",
			title: "Results-Driven",
			description:
				"We focus on delivering measurable outcomes that grow your business.",
		},
	];

	return (
		<div className="min-h-screen bg-slate-50">
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<span className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 block">
							About Us
						</span>
						<h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
							Why 50+ Businesses Chose <br />
							<span className="text-blue-600">Bestricky Over Others</span>
						</h1>
						<p className="text-xl text-slate-600 leading-relaxed">
							We don't just build websites—we build revenue-generating machines that work 24/7 while you focus on your business.
						</p>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
								Our Story
							</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									Bestricky Web Agency was founded with a
									simple mission: to make high-quality web
									development accessible to businesses of all
									sizes. We believe that every entrepreneur
									deserves a powerful online presence that can
									compete with the biggest brands.
								</p>
								<p>
									What started as a small freelance operation
									has grown into a full-service digital
									agency, but our core values remain the same.
									We treat every project as if it were our
									own, ensuring attention to detail and a
									commitment to excellence.
								</p>
								<p>
									Today, we've helped over 50 businesses
									transform their digital presence, and we're
									just getting started. Our team combines
									creativity with technical expertise to
									deliver solutions that not only look great
									but also perform exceptionally.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
									alt="Our team collaborating"
									className="w-full h-auto object-cover"
								/>
							</div>
							<div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-200 rounded-3xl -z-10"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-slate-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
							Our Values
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							The principles that guide every project we work on
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value) => (
							<div
								key={value.title}
								className="glass-card p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300"
							>
								<div className="text-4xl mb-4">
									{value.icon}
								</div>
								<h3 className="text-xl font-bold text-slate-900 mb-3">
									{value.title}
								</h3>
								<p className="text-slate-600">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
							Meet Our Team
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							The talented people behind your digital success
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{team.map((member) => (
							<div key={member.name} className="group">
								<div className="relative mb-6 overflow-hidden rounded-3xl">
									<img
										src={member.image}
										alt={member.name}
										className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
								<h3 className="text-xl font-bold text-slate-900 mb-1">
									{member.name}
								</h3>
								<p className="text-blue-600 font-medium mb-2">
									{member.role}
								</p>
								<p className="text-slate-600 text-sm">
									{member.bio}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-blue-600">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl md:text-5xl font-black text-white mb-2">
								50+
							</div>
							<div className="text-blue-200 font-medium">
								Projects Completed
							</div>
						</div>
						<div>
							<div className="text-4xl md:text-5xl font-black text-white mb-2">
								100%
							</div>
							<div className="text-blue-200 font-medium">
								Client Satisfaction
							</div>
						</div>
						<div>
							<div className="text-4xl md:text-5xl font-black text-white mb-2">
								3+
							</div>
							<div className="text-blue-200 font-medium">
								Years Experience
							</div>
						</div>
						<div>
							<div className="text-4xl md:text-5xl font-black text-white mb-2">
								15+
							</div>
							<div className="text-blue-200 font-medium">
								Technologies
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-slate-50">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
						Ready to Work Together?
					</h2>
					<p className="text-lg text-slate-600 mb-10">
						Let's discuss your project and see how we can help you
						achieve your goals.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/contact"
							className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all"
						>
							Get in Touch
						</a>
						<a
							href="/portfolio"
							className="bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all"
						>
							View Our Work
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
