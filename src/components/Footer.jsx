import { Github, Linkedin, Twitter, ArrowUp, Code2, Mail } from 'lucide-react';
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
  { icon: Github,   href: personalInfo.social.github,   label: 'GitHub'   },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter,  href: personalInfo.social.twitter,  label: 'Twitter'  },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email'  },
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
    <footer className="relative bg-[var(--bg-surface)] border-t border-[var(--border)]">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl">
                {personalInfo.name.split(' ')[0]}
                <span className="gradient-text">.dev</span>
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Building elegant digital experiences with clean code and thoughtful design.
            </p>
            {/* Socials */}
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-violet-400 hover:border-violet-500/40 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className="text-sm text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200 block"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm text-[var(--text-muted)]">{personalInfo.location}</p>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with ❤️ and ☕
          </p>
          <button
            onClick={scrollTop}
            id="back-to-top"
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 hover:scale-110 transition-transform duration-200"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
