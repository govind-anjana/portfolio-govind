// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Govind Anjana',
  title: 'Full Stack Web Developer',
  tagline: 'Crafting high-impact, modern web experiences with MERN & React ecosystems',
  email: 'govindanjana2004@gmail.com',
  phone: '+91 88711 10050',
  location: 'India',
  bio: `I'm a driven Full Stack Developer passionate about engineering modern, high-performance web applications. Specializing in the MERN stack (MongoDB, Express, React, Node.js) and modern CSS frameworks, I transform complex ideas into intuitive, production-ready digital products.`,
  bio2: `With a strong foundation in modern JavaScript, responsive UI design, and RESTful APIs, I focus on writing scalable, clean code that delivers exceptional user experiences.`,
  availability: 'Available for Hire & Projects',
  resume: '#',
  social: {
    github:   'https://github.com/govind-anjana',
    linkedin: 'https://www.linkedin.com/in/govind-anjana-8274552aa/',
    twitter:  'https://github.com/govind-anjana',
  },
};

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Built',    value: '25+' },
  { label: 'Tech Stack Skills', value: '15+' },
  { label: 'Client Satisfaction', value: '100%' },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    color: '#a855f7',
    skills: [
      { name: 'React.js',     icon: '⚛️', level: 92 },
      { name: 'JavaScript (ES6+)', icon: '🟨', level: 90 },
      { name: 'Tailwind CSS', icon: '🎨', level: 95 },
      { name: 'HTML5 / CSS3', icon: '🌐', level: 95 },
      { name: 'Framer Motion',icon: '🎬', level: 85 },
      { name: 'Redux Toolkit',icon: '📦', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    color: '#3b82f6',
    skills: [
      { name: 'Node.js',    icon: '🟢', level: 88 },
      { name: 'Express.js', icon: '🚂', level: 88 },
      { name: 'RESTful APIs', icon: '🔌', level: 92 },
      { name: 'JWT Auth',   icon: '🔐', level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    color: '#10b981',
    skills: [
      { name: 'MongoDB',    icon: '🍃', level: 88 },
      { name: 'Mongoose',   icon: '🦦', level: 86 },
      { name: 'SQL Basics', icon: '🗄️', level: 75 },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: 'Wrench',
    color: '#f59e0b',
    skills: [
      { name: 'Git & GitHub', icon: '🐙', level: 92 },
      { name: 'Vite',         icon: '⚡', level: 90 },
      { name: 'Postman',      icon: '🚀', level: 88 },
      { name: 'VS Code',      icon: '💻', level: 95 },
      { name: 'NPM / Yarn',   icon: '📦', level: 90 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Storefront',
    description:
      'Full-featured MERN stack shopping platform with cart management, user authentication, responsive product catalog, and seamless payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'Full Stack',
    gradient: 'from-purple-600 via-indigo-600 to-blue-600',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: true,
  },
  {
    id: 2,
    title: 'Interactive Portfolio Platform',
    description:
      'Ultra-modern developer portfolio featuring glassmorphism, Framer Motion micro-interactions, dark aesthetic, and responsive layout.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'Frontend',
    gradient: 'from-blue-600 via-teal-500 to-emerald-500',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Task Management App',
    description:
      'Kanban task organizer with drag-and-drop support, status tracking, category filters, and persistent database storage.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    category: 'Full Stack',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-500',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: false,
  },
  {
    id: 4,
    title: 'RESTful Auth & User Microservice',
    description:
      'Secure backend authentication API featuring JWT token handling, bcrypt password hashing, input validation, and role middleware.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'Backend',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather & Forecast Dashboard',
    description:
      'Sleek weather search application fetching real-time data from OpenWeather API with dynamic background visualizers.',
    tags: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    category: 'Frontend',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: false,
  },
  {
    id: 6,
    title: 'Social Media Feed API',
    description:
      'Scalable backend API supporting user posts, comments, likes, follower relationships, and efficient database indexing.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    category: 'Backend',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    liveUrl: 'https://github.com/govind-anjana',
    githubUrl: 'https://github.com/govind-anjana',
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Full Stack Web Developer',
    company: 'Freelance / Self-Employed',
    location: 'Remote, India',
    duration: '2023 — Present',
    type: 'Freelance',
    description: [
      'Engineered and delivered responsive React web applications for client projects.',
      'Developed robust backend services with Node.js, Express, and MongoDB database modeling.',
      'Optimized web apps for maximum lighthouse speed performance and cross-device responsiveness.',
      'Collaborated directly with clients to translate project requirements into production-ready software.',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    color: '#a855f7',
  },
  {
    id: 2,
    role: 'MERN Stack Developer Trainee',
    company: 'Web Development Projects',
    location: 'India',
    duration: '2022 — 2023',
    type: 'Project Work',
    description: [
      'Built 15+ hands-on web projects covering full CRUD operations, authentication, and state management.',
      'Mastered modern JavaScript (ES6+), React Hooks, Context API, and component design patterns.',
      'Designed clean REST API architectures following industry standards.',
    ],
    tech: ['JavaScript', 'React', 'HTML5/CSS3', 'Git', 'REST APIs'],
    color: '#3b82f6',
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: 'Monitor',
    title: 'Frontend Web Development',
    description:
      'Building fast, interactive, pixel-perfect user interfaces using React.js, JavaScript (ES6+), and Tailwind CSS.',
    color: '#a855f7',
  },
  {
    icon: 'Layers',
    title: 'Full Stack Web Apps',
    description:
      'End-to-end web applications powered by the MERN stack (MongoDB, Express, React, Node.js) with clean architecture.',
    color: '#3b82f6',
  },
  {
    icon: 'Server',
    title: 'Backend & REST APIs',
    description:
      'Designing and building scalable RESTful APIs with Node.js, Express, JWT authentication, and MongoDB integration.',
    color: '#10b981',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive & Mobile First',
    description:
      'Ensuring web applications adapt seamlessly across smartphones, tablets, laptops, and 4K displays.',
    color: '#06b6d4',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Implementation',
    description:
      'Translating Figma and visual designs into clean, semantic, accessible HTML5/CSS3 and React components.',
    color: '#f59e0b',
  },
  {
    icon: 'Plug',
    title: 'Bug Fixing & Optimization',
    description:
      'Debugging existing React/Node codebases, refactoring legacy code, and boosting site speed & performance.',
    color: '#ec4899',
  },
];
