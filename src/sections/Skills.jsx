import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { skillCategories } from '../data';

const iconMap = { Monitor, Server, Database, Wrench };

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function SkillCard({ skill, color }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass border border-[var(--border)] rounded-xl p-4 flex items-center gap-3 group card-hover cursor-default"
      whileHover={{ borderColor: `${color}60` }}
    >
      <span className="text-2xl select-none">{skill.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--text-primary)] truncate">{skill.name}</p>
        {/* Skill bar */}
        <div className="h-1 rounded-full bg-white/5 mt-1.5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      </div>
      <span className="text-xs text-[var(--text-faint)] font-medium shrink-0">{skill.level}%</span>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="skills">
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
            What I work with
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            A curated set of technologies I use to build modern, scalable web applications.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const isActive = i === active;
            return (
              <button
                key={cat.category}
                id={`skills-tab-${cat.category.toLowerCase()}`}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-250 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'glass border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-white/20'
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`,
                  boxShadow: `0 8px 24px ${cat.color}40`,
                } : {}}
              >
                <Icon size={15} />
                {cat.category}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {skillCategories[active].skills.map(skill => (
              <SkillCard
                key={skill.name}
                skill={skill}
                color={skillCategories[active].color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All categories overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Monitor;
            return (
              <motion.div
                key={cat.category}
                onClick={() => setActive(i)}
                className="glass border border-[var(--border)] rounded-2xl p-5 text-center cursor-pointer card-hover"
                whileHover={{ borderColor: `${cat.color}50` }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${cat.color}20` }}
                >
                  <Icon size={22} style={{ color: cat.color }} />
                </div>
                <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">{cat.category}</p>
                <p className="text-xs text-[var(--text-faint)]">{cat.skills.length} skills</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
