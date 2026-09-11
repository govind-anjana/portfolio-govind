import { motion } from 'framer-motion';
import { Monitor, Atom, Layers, Smartphone, Palette, Plug, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data';

const iconMap = { Monitor, Atom, Layers, Smartphone, Palette, Plug };

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Monitor;

  return (
    <motion.div
      variants={fadeUp}
      className="glass-card rounded-2xl p-6 group cursor-default flex flex-col gap-4 relative overflow-hidden"
      whileHover={{ y: -8, borderColor: `${service.color}50` }}
    >
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `${service.color}15` }}
      />

      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${service.color}20` }}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </motion.div>

      <div>
        <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
      </div>

      <div
        className="mt-auto flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        style={{ color: service.color }}
      >
        Learn more
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
      </div>

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
        <SectionHeader
          label="What I Offer"
          title="My"
          highlight="Services"
          description="Comprehensive web development services tailored to bring your vision to life."
        />

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 text-sm mb-5">
            Have a project in mind? Let's discuss your requirements.
          </p>
          <motion.a
            id="services-contact-btn"
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const t = document.querySelector('#contact');
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="inline-flex btn-gradient text-white font-semibold px-8 py-4 rounded-xl items-center gap-2 text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
