
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BlogPostDetail from './pages/BlogPostDetail';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router logic
  const renderContent = () => {
    if (currentPath.startsWith('#/services')) return <Services />;
    if (currentPath.startsWith('#/portfolio')) return <Portfolio />;
    if (currentPath.startsWith('#/blog/')) {
      const slug = currentPath.replace('#/blog/', '');
      return <BlogPostDetail slug={slug} />;
    }
    if (currentPath.startsWith('#/blog')) return <Blog />;
    if (currentPath.startsWith('#/contact')) return <Contact />;
    if (currentPath.startsWith('#/booking')) return <Booking />;
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
