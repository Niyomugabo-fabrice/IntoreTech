import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "David Nkurunziza",
    role: "CEO, RwandaShop Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    review: "IntoreTech transformed our business completely. Our new e-commerce platform increased our monthly revenue by 340%. The team's attention to detail and technical expertise is unmatched in Rwanda.",
    stars: 5,
    company: "RwandaShop",
  },
  {
    name: "Dr. Amina Uwimana",
    role: "Medical Director, MedCare Rwanda",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    review: "The hospital management system IntoreTech built for us has revolutionized how we manage patient data and operations. What used to take hours now takes minutes. Incredible team!",
    stars: 5,
    company: "MedCare Rwanda",
  },
  {
    name: "Jean-Pierre Habimana",
    role: "Founder, Kigali Rides",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
    review: "From concept to launch in 90 days. IntoreTech delivered our ride-hailing app on time and on budget. 80,000 downloads later and the app is still rock solid. Five stars isn't enough!",
    stars: 5,
    company: "Kigali Rides",
  },
  {
    name: "Sarah Mukamazimpaka",
    role: "Digital Director, AfriBank",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
    review: "We hired IntoreTech to rebuild our corporate website and digital presence. The result is absolutely stunning — our brand now feels on par with international banks. Our client acquisition doubled.",
    stars: 5,
    company: "AfriBank",
  },
  {
    name: "Patrick Kagabo",
    role: "CTO, FreshMart Africa",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    review: "The Flutter app IntoreTech built for FreshMart exceeded all expectations. Fast, beautiful, and reliable. The post-launch support has been exceptional. Highly recommend them to any serious business.",
    stars: 5,
    company: "FreshMart Africa",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-24 px-6 relative" style={{ background: "#020208" }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            CLIENT REVIEWS
          </span>
          <h2
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            What Clients{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say
            </span>
          </h2>
        </motion.div>

        {/* Card */}
        <div
          className="relative p-8 md:p-10 rounded-3xl mb-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,175,55,0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Quote
            size={48}
            className="absolute top-6 right-8 opacity-10"
            style={{ color: "#D4AF37" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }, (_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" style={{ color: "#D4AF37" }} />
                ))}
              </div>

              {/* Review */}
              <p
                className="text-lg leading-relaxed mb-8"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: "italic",
                }}
              >
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid rgba(212,175,55,0.4)" }}
                />
                <div>
                  <p
                    style={{
                      color: "#ffffff",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                    {t.role}
                  </p>
                </div>
                <div
                  className="ml-auto px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "#D4AF37",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {t.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current ? "#D4AF37" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
