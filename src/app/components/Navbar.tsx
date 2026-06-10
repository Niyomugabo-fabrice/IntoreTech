import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingCart, Zap } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-start"
    >
      <div
        className="w-full px-6 py-3 flex items-center justify-between bg-black"
      >
        {/* Logo */}
        <motion.div
  className="flex items-center cursor-pointer"
  onClick={() => scrollTo("#home", "Home")}
  whileHover={{ scale: 1.04 }}
>
  <img
    src="/images/logo.png"
    alt="IntoreTech"
    className="h-8 md:h-14 w-auto object-contain"
    draggable={false}
  />
</motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href, item.label)}
              className="relative px-4 py-2 rounded-lg text-sm transition-colors"
              style={{
                color: active === item.label ? "#D4AF37" : "rgba(255,255,255,0.7)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {active === item.label && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Cart + menu */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartOpen}
            className="relative p-2 rounded-lg"
            style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            <ShoppingCart size={18} style={{ color: "#D4AF37" }} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-black"
                style={{ background: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
              >
                {cartCount}
              </span>
            )}
          </motion.button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#D4AF37" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-4 right-4 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href, item.label)}
                className="text-left px-4 py-3 rounded-xl text-sm transition-colors"
                style={{
                  color: active === item.label ? "#D4AF37" : "rgba(255,255,255,0.8)",
                  background: active === item.label ? "rgba(212,175,55,0.1)" : "transparent",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
