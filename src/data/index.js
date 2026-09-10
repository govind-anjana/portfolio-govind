// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Full Stack Developer',
  tagline: 'Building elegant digital experiences',
  email: 'alex.morgan@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: `I'm a passionate Full Stack Developer with 5+ years of experience crafting
high-performance web applications. I specialize in React.js ecosystems and
Node.js backends, turning complex problems into clean, scalable solutions
that users love.`,
  bio2: `When I'm not coding, I contribute to open-source projects, write technical
articles, and mentor aspiring developers. I believe great software is built
at the intersection of elegant code and thoughtful design.`,
  availability: 'Available for freelance',
  resume: '#',
  social: {
    github:   'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter:  'https://twitter.com',
    dribbble: 'https://dribbble.com',
  },
};

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Completed',  value: '80+' },
  { label: 'Technologies',        value: '20+' },
  { label: 'Happy Clients',       value: '40+' },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    color: '#7c3aed',
    skills: [
      { name: 'React.js',     icon: '⚛️', level: 95 },
      { name: 'JavaScript',   icon: '🟨', level: 90 },
      { name: 'TypeScript',   icon: '🔷', level: 80 },
      { name: 'HTML5',        icon: '🧡', level: 95 },
      { name: 'CSS3',         icon: '💙', level: 90 },
      { name: 'Tailwind CSS', icon: '🎨', level: 88 },
      { name: 'Framer Motion',icon: '🎬', level: 75 },
      { name: 'Next.js',      icon: '▲',  level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    color: '#3b82f6',
    skills: [
      { name: 'Node.js',    icon: '🟢', level: 88 },
      { name: 'Express.js', icon: '🚂', level: 85 },
      { name: 'REST APIs',  icon: '🔌', level: 90 },
      { name: 'GraphQL',    icon: '🔺', level: 70 },
      { name: 'Python',     icon: '🐍', level: 72 },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    color: '#10b981',
    skills: [
      { name: 'MongoDB',    icon: '🍃', level: 85 },
      { name: 'PostgreSQL', icon: '🐘', level: 80 },
      { name: 'MySQL',      icon: '🐬', level: 75 },
      { name: 'Redis',      icon: '🔴', level: 65 },
      { name: 'Firebase',   icon: '🔥', level: 78 },
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    color: '#f59e0b',
    skills: [
      { name: 'Git / GitHub', icon: '🐙', level: 92 },
      { name: 'Docker',       icon: '🐳', level: 70 },
      { name: 'AWS',          icon: '☁️', level: 65 },
      { name: 'Figma',        icon: '🎨', level: 80 },
      { name: 'Vite',         icon: '⚡', level: 88 },
      { name: 'Jest',         icon: '🃏', level: 75 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'ShopSphere — E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard. Handles 10k+ monthly active users.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Full Stack'],
    category: 'Full Stack',
    image: null,
    gradient: 'from-violet-600 to-indigo-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow — Project Management',
    description:
      'Kanban-style project management app with drag-and-drop, real-time collaboration via WebSockets, and team analytics.',
    tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Full Stack'],
    category: 'Full Stack',
    image: null,
    gradient: 'from-blue-600 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'CryptoTrack Dashboard',
    description:
      'Real-time cryptocurrency tracking dashboard with interactive charts, price alerts, and a clean glassmorphism design.',
    tags: ['React', 'Chart.js', 'REST APIs', 'Frontend'],
    category: 'Frontend',
    image: null,
    gradient: 'from-emerald-600 to-teal-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'DevBlog — Headless CMS Blog',
    description:
      'A lightning-fast developer blog powered by Next.js and a headless CMS, with MDX support and a 99 Lighthouse score.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Frontend'],
    category: 'Frontend',
    image: null,
    gradient: 'from-pink-600 to-rose-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'AuthService — REST API',
    description:
      'Production-ready authentication microservice with JWT, OAuth2, rate limiting, and comprehensive API documentation.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Backend'],
    category: 'Backend',
    image: null,
    gradient: 'from-orange-600 to-amber-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'UI Component Library',
    description:
      'A reusable React component library with 50+ components, dark mode, accessibility, and Storybook documentation.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS', 'Frontend'],
    category: 'Frontend',
    image: null,
    gradient: 'from-purple-600 to-violet-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechNova Inc.',
    location: 'San Francisco, CA (Remote)',
    duration: 'Jan 2023 — Present',
    type: 'Full-time',
    description: [
      'Led the architecture and development of a microservices-based SaaS platform serving 50k+ users.',
      'Improved page load performance by 60% through code splitting, lazy loading, and caching strategies.',
      'Mentored a team of 4 junior developers through code reviews and pair programming sessions.',
      'Implemented CI/CD pipelines reducing deployment time from 45 minutes to under 8 minutes.',
    ],
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'TypeScript'],
    color: '#7c3aed',
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'PixelCraft Studio',
    location: 'New York, NY',
    duration: 'Jun 2021 — Dec 2022',
    type: 'Full-time',
    description: [
      'Built responsive, accessible React applications for 15+ enterprise clients across various industries.',
      'Developed a custom design system used across 5 internal products.',
      'Reduced bundle size by 45% using tree shaking, dynamic imports, and optimized Webpack config.',
      'Collaborated closely with UX designers to implement pixel-perfect interfaces.',
    ],
    tech: ['React', 'TypeScript', 'Figma', 'SCSS', 'Redux', 'REST APIs'],
    color: '#3b82f6',
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Digital Minds Agency',
    location: 'Austin, TX',
    duration: 'Mar 2020 — May 2021',
    type: 'Full-time',
    description: [
      'Developed and maintained 20+ client websites using modern JavaScript and React.',
      'Integrated third-party APIs including payment gateways, maps, and CRM systems.',
      'Built RESTful APIs with Node.js and Express.js for client web applications.',
    ],
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    color: '#10b981',
  },
  {
    id: 4,
    role: 'Junior Developer (Intern)',
    company: 'StartupLaunch Co.',
    location: 'Remote',
    duration: 'Jan 2020 — Mar 2020',
    type: 'Internship',
    description: [
      'Contributed to the frontend development of an MVP product used to acquire seed funding.',
      'Implemented UI components in React from Figma designs.',
      'Fixed bugs and improved code quality following team best practices.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    color: '#f59e0b',
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: 'Monitor',
    title: 'Frontend Development',
    description:
      'Pixel-perfect, blazing-fast frontends with React.js, Next.js, and modern CSS. Fully responsive across all devices.',
    color: '#7c3aed',
  },
  {
    icon: 'Atom',
    title: 'React Development',
    description:
      'Reusable component libraries, custom hooks, state management with Redux/Zustand, and performance optimization.',
    color: '#6366f1',
  },
  {
    icon: 'Layers',
    title: 'Full Stack Development',
    description:
      'End-to-end web applications with React frontends, Node.js/Express APIs, and MongoDB or PostgreSQL databases.',
    color: '#3b82f6',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Design',
    description:
      'Mobile-first, fully responsive websites that look and perform flawlessly on any screen size or device.',
    color: '#06b6d4',
  },
  {
    icon: 'Palette',
    title: 'UI / UX Design to Code',
    description:
      'Converting Figma and Adobe XD designs into clean, maintainable, production-ready code with pixel accuracy.',
    color: '#10b981',
  },
  {
    icon: 'Plug',
    title: 'API Integration',
    description:
      'Integrating REST and GraphQL APIs, payment gateways (Stripe), authentication (OAuth, JWT), and third-party services.',
    color: '#f59e0b',
  },
];
