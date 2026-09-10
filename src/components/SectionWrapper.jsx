import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}
