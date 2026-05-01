// Newsletter configuration
export const NEWSLETTER = {
  substackUrl: 'https://bestrickywebdesign.substack.com',
  embedWidth: '100%',
  embedHeight: '320'
};

// Generate srcSet for responsive images
export const generateSrcSet = (baseUrl: string, width: number) => {
  const sizes = [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000].filter(
    (w) => w <= width
  );
  return sizes.map((w) => `${baseUrl}-${w}.webp ${w}w`).join(', ');
};

// Brand metrics
export const BRAND = {
  metrics: [
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Support", value: "24/7" },
    { label: "Years Experience", value: "5+" }
  ]
};

// Client logos
export const CLIENT_LOGOS = [
  { name: "TechCorp", logo: "/assets/B.webp", width: 200, height: 80 },
  { name: "Innovate", logo: "/assets/Arial.webp", width: 200, height: 80 },
  { name: "StartUp Inc", logo: "/assets/B.webp", width: 200, height: 80 },
  { name: "GlobalTech", logo: "/assets/Arial.webp", width: 200, height: 80 },
  { name: "NextGen", logo: "/assets/B.webp", width: 200, height: 80 },
  { name: "Apex Systems", logo: "/assets/Arial.webp", width: 200, height: 80 }
];

// Services
export const SERVICES = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    description: "High-performance websites engineered for speed, SEO, and conversions. Built with modern stacks like Next.js, TypeScript, and Tailwind CSS.",
    tools: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/assets/synapse.webp"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design that delights and converts. Wireframes, prototypes, and polished interfaces in Figma.",
    tools: ["Figma", "Adobe XD", "Principle", "Framer"],
    image: "/assets/lumina.webp"
  },
  {
    id: "full-stack",
    title: "Full-Stack Solutions",
    description: "End-to-end applications with robust backends, databases, and APIs. Scalable architectures built for growth.",
    tools: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    image: "/assets/neonpulse.webp"
  },
  {
    id: "branding",
    title: "Brand Identity",
    description: "Memorable brand identities that resonate with your audience. Logos, visual systems, and brand guidelines.",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    image: "/assets/elysian.webp"
  }
];

// Projects
export const PROJECTS = [
  {
    id: "brands",
    title: "Elysian Fashion Brand",
    subtitle: "Luxury fashion e-commerce redesign",
    category: "Luxury Retail",
    description: "A complete rebrand and e-commerce platform for a high-end fashion label, resulting in 3x conversion increase.",
    problem: "Outdated website with poor user experience and slow load times hurting sales.",
    solution: "Built a stunning Shopify + Next.js headless store with optimized images and smooth animations.",
    impact: "3x increase in conversions and 60% faster page loads.",
    tech: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    image: "/assets/elysian.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "real-estate",
    title: "Prime Properties",
    subtitle: "Real estate listings and CRM",
    category: "Real Estate",
    description: "A modern property listing website with advanced search, virtual tours, and integrated CRM for agents.",
    problem: "Agents struggled with scattered tools and no online presence.",
    solution: "Centralized platform with IDX integration, automated lead capture, and mobile-responsive design.",
    impact: "200+ new leads monthly and 40% faster closing times.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "https://example.com",
    image: "/assets/realestate.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "healthcare",
    title: "CarePlus Medical",
    subtitle: "Telehealth patient portal",
    category: "Healthcare",
    description: "HIPAA-compliant telehealth platform allowing patients to book appointments and consult doctors online.",
    problem: "No digital infrastructure for remote patient consultations during pandemic.",
    solution: "Secure video calling, appointment scheduling, and medical records access built on modern stack.",
    impact: "Served 5,000+ patients with 99.9% uptime.",
    tech: ["Next.js", "WebRTC", "MongoDB", "Heroku"],
    liveUrl: "https://example.com",
    image: "/assets/healthcare.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "construction",
    title: "BuildRight Co",
    subtitle: "Construction company website",
    category: "Construction",
    description: "Professional website showcasing projects, services, and generating qualified leads for a construction firm.",
    problem: "Dated website failing to attract commercial clients.",
    solution: "Portfolio-focused design with project galleries, client testimonials, and clear CTAs.",
    impact: "250% increase in project inquiries within 6 months.",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    liveUrl: "https://example.com",
    image: "/assets/construction.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "ecommerce",
    title: "Gourmet Foods",
    subtitle: "Online grocery store",
    category: "E-Commerce",
    description: "Feature-rich e-commerce store with inventory management, delivery scheduling, and subscription options.",
    problem: "Manual order processing and no online sales channel.",
    solution: "Custom WooCommerce store with automated workflows and mobile optimization.",
    impact: "$150K in online sales first quarter.",
    tech: ["WooCommerce", "WordPress", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    image: "/assets/ecommerce.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "personal-brand",
    title: "Marvellous.Abiola",
    subtitle: "Personal brand website",
    category: "Personal Brand",
    description: "A sleek personal brand site for a thought leader, featuring blog, speaking engagements, and newsletter.",
    problem: "No cohesive online presence to establish authority.",
    solution: "Clean, content-focused design with Substack integration and social proof elements.",
    impact: "Grew newsletter to 5,000+ subscribers in 3 months.",
    tech: ["Next.js", "Tailwind CSS", "Substack API"],
    liveUrl: "https://example.com",
    image: "/assets/marvellous.webp",
    imgWidth: 800,
    imgHeight: 600
  },
  {
    id: "b2b",
    title: "Benlytics Analytics",
    subtitle: "B2B SaaS dashboard",
    category: "B2B Platform",
    description: "Analytics dashboard for businesses to track key metrics with real-time data visualization and reporting.",
    problem: "Complex data analysis tools were inaccessible to non-technical users.",
    solution: "Intuitive dashboard with customizable widgets, export options, and role-based access.",
    impact: "50 enterprise clients in first year.",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    image: "/assets/benlytics.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "entertainment",
    title: "Neon Pulse Events",
    subtitle: "Event promotion platform",
    category: "Entertainment",
    description: "Dynamic event listing and ticketing platform fornightlife and entertainment venues.",
    problem: "Low ticket sales and poor event visibility.",
    solution: "Engaging UI with calendar integration, social sharing, and mobile-first ticketing.",
    impact: "Sold out 90% of events and doubled venue partnerships.",
    tech: ["Vue.js", "Firebase", "Stripe", "Twilio"],
    liveUrl: "https://example.com",
    image: "/assets/neonpulse.webp",
    imgWidth: 1200,
    imgHeight: 800
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: "1",
    content: "Bestricky transformed our online presence. Our website speed improved dramatically and leads doubled within a month. Highly recommend!",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    image: "/assets/marvellous.webp"
  },
  {
    id: "2",
    content: "The team's attention to detail and design sense exceeded our expectations. Our new site perfectly captures our brand essence.",
    name: "Michael Chen",
    role: "Founder",
    company: "Luxe Living",
    image: "/assets/necole.webp"
  },
  {
    id: "3",
    content: "Professional, responsive, and incredibly talented. They delivered our e-commerce platform on time and on budget. A game changer.",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Gourmet Foods Co",
    image: "/assets/lumina.webp"
  },
  {
    id: "4",
    content: "Our conversion rate increased by 150% after the redesign. The best investment we've made in our digital strategy.",
    name: "David Williams",
    role: "Operations Manager",
    company: "BuildRight Construction",
    image: "/assets/elysian.webp"
  }
];

// FAQ
export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4-8 weeks depending on scope and complexity. We'll provide a detailed timeline during our discovery call."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer fixed-price packages for most projects and hourly rates for ongoing work. Each quote is tailored to your specific needs."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer maintenance packages and are always available for ad-hoc support. Our clients have access to our team for any issues."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every site we build is fully responsive and optimized for all devices from the ground up."
  },
  {
    question: "Do you handle content creation?",
    answer: "We can assist with copywriting, photography, and video production as part of our full-service offerings."
  }
];

// Team
export const TEAM = [
  {
    id: "1",
    name: "Marvellous Abiola",
    role: "Founder & Lead Developer",
    bio: "Full-stack engineer with 5+ years building high-performance web applications for global clients.",
    image: "/assets/marvellous.webp",
    linkedin: "https://linkedin.com/in/marvellous-ogunleke2025",
    website: "https://bestricky.com"
  },
  {
    id: "2",
    name: "Sarah Nkosi",
    role: "UI/UX Designer",
    bio: "Award-winning designer passionate about creating intuitive, beautiful user experiences that drive engagement.",
    image: "/assets/necole.webp",
    linkedin: "https://linkedin.com"
  },
  {
    id: "3",
    name: "David Okafor",
    role: "Backend Engineer",
    bio: "Server-side specialist focused on scalable architectures, API design, and database optimization.",
    image: "/assets/victoroshimen.webp",
    linkedin: "https://linkedin.com"
  },
  {
    id: "4",
    name: "Chioma Eze",
    role: "Project Manager",
    bio: "Ensures every project stays on track, on budget, and exceeds client expectations through meticulous planning.",
    image: "/assets/lumina.webp",
    linkedin: "https://linkedin.com"
  }
];

// Blog posts (guides)
export const BLOG_POSTS = [
  {
    slug: "why-speed-matters",
    title: "Why Website Speed Directly Impacts Your Revenue",
    category: "Guides",
    readTime: "8 min read",
    author: "Marvellous Abiola",
    date: "April 15, 2026",
    image: "/assets/synapse.webp",
    content: "<p>Website speed is critical for user experience and conversions. In this guide, we explore how loading times affect bounce rates and sales, and what you can do to optimize your site.</p><p>Studies show that a 1-second delay can reduce conversions by 7%. We'll walk through practical steps to improve performance.</p>",
    relatedServiceId: "web-dev"
  },
  {
    slug: "ux-principles-for-conversion",
    title: "5 UX Principles That Double Conversions",
    category: "Guides",
    readTime: "6 min read",
    author: "Sarah Nkosi",
    date: "April 2, 2026",
    image: "/assets/lumina.webp",
    content: "<p>Great UX is invisible. We break down five core principles that guide our design process and consistently boost conversion rates for clients.</p>",
    relatedServiceId: "ui-ux"
  },
  {
    slug: "choosing-tech-stack",
    title: "How to Choose the Right Tech Stack for Your Startup",
    category: "Guides",
    readTime: "10 min read",
    author: "David Okafor",
    date: "March 20, 2026",
    image: "/assets/neonpulse.webp",
    content: "<p>Choosing the right technology early on can save you time and money. We compare popular stacks and help you make an informed decision.</p>",
    relatedServiceId: "full-stack"
  }
];

// FAQ Blog Posts
export const FAQ_BLOGS = [
  {
    slug: "faq-hosting",
    title: "Web Hosting Frequently Asked Questions",
    category: "FAQ",
    readTime: "3 min read",
    author: "Bestricky",
    date: "April 10, 2026",
    image: "/assets/B.webp",
    content: "<p>Answers to common questions about web hosting, domains, SSL certificates, and domain registration.</p>"
  },
  {
    slug: "faq-maintenance",
    title: "Website Maintenance FAQ",
    category: "FAQ",
    readTime: "4 min read",
    author: "Bestricky",
    date: "March 15, 2026",
    image: "/assets/Arial.webp",
    content: "<p>Everything you need to know about keeping your website secure, updated, and performing optimally.</p>"
  }
];
