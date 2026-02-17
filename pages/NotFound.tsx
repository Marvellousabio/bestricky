import React from "react";

const NotFound: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<div className="relative mb-8">
					<span className="text-[200px] md:text-[300px] font-black text-slate-200 leading-none select-none">
						404
					</span>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/30 rotate-12">
							<span className="text-5xl">🔍</span>
						</div>
					</div>
				</div>

				<h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
					Page Not Found
				</h1>

				<p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">
					Oops! The page you're looking for seems to have wandered
					off. Let's get you back on track.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/"
						className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
					>
						← Back to Home
					</a>
					<a
						href="/contact"
						className="bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all"
					>
						Contact Support
					</a>
				</div>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
					<a
						href="/"
						className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all group"
					>
						<div className="text-3xl mb-3">🏠</div>
						<h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
							Home
						</h3>
						<p className="text-sm text-slate-500">
							Return to homepage
						</p>
					</a>

					<a
						href="/services"
						className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all group"
					>
						<div className="text-3xl mb-3">💼</div>
						<h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
							Services
						</h3>
						<p className="text-sm text-slate-500">
							View our services
						</p>
					</a>

					<a
						href="/portfolio"
						className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all group"
					>
						<div className="text-3xl mb-3">🎨</div>
						<h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
							Portfolio
						</h3>
						<p className="text-sm text-slate-500">See our work</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
