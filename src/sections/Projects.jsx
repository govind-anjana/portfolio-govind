import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '../components/ui/SocialIcons';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data';

const FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];

const tagColors = {
  React: '#61dafb', 'Next.js': '#ffffff', TypeScript: '#3178c6', JavaScript: '#f7df1e',
  'Node.js': '#68a063', 'Express.js': '#4fc08d', MongoDB: '#47a248', PostgreSQL: '#336791',
  Stripe: '#6772e5', GraphQL: '#e10098', 'Socket.io': '#010101', 'Chart.js': '#ff6384',
  'REST APIs': '#ff6b35', 'REST API': '#ff6b35', 'Tailwind CSS': '#38bdf8', 'Framer Motion': '#ff0080',
  Vite: '#646cff', MDX: '#1b1f24', JWT: '#fb015b', Docker: '#2496ed', Redux: '#764abc',
  Storybook: '#ff4785', CSS: '#264de4', HTML: '#e34f26', Git: '#f05032', Firebase: '#ffca28',
  Express: '#4fc08d', Mongoose: '#47a248',
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardAnim = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={cardAnim}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col border border-white/10"
      whileHover={{ y: -8 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-white/15 text-8xl font-black select-none"
            style={{ fontFamily: 'Syne, sans-serif' }}
            whileHover={{ scale: 1.1, opacity: 0.25 }}
          >
            {project.title.charAt(0)}
          </motion.span>
        </div>
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-full"
          >
            <Star size={10} fill="currentColor" />
            Featured
          </motion.div>
        )}
        <div className="absolute top-3 right-3 text-[10px] font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          {project.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-100 mb-2 leading-snug group-hover:text-purple-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

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

        <div className="flex gap-2 mt-auto">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-gradient text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
            id={`project-live-${project.id}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={13} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/12 text-slate-400 hover:text-white hover:border-white/30 text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200"
            id={`project-github-${project.id}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={13} />
            GitHub
          </motion.a>
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
        <SectionHeader
          label="What I've Built"
          title="Featured"
          highlight="Projects"
          description="A selection of real-world projects that showcase my range and attention to craft."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => (
            <motion.button
              key={f}
              id={`projects-filter-${f.toLowerCase().replace(' ', '-')}`}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'glass border border-[var(--border)] text-slate-400 hover:text-white hover:border-white/20'
              }`}
              whileHover={{ scale: filter === f ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {f}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                filter === f ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'
              }`}>
                {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 py-16">No projects in this category yet.</p>
        )}
      </div>
    </SectionWrapper>
  );
}
