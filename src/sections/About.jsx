import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, stats } from '../data';

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const highlights = [
  {
    icon: Briefcase,
    title: 'Experience',
    value: '2+ Years',
    desc: 'Building Web & MERN Stack Apps',
    color: '#a855f7',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    value: 'Computer Science / Tech',
    desc: 'Graduate / Developer Training',
    color: '#3b82f6',
  },
  {
    icon: Award,
    title: 'Focus Area',
    value: 'Full Stack MERN',
    desc: 'React, Node, Express & MongoDB',
    color: '#10b981',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: personalInfo.location,
    desc: 'Available for Remote & Onsite',
    color: '#f59e0b',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 mb-3 block">
            Discover My Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Side */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
              Passionate Web Developer Crafting <br />
              <span className="gradient-text">Scalable MERN Solutions</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-slate-300 text-base leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {personalInfo.bio2}
            </motion.p>

            {/* Core Competencies Checklist */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 pt-2">
              {[
                'MERN Stack Architecture',
                'Responsive UI/UX Design',
                'RESTful API Development',
                'State Management (Redux/Context)',
                'Clean & Maintainable Code',
                'Git & GitHub Workflow'
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Direct contact action buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a
                id="about-hire-btn"
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  const t = document.querySelector('#contact');
                  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }}
                className="btn-primary text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer"
              >
                Hire Me Now
              </a>
              <a
                id="about-email-btn"
                href={`mailto:${personalInfo.email}`}
                className="btn-secondary text-slate-200 font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer"
              >
                Email Govind
              </a>
            </motion.div>
          </motion.div>

          {/* Cards & Stats Side */}
          <div className="lg:col-span-6 space-y-6">
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
                  className="glass-card rounded-2xl p-5 border border-white/10 relative overflow-hidden group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${color}20` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">{title}</p>
                  <p className="text-base font-bold text-slate-100 mb-1">{value}</p>
                  <p className="text-xs text-slate-400">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-4 text-center border border-white/10"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
                    {value}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight">
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
