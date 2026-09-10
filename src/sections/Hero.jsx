import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, MapPin, Sparkles, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/ui/SocialIcons';
import { personalInfo } from '../data';

const socials = [
  { icon: GithubIcon,   href: personalInfo.social.github,   label: 'GitHub' },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Mail,         href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const words = ['Full Stack Developer.', 'MERN Stack Engineer.', 'React Specialist.', 'Web Architect.'];

function TypingWords() {
  const [index, setIndex]       = useState(0);
  const [display, setDisplay]   = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word  = words[index];
    const speed = deleting ? 35 : 70;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < word.length) {
          setDisplay(word.slice(0, display.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2000);
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
    <span className="gradient-text font-bold">
      {display}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center hero-bg-grid overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600/15 top-10 left-[-100px]" />
      <div className="glow-blob w-[450px] h-[450px] bg-blue-600/12 top-40 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Top Status Pill */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                <MapPin size={12} className="text-purple-400" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Sub-headline / Role */}
            <motion.div variants={item} className="text-2xl sm:text-3xl text-slate-200 font-semibold mb-6">
              I build web apps as a <br className="hidden sm:inline" />
              <TypingWords />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              Full Stack Engineer specializing in crafting modern, high-performance web applications with the{' '}
              <span className="text-purple-400 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) and Tailwind CSS.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="hero-view-projects-btn"
                onClick={() => handleNav('#projects')}
                className="btn-primary text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                View Selected Projects
                <ArrowRight size={18} />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => handleNav('#contact')}
                className="btn-secondary text-slate-200 text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <Mail size={18} className="text-purple-400" />
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons & Direct Contact Links */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <p>📧 <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors">{personalInfo.email}</a></p>
                <p>📱 <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-400 transition-colors">{personalInfo.phone}</a></p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Sleek Interactive Code Mockup Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/15 relative group">
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal size={13} className="text-purple-400" />
                  govind-anjana.dev
                </div>
                <Sparkles size={14} className="text-purple-400 animate-pulse" />
              </div>

              {/* Code Editor Body */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                <p className="text-slate-500">// Welcome to my developer space</p>
                <p>
                  <span className="text-purple-400 font-semibold">const</span> developer = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">"Full Stack Web Developer"</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"MongoDB"</span>],
                </p>
                <p className="pl-4">
                  status: <span className="text-purple-300">"Available for Hire"</span>,
                </p>
                <p className="pl-4">
                  passionateAbout: [<span className="text-sky-300">"Clean Code"</span>, <span className="text-sky-300">"UI Performance"</span>]
                </p>
                <p>&#125;;</p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 size={13} /> MERN Stack Certified
                  </span>
                  <span className="text-purple-400">100% Responsive</span>
                </div>
              </div>

              {/* Decorative Glow Badge behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Arrow */}
      <button
        onClick={() => handleNav('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-purple-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={28} />
        </motion.div>
      </button>
    </section>
  );
}
