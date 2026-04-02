
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
    id: 'victor-oshimen',
    title: 'Victor Osimhen Arena',
    subtitle: 'Personal Brand Website',
    description: 'A high-impact personal brand website for the professional footballer.',
    problem: 'Limited digital presence and fan engagement opportunities.',
    solution: 'Scroll-driven cinematic motion design showcasing career highlights and achievements.',
    impact: 'Enhanced global fan engagement and brand value.',
    tech: ['React', 'Framer Motion', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://victoroshimen.vercel.app',
    category: 'Personal Brand'
  },
  {
    id: 'aura-ex',
    title: 'AuraEx Marketplace',
    subtitle: 'B2B Platform',
    description: 'B2B marketplace for influencer discovery and booking.',
    problem: 'Inefficient influencer matching and booking process.',
    solution: 'AI-powered influencer discovery and automated booking system.',
    impact: 'Streamlined operations and increased successful bookings.',
    tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://aura-ex.vercel.app',
    category: 'B2B Platform'
  },
  {
    id: 'dj-cuppy',
    title: 'DJ Cuppy Global',
    subtitle: 'Entertainment Portfolio',
    description: 'Immersive media showcase for the international DJ.',
    problem: 'Needed a dynamic platform to showcase global performances and media.',
    solution: 'Immersive media showcase with event integration and seamless video streaming.',
    impact: 'Enhanced global presence and fan engagement.',
    tech: ['React', 'Video Integration', 'Social Media API'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://djcuppy-theta.vercel.app',
    category: 'Entertainment'
  },
  {
    id: 'gourmet',
    title: 'Gourmet Kitchen',
    subtitle: 'Culinary Experience Platform',
    description: 'A premium food and recipe discovery platform for culinary enthusiasts.',
    problem: 'Lack of an immersive, high-end digital interface for modern cooking inspiration.',
    solution: 'A visual-heavy, grid-based layout with smooth transitions for recipe exploration.',
    impact: 'Elevated user appetite and engagement through high-fidelity food photography and UX.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://gourmet-beta.vercel.app',
    category: 'Food & Lifestyle'
  },
  {
    id: 'necole',
    title: 'NECOLE Bitchie',
    subtitle: 'Digital Magazine App',
    description: 'A modern, fast-loading lifestyle and pop-culture magazine application.',
    problem: 'Traditional magazine layouts often feel cluttered and slow on mobile devices.',
    solution: 'A clean, typography-focused "app-like" experience optimized for mobile reading.',
    impact: 'Improved session duration and content discoverability for entertainment news.',
    tech: ['React', 'Next.js', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://necole.vercel.app',
    category: 'Media'
  },
  {
    id: 'coco',
    title: 'Coco Home Interiors',
    subtitle: 'Interior Design Showcase',
    description: 'A luxury home interior and architectural design portfolio.',
    problem: 'Struggling to showcase the spatial depth and luxury quality of interior projects.',
    solution: 'A minimal, spacious layout that emphasizes high-resolution architectural imagery.',
    impact: 'Positioned the brand as a top-tier luxury interior designer for high-net-worth clients.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://coco-two-nu.vercel.app',
    category: 'Architecture'
  },
  {
    id: 'benelytics',
    title: 'Benlytics',
    subtitle: 'SaaS Analytics Platform',
    description: 'A sophisticated dashboard for data analysis and business intelligence.',
    problem: 'Data overload making it difficult for teams to extract actionable insights.',
    solution: 'A streamlined dashboard with refactored components for lightning-fast performance.',
    impact: 'Simplified complex data visualization for faster executive decision-making.',
    tech: ['React', 'Next.js', 'Data Vis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.benlytics.dev',
    category: 'SaaS'
  },
  {
    id: 'yekiti-pet',
    title: 'Yekiti Pet',
    subtitle: 'Pet Care Marketplace',
    description: 'A modern e-commerce and care platform for pet owners.',
    problem: 'Fragmented online shopping experience for niche pet supplies and care.',
    solution: 'A friendly, high-trust UI that simplifies product discovery and pet service booking.',
    impact: 'Created a centralized community-feel marketplace for pet lovers.',
    tech: ['React', 'Tailwind CSS', 'E-commerce UI'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://yekiti-pet.vercel.app',
    category: 'E-commerce'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How much does a custom business website cost in 2026?',
    slug: 'business-website-cost-2026',
    excerpt: 'Understanding the investment required for a high-performing digital asset.',
    content: `
      <h1>The Shocking Truth About Website Costs in Nigeria (2026)</h1>

      <p>Let me ask you something: How much did you spend on your last website? ₦200,000? ₦500,000? Maybe even ₦1 million?</p>

      <p>Now ask yourself: How many new customers did it bring you last month?</p>

      <p>If the answer is "not many" or "none," you're not alone. Thousands of Nigerian businesses are pouring money into websites that look pretty but don't actually work.</p>

      <h2>The Real Cost of a "Cheap" Website</h2>

      <p>Here's what most people don't tell you: A cheap website costs you way more than you think.</p>

      <ul>
      <li><strong>Lost Revenue:</strong> Every visitor who bounces because your site is slow or ugly represents lost sales</li>
      <li><strong>Missed Opportunities:</strong> Your competitors are converting leads while you're stuck with a digital brochure</li>
      <li><strong>Brand Damage:</strong> A bad website makes your business look unprofessional</li>
      </ul>

      <p>Think of your website as your 24/7 salesperson. Would you hire a salesperson who sleeps on the job and never closes deals?</p>

      <h2>What Actually Determines Website Cost in Nigeria</h2>

      <p>The price of a website depends on what you want it to DO, not just how it looks.</p>

      <h3>1. Performance That Drives Results</h3>

      <p>Your website needs to be fast. Like, under-2-seconds fast. In Nigeria's mobile-dominated market, anything slower is just wasting your money.</p>

      <p>We build websites that:</p>
      <ul>
      <li>Load instantly on any device</li>
      <li>Work perfectly on slow Nigerian internet connections</li>
      <li>Convert visitors into customers</li>
      </ul>

      <h3>2. User Experience That Converts</h3>

      <p>Ever visited a website and thought, "This is confusing as hell"? That's what happens when you skimp on UX design.</p>

      <p>Our websites are built for Nigerian users:</p>
      <ul>
      <li>Clear navigation in simple English</li>
      <li>Mobile-first design (because 70% of Nigerians shop on phones)</li>
      <li>Intuitive flows that guide visitors to take action</li>
      </ul>

      <h3>3. Features That Actually Matter</h3>

      <p>No more "nice to have" features that nobody uses. We focus on what drives business results:</p>

      <ul>
      <li>Contact forms that actually get filled out</li>
      <li>WhatsApp integration for Nigerian communication preferences</li>
      <li>Payment gateways that work with MTN Money and Paystack</li>
      </ul>

      <h2>Why Most Nigerian Websites Fail (And How We Fix It)</h2>

      <p>I've worked with hundreds of Nigerian businesses, and I see the same mistakes over and over:</p>

      <p><strong>The Freelancer Trap:</strong> "I'll get a cheap developer from Upwork." Six months later, you're still fixing bugs.</p>

      <p><strong>The Template Disaster:</strong> Beautiful design, zero functionality. Looks great in screenshots, fails in real life.</p>

      <p><strong>The "I'll Do It Myself" Myth:</strong> Unless you're a developer, this almost always ends in tears.</p>

      <p>At Bestricky, we combine design, development, and marketing under one roof. No handoffs, no miscommunication, no excuses.</p>

      <h2>Real Talk: What Does a Good Website Cost?</h2>

      <p>Let's cut the nonsense. A professional website that actually works costs between ₦500,000 - ₦2 million in Nigeria.</p>

      <p>But here's the thing: That investment pays for itself within 3-6 months through increased sales and leads.</p>

      <p>We've helped Lagos restaurants increase bookings by 300%, Abuja consulting firms land 5x more clients, and Port Harcourt retailers triple their online sales—all within months of launch.</p>

      <h2>Ready to Stop Wasting Money on Websites That Don't Work?</h2>

      <p>Your website speed isn't just a technical issue—it's a business killer.</p>

      <p><a href="/contact">Book a free consultation with us today</a>. We'll show you exactly how a professional website can transform your business.</p>

      <p>No sales pitch, just honest advice based on helping 200+ Nigerian businesses succeed online.</p>

      <p>Let's build something that actually works for your business. <a href="/services">Get started now</a>.</p>
    `,
    date: 'Oct 12, 2025',
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
      <h1>Your Website is Too Slow (And It's Killing Your Business)</h1>

      <p>Let me paint a picture for you.</p>

      <p>It's 2 PM on a Tuesday. You're at your desk when your phone buzzes—a potential client just visited your website. Excited, you check your analytics.</p>

      <p>But here's what actually happened: They landed on your site, waited 8 seconds for it to load, got frustrated, and left. Never to return.</p>

      <p>Sound familiar? You're not alone. Slow websites are costing Nigerian businesses millions in lost revenue every year.</p>

      <h2>The Brutal Truth About Site Speed in Nigeria</h2>

      <p>In Lagos traffic, we complain about 30-minute delays. On websites? We expect instant results.</p>

      <p>Google research shows that:</p>
      <ul>
      <li>53% of mobile users abandon sites that take longer than 3 seconds to load</li>
      <li>Slow sites lose 20% of their traffic every additional second of load time</li>
      <li>Fast websites convert 2.5x more visitors into customers</li>
      </ul>

      <p>Think about your own browsing habits. How many times have you closed a slow-loading site and gone to a competitor?</p>

      <h2>What's Actually Slowing Down Your Nigerian Website?</h2>

      <p>Most website speed issues aren't complicated—they're just ignored.</p>

      <h3>1. Images That Weigh a Ton</h3>
      <p>You took some beautiful photos with your iPhone, uploaded them straight to your site. Each image is 5MB. On a 3G connection in Abuja? That's 30 seconds of loading time.</p>

      <h3>2. Cheap Hosting That Can't Handle Traffic</h3>
      <p>That ₦5,000/month shared hosting plan works fine... until you get 50 visitors at once. Then everything crashes.</p>

      <h3>3. Bloated Code and Too Many Plugins</h3>
      <p>Every WordPress plugin you add slows things down. That "contact form" plugin? It's loading scripts from 5 different servers.</p>

      <h3>4. No Mobile Optimization</h3>
      <p>Your site looks great on desktop, but on mobile? It's a disaster. Nigeria is a mobile-first market—70% of internet access happens on phones.</p>

      <h2>How We Make Nigerian Websites Lightning Fast</h2>

      <p>Speed isn't a "nice to have"—it's essential for business survival.</p>

      <p>Here's what we do differently:</p>

      <h3>1. Modern Frameworks That Actually Work</h3>
      <p>We use Next.js and React, not outdated WordPress templates. These frameworks are built for speed from the ground up.</p>

      <h3>2. Image Optimization You Can Actually See</h3>
      <p>Every image gets compressed, resized, and served in the right format. Your 5MB photo becomes a 50KB file that loads instantly.</p>

      <h3>3. Smart Hosting Solutions</h3>
      <p>We don't use cheap shared hosting. Our sites run on cloud infrastructure that scales automatically.</p>

      <h3>4. Mobile-First Design</h3>
      <p>Every site we build is designed for mobile first, then enhanced for desktop. Because that's how Nigerians actually use the internet.</p>

      <h2>Real Results from Speed Optimization</h2>

      <p>Last month, we optimized a Lagos e-commerce site. Their load time went from 8 seconds to 1.2 seconds.</p>

      <p>Result? Conversions increased by 340% in the first week.</p>

      <p>Another client? A Port Harcourt consulting firm. After speed fixes, their Google rankings jumped 15 positions, bringing in 3x more leads.</p>

      <h2>The Cost of Slow: Real Numbers from Nigerian Businesses</h2>

      <p>Let's do the math for a typical Lagos business:</p>

      <ul>
      <li>Average monthly visitors: 2,000</li>
      <li>Bounce rate due to speed: 50%</li>
      <li>Average customer value: ₦25,000</li>
      <li>Monthly lost revenue: ₦25 million</li>
      </ul>

      <p>That's ₦300 million in lost revenue per year. All because of a slow website.</p>

      <h2>Ready to Stop Losing Customers to Slow Loading Times?</h2>

      <p>Your website speed isn't just a technical issue—it's a business killer.</p>

      <p><a href="/contact">Book a free speed audit with us today</a>. We'll analyze your site and give you a detailed report with specific fixes.</p>

      <p>Most issues can be resolved in days, not months. And the ROI? Usually pays for itself within weeks.</p>

      <p>Don't let slow loading times cost you another customer. <a href="/services">Let's fix your website speed now</a>.</p>
    `,
    date: 'Nov 05, 2025',
    readTime: '8 min read',
    author: 'Engineering Team',
    category: 'Technical SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'web-dev'
  },
  {
    id: '3',
    title: 'Mobile App Development for Nigerian Businesses: Starting from ₦150,000',
    slug: 'mobile-app-development-nigeria-costs-benefits',
    excerpt: 'Why mobile apps are essential for Nigerian businesses in 2025, with local market advantages and international scalability.',
    content: `
      <h1>Mobile Apps Are Eating Nigeria's Business World</h1>

      <p>Open your phone right now. How many apps do you have?</p>

      <p>Banking apps, food delivery, ride-hailing, shopping, social media... the list goes on.</p>

      <p>Now ask yourself: Where's my business in all this?</p>

      <p>If you don't have an app yet, you're missing out on the biggest business opportunity in Nigeria right now.</p>

      <h2>The Mobile App Revolution Has Arrived in Nigeria</h2>

      <p>We're not talking about some future trend. Mobile apps are dominating Nigerian commerce RIGHT NOW.</p>

      <ul>
      <li>45 million Nigerians use smartphones daily</li>
      <li>Mobile commerce hit ₦1.2 trillion in 2025 (that's bigger than some state budgets!)</li>
      <li>80% of internet access in Nigeria happens on mobile devices</li>
      <li>Apps get 3x more user engagement than mobile websites</li>
      </ul>

      <p>Think about your own habits. When was the last time you ordered food? Booked a ride? Shopped online? All through apps.</p>

      <p>Your customers are doing the same thing. If you're not there, your competitors are.</p>

      <h2>Why Nigerian Businesses Need Mobile Apps Yesterday</h2>

      <h3>1. Your Customers Are Mobile-Only</h3>
      <p>80% of Nigerians access the internet primarily through mobile devices.</p>

      <h3>2. Apps Build Loyalty Like Nothing Else</h3>
      <p>Push notifications bring customers back. Personalization creates fans. Loyalty programs keep them coming.</p>

      <h3>3. Direct Access to Your Customers</h3>
      <p>No more relying on Google or social media algorithms. Your app = direct connection to your audience.</p>

      <h3>4. Data That Actually Helps Your Business</h3>
      <p>Track everything: what they buy, when they buy, what they like. Use it to sell more, better.</p>

      <h2>The Mobile Payment Revolution</h2>

      <p>Nigeria leads Africa in mobile money. Your app needs to be part of this ecosystem.</p>

      <ul>
      <li>MTN Mobile Money integration</li>
      <li>Airtel Money payments</li>
      <li>Paystack and Flutterwave gateways</li>
      <li>USSD fallbacks for feature phones</li>
      </ul>

      <p>Customers expect one-click payments. Anything less and they'll go elsewhere.</p>

      <h2>Local Agency vs International: What Nigerian Businesses Need</h2>

      <p><strong>Why Bestricky Beats International Agencies:</strong></p>
      <ul>
      <li>We understand Nigerian user behavior (international firms don't)</li>
      <li>Local payment systems integration that actually works</li>
      <li>Same timezone, faster communication</li>
      <li>Cultural nuances that matter (like Pidgin English support)</li>
      </ul>

      <p><strong>When International Agencies Make Sense:</strong></p>
      <ul>
      <li>You need to scale to millions of users globally</li>
      <li>Cutting-edge tech that's not yet available locally</li>
      <li>Specific expertise in emerging technologies</li>
      </ul>

      <p>For most Nigerian businesses? Local expertise wins every time.</p>

      <h2>Mobile App Development Costs That Make Sense</h2>

      <p>Let's cut through the confusion. Mobile apps don't have to cost millions.</p>

      <p><strong>₦150,000 - ₦300,000:</strong> Basic apps</p>
      <ul>
      <li>Company catalog with contact info</li>
      <li>Simple service booking</li>
      <li>Basic informational app</li>
      </ul>

      <p><strong>₦300,000 - ₦600,000:</strong> E-commerce apps with payment integration</p>
      <ul>
      <li>Full shopping cart with payments</li>
      <li>Customer portals</li>
      <li>Booking and reservation systems</li>
      </ul>

      <p><strong>₦600,000+:</strong> Complex business apps (booking systems, marketplaces)</p>

      <h2>Real Nigerian Success Stories</h2>

      <p><strong>Flutterwave:</strong> Started as a payment solution, now processes billions monthly. Mobile-first from day one.</p>

      <p><strong>Paystack:</strong> Made payments simple for Nigerian businesses. Started small, now dominates the market.</p>

      <p><strong>Kuda Bank:</strong> Digital-only bank with a killer mobile app. Grew to millions of users in months.</p>

      <p>These companies didn't wait. They built apps when mobile was still "emerging" in Nigeria.</p>

      <h2>Your Competitors Are Already Mobile</h2>

      <p>Right now, as you read this, your competitors are launching apps. They're sending push notifications to customers. They're collecting data and building loyalty.</p>

      <p>What are you doing?</p>

      <h2>Ready to Join the Mobile Revolution?</h2>

      <p>Don't get left behind in Nigeria's app economy.</p>

      <p><a href="/contact">Book a free consultation with us</a>. We'll show you exactly how a mobile app can transform your business.</p>

      <p>Starting from ₦150,000, we can have your app designed, developed, and launched in 6-8 weeks.</p>

      <p>The question isn't "Can I afford an app?" It's "Can I afford NOT to have one?"</p>

      <p><a href="/services">Let's build your mobile app today</a>. Your competitors are waiting.</p>
    `,
    date: 'Dec 01, 2025',
    readTime: '7 min read',
    author: 'Bestricky Team',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'full-stack'
  },
  {
    id: '4',
    title: 'B2B vs B2C Digital Strategy: What Nigerian Companies Need to Know',
    slug: 'b2b-vs-b2c-digital-strategy-nigeria',
    excerpt: 'Understanding the differences between B2B and B2C digital marketing strategies for Nigerian businesses.',
    content: `
      <h1>B2B vs B2C: The Deadly Mistake Killing Nigerian Businesses</h1>

      <p>Let me tell you a story.</p>

      <p>Last year, I worked with a Lagos software company. They had a great product that saved businesses thousands of naira in operational costs.</p>

      <p>But they were marketing it like a consumer app: flashy TikTok videos, influencer partnerships, viral challenges.</p>

      <p>Result? Crickets. Zero leads. ₦2 million down the drain.</p>

      <p>Why? They were treating B2B customers like B2C consumers. Complete mismatch.</p>

      <p>Sound familiar? You're not alone. This mistake costs Nigerian businesses millions every year.</p>

      <h2>The B2B vs B2C Divide (And Why It Matters)</h2>

      <p>In Nigeria, we have two completely different markets:</p>

      <p><strong>B2B (Business-to-Business):</strong></p>
      <ul>
      <li>You're selling to other companies</li>
      <li>High-value deals (₦5 million+ per customer)</li>
      <li>Long sales cycles (3-12 months)</li>
      <li>Multiple decision-makers involved</li>
      </ul>

      <p><strong>B2C (Business-to-Consumer):</strong></p>
      <ul>
      <li>You're selling directly to individuals</li>
      <li>Smaller transactions (₦5,000 - ₦100,000)</li>
      <li>Quick decisions (minutes to days)</li>
      <li>Emotional, impulse-driven purchases</li>
      </ul>

      <p>MTN (B2C) spends millions on Super Bowl ads and celebrity endorsements. Dangote (B2B) focuses on industry conferences and technical whitepapers.</p>

      <p>Same country, completely different worlds.</p>

      <h2>Why Nigerian Businesses Get This Wrong</h2>

      <p>I see it all the time in Lagos and Abuja:</p>

      <p><strong>B2B companies acting like consumer brands:</strong></p>
      <ul>
      <li>Enterprise software companies trying to "go viral" on TikTok</li>
      <li>B2B SaaS companies wasting money on Instagram influencers</li>
      <li>Industrial equipment firms creating "fun" social media content</li>
      </ul>

      <p><strong>B2C companies trying to be "professional":</strong></p>
      <ul>
      <li>Consumer brands spending fortunes on LinkedIn ads</li>
      <li>E-commerce stores creating "thought leadership" content</li>
      <li>Fast-moving consumer goods ignoring social media trends</li>
      </ul>

      <p>The result? Marketing budgets that look impressive but deliver zero results.</p>

      <h2>B2B Digital Strategy: The Nigerian Playbook</h2>

      <p>If you're selling to businesses, your digital strategy needs to be serious, professional, and ROI-focused.</p>

      <h3>1. Content That Positions You as an Expert</h3>
      <ul>
      <li>Whitepapers solving real business problems</li>
      <li>Case studies showing measurable results</li>
      <li>Industry insights and market analysis</li>
      <li>Technical guides and best practices</li>
      </ul>

      <h3>2. Platforms Where Decision-Makers Hang Out</h3>
      <ul>
      <li>LinkedIn (not TikTok or Instagram)</li>
      <li>Industry forums and communities</li>
      <li>Professional networking events</li>
      <li>Google search (SEO for industry keywords)</li>
      </ul>

      <h3>3. Messaging That Speaks to Business Pain Points</h3>
      <ul>
      <li>"Reduce operational costs by 40%"</li>
      <li>"Increase efficiency by 200%"</li>
      <li>"Scale your business without adding headcount"</li>
      <li>ROI-focused, not emotional</li>
      </ul>

      <h3>4. Sales Funnels Built for Long Cycles</h3>
      <ul>
      <li>Educational content that nurtures prospects</li>
      <li>Webinars and virtual events</li>
      <li>Free trials and demos</li>
      <li>Account-based marketing approaches</li>
      </ul>

      <h2>B2C Digital Strategy: The Nigerian Reality</h2>

      <p>If you're selling to consumers, speed and emotion win over logic.</p>

      <h3>1. Social Media Domination</h3>
      <ul>
      <li>Instagram and TikTok for visual, emotional content</li>
      <li>Facebook for community building</li>
      <li>Short-form video content that spreads virally</li>
      <li>User-generated content campaigns</li>
      </ul>

      <h3>2. Influencer and Celebrity Partnerships</h3>
      <ul>
      <li>Nigerian influencers who actually resonate with your audience</li>
      <li>Celebrity endorsements that feel authentic</li>
      <li>Micro-influencers for niche markets</li>
      <li>Ambassador programs for long-term brand building</li>
      </ul>

      <h3>3. Emotional, Benefit-Focused Messaging</h3>
      <ul>
      <li>"Feel confident and beautiful"</li>
      <li>"Save time for what matters"</li>
      <li>"Join the community of successful people"</li>
      <li>Lifestyle and aspiration-driven content</li>
      </ul>

      <h3>4. Fast-Track Conversion Funnels</h3>
      <ul>
      <li>One-click purchase options</li>
      <li>Limited-time offers and flash sales</li>
      <li>Social proof and urgency tactics</li>
      <li>Mobile-optimized checkout flows</li>
      </ul>

      <h2>The Hybrid Challenge: When You Serve Both Markets</h2>

      <p>Many Nigerian businesses aren't purely B2B or B2C. A construction company sells to developers (B2B) and homeowners (B2C).</p>

      <p>The key? Separate your messaging and channels. Don't confuse your audiences.</p>

      <ul>
      <li>Different websites or landing pages</li>
      <li>Segmented social media content</li>
      <li>Tailored email campaigns</li>
      <li>Clear brand positioning for each market</li>
      </ul>

      <h2>Stop Wasting Money on the Wrong Strategy</h2>

      <p>Your competitors are getting this right. They're targeting the right audiences with the right messages and dominating their markets.</p>

      <p>Meanwhile, you're spreading your budget thin across channels that don't work for your business.</p>

      <h2>Ready to Fix Your B2B/B2C Strategy?</h2>

      <p>Whether you're B2B, B2C, or both, the right digital strategy can transform your business.</p>

      <p><a href="/contact">Book a free strategy consultation with us</a>. We'll analyze your business and create a custom digital roadmap.</p>

      <p>No generic advice—just actionable strategies based on what works in the Nigerian market.</p>

      <p>Let's stop wasting marketing money and start getting real results. <a href="/services">Get your strategy session today</a>.</p>
    `,
    date: 'Dec 10, 2025',
    readTime: '6 min read',
    author: 'Bestricky Team',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'branding'
  },
  {
    id: '5',
    title: 'SEO Services for Nigerian Businesses: Dominate Local and Global Search',
    slug: 'seo-services-nigeria-local-global-domination',
    excerpt: 'How SEO can help Nigerian businesses rank higher on Google locally and internationally.',
    content: `
      <h1>The SEO Truth: Why Nigerian Businesses Are Invisible Online</h1>

      <p>Let me ask you a question: When was the last time you searched for something on Google?</p>

      <p>"Best hotels in Lagos." "Cheap flights to Abuja." "Top restaurants in Port Harcourt."</p>

      <p>Now imagine you're that business owner. Someone searches for exactly what you offer... and you don't show up.</p>

      <p>That's happening to thousands of Nigerian businesses every day. And they're losing millions in potential revenue.</p>

      <h2>The Invisible Problem Nigerian Businesses Face</h2>

      <p>SEO isn't just "nice to have." In Nigeria, where 85% of consumers research online before buying, poor SEO visibility is business suicide.</p>

      <p>Think about your own search habits:</p>
      <ul>
      <li>You only look at the first 3-5 results on Google</li>
      <li>If you don't find what you need, you search again with different words</li>
      <li>You rarely go past page 2</li>
      </ul>

      <p>Your competitors know this. That's why they invest in SEO. You? You're invisible.</p>

      <h2>Local SEO: Where Nigerian Customers Actually Search</h2>

      <p>Forget global dreams for a second. Let's talk about surviving in Nigeria first.</p>

      <p><strong>The Local Search Reality:</strong></p>
      <ul>
      <li>92% of Nigerians use Google for local business searches</li>
      <li>78% of local searches convert to actual purchases</li>
      <li>Mobile searches dominate (70%+ of all searches)</li>
      </ul>

      <p>When someone in Lagos searches "best suya spot," do they find you? When an Abuja resident needs "generator repair," are you on page 1?</p>

      <p>If not, you're losing customers to businesses that understand SEO.</p>

      <h2>Technical SEO: The Foundation Nobody Talks About</h2>

      <p>Beautiful website? Great. But if Google can't read it, you're wasting money.</p>

      <p><strong>The Technical Stuff That Matters:</strong></p>
      <ul>
      <li><strong>Site Speed:</strong> Under 2 seconds or you're invisible</li>
      <li><strong>Mobile-Friendly:</strong> 61% of searches happen on phones</li>
      <li><strong>Security First:</strong> HTTPS is required for rankings</li>
      <li><strong>Site Structure:</strong> Clear navigation that search engines understand</li>
      </ul>

      <p>Most "web designers" in Nigeria ignore this. Result? Pretty websites that nobody finds.</p>

      <h2>Content SEO: Speaking Your Customers' Language</h2>

      <p>SEO isn't about stuffing keywords. It's about creating content people actually want to read.</p>

      <p><strong>What Nigerian Searchers Really Want:</strong></p>
      <ul>
      <li>Local information (Lagos traffic, Abuja events, Port Harcourt deals)</li>
      <li>Solutions to Nigerian problems (generator issues, network problems, import delays)</li>
      <li>Authentic stories from real businesses</li>
      <li>Practical advice that works in Nigeria</li>
      </ul>

      <p>Stop creating content for robots. Create content for Nigerians.</p>

      <h2>The SEO Results Nigerian Businesses Are Getting</h2>

      <p>I've worked with dozens of Nigerian companies that transformed their business through SEO:</p>

      <p><strong>A Lagos restaurant:</strong> Went from 50 customers/week to 200+ after ranking #1 for "best pizza Lagos"</p>
      <p><strong>An Abuja consulting firm:</strong> Landed 15 new clients in 3 months by dominating "business strategy Nigeria" searches</p>
      <p><strong>A Port Harcourt e-commerce store:</strong> Increased sales by 400% by ranking for local product searches</p>

      <p>These aren't flukes. This is what proper SEO delivers.</p>

      <h2>SEO Costs That Actually Make Sense</h2>

      <p>"SEO is expensive." Really? Bad SEO is expensive. Good SEO pays for itself.</p>

      <p>Our SEO packages start from ₦150,000 and include:</p>

      <p><strong>₦150,000 - ₦300,000:</strong> Basic SEO setup</p>
      <ul>
      <li>Complete site audit</li>
      <li>Technical fixes</li>
      <li>Local keyword research</li>
      <li>Content strategy</li>
      </ul>

      <p><strong>₦300,000+:</strong> Advanced SEO domination</p>
      <ul>
      <li>Competitor analysis</li>
      <li>Monthly content creation</li>
      <li>Link building campaigns</li>
      <li>Performance tracking</li>
      </ul>

      <h2>The Cost of Ignoring SEO</h2>

      <p>Let's do the math:</p>

      <ul>
      <li>Average Nigerian business loses 60-80% of potential customers due to poor SEO</li>
      <li>For a business with ₦10 million monthly revenue, that's ₦6-8 million in lost sales</li>
      <li>Per year? ₦72-96 million down the drain</li>
      </ul>

      <p>Meanwhile, competitors with good SEO are growing 200-500% annually.</p>

      <h2>Ready to Stop Being Invisible?</h2>

      <p>Your competitors aren't waiting. They're investing in SEO and dominating their markets.</p>

      <p>Every day you delay, you lose more customers to businesses that show up in search results.</p>

      <p><a href="/contact">Book a free SEO consultation with us today</a>. We'll analyze your current SEO status and show you exactly how to get found.</p>

      <p>No hype, just real strategies that work in the Nigerian market.</p>

      <p>Let's get your business on page 1 where your customers are searching. <a href="/services">Start your SEO journey now</a>.</p>
    `,
    date: 'Dec 15, 2025',
    readTime: '8 min read',
    author: 'Bestricky Team',
    category: 'SEO & Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c893?auto=format&fit=crop&q=80&w=800',
    relatedServiceId: 'web-dev'
  },
  {
    id: '6',
    title: 'Building E-commerce Websites for Nigerian Startups: From ₦150,000 to Millions',
    slug: 'ecommerce-websites-nigeria-startups-revenue-growth',
    excerpt: 'How Nigerian startups can build profitable e-commerce websites starting from ₦150,000.',
    content: `
      <h1>E-commerce in Nigeria: Your ₦150,000 Ticket to Millions</h1>

      <p>I get messages every week from Nigerian entrepreneurs asking: "Should I start an online store?"</p>

      <p>My answer is always the same: "If you haven't started yet, you're already late."</p>

      <p>Nigeria's e-commerce market hit ₦2.5 trillion in 2025. By 2030? It'll be ₦10 trillion+. The question isn't "should you go online?" It's "how fast can you get there?"</p>

      <h2>The E-commerce Reality Check for Nigerian Businesses</h2>

      <p>Let's cut through the hype and get real.</p>

      <p><strong>The Numbers Don't Lie:</strong></p>
      <ul>
      <li>45 million Nigerians shop online regularly</li>
      <li>Mobile commerce accounts for 85% of all e-commerce transactions</li>
      <li>Average order value increased 300% in the last 2 years</li>
      <li>70% of Nigerians now prefer online shopping over physical stores</li>
      </ul>

      <p><strong>The Brutal Truth:</strong> Traditional retail stores are closing left and right. Online stores are taking their customers. And the gap is widening every day.</p>

      <h2>Why Nigerian Businesses Are Terrified of E-commerce</h2>

      <p>I hear the same excuses over and over:</p>

      <p>"E-commerce is too expensive." "I don't know how to ship products." "What about payment fraud?" "My customers aren't online."</p>

      <p>All valid concerns. But they're all solvable. And the businesses that figure this out? They're the ones building empires.</p>

      <h2>The E-commerce Features Nigerian Businesses Actually Need</h2>

      <p>Forget fancy features. Focus on what converts in Nigeria.</p>

      <h3>1. Mobile-First Design (Non-Negotiable)</h3>
      <p>80% of shopping happens on phones. Your site must be perfect on mobile or you're wasting money.</p>

      <h3>2. Payment Systems Nigerians Actually Use</h3>
      <ul>
      <li>MTN Mobile Money (most popular)</li>
      <li>Airtel Money</li>
      <li>Opay</li>
      <li>Paystack (for card payments)</li>
      <li>Bank transfers</li>
      </ul>

      <p>No crypto nonsense. No complicated international gateways. Stick to what works.</p>

      <h3>3. Shipping That Doesn't Frustrate Customers</h3>
      <ul>
      <li>GIG Logistics integration</li>
      <li>DHL for express delivery</li>
      <li>Local courier partnerships</li>
      <li>Real-time tracking</li>
      <li>Clear delivery timelines</li>
      </ul>

      <h3>4. Trust Signals That Convert</h3>
      <ul>
      <li>Customer reviews and ratings</li>
      <li>Secure checkout (HTTPS mandatory)</li>
      <li>Return policies in simple English</li>
      <li>Trust badges and guarantees</li>
      </ul>

      <h3>5. Analytics That Actually Help</h3>
      <ul>
      <li>Real-time sales tracking</li>
      <li>Customer behavior insights</li>
      <li>Inventory management</li>
      <li>Conversion rate optimization</li>
      </ul>

      <h2>The Cost Breakdown: E-commerce That Makes Financial Sense</h2>

      <p>"E-commerce costs too much." Really? Let's break it down.</p>

      <p><strong>Our Packages Start From ₦150,000 Because We Know Reality:</strong></p>

      <p><strong>₦150,000 - ₦250,000: Basic Online Store</strong></p>
      <ul>
      <li>Clean, mobile-optimized design</li>
      <li>Payment integration (Paystack + mobile money)</li>
      <li>Basic product catalog</li>
      <li>Contact forms and customer support</li>
      <li>Basic analytics</li>
      </ul>

      <p><strong>₦250,000 - ₦450,000: Serious Business Store</strong></p>
      <ul>
      <li>Advanced product management</li>
      <li>Inventory tracking</li>
      <li>Customer accounts and order history</li>
      <li>Email marketing integration</li>
      <li>Advanced analytics and reporting</li>
      </ul>

      <p><strong>₦450,000+: Enterprise-Level Platforms</strong></p>
      <ul>
      <li>Multi-vendor capabilities</li>
      <li>Advanced shipping integrations</li>
      <li>Custom features for your business model</li>
      <li>API integrations</li>
      <li>White-label solutions</li>
      </ul>

      <h2>Real Nigerian Success Stories</h2>

      <p><strong>Konga:</strong> Started in a small office, now Africa's largest online retailer. Revenue? Billions.</p>

      <p><strong>Jumia:</strong> Built from scratch, now the go-to for online shopping across West Africa.</p>

      <p><strong>Local Heroes:</strong> That small boutique in Lagos now sells to customers in Abuja, Port Harcourt, and Kano—all from one website.</p>

      <h2>Stop Waiting. Start Selling.</h2>

      <p>Your competitors are already online, converting visitors into customers.</p>

      <p><a href="/contact">Book a free e-commerce consultation with us today</a>. We'll show you exactly how to launch your online store.</p>

      <p>No technical jargon. No sales pressure. Just honest advice on what works in Nigeria.</p>

      <p>Ready to join the e-commerce revolution? <a href="/services">Let's build your online empire</a>. Starting from ₦150,000, your next million could be just weeks away.</p>
    `,
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    author: 'Bestricky Team',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
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
