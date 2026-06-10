import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Users, Heart, Clock } from "lucide-react";

const STATS = [
  { icon: Trophy, value: 500, suffix: "+", label: "Projects Completed", color: "#D4AF37" },
  { icon: Users, value: 100, suffix: "+", label: "Clients Served", color: "#2563EB" },
  { icon: Heart, value: 99, suffix: "%", label: "Customer Satisfaction", color: "#D4AF37" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available", color: "#2563EB" },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color, fontFamily: "'Orbitron', sans-serif", fontSize: "3rem", fontWeight: 800 }}>
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-6 relative" style={{ background: "#020208" }}>
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)" }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{
                background: `${s.color}15`,
                border: `1px solid ${s.color}33`,
              }}
            >
              <s.icon size={24} style={{ color: s.color }} />
            </motion.div>
            <Counter target={s.value} suffix={s.suffix} color={s.color} />
            <p
              className="mt-2 text-sm"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
