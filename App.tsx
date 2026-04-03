import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import BlogPostDetail from "./pages/BlogPostDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

// Custom Link component to handle navigation
export const Link: React.FC<{
	to: string;
	className?: string;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent) => void;
}> = ({ to, className, children, onClick }) => {
	const handleClick = (e: React.MouseEvent) => {
		if (onClick) {
			onClick(e);
		}
		e.preventDefault();
		window.history.pushState({}, "", to);
		window.dispatchEvent(new PopStateEvent("popstate"));
		window.scrollTo(0, 0);
	};

	return (
		<a href={to} onClick={handleClick} className={className}>
			{children}
		</a>
	);
};

const App: React.FC = () => {
 	const [currentPath, setCurrentPath] = useState(
 		window.location.pathname || "/",
 	);
 	const originalTitle = "Websites That Convert | Bestricky - Digital Agency Nigeria";

 	useEffect(() => {
 		const handlePopState = () => {
 			setCurrentPath(window.location.pathname);
 			window.scrollTo(0, 0);
 		};

 		// Handle all anchor tag clicks for SPA navigation
 		const handleClick = (e: MouseEvent) => {
 			const target = e.target as HTMLElement;
 			const anchor = target.closest("a");
 			if (
 				anchor &&
 				anchor.href &&
 				anchor.href.startsWith(window.location.origin)
 			) {
 				e.preventDefault();
 				const path = anchor.href.replace(window.location.origin, "");
 				window.history.pushState({}, "", path);
 				setCurrentPath(path);
 				window.scrollTo(0, 0);
 			}
 		};

 		window.addEventListener("popstate", handlePopState);
 		document.addEventListener("click", handleClick);
 		return () => {
 			window.removeEventListener("popstate", handlePopState);
 			document.removeEventListener("click", handleClick);
 		};
 	}, []);

 	// Dynamic title change when user leaves the page
 	useEffect(() => {
 		const handleVisibilityChange = () => {
 			if (document.hidden) {
 				document.title = "Come back! We want to build your website - Bestricky";
 			} else {
 				document.title = originalTitle;
 			}
 		};

 		document.addEventListener("visibilitychange", handleVisibilityChange);
 		return () => {
 			document.removeEventListener("visibilitychange", handleVisibilityChange);
 		};
 	}, [originalTitle]);

	// Simple Router logic
	const renderContent = () => {
		const path = currentPath;

		if (path.startsWith("/services")) return <Services />;
		if (path.startsWith("/portfolio")) return <Portfolio />;
		if (path.startsWith("/blog/")) {
			const slug = path.replace("/blog/", "");
			return <BlogPostDetail slug={slug} />;
		}
		if (path.startsWith("/blog")) return <Blog />;
		if (path.startsWith("/contact")) return <Contact />;
		if (path.startsWith("/booking")) return <Booking />;
		if (path.startsWith("/privacy")) return <PrivacyPolicy />;
		if (path.startsWith("/terms")) return <TermsOfService />;
		if (path.startsWith("/about")) return <About />;
		if (path.startsWith("/faq")) return <FAQ />;
		if (path === "/" || path === "") return <Home />;
		return <NotFound />;
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">{renderContent()}</main>
			<Footer />
		</div>
	);
};

export default App;
