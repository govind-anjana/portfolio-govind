import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data';

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function ExperienceCard({ exp }) {
  return (
    <motion.div variants={fadeLeft} className="relative flex gap-6">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0"
          style={{ borderColor: exp.color, backgroundColor: `${exp.color}15` }}
          whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${exp.color}40` }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Briefcase size={18} style={{ color: exp.color }} />
        </motion.div>
        <div
          className="w-0.5 flex-1 mt-2 min-h-8"
          style={{ background: `linear-gradient(to bottom, ${exp.color}60, transparent)` }}
        />
      </div>

      <div className="flex-1 pb-12">
        <motion.div
          className="glass border border-[var(--border)] rounded-2xl p-6 card-hover"
          whileHover={{ borderColor: `${exp.color}40`, y: -4 }}
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-100 mb-1">{exp.role}</h3>
              <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
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

          <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {exp.location}
            </span>
          </div>

          <ul className="space-y-2 mb-5">
            {exp.description.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-2.5 text-sm text-slate-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: exp.color }} />
                {item}
              </motion.li>
            ))}
          </ul>

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
        <SectionHeader
          label="My Journey"
          title="Work"
          highlight="Experience"
          description="A timeline of my professional experience building modern web applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
