export const site = {
  name: 'Kabanda Jordan',
  firstName: 'Kabanda',
  lastName: 'Jordan',
  firstNameUpper: 'KABANDA',
  lastNameUpper: 'JORDAN',
  role: 'Full-Stack Engineer',
  tagline: 'I craft pixel-perfect React frontends and bullet-proof distributed backends. Full-stack obsession, god-mode execution.',
  location: 'Kigali, Rwanda',
}

export const socials = {
  github: 'https://github.com/kabanda-jordan',
  linkedin: 'https://www.linkedin.com/in/jordan-kabanda-2932a7336/',
  email: 'kabandajordan784@gmail.com',
}

export const heroStats = [
  { value: '3+', label: 'Shipped Products' },
  { value: '7', label: 'Engineering Classics Read' },
  { value: '2', label: 'Dimensional Stack' },
]

export const skills = [
  {
    group: 'Frontend',
    level: 'God Mode',
    items: ['React.js', 'JavaScript (ES2024)', 'CSS · Tailwind', 'Vite'],
  },
  {
    group: 'Backend',
    level: 'Super God Mode',
    items: ['Node.js', 'Express.js', 'Java', 'Jakarta EE', 'Spring Boot'],
  },
  {
    group: 'Databases',
    level: 'God Mode',
    items: ['PostgreSQL', 'Database Design', 'Query Optimization'],
  },
  {
    group: 'Web Security',
    level: 'God Mode',
    items: ['Burp Suite', 'Web App Pentesting', 'OWASP Top 10'],
  },
]

export const books = [
  'HTTP: The Definitive Guide',
  'Designing Data-Intensive Applications',
  'High Performance Browser Networking',
  'Database Internals',
  "The Web Application Hacker's Handbook",
  'Designing Distributed Systems',
  'The Tangled Web',
]

export const experience = [
  {
    role: 'Full-Stack Engineer',
    company: 'Independent / Freelance',
    period: '2023 — Present',
    accent: 'true',
    points: [
      'Shipped full-stack applications in production serving real users across Rwanda.',
      'Engineered backend APIs with Node.js, Express, Java, Jakarta EE, and Spring Boot.',
      'Designed PostgreSQL schemas focused on integrity, indexing, and performance.',
      'Hardened apps against the OWASP Top 10 using Burp Suite workflows.',
    ],
  },
]

export const projects = [
  {
    name: 'TrekRwanda',
    description: "Rwanda's tourism discovery platform — safaris, destinations, vehicle hire, online booking, auth, and an admin dashboard.",
    image: '/projects/trek-rwanda.png',
    url: 'https://trek-rwanda-frontend.pages.dev/',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    year: '2026',
  },
  {
    name: 'Nexora',
    description: 'Rwanda\u2019s premier multi-vendor marketplace — \u201CTangira Kugura Ubu\u201D. A robust e-commerce platform for buyers and sellers.',
    image: '/projects/nexora.png',
    url: 'https://nexorarwanda.pages.dev/',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    year: '2026',
  },
  {
    name: 'TradeMind',
    description: 'AI-powered trading journal and analytics. Every trade becomes data — smarter decisions through insight.',
    image: '/projects/trade-mind.png',
    url: 'https://neura-edge-journal.vercel.app/',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    year: '2026',
  },
]