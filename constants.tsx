
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
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
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
    tools: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
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
    tools: ['Adobe Illustrator', 'Visual Strategy', 'Brand Guidelines'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'precision-apex',
    title: 'Precision Apex Solutions',
    subtitle: 'Industrial Engineering Platform',
    description: 'A technical, high-performance interface designed for a global leader in heavy machinery and automation.',
    problem: 'The need to communicate engineering precision and corporate scale to high-level industrial stakeholders.',
    solution: 'A "Control Center" UI featuring live metadata displays, system status indicators, and a data-dense grid architecture.',
    impact: 'Established immediate technical authority and streamlined the consultation process for global corporate leaders.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://precisionapex.vercel.app/',
    category: 'Corporate Industrial'
  },
  {
    id: 'velvet-vine',
    title: 'Velvet & Vine Organics',
    subtitle: 'Luxury E-commerce Experience',
    description: 'A calm, nature-inspired digital storefront for a premium plant-based skincare brand.',
    problem: 'The challenge of translating the tactile, sensory experience of organic skincare into a digital environment.',
    solution: 'A minimal, ritual-focused interface emphasizing ingredient transparency and botanical aesthetics.',
    impact: 'Created a high-trust shopping environment that elevated brand prestige and emphasized sustainable luxury.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'E-commerce UI'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://vine-six.vercel.app/',
    category: 'E-commerce'
  },
  {
    id: 'neon-pulse',
    title: 'Neon Pulse Media',
    subtitle: 'Digital Entertainment Agency',
    description: 'A high-energy, motion-driven platform designed for a modern creative studio and media distributor.',
    problem: 'Translating the fast-paced, vibrant energy of digital entertainment into a functional web experience.',
    solution: 'A high-contrast "Neon" aesthetic utilizing layered visuals, cinematic motion, and a bold creator-centric layout.',
    impact: 'Positioned the brand as a leader in the digital revolution, effectively showcasing 10M+ views in social proof.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'High-Energy UI'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://neonpulse-six.vercel.app/',
    category: 'Media & Entertainment'
  },
  {
    id: 'elysian-atelier',
    title: 'Elysian Atelier',
    subtitle: 'Luxury Fashion Storefront',
    description: 'A high-end editorial e-commerce experience designed for an artisanal fashion house.',
    problem: 'Communicating the "unseen details" and exclusivity of luxury craftsmanship in a digital space.',
    solution: 'An elegant, minimal UI utilizing editorial-style layouts, sophisticated typography, and limited-release scarcity cues.',
    impact: 'Elevated perceived brand value and positioned the store as a premium destination for high-ticket fashion.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Editorial UI'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://elysian-green.vercel.app/',
    category: 'Luxury Retail'
  },
  {
    id: 'lumina-wellness',
    title: 'Lumina Wellness Center',
    subtitle: 'Holistic Healthcare Platform',
    description: 'A patient-centered medical interface designed to bridge the gap between clinical expertise and holistic well-being.',
    problem: 'High-friction appointment booking and the cold, impersonal feel of traditional medical websites.',
    solution: 'A calm, trust-oriented UI featuring integrated booking workflows, expert profiles, and a resource-rich health blog.',
    impact: 'Reduced booking drop-off rates and established a supportive digital environment for over 10,000+ patients.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Conversion-Optimized UI'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://lumina-six-rust.vercel.app/',
    category: 'Healthcare'
  },
  {
    id: 'synapse-flow',
    title: 'Synapse Flow',
    subtitle: 'SaaS Automation Platform',
    description: 'A next-generation B2B dashboard for data orchestration and intelligent workflow automation.',
    problem: 'High cognitive load and complexity in managing fragmented data flows across multiple enterprise tools.',
    solution: 'A high-fidelity interface focused on clarity, featuring real-time data visualization, smart alerts, and an intuitive visual logic builder.',
    impact: 'Improved decision-making speed and reduced manual hours by providing a centralized "brain" for complex business operations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Data Visualization UI'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://synapse-omega-two.vercel.app/',
    category: 'SaaS & Fintech'
  },
  {
    id: 'nook-hearth',
    title: 'Nook & Hearth',
    subtitle: 'Lifestyle Home Decor Store',
    description: 'A cozy, high-converting e-commerce platform for a curated home goods and lifestyle brand.',
    problem: 'Creating a digital shopping experience that feels as warm, tactile, and intentional as physical home styling.',
    solution: 'A "Slow Living" design aesthetic featuring soft palettes, room-inspiration galleries, and a seamless "Shop the Look" integration.',
    impact: 'Increased average order value by bridging the gap between individual products and holistic interior aesthetics.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lifestyle E-commerce UI'],
    image: 'https://images.unsplash.com/photo-1513519247388-44735dd9563c?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://nook-psi.vercel.app/',
    category: 'E-commerce'
  },
  {
    id: 'aria-vance',
    title: 'Aria Vance Consulting',
    subtitle: 'Strategic Advisory Platform',
    description: 'A high-authority personal brand website for a premier business consultant and executive coach.',
    problem: 'The need to project professional trust and high-stakes expertise to founders and C-suite executives.',
    solution: 'A sophisticated, "Consultant-First" UI featuring structured methodology breakdowns, revenue-impact metrics, and deep-trust testimonials.',
    impact: 'Established a premium digital presence that justifies high-ticket advisory fees and streamlines lead qualification.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Professional Services UI'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://nook-1vyb.vercel.app/',
    category: 'Personal Brand'
  },
  {
    id: 'victor-osimhen',
    title: 'Victor Osimhen Arena',
    subtitle: 'Personal Brand Website',
    description: 'A high-impact personal brand website for the professional footballer.',
    problem: 'Limited digital presence and fan engagement opportunities.',
    solution: 'Scroll-driven cinematic motion design showcasing career highlights and achievements.',
    impact: 'Enhanced global fan engagement and brand value.',
    tech: ['React', 'Framer Motion', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://victor-osimhen-arena.vercel.app',
    category: 'Personal Brand'
  },
  {
    id: 'cubana-sovereign',
    title: 'The Cubana Sovereign',
    subtitle: 'Personal Brand Website',
    description: 'Luxury personal brand website for the renowned entrepreneur.',
    problem: 'Needed a premium digital presence to match business stature.',
    solution: 'WebGL 3D & AI Concierge experience with immersive visuals.',
    impact: 'Elevated brand perception and customer experience.',
    tech: ['React', 'WebGL', 'Three.js', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://cubana-sovereign.vercel.app',
    category: 'Personal Brand'
  },
  {
    id: 'lukmoore-shoes',
    title: 'Lukmoore Shoes',
    subtitle: 'E-Commerce Platform',
    description: 'Premium footwear e-commerce platform with elegant shopping experience.',
    problem: 'Limited online sales channel and brand visibility.',
    solution: 'Minimalist luxury storytelling e-commerce design with seamless checkout.',
    impact: 'Significant increase in online sales and brand recognition.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://lukmoore-shoes.vercel.app',
    category: 'E-Commerce'
  },
  {
    id: 'auraex',
    title: 'AuraEx Marketplace',
    subtitle: 'B2B Platform',
    description: 'B2B marketplace for influencer discovery and booking.',
    problem: 'Inefficient influencer matching and booking process.',
    solution: 'AI-powered influencer discovery and automated booking system.',
    impact: 'Streamlined operations and increased successful bookings.',
    tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://auraex-marketplace.vercel.app',
    category: 'B2B Platform'
  },
  {
    id: 'monterosa',
    title: 'Monterosa Construction',
    subtitle: 'Construction Company Website',
    description: 'Professional portfolio website for construction company.',
    problem: 'Outdated online presence failing to attract serious clients.',
    solution: 'Industrial authority design with comprehensive project portfolios.',
    impact: 'Increased lead generation and project inquiries.',
    tech: ['React', 'GSAP', 'CMS'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://monterosa-construction.vercel.app',
    category: 'Construction'
  },
  {
    id: 'lash-hospital',
    title: 'LASH Hospital',
    subtitle: 'Healthcare Platform',
    description: 'Professional medical booking and information platform.',
    problem: 'Inefficient patient booking and information access.',
    solution: 'Professional medical booking system with patient portal.',
    impact: 'Improved patient experience and appointment scheduling.',
    tech: ['Next.js', 'Healthcare API', 'HIPAA Compliant'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://lash-hospital.vercel.app',
    category: 'Healthcare'
  },
  {
    id: 'pine-ivory',
    title: 'Pine & Ivory Ltd',
    subtitle: 'Luxury Retail Platform',
    description: 'AI-powered interior design platform for luxury retail.',
    problem: 'Limited digital reach and customer engagement.',
    solution: 'AI-powered interior design visualization and product discovery.',
    impact: 'Revolutionary customer experience and increased sales.',
    tech: ['React', 'AI/ML', 'Computer Vision', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://pine-and-ivory.vercel.app',
    category: 'Luxury Retail'
  },
  {
    id: 'dj-cuppy',
    title: 'DJ Cuppy Global',
    subtitle: 'Entertainment Portfolio',
    description: 'Immersive media showcase for the international DJ.',
    problem: 'Needed dynamic platform to showcase global performances.',
    solution: 'Immersive media showcase with event integration and streaming.',
    impact: 'Enhanced global presence and fan engagement.',
    tech: ['React', 'Video Integration', 'Social Media API'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://dj-cuppy-global.vercel.app',
    category: 'Entertainment'
  },
  {
    id: 'simi-beauty',
    title: 'Simi Beauty',
    subtitle: 'Skincare E-Commerce',
    description: 'AI-powered skin routine integration for beauty brand.',
    problem: 'Difficulty helping customers find right products.',
    solution: 'AI skin routine analysis and personalized product recommendations.',
    impact: 'Higher conversion rates and customer satisfaction.',
    tech: ['React', 'AI/ML', 'E-commerce', 'Personalization'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://simi-beauty.vercel.app',
    category: 'Skincare'
  },
  {
    id: 'chikun-ultima',
    title: 'Chikun & Ultima',
    subtitle: 'Manufacturing Corporate Website',
    description: 'Corporate website showcasing industrial scale and investor relations.',
    problem: 'Limited investor visibility and corporate communication.',
    solution: 'Professional corporate site with investor relations portal.',
    impact: 'Improved investor relations and corporate transparency.',
    tech: ['Next.js', 'Investor Portal', 'CMS'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://chikun-ultima.vercel.app',
    category: 'Manufacturing'
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
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
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
  },
  {
    id: 't3',
    name: 'Emily Chen',
    role: 'Founder',
    company: 'AuraEx',
    content: 'Our marketplace platform exceeded expectations. Bestricky delivered on time and the results speak for themselves.',
    image: 'https://i.pravatar.cc/150?u=emily'
  },
  {
    id: 't4',
    name: 'Michael Torres',
    role: 'Managing Director',
    company: 'Monterosa Construction',
    content: 'The industrial design and functionality of our new website has brought in clients we never thought possible.',
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 't5',
    name: 'Jessica Williams',
    role: 'CEO',
    company: 'Lukmoore Shoes',
    content: 'Our online sales increased by 300% after the new e-commerce platform launch. Bestricky exceeded all expectations.',
    image: 'https://i.pravatar.cc/150?u=jessica'
  },
  {
    id: 't6',
    name: 'Robert Chen',
    role: 'IT Director',
    company: 'LASH Hospital',
    content: 'The patient booking system has streamlined our operations significantly. Exceptional work and ongoing support.',
    image: 'https://i.pravatar.cc/150?u=robert'
  },
  {
    id: 't7',
    name: 'Amanda Foster',
    role: 'Brand Manager',
    company: 'Pine & Ivory',
    content: 'The AI-powered interior design feature has revolutionized how customers shop with us. Truly innovative solutions.',
    image: 'https://i.pravatar.cc/150?u=amanda'
  },
  {
    id: 't8',
    name: 'James Wilson',
    role: 'Operations Lead',
    company: 'Chikun & Ultima',
    content: 'Our corporate website now showcases our industrial capabilities perfectly. Professional, sleek, and effective.',
    image: 'https://i.pravatar.cc/150?u=james'
  }
];
