import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data';

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ExperienceCard({ exp, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeLeft}
      className="relative flex gap-6"
    >
      {/* Timeline dot + line */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0"
          style={{
            borderColor: exp.color,
            backgroundColor: `${exp.color}15`,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Briefcase size={18} style={{ color: exp.color }} />
        </motion.div>
        {/* Vertical line (not for last item) */}
        <div
          className="w-0.5 flex-1 mt-2 min-h-8"
          style={{
            background: `linear-gradient(to bottom, ${exp.color}60, transparent)`,
          }}
        />
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <motion.div
          className="glass border border-[var(--border)] rounded-2xl p-6 card-hover"
          whileHover={{ borderColor: `${exp.color}40` }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold" style={{ color: exp.color }}>
                {exp.company}
              </p>
            </div>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
              style={{
                color: exp.color,
                backgroundColor: `${exp.color}15`,
                border: `1px solid ${exp.color}30`,
              }}
            >
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-2 mb-5">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[var(--text-muted)]">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: exp.color }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map(t => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-medium"
                style={{
                  color: exp.color,
                  backgroundColor: `${exp.color}10`,
                  border: `1px solid ${exp.color}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            My journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            A timeline of my professional experience, from junior developer to senior engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
