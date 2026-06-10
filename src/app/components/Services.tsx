import { motion } from "motion/react";
import { Globe, Smartphone, Database, Laptop, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "We craft high-performance, SEO-optimized, visually stunning websites that convert visitors into customers. From landing pages to complex web platforms.",
    features: ["Custom Design", "SEO Optimized", "Fast Loading", "Mobile First"],
    color: "#D4AF37",
    glow: "rgba(212,175,55,0.2)",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We build scalable, intuitive apps that users love and businesses rely on.",
    features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Support"],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.2)",
  },
  {
    icon: Database,
    title: "Business Systems Development",
    description:
      "Custom ERP, CRM, HRM, and automation systems that streamline your operations, eliminate inefficiencies, and drive productivity at scale.",
    features: ["ERP Systems", "CRM Solutions", "Automation", "Data Analytics"],
    color: "#D4AF37",
    glow: "rgba(212,175,55,0.2)",
  },
  {
    icon: Laptop,
    title: "Electronic Device Trading",
    description:
      "Premium smartphones, laptops, smartwatches, accessories, and professional-grade electronic devices sourced from top global brands.",
    features: ["Brand New Devices", "Premium Quality", "Warranty Included", "Fast Delivery"],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.2)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative" style={{ background: "#000000" }}>
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 800,
          height: 200,
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest mb-4"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            OUR SERVICES
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            What We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
          >
            End-to-end technology solutions tailored for businesses that demand excellence, performance, and innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative p-8 rounded-2xl cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid rgba(255,255,255,0.08)`,
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${svc.color === "#D4AF37" ? "212,175,55" : "37,99,235"},0.4)`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${svc.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${svc.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${svc.glow}, rgba(0,0,0,0))`,
                  border: `1px solid ${svc.color}33`,
                }}
              >
                <svc.icon size={24} style={{ color: svc.color }} />
              </motion.div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                {svc.title}
              </h3>

              <p
                className="mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                {svc.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {svc.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: `${svc.color}15`,
                      border: `1px solid ${svc.color}33`,
                      color: svc.color,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <button
                className="flex items-center gap-2 text-sm font-medium group/btn"
                onClick={() => {
                  if (svc.title === "Electronic Device Trading") {
                    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{ color: svc.color, fontFamily: "'Inter', sans-serif" }}
              >
                Get Started
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
