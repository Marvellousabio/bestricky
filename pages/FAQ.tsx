import React, { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs: FAQItem[] = [
		{
			question: "How long does it take to build a website?",
			answer: "Simple websites take 2-3 weeks to build, while complex websites take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
		},
		{
			question: "What technologies do you use?",
			answer: "We use modern, industry-standard technologies including React, TypeScript, Node.js, and various cloud platforms. We choose the best tools for your specific needs to ensure optimal performance and scalability.",
		},
		{
			question: "Do you offer ongoing maintenance?",
			answer: "Yes! We offer flexible maintenance packages that include security updates, content updates, performance monitoring, and technical support. We'll keep your website running smoothly so you can focus on your business.",
		},
		{
			question: "How much does a website cost?",
			answer: "Every project is unique, and pricing depends on your specific requirements. We offer packages starting from basic landing pages to comprehensive web applications. Contact us for a free quote tailored to your needs.",
		},
		{
			question: "Will my website be mobile-responsive?",
			answer: "Absolutely! All our websites are fully responsive and optimized for all devices - desktops, tablets, and mobile phones. We ensure a seamless user experience across all screen sizes.",
		},
		{
			question: "Do you provide hosting services?",
			answer: "Yes, we can handle everything from domain registration to hosting setup. We recommend reliable, fast hosting solutions that are optimized for performance and security.",
		},
		{
			question: "Can you work with our existing brand guidelines?",
			answer: "Definitely! We can work with your existing brand colors, fonts, and design elements to create a website that perfectly represents your brand. Alternatively, we can help you develop a new brand identity.",
		},
		{
			question: "What happens after my website launches?",
			answer: "We provide comprehensive handover documentation and training so you can manage your content. We're also available for ongoing support, updates, and improvements whenever you need them.",
		},
		{
			question: "Do you offer SEO services?",
			answer: "Yes! We build SEO best practices into every website we create. This includes proper meta tags, fast loading times, mobile optimization, and clean code structure. We can also provide ongoing SEO services to help improve your search rankings.",
		},
		{
			question: "How do I get started?",
			answer: "Simply reach out through our contact form or schedule a free strategy call. We'll discuss your goals, requirements, and vision before providing a detailed proposal and timeline.",
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="min-h-screen bg-slate-50 py-24">
			<div className="max-w-4xl mx-auto px-6">
				<div className="text-center mb-16">
					<span className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 block">
						FAQ
					</span>
					<h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
						Your Website Questions, <span className="text-blue-600">Answered</span>
					</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Get clarity on pricing, timelines, and how we turn slow sites into sales machines.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
							>
								<span className="text-lg font-bold text-slate-900 pr-4">
									{faq.question}
								</span>
								<span
									className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-180 bg-blue-600 text-white" : "text-slate-500"}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
							>
								<div className="px-8 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">
						Still have questions?
					</h2>
					<p className="text-slate-600 mb-8">
						Can't find the answer you're looking for? We're here to
						help.
					</p>
					<a
						href="/contact"
						className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all"
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
