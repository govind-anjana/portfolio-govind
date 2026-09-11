import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services'   },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'glass-nav py-0 shadow-2xl shadow-black/50'
            : 'bg-transparent py-1'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            onClick={e => handleNav(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <motion.div
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Code2 size={18} className="text-white" />
            </motion.div>
            <span className="font-extrabold text-xl text-slate-100 group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
              Govind<span className="gradient-text-static">.dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 block
                      ${isActive ? 'text-purple-300' : 'text-slate-400 hover:text-white'}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-purple-500/12 border border-purple-500/25"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <motion.a
            href="#contact"
            onClick={e => handleNav(e, '#contact')}
            className="hidden md:inline-flex btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>

          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[var(--bg-surface)] border-l border-[var(--border)] md:hidden flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--border)]">
                <span className="font-bold gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>{personalInfo.name}</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${activeSection === link.href.slice(1)
                        ? 'bg-purple-500/12 text-purple-300 border border-purple-500/25'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-4 pb-6">
                <a
                  href="#contact"
                  onClick={e => handleNav(e, '#contact')}
                  className="block btn-gradient text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
