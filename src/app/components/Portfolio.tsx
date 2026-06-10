import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, TrendingUp } from "lucide-react";

const CATS = ["All", "Websites", "Mobile Apps", "Business Systems", "E-Commerce"];

const PROJECTS = [
  {
    title: "RwandaShop E-Commerce Platform",
    cat: "E-Commerce",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    metric: "+340% Sales",
    desc: "Full-stack marketplace serving 50,000+ monthly users with real-time inventory and payment processing.",
  },
  {
    title: "MedTrack Hospital Management",
    cat: "Business Systems",
    tags: ["React", "Python", "PostgreSQL", "AI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format",
    metric: "12 Hospitals",
    desc: "Comprehensive HMS deployed across 12 hospitals, managing 100,000+ patient records.",
  },
  {
    title: "Kigali Rides Mobile App",
    cat: "Mobile Apps",
    tags: ["React Native", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format",
    metric: "80K Downloads",
    desc: "On-demand ride-hailing app with real-time tracking, in-app payments and driver dashboard.",
  },
  {
    title: "TechCorp Corporate Website",
    cat: "Websites",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
    metric: "+210% Traffic",
    desc: "High-performance corporate site with a 98/100 Lighthouse score and stunning visual design.",
  },
  {
    title: "AfriPay Payment Platform",
    cat: "Business Systems",
    tags: ["React", "Node.js", "Blockchain", "AWS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
    metric: "$2M+ Processed",
    desc: "Secure fintech platform processing millions in monthly transactions across East Africa.",
  },
  {
    title: "FreshMart Grocery App",
    cat: "E-Commerce",
    tags: ["Flutter", "Firebase", "Stripe"],
    image: "https://images.unsplash.com/photo-1543168256-418811576931?w=600&h=400&fit=crop&auto=format",
    metric: "30K Users",
    desc: "Same-day grocery delivery app with smart inventory management and loyalty rewards.",
  },
  {
    title: "EduLearn LMS Platform",
    cat: "Websites",
    tags: ["React", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
    metric: "5,000 Students",
    desc: "Learning management system serving students across Rwanda with live classes and AI grading.",
  },
  {
    title: "PropertyHub Real Estate",
    cat: "Mobile Apps",
    tags: ["React Native", "Node.js", "Maps", "AI"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format",
    metric: "1,200 Listings",
    desc: "AI-powered property search and management app with virtual tours and mortgage calculator.",
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-24 px-6 relative" style={{ background: "#000000" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
            OUR WORK
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
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-sm transition-all"
              style={{
                background: active === cat ? "linear-gradient(135deg, #D4AF37, #FFD700)" : "rgba(255,255,255,0.04)",
                color: active === cat ? "#000" : "rgba(255,255,255,0.65)",
                border: active === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: active === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(212,175,55,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
                  />
                  {/* Metric badge */}
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      color: "#D4AF37",
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    <TrendingUp size={10} /> {p.metric}
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <ExternalLink size={24} style={{ color: "#D4AF37" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{
                      background: "rgba(37,99,235,0.15)",
                      color: "#60A5FA",
                      border: "1px solid rgba(37,99,235,0.3)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {p.cat}
                  </span>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif", color: "#ffffff", fontSize: "0.95rem" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.5)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
