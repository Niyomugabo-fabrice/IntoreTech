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
        className="absolute -left-40 sm:-left-32 lg:-left-32 top-1/2 -translate-y-1/2"
        style={{
          width: "clamp(200px, 80vw, 600px)",
          height: "clamp(200px, 80vw, 600px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 py-16 sm:py-20 lg:py-32 flex items-center">
        <div className="w-full max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="leading-tight text-xl sm:text-2xl lg:text-4xl mb-4"
            style={{
              fontFamily: "sans-serif",
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
            className="mb-6 leading-relaxed text-sm sm:text-base"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            IntoreTech designs and develops high-performance websites, mobile applications, custom business systems, digital platforms, and technology solutions that help businesses grow and compete in the digital era.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {BADGES.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.07 }}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs sm:text-sm"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <b.icon size={12} style={{ color: "#2563EB" }} />
                <span className="hidden sm:inline">{b.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#services")}
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-black text-sm sm:text-base w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #FFD700)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Explore Services <ArrowRight size={14} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#products")}
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto"
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.5)",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              View Products <ArrowRight size={14} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-7 sm:py-3 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Play size={12} /> Start Your Project
            </motion.button>
          </motion.div>
        </div>

        {/* Right Partial Circle Image with Sunlight Effect - Hidden on mobile and tablet */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
          style={{
            width: "clamp(250px, 30vw, 450px)",
            height: "clamp(250px, 30vw, 450px)",
          }}
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
              className="h-full w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
