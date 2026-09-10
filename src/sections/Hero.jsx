import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data';

const socials = [
  { icon: Github,   href: personalInfo.social.github,    label: 'GitHub'   },
  { icon: Linkedin, href: personalInfo.social.linkedin,  label: 'LinkedIn' },
  { icon: Twitter,  href: personalInfo.social.twitter,   label: 'Twitter'  },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email'   },
];

const words = ['Developer.', 'Creator.', 'Problem Solver.', 'Freelancer.'];

function FloatingBlob({ className, style }) {
  return (
    <motion.div
      className={`blob ${className}`}
      style={style}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function TypingWords() {
  const [index, setIndex]   = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word  = words[index];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < word.length) {
          setDisplay(word.slice(0, display.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (display.length > 0) {
          setDisplay(display.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, index]);

  return (
    <span className="gradient-text">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Need to import useState/useEffect for TypingWords
import { useState, useEffect } from 'react';

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const handleNav = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center hero-mesh overflow-hidden"
    >
      {/* Floating background blobs */}
      <FloatingBlob
        className="w-96 h-96 bg-violet-600/20"
        style={{ top: '10%', left: '-5%' }}
      />
      <FloatingBlob
        className="w-80 h-80 bg-blue-600/15"
        style={{ top: '20%', right: '-5%', animationDelay: '3s' }}
      />
      <FloatingBlob
        className="w-64 h-64 bg-indigo-500/10"
        style={{ bottom: '15%', left: '25%', animationDelay: '5s' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Availability badge */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 glass border border-emerald-400/20 text-emerald-400 text-xs font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
          <br />
          <span className="text-3xl sm:text-5xl lg:text-6xl text-[var(--text-muted)] font-semibold mt-2 block">
            Full Stack&nbsp;
            <TypingWords />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I craft high-performance web applications with{' '}
          <span className="text-violet-400 font-medium">React</span>,{' '}
          <span className="text-blue-400 font-medium">Node.js</span>, and modern tooling.
          From pixel-perfect UIs to scalable backends.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            id="hero-view-projects-btn"
            onClick={() => handleNav('#projects')}
            className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 text-sm sm:text-base"
          >
            View Projects
            <ArrowRight size={18} />
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => handleNav('#contact')}
            className="border border-[rgba(255,255,255,0.15)] text-[var(--text-primary)] hover:border-violet-500 hover:text-violet-400 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 backdrop-blur-sm bg-[rgba(255,255,255,0.03)] flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-violet-400 hover:border-violet-500/40 transition-all duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleNav('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-faint)] hover:text-violet-400 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
