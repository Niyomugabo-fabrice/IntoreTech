import { motion } from "motion/react";
import { Target, Eye, Lightbulb, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower African businesses and entrepreneurs with world-class technology solutions — websites, mobile apps, custom systems, and premium devices — that unlock growth, efficiency, and global competitiveness.",
    color: "#D4AF37",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be Africa's most trusted and innovative technology company — recognized globally for building digital infrastructure that transforms economies and elevates lives through technology.",
    color: "#2563EB",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    text: "Excellence, integrity, innovation, and client-first thinking drive every decision we make. We build relationships built on trust and deliver results that exceed expectations every time.",
    color: "#D4AF37",
  },
  {
    icon: Zap,
    title: "Our Objectives",
    text: "Deliver 1,000+ successful digital projects by 2026. Expand across East Africa. Launch an advanced digital products studio and become a leading technology hub for African startups.",
    color: "#2563EB",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Decorative glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest mb-4"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
              fontFamily: "sans-serif",
            }}
          >
            WHO WE ARE
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Built for{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              African Excellence
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "1.05rem" }}
          >
            IntoreTech was founded with one bold ambition: to build the technology that Africa needs to compete on the global stage. Named after the legendary Intore warriors of Rwanda — symbols of strength, speed, and excellence — we bring that same spirit to every line of code we write.
          </p>
        </motion.div>

        {/* Story + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="mb-4"
              style={{ fontFamily: "sans-serif", color: "#ffffff", fontSize: "1.5rem" }}
            >
              Our Story
            </h3>
            <p
              className="leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              Founded in Kigali, Rwanda, IntoreTech emerged from a simple yet powerful realization: African businesses deserve technology partners who understand their context, speak their language, and dream as big as they do.
            </p>
            <p
              className="leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              What started as a small web development studio has grown into a full-spectrum technology company — building websites, mobile applications, business automation systems, and distributing premium electronic devices across the region.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Kigali, Rwanda", "Est. 2020", "Team of 20+", "Pan-African Vision"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "#D4AF37",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 360 }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
                alt="IntoreTech team collaborating"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(37,99,235,0.15) 100%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl"
              style={{
                background: "rgba(0,0,0,0.9)",
                border: "1px solid rgba(212,175,55,0.3)",
                backdropFilter: "blur(20px)",
              }}
            >
              <p style={{ fontFamily: "sans-serif", color: "#D4AF37", fontSize: "1.5rem", fontWeight: 700 }}>
                500+
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                Successful Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}33` }}
              >
                <p.icon size={20} style={{ color: p.color }} />
              </div>
              <h4
                className="mb-3"
                style={{ fontFamily: "sans-serif", color: "#ffffff", fontSize: "1rem" }}
              >
                {p.title}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
