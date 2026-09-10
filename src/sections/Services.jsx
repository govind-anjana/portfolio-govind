import { motion } from 'framer-motion';
import { Monitor, Atom, Layers, Smartphone, Palette, Plug, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { services } from '../data';

const iconMap = { Monitor, Atom, Layers, Smartphone, Palette, Plug };

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.5 } },
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Monitor;

  return (
    <motion.div
      variants={fadeUp}
      className="glass border border-[var(--border)] rounded-2xl p-6 group card-hover cursor-default flex flex-col gap-4"
      whileHover={{ borderColor: `${service.color}50` }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.color}20` }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-violet-400 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="mt-auto flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: service.color }}>
        Learn more
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-[var(--bg-surface)]">
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
            What I offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive web development services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-[var(--text-muted)] text-sm mb-5">
            Have a project in mind? Let's discuss your requirements.
          </p>
          <a
            id="services-contact-btn"
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const t = document.querySelector('#contact');
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="inline-flex btn-gradient text-white font-semibold px-8 py-4 rounded-xl items-center gap-2 text-sm"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
