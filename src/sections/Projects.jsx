import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data';

const FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];

const tagColors = {
  React: '#61dafb',
  'Next.js': '#ffffff',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  'Node.js': '#68a063',
  'Express.js': '#4fc08d',
  MongoDB: '#47a248',
  PostgreSQL: '#336791',
  Stripe: '#6772e5',
  GraphQL: '#e10098',
  'Socket.io': '#010101',
  'Chart.js': '#ff6384',
  'REST APIs': '#ff6b35',
  'Tailwind CSS': '#38bdf8',
  MDX: '#1b1f24',
  JWT: '#fb015b',
  Docker: '#2496ed',
  Redux: '#764abc',
  Storybook: '#ff4785',
  CSS: '#264de4',
  HTML: '#e34f26',
  Git: '#f05032',
  Firebase: '#ffca28',
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardAnim = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.5 } },
};

function ProjectCard({ project }) {
  const gradients = {
    'from-violet-600 to-indigo-600':  'linear-gradient(135deg, #7c3aed, #4f46e5)',
    'from-blue-600 to-cyan-500':      'linear-gradient(135deg, #2563eb, #06b6d4)',
    'from-emerald-600 to-teal-500':   'linear-gradient(135deg, #059669, #14b8a6)',
    'from-pink-600 to-rose-500':      'linear-gradient(135deg, #db2777, #f43f5e)',
    'from-orange-600 to-amber-500':   'linear-gradient(135deg, #ea580c, #f59e0b)',
    'from-purple-600 to-violet-500':  'linear-gradient(135deg, #9333ea, #7c3aed)',
  };

  return (
    <motion.article
      variants={cardAnim}
      className="glass border border-[var(--border)] rounded-2xl overflow-hidden group card-hover flex flex-col"
    >
      {/* Project image / gradient placeholder */}
      <div className="relative h-44 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: gradients[project.gradient] || 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-7xl font-black select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400/90 text-black text-[10px] font-bold px-2 py-1 rounded-full">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 right-3 text-[10px] font-medium text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[var(--text-primary)] mb-2 leading-snug group-hover:text-violet-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
              style={{
                color: tagColors[tag] || '#94a3b8',
                borderColor: `${tagColors[tag] || '#94a3b8'}30`,
                backgroundColor: `${tagColors[tag] || '#94a3b8'}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-gradient text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
            id={`project-live-${project.id}`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-[rgba(255,255,255,0.12)] text-[var(--text-muted)] hover:text-white hover:border-white/30 text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200"
            id={`project-github-${project.id}`}
          >
            <Github size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects" className="bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            What I've built
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            A selection of real-world projects that showcase my range and attention to craft.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              id={`projects-filter-${f.toLowerCase().replace(' ', '-')}`}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-250 ${
                filter === f
                  ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/25'
                  : 'glass border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-white/20'
              }`}
            >
              {f}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                filter === f ? 'bg-white/20 text-white' : 'bg-white/5 text-[var(--text-faint)]'
              }`}>
                {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-16">
            No projects in this category yet.
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
