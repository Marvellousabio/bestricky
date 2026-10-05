import React, { useState, useEffect } from "react";
import { Link } from "../App";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Work", href: "/portfolio" },
		{ name: "Services", href: "/services" },
		{ name: "Approach", href: "/#approach" },
		{ name: "About", href: "/about" },
		{ name: "Insights", href: "/blog" },
	];

	return (
		<nav
			className={`fixed w-full z-50 border-b transition-all duration-300 ${isScrolled ? "border-slate-200/80 bg-[#fbfaf7]/95 py-3 shadow-sm backdrop-blur-md" : "border-transparent bg-[#f6f3ed]/75 py-5 backdrop-blur-sm"}`}
		>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:z-50 focus:font-semibold"
			>
				Skip to main content
			</a>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6">
				<Link to="/" className="flex items-center gap-2">
					<span className="text-xl font-black tracking-tight md:text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
						<span className="text-slate-950">BESTRICKY</span>
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
						>
							{link.name}
						</Link>
					))}
					<Link
						to="/booking"
						className="group inline-flex items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
					>
						Start a Project
						<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
					</Link>
				</div>

				{/* Mobile Toggle */}
				<button
					className="rounded-sm p-2 text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 md:hidden"
 					onClick={() => setIsMenuOpen(!isMenuOpen)}
 					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation"
 				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div id="mobile-navigation" className="absolute left-0 flex w-full flex-col gap-4 border-t border-slate-200 bg-[#fbfaf7] px-6 py-6 shadow-sm md:hidden">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className="text-base font-medium text-slate-700 transition-colors hover:text-blue-700"
							onClick={() => setIsMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					<Link
						to="/booking"
						className="mt-2 bg-slate-950 py-4 text-center font-bold text-white transition-colors hover:bg-blue-700"
						onClick={() => setIsMenuOpen(false)}
					>
						Start a Project
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
