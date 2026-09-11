import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parseValue(str) {
  const match = str.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: str };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function AnimatedCounter({ value, duration = 1800, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, num, duration]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
