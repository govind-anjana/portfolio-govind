import { motion } from 'framer-motion';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './ui/SocialIcons';
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

const socials = [
  { icon: GithubIcon,   href: personalInfo.social.github,   label: 'GitHub'   },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: TwitterIcon,  href: personalInfo.social.twitter,  label: 'Twitter'  },
  { icon: Mail,         href: `mailto:${personalInfo.email}`, label: 'Email'  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[var(--bg-surface)] border-t border-[var(--border)] z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                {personalInfo.name.split(' ')[0]}
                <span className="gradient-text-static">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building elegant digital experiences with clean code and thoughtful design.
            </p>
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-[var(--border)] flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 block"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm text-slate-400">{personalInfo.location}</p>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with passion.
          </p>
          <motion.button
            onClick={scrollTop}
            id="back-to-top"
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg btn-gradient flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
