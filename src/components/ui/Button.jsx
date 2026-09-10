import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary: 'btn-gradient text-white font-semibold rounded-xl',
    outline: `border border-[rgba(255,255,255,0.2)] text-[var(--text-primary)]
              hover:border-violet-500 hover:text-violet-400 rounded-xl
              transition-all duration-300 backdrop-blur-sm bg-[rgba(255,255,255,0.03)]`,
    ghost: 'text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200',
  };

  const cls = `inline-flex items-center gap-2 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`;

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      className={cls}
      whileHover={{ scale: variant === 'primary' ? 1 : 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </MotionTag>
  );
}
