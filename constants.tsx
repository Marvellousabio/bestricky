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
    longDescription: "We design and build fast, responsive, conversion-focused websites that reflect your brand and help turn visitors into qualified leads. Every build is optimized for speed, SEO, mobile experience, and long-term growth.",
    problem: "Many businesses lose leads because their websites are slow, outdated, not mobile-friendly, or built without a clear conversion strategy.",
    value: "A professional website that builds trust, improves search visibility, and gives potential customers a clear path to contact or buy from you.",
    outcome: "A high-performance website that loads quickly, looks premium on every device, ranks better on Google, and helps generate more inquiries.",
    tools: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/assets/synapse.webp"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design that delights and converts. Wireframes, prototypes, and polished interfaces in Figma.",
    longDescription: "We create clean, user-friendly interfaces that make your product easy to understand and simple to use. From wireframes to interactive prototypes, we design experiences that guide users toward action.",
    problem: "Poorly designed apps and websites confuse users, increase drop-offs, and make even good products feel unreliable.",
    value: "A polished interface that improves user trust, reduces friction, and makes your product easier to navigate and convert from.",
    outcome: "A clear, modern UI/UX design system that your development team can build from and your users can understand quickly.",
    tools: ["Figma", "Adobe XD", "Principle", "Framer"],
    image: "/assets/lumina.webp"
  },
  {
    id: "full-stack",
    title: "Full-Stack Solutions",
    description: "End-to-end applications with robust backends, databases, and APIs. Scalable architectures built for growth.",
    longDescription: "We build complete web applications with secure backends, databases, APIs, dashboards, authentication, and admin tools. The result is a scalable product that supports your business operations and growth.",
    problem: "Manual processes, disconnected tools, and weak internal systems slow teams down and make business operations harder to manage.",
    value: "A custom platform that centralizes workflows, automates repetitive tasks, improves data visibility, and supports future scaling.",
    outcome: "A reliable full-stack application that helps your team work faster, serve customers better, and manage business processes from one place.",
    tools: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    image: "/assets/neonpulse.webp"
  },
  {
    id: "branding",
    title: "Brand Identity",
    description: "Memorable brand identities that resonate with your audience. Logos, visual systems, and brand guidelines.",
    longDescription: "We create memorable visual identities that help your business stand out across your website, social media, presentations, and marketing materials. The goal is a brand system that feels consistent, professional, and trustworthy.",
    problem: "Without a strong visual identity, businesses often look inconsistent, forgettable, or less credible than their competitors.",
    value: "A recognizable brand presence that makes your business feel more professional and helps customers remember you.",
    outcome: "A complete brand identity direction with visual consistency across your website, marketing assets, and customer touchpoints.",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    image: "/assets/elysian.webp"
  }
];

// Projects
export const PROJECTS = [
  {
    id: "auraex",
    title: "AuraEx",
    subtitle: "Influencer-brand connection platform",
    category: "Technology",
    description: "A comprehensive platform connecting influencers with brands for authentic partnerships and collaborations.",
    problem: "Fragmented influencer marketing landscape with no centralized platform for genuine connections.",
    solution: "Built a modern web platform with advanced matching algorithms, secure payments, and performance tracking.",
    heroRationale: "Lead with the value exchange between brands and creators, rather than a generic description of a marketplace. Both audiences should recognize their place in the product before they are asked to explore it.",
    ctaRationale: "Offer a clear next step for each side near the promise, then reinforce it after the matching and payment model is explained. The action becomes easier to trust once visitors understand how a partnership moves forward.",
    designDecisions: [
      {
        decision: "Bring brand discovery and influencer matching into one platform.",
        rationale: "A single path from discovery to partnership addresses the fragmentation at the heart of the brief."
      },
      {
        decision: "Make secure payments part of the collaboration workflow.",
        rationale: "Keeping payment in the product gives both sides a clearer, more trustworthy way to transact."
      },
      {
        decision: "Include campaign performance tracking.",
        rationale: "Visible performance data helps brands evaluate partnerships and gives creators a clearer view of campaign outcomes."
      }
    ],
    impact: "Connected 500+ influencers with 200+ brands, processing $2M+ in successful campaigns.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://aura-frontend-omega.vercel.app/",
    image: "/assets/aura.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "djcuppy",
    title: "DJ Cuppy",
    subtitle: "Global DJ and media personality portfolio",
    category: "Personal Brand",
    description: "A sleek, modern portfolio and media hub showcasing DJ Cuppy's global branding, music, and entertainment career.",
    problem: "No centralized online presence to showcase extensive portfolio and connect with global audience.",
    solution: "Created a dynamic portfolio website with media gallery, booking system, and social media integration.",
    heroRationale: "Lead with a recognizable personal brand and make the range of work immediately visible. For a public figure, the opening needs to establish identity and give fans, press, and partners a clear reason to continue.",
    ctaRationale: "Keep booking easy to find for high-intent visitors, while letting the media and portfolio content build context for everyone else. The page serves both immediate opportunities and longer consideration without forcing them into one path.",
    designDecisions: [
      {
        decision: "Bring portfolio, media, and music into one central destination.",
        rationale: "A single, maintained hub makes it easier for audiences and professional partners to find the right current information."
      },
      {
        decision: "Give booking a direct route from the site.",
        rationale: "Potential partners should be able to act on interest without hunting through social profiles."
      },
      {
        decision: "Connect the experience to active social channels.",
        rationale: "Social integration joins the owned website to the platforms where the audience already follows the brand."
      }
    ],
    impact: "Increased booking inquiries by 300% and grew social media following by 150K+ followers.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    liveUrl: "https://djcuppy-theta.vercel.app/",
    image: "/assets/djcuppy.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "benlytics",
    title: "Benlytics",
    subtitle: "Advanced analytics platform",
    category: "B2B SaaS",
    description: "Powerful analytics platform processing 21K+ edge requests daily, providing businesses with actionable insights.",
    problem: "Complex data analytics tools were inaccessible to non-technical business users.",
    solution: "Built an intuitive analytics dashboard with real-time data visualization, custom reports, and API integrations.",
    heroRationale: "Start with the business question analytics helps answer, not a wall of charts or technical terminology. The first screen should make the value legible to the people who need to act on the data.",
    ctaRationale: "Keep a demo or product-exploration action close to that outcome, then repeat it after the dashboard and reporting capabilities are demonstrated. That gives buyers a next step without asking them to commit before they understand the product.",
    designDecisions: [
      {
        decision: "Lead with a clear dashboard and visual summaries.",
        rationale: "Non-technical users need to understand important signals without first interpreting raw data."
      },
      {
        decision: "Pair real-time visualizations with custom reports.",
        rationale: "Quick status checks and deeper, tailored analysis serve different business questions in the same product."
      },
      {
        decision: "Connect external data through API integrations.",
        rationale: "Bringing data into one analytics workflow reduces the need to switch between disconnected tools."
      }
    ],
    impact: "Serving 500+ businesses with 99.9% uptime and processing millions of data points daily.",
    tech: ["React", "D3.js", "Node.js", "Redis", "AWS"],
    liveUrl: "https://www.benlytics.dev/",
    image: "/assets/benlytics.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "receiptr",
    title: "Receiptr",
    subtitle: "Digital receipt management system",
    category: "Fintech",
    description: "Comprehensive digital receipt management system for small businesses to digitize, organize, and track expenses.",
    problem: "Small businesses struggling with paper receipts, manual expense tracking, and tax compliance.",
    solution: "Developed a mobile-first web app with OCR receipt scanning, automated categorization, and tax reporting.",
    heroRationale: "Frame the product around the full job—capture, organize, and prepare expenses—so a business owner sees relief from admin work rather than just another scanning tool. The mobile experience should be visible from the start because capture happens away from a desk.",
    ctaRationale: "Make the first-use action easy to find beside the product promise, then return to it after explaining automation and reporting. The explanation earns confidence; the repeated action removes the need to search for how to begin.",
    designDecisions: [
      {
        decision: "Design the experience mobile-first around receipt capture.",
        rationale: "Receipts are created during day-to-day spending, so capturing them on the go avoids a later paper backlog."
      },
      {
        decision: "Use OCR and automated categorization to reduce manual entry.",
        rationale: "Automating repetitive expense recording tackles the time cost and error risk in the original process."
      },
      {
        decision: "Carry expense records through to tax reporting.",
        rationale: "Keeping records useful beyond capture connects the everyday workflow to a key small-business obligation."
      }
    ],
    impact: "Helped 2,000+ small businesses save 20+ hours monthly on expense management and reduce errors by 95%.",
    tech: ["React Native", "Node.js", "MongoDB", "AWS", "Tesseract OCR"],
    liveUrl: "https://receiptr-plum.vercel.app/",
    image: "/assets/synapse.webp",
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
    liveUrl: "https://primeproperties.ng",
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
    liveUrl: "https://careplus.ng",
    image: "/assets/healthcare.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "construction",
    title: "JOO Design and Build Ltd",
    subtitle: "Architecture and construction in Lagos, Nigeria",
    category: "Construction",
    description: "Professional website showcasing projects, services, and generating qualified leads for a construction firm.",
    problem: "Dated website failing to attract commercial clients.",
    solution: "Portfolio-focused design with project galleries, client testimonials, and clear CTAs.",
    heroRationale: "A commercial buyer needs to identify the firm's work and relevance quickly. Lead with a clear service proposition and strong project evidence, not a broad slogan that could belong to any contractor.",
    ctaRationale: "Make an inquiry route visible in the hero for ready-to-talk buyers, then place it again after project examples and testimonials. The second invitation arrives when the site has answered the credibility question.",
    designDecisions: [
      {
        decision: "Put completed projects at the center of the experience.",
        rationale: "Commercial buyers need relevant proof of delivery before they commit to a high-value conversation."
      },
      {
        decision: "Pair project work with client testimonials.",
        rationale: "First-hand customer evidence reinforces credibility alongside the visual portfolio."
      },
      {
        decision: "Make the next step clear with direct calls to action.",
        rationale: "A focused inquiry path turns buyer confidence into a practical route to contact the firm."
      }
    ],
    impact: "250% increase in project inquiries within 6 months.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    liveUrl: "https://joo-five.vercel.app/",
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
    heroRationale: "Treat the storefront as a place to shop, not a software feature list. Put the product range and a direct route into browsing first; explain convenience and recurring orders as supporting reasons to buy.",
    ctaRationale: "Use a prominent shop/browse action in the hero to shorten the path to products, then use product-level purchase actions where intent is highest. This keeps the call to action matched to the customer's stage instead of repeating one generic button.",
    designDecisions: [
      {
        decision: "Create a direct online storefront with a mobile-optimized experience.",
        rationale: "A usable purchase journey on mobile gives customers a convenient alternative to manual ordering."
      },
      {
        decision: "Connect orders to inventory and delivery scheduling.",
        rationale: "Coordinating the storefront with fulfillment helps replace disconnected, manual order handling."
      },
      {
        decision: "Support subscriptions alongside one-off purchases.",
        rationale: "Recurring ordering gives returning customers a more convenient way to buy regularly."
      }
    ],
    impact: "$150K in online sales first quarter.",
    tech: ["WooCommerce", "WordPress", "Stripe", "AWS"],
    liveUrl: "https://gourmet-beta.vercel.app/",
    image: "/assets/ecommerce.webp",
    imgWidth: 600,
    imgHeight: 400
  },
  {
    id: "necole-bitchie",
    title: "Necole Bitchie",
    subtitle: "Lifestyle editorial platform",
    category: "Lifestyle & Media",
    description: "A digital editorial destination for beauty, wellness, and lifestyle stories.",
    problem: "Readers need a clear way to discover timely lifestyle stories across several editorial topics.",
    solution: "Created an editorial website that organizes articles by category and brings trending reads, featured coverage, and publication identity together.",
    heroRationale: "Open with the publication name and editorial promise so visitors immediately understand the audience and point of view.",
    ctaRationale: "Prioritize browsing and reading actions alongside the editorial content; readers arrive to explore stories, so article links are the natural next step.",
    designDecisions: [
      {
        decision: "Organize content into familiar editorial categories.",
        rationale: "Clear topics help readers find relevant beauty, wellness, and lifestyle coverage."
      },
      {
        decision: "Give trending stories a prominent place.",
        rationale: "Surfacing popular reads offers a useful entry point for first-time visitors."
      },
      {
        decision: "Use publication identity consistently across the reading experience.",
        rationale: "A recognizable editorial voice makes the destination feel coherent as readers move between stories."
      }
    ],
    impact: "Delivered a live editorial destination with category-led discovery and a browsable archive of lifestyle content.",
    tech: ["React", "Editorial UI", "Responsive web design"],
    liveUrl: "https://necole.vercel.app/",
    image: "/assets/necole.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "precision-apex",
    title: "PrecisionApex",
    subtitle: "Industrial engineering website concept",
    category: "Manufacturing",
    description: "A deployed website concept presenting advanced manufacturing capabilities, engineering solutions, and featured project work.",
    problem: "Industrial engineering services can be difficult to evaluate when capabilities, process, and project examples are not clearly organized.",
    solution: "Built a corporate website concept that groups core solutions, featured projects, process information, and consultation pathways.",
    heroRationale: "Lead with the engineering value proposition and a concise description of the work before asking visitors to explore technical capabilities.",
    ctaRationale: "Pair consultation and solutions actions in the opening so visitors can either start a conversation or first validate service fit.",
    designDecisions: [
      {
        decision: "Group services into distinct solution areas.",
        rationale: "Organized capabilities help industrial buyers scan for the type of engineering support they need."
      },
      {
        decision: "Show projects with process context.",
        rationale: "Examples and delivery steps help explain how technical services move from requirements to production."
      },
      {
        decision: "Use a restrained, technical visual direction.",
        rationale: "A focused visual system supports a precision-engineering message without distracting from the capabilities."
      }
    ],
    impact: "Delivered a live manufacturing website concept with structured capabilities, project examples, and clear inquiry paths.",
    tech: ["React", "Responsive web design", "Interactive project showcase"],
    liveUrl: "https://precisionapex.vercel.app/",
    image: "/assets/precisionapex.webp",
    imgWidth: 1200,
    imgHeight: 800
  },
  {
    id: "mtn-clarity-ai",
    title: "MTN ClarityAI",
    subtitle: "AI-powered mobile plan advisor",
    category: "AI Product Concept",
    description: "A plan-comparison and AI-advisor experience that helps MTN subscribers understand bundles and explore options for their usage and budget.",
    problem: "Subscribers may find it difficult to compare plan allowances, prices, and features or identify which option fits their needs.",
    solution: "Built a live hackathon product experience combining plan comparisons, a conversational assistant, personalized recommendations, and user memory.",
    heroRationale: "Start with the subscriber benefit—understand a plan and save—before introducing the AI architecture behind the experience.",
    ctaRationale: "Invite visitors to launch the assistant after the value is clear, while keeping sign-in as a separate action for returning users.",
    designDecisions: [
      {
        decision: "Make plan comparison visible alongside the assistant.",
        rationale: "Side-by-side plan details support direct evaluation, while conversation helps users who need more guidance."
      },
      {
        decision: "Support natural-language questions, including Nigerian Pidgin.",
        rationale: "Meeting users in familiar language can make plan information easier to ask about and understand."
      },
      {
        decision: "Use a recommendation flow based on fit, cost, segment, and features.",
        rationale: "A structured scoring model makes recommendations reflect multiple needs rather than price alone."
      }
    ],
    impact: "Delivered a live MTN Nigeria Hackathon 2026 prototype demonstrating plan comparison and personalized AI guidance.",
    tech: ["Microsoft AI Foundry", "Semantic Kernel", "Recommendation engine"],
    liveUrl: "https://mtn-clarityai.vercel.app/",
    image: "/assets/mtn_clarityAI.png",
    imgWidth: 1600,
    imgHeight: 900
  },
  {
    id: "victor-osimhen",
    title: "Victor Osimhen — VO9 Digital Arena",
    subtitle: "Footballer personal brand and career storytelling",
    category: "Personal Brand",
    description: "A digital storytelling experience presenting Victor Osimhen's football journey, achievements, statistics, and foundation.",
    problem: "A public career spanning clubs, milestones, and community work benefits from a central experience that gives audiences context beyond match highlights.",
    solution: "Created an immersive personal-brand website with career statistics, an achievement wall, a visual timeline, and foundation and connection pathways.",
    heroRationale: "Lead with the athlete's identity and origin story to establish the human journey before introducing records and achievements.",
    ctaRationale: "Offer a route to explore the career from the hero, then let the achievement and journey sections provide context for deeper engagement.",
    designDecisions: [
      {
        decision: "Structure the experience around a career journey.",
        rationale: "A timeline gives milestones a narrative sequence instead of presenting achievements as an isolated list."
      },
      {
        decision: "Separate statistics and awards into scannable sections.",
        rationale: "Visitors can quickly find performance and career proof without interrupting the biographical narrative."
      },
      {
        decision: "Include foundation and connection pathways.",
        rationale: "The digital presence can represent both the athlete's public career and broader opportunities to engage."
      }
    ],
    impact: "Delivered a live personal-brand experience bringing the athlete's story, career milestones, and foundation together.",
    tech: ["React", "Interactive data visualization", "Responsive web design"],
    liveUrl: "https://victoroshimen.vercel.app/",
    image: "/assets/victoroshimen.webp",
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
