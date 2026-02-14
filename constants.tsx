
import { Service, Project, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    description: 'High-performance websites using Next.js, React, and Node.js.',
    longDescription: 'We build enterprise-grade web applications that are fast, secure, and infinitely scalable. Our development process prioritizes performance and technical SEO from day one.',
    problem: 'Slow-loading, insecure websites that fail to rank on search engines.',
    value: 'Faster load times, higher conversion rates, and a robust foundation for future growth.',
    outcome: 'A technical masterpiece that serves as a 24/7 high-performing salesperson for your business.',
    icon: 'Code',
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'],
    faqs: [
      { question: "How long does a custom build take?", answer: "Typically 6-10 weeks depending on complexity." },
      { question: "Will my site be mobile-friendly?", answer: "Every site we build is mobile-first and fully responsive." }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design, wireframing, prototyping, and design systems.',
    longDescription: 'Our design philosophy is rooted in user behavior and psychology. We don\'t just make things pretty; we make them functional and intuitive.',
    problem: 'High bounce rates and user frustration due to poor navigation and confusing interfaces.',
    value: 'Enhanced user satisfaction and lower customer acquisition costs through intuitive flows.',
    outcome: 'A seamless, engaging user experience that keeps customers coming back.',
    icon: 'Figma',
    tools: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
    faqs: [
      { question: "Do you provide the Figma source files?", answer: "Yes, you have full ownership of all design assets." }
    ]
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Solutions',
    description: 'Complex web applications, API development, and cloud infrastructure.',
    longDescription: 'From complex dashboards to automated workflows, we build the engine that powers your business operations.',
    problem: 'Disconnected systems and manual processes that hinder business scaling.',
    value: 'Streamlined operations and data-driven decision-making capabilities.',
    outcome: 'A fully integrated digital ecosystem that automates your growth.',
    icon: 'Layers',
    tools: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL']
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Logo design, visual storytelling, and comprehensive brand consistency.',
    longDescription: 'We translate your business values into a visual language that resonates with your target audience and builds lasting trust.',
    problem: 'Inconsistent brand image that fails to project professionalism or authority.',
    value: 'Market differentiation and immediate recognition in a crowded digital landscape.',
    outcome: 'A powerful brand identity that commands premium pricing and loyalty.',
    icon: 'PenTool',
    tools: ['Adobe Illustrator', 'Visual Strategy', 'Brand Guidelines']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'marketmapper',
    title: 'MarketMapper',
    subtitle: 'Intelligent Market Analysis & Logistics Platform',
    description: 'A comprehensive platform for entrepreneurs to identify profitable opportunities and optimize complex logistics.',
    problem: 'Business owners were struggling with fragmented data and inefficient route planning for logistics.',
    solution: 'Built a centralized dashboard with real-time data visualization and AI-powered route optimization.',
    impact: 'Increased operational efficiency by 40% and reduced logistics costs for clients by an average of 15%.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'SaaS / Logistics'
  },
  {
    id: 'nigeria-independent',
    title: 'Nigeria Independent',
    subtitle: 'AI-Driven Cultural Heritage Platform',
    description: 'Interactive AI experiences and virtual journeys through Nigeria\'s rich history and cultural heritage.',
    problem: 'Younger generations were losing touch with cultural history due to lack of interactive digital archives.',
    solution: 'Developed an AI-powered conversational platform that allows users to "chat" with historical figures and explore 3D virtual sites.',
    impact: 'Engaged over 50,000 active monthly users and received recognition for cultural preservation.',
    tech: ['Next.js', 'Gemini API', 'Three.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    category: 'Education / AI'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How much does a custom business website cost in 2024?',
    slug: 'business-website-cost-2024',
    excerpt: 'Understanding the investment required for a high-performing digital asset.',
    content: `
      ## The True Value of a Digital Asset
      When you ask about the cost of a website, you're actually asking about the value of your digital storefront. A cheap website costs you more in lost leads than a premium one costs to build.

      ### Factors Influencing Cost:
      1. **Complexity & Features:** A basic landing page vs. an enterprise SaaS platform.
      2. **Design Requirements:** Template-based vs. fully custom UI/UX.
      3. **Performance Optimization:** Ensuring sub-second load times.

      ### Why an Agency is Better than a Freelancer
      While freelancers offer lower upfront costs, agencies like Bestricky provide a full-stack team (Design, Dev, SEO, QA) ensuring the site actually converts.
    `,
    date: 'Oct 12, 2024',
    readTime: '6 min read',
    author: 'Bestricky Team',
    category: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e61d?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'web-dev'
  },
  {
    id: '2',
    title: 'Why does my website load slowly? (And how to fix it)',
    slug: 'website-speed-optimization',
    excerpt: 'Speed is a ranking factor. If your site is slow, you are losing money.',
    content: `
      ## Speed is the New SEO
      Google prioritizes sites that load fast. If your site takes longer than 3 seconds to load, 40% of users will leave.

      ### Common Culprits:
      - **Unoptimized Images:** Large files that haven't been compressed.
      - **Poor Hosting:** Shared hosting that can't handle traffic spikes.

      ### Our Solutions:
      We use Next.js and static site generation to ensure near-instant load times.
    `,
    date: 'Nov 05, 2024',
    readTime: '8 min read',
    author: 'Engineering Team',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'web-dev'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'LogiTech Solutions',
    content: 'Bestricky transformed our legacy systems into a modern platform that our team actually loves using. Our efficiency is through the roof.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'David Okafor',
    role: 'Marketing Director',
    company: 'Heritage Fund',
    content: 'The attention to detail in the UI/UX design was incredible. They truly understood our brand and our audience.',
    image: 'https://i.pravatar.cc/150?u=david'
  }
];
