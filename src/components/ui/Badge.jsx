export default function Badge({ children, color }) {
  return (
    <span
      style={{
        color,
        borderColor: `${color}40`,
        backgroundColor: `${color}12`,
      }}
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 hover:scale-105"
    >
      {children}
    </span>
  );
}
