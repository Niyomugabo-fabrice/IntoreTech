import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, MessageCircle, Mail, Send, MapPin, Phone, CheckCircle } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Facebook,
    label: "Facebook",
    value: "IntoreTech",
    href: "https://web.facebook.com/IntoreTech",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.1)",
    border: "rgba(24,119,242,0.3)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+250 791 905 573",
    href: "https://wa.me/250791905573",
    color: "#25D366",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.3)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "intoretech@gmail.com",
    href: "mailto:intoretech@gmail.com",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.1)",
    border: "rgba(212,175,55,0.3)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda",
    href: "#",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.1)",
    border: "rgba(37,99,235,0.3)",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello IntoreTech!\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/250791905573?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative" style={{ background: "#000000" }}>
      <div
        className="absolute top-0 right-0"
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
          className="text-center mb-14"
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
            GET IN TOUCH
          </span>
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Start Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Project
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
            >
              Ready to build something extraordinary? Reach out to us via any channel below. We typically respond within 2 hours during business hours.
            </p>

            {CONTACT_CARDS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl block"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}20`, border: `1px solid ${c.color}40` }}
                >
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Business hours */}
            <div
              className="p-4 rounded-2xl mt-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Phone size={14} style={{ color: "#D4AF37" }} />
                <span
                  style={{ color: "#D4AF37", fontFamily: "sans-serif", fontSize: "0.8rem" }}
                >
                  BUSINESS HOURS
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                Monday – Friday: 8:00 AM – 6:00 PM (CAT)<br />
                Saturday: 9:00 AM – 3:00 PM<br />
                Sunday: Closed (WhatsApp available)
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl space-y-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              <h3
                className="mb-2"
                style={{ fontFamily: "sans-serif", color: "#ffffff", fontSize: "1.1rem" }}
              >
                Send a Message
              </h3>

              {[
                { key: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
                { key: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                { key: "subject", label: "Subject", placeholder: "Website Development Project", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    className="block text-xs mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl outline-none transition-colors text-sm"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none text-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-black"
                style={{
                  background: sent ? "linear-gradient(135deg, #25D366, #128C7E)" : "linear-gradient(135deg, #D4AF37, #FFD700)",
                  fontFamily: "'Inter', sans-serif",
                  color: sent ? "#ffffff" : "#000000",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send via WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
