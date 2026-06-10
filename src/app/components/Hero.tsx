import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles, Globe, Smartphone, Database, ShoppingBag, Palette, Rocket } from "lucide-react";

const BADGES = [
  { icon: Globe, label: "Modern Websites" },
  { icon: Smartphone, label: "Mobile Applications" },
  { icon: Database, label: "Business Systems" },
  { icon: ShoppingBag, label: "E-Commerce Solutions" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Rocket, label: "Digital Innovation" },
];

// Sample images array - Edit these paths to your image locations
const HERO_IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
  "/images/hero5.png",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Circular background element from left */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="leading-tight"
              style={{
                fontFamily: "sans-serif",
                fontSize: "clamp(2rem, 4vw, 2rem)",
                fontWeight: 800,
                background: "linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modern Websites & Software Solutions That Grow Your Business
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
              }}
            >
              IntoreTech designs and develops high-performance websites, mobile applications, custom business systems, digital platforms, and technology solutions that help businesses grow and compete in the digital era.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <b.icon size={13} style={{ color: "#2563EB" }} />
                  {b.label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-black"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #FFD700)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Explore Services <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#products")}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.5)",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                View Products <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Play size={14} /> Start Your Project
              </motion.button>
            </motion.div>
          </div>

          {/* Right Partial Circle Image with Sunlight Effect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96"
          >
            {/* Sunlight rays background */}
            <div
              className="absolute w-full h-full"
              style={{
                background: "radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0.2) 20%, rgba(212, 175, 55, 0.05) 40%, transparent 70%)",
                zIndex: 1,
              }}
            />

            <div
              className="relative w-full h-full overflow-hidden flex items-center justify-center"
              style={{
                clipPath: "circle(50% at 100% 50%)",
                zIndex: 2,
              }}
            >
              <img
                src={HERO_IMAGES[currentImageIndex]}
                alt="Hero"
                className="h-96 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
