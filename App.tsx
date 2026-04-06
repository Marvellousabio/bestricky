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
  const originalTitle = "Bestricky | Web Developer in Lagos - Digital Agency Nigeria";

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

  // Dynamic title and favicon change when user leaves the page
  useEffect(() => {
    const originalFavicon = document.querySelector<HTMLLinkElement>('link[rel*="icon"]')?.href || null;
    
    // Compelling away favicon - Blue smile face for positive psychological response
    // Uses face recognition (faces process 60% faster in brain) + blue for trust
    const awayFavicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%233b82f6'/><circle cx='11' cy='13' r='3' fill='white'/><circle cx='21' cy='13' r='3' fill='white'/><path d='M11 22 Q16 26 21 22' stroke='white' stroke-width='2' fill='none'/></svg>";

    // Multiple compelling away titles - rotates randomly when user leaves
    const awayTitles = [
      "💸 Your Competitors Are Stealing Your Customers While You Sleep | Bestricky",
      "😟 Don't Let Your Website Lose More Customers | Bestricky",
      "⚡ Your Slow Website Is Costing You Money Right Now | Bestricky",
      "🚨 You're Losing Customers to Faster Competitors | Bestricky",
      "📉 Every Second Your Site Loads = Lost Revenue | Bestricky",
    ];

    const getRandomAwayTitle = () => awayTitles[Math.floor(Math.random() * awayTitles.length)];

    const handleVisibilityChange = () => {
      const faviconLink = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');
      
      if (document.hidden) {
        // User navigated away - show compelling favicon + random away title
        if (faviconLink) {
          faviconLink.href = awayFavicon;
        }
        document.title = getRandomAwayTitle();
      } else {
        // User returned - restore original favicon + title
        if (faviconLink && originalFavicon) {
          faviconLink.href = originalFavicon;
        }
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      // Cleanup: restore original favicon
      const faviconLink = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');
      if (faviconLink && originalFavicon) {
        faviconLink.href = originalFavicon;
      }
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
			<main id="main-content" className="flex-grow">{renderContent()}</main>
			<Footer />
		</div>
	);
};

export default App;
