import { motion } from 'framer-motion';

const blobs = [
  { color: 'bg-purple-600/10', size: 'w-[600px] h-[600px]', top: 'top-[-200px]', left: 'left-[-200px]', delay: 0 },
  { color: 'bg-blue-600/8',    size: 'w-[500px] h-[500px]', top: 'top-[40%]',    left: 'right-[-150px]', delay: 2 },
  { color: 'bg-indigo-600/8',   size: 'w-[400px] h-[400px]', top: 'bottom-[10%]', left: 'left-[20%]',    delay: 4 },
];

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.size} ${blob.top} ${blob.left}`}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
