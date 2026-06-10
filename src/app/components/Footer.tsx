import { motion } from "motion/react";
import { Facebook, MessageCircle, Mail, Zap, ArrowUp } from "lucide-react";

const SERVICES_LINKS = [
  "Website Development",
  "Mobile App Development",
  "Business Systems",
  "E-Commerce Solutions",
  "UI/UX Design",
  "Digital Transformation",
];

const PRODUCT_CATS = [
  "Smartphones",
  "Laptops",
  "Smartwatches",
  "Earbuds & Headphones",
  "Keyboards & Mice",
  "Chargers & Accessories",
];

const COMPANY_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: Facebook, href: "https://web.facebook.com/IntoreTech", color: "#1877F2" },
  { icon: MessageCircle, href: "https://wa.me/250791905573", color: "#25D366" },
  { icon: Mail, href: "mailto:intoretech@gmail.com", color: "#D4AF37" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(212,175,55,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #D4AF37, #2563EB)" }}
              >
                <Zap size={18} className="text-black" />
              </div>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1.2rem",
                  background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IntoreTech
              </span>
            </div>
            <p
              className="mb-6 leading-relaxed text-sm"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
            >
              Premium technology company specializing in web development, mobile applications, business systems, and electronic device trading across East Africa and beyond.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}33`,
                  }}
                >
                  <s.icon size={16} style={{ color: s.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4 text-sm tracking-wider"
              style={{ fontFamily: "sans-serif", color: "#D4AF37" }}
            >
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4 text-sm tracking-wider"
              style={{ fontFamily: "sans-serif", color: "#D4AF37" }}
            >
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Contact */}
          <div>
            <h4
              className="mb-4 text-sm tracking-wider"
              style={{ fontFamily: "sans-serif", color: "#D4AF37" }}
            >
              PRODUCTS
            </h4>
            <ul className="space-y-2.5 mb-8">
              {PRODUCT_CATS.map((c) => (
                <li key={c}>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            <h4
              className="mb-3 text-sm tracking-wider"
              style={{ fontFamily: "sans-serif", color: "#2563EB" }}
            >
              CONTACT
            </h4>
            <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
              <p>📧 intoretech@gmail.com</p>
              <p>📱 +250 791 905 573</p>
              <p>📍 Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} IntoreTech. All rights reserved. Built with ❤️ in Kigali, Rwanda.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((link) => (
              <button
                key={link}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              onClick={scrollTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
              }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
