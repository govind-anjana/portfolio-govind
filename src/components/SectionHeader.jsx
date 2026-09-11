import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0, letterSpacing: '0.4em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-label"
      >
        {label}
      </motion.span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-20 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full mx-auto mb-5 origin-center"
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
