import React, { useState, useEffect } from "react";
import { Link } from "../App";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
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
			className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#fbfaf7]/90 py-3 shadow-[0_1px_0_rgba(15,23,42,.08)] backdrop-blur-md" : "bg-transparent py-6"}`}
		>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-full focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
			>
				Skip to main content
			</a>
			<div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
				<Link to="/" className="flex items-center gap-2.5" aria-label="Bestricky home">
					<span className="h-7 w-3.5 rounded-l-full bg-slate-950" aria-hidden="true" />
					<span className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">bestricky</span>
				</Link>

				<div className="hidden items-center gap-9 md:flex">
					{navLinks.map((link) => (
						<Link key={link.name} to={link.href} className="text-[15px] font-medium text-slate-800 transition-colors hover:text-blue-700">
							{link.name}
						</Link>
					))}
					<Link
						to="/booking"
						className="rounded-full bg-slate-950 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-blue-700"
					>
						Contact
					</Link>
				</div>

				<button
					className="rounded-full p-2 text-slate-900 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation"
				>
					<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isMenuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
						)}
					</svg>
				</button>
			</div>

			{isMenuOpen && (
				<div id="mobile-navigation" className="absolute left-0 top-full flex w-full flex-col gap-1 bg-[#fbfaf7] px-6 pb-8 pt-4 shadow-sm md:hidden">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.href}
							className="py-2 text-3xl font-medium tracking-[-0.03em] text-slate-950"
							onClick={() => setIsMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					<Link
						to="/booking"
						className="mt-4 rounded-full bg-slate-950 py-4 text-center font-semibold text-white"
						onClick={() => setIsMenuOpen(false)}
					>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
