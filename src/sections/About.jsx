import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, stats } from '../data';

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const highlights = [
  {
    icon: Briefcase,
    title: 'Experience',
    value: '5+ Years',
    desc: 'Building production web apps',
    color: '#7c3aed',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    value: 'B.Sc. CS',
    desc: 'University of California, Berkeley',
    color: '#3b82f6',
  },
  {
    icon: Award,
    title: 'Achievements',
    value: 'Top Rated',
    desc: 'Freelancer on multiple platforms',
    color: '#10b981',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: personalInfo.location,
    desc: 'Open to remote worldwide',
    color: '#f59e0b',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-[var(--text-primary)]">
              Full Stack Developer &{' '}
              <span className="gradient-text">Open Source Enthusiast</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-[var(--text-muted)] leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[var(--text-muted)] leading-relaxed">
              {personalInfo.bio2}
            </motion.p>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {['React Specialist', 'Node.js', 'MongoDB', 'System Design', 'Open Source', 'Mentoring'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <a
                id="about-hire-btn"
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  const t = document.querySelector('#contact');
                  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }}
                className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl text-sm"
              >
                Hire Me
              </a>
              <a
                id="about-resume-btn"
                href={personalInfo.resume}
                className="border border-[rgba(255,255,255,0.15)] text-[var(--text-primary)] hover:border-violet-500 hover:text-violet-400 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-[rgba(255,255,255,0.03)]"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Cards + Stats */}
          <div className="space-y-6">
            {/* Highlight cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {highlights.map(({ icon: Icon, title, value, desc, color }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="glass border border-[var(--border)] rounded-2xl p-5 card-hover cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${color}20` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">{title}</p>
                  <p className="text-base font-bold text-[var(--text-primary)] mb-0.5">{value}</p>
                  <p className="text-xs text-[var(--text-faint)]">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-4 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass border border-[var(--border)] rounded-2xl p-4 text-center card-hover cursor-default"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold gradient-text leading-none mb-1">
                    {value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[var(--text-muted)] leading-tight">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
