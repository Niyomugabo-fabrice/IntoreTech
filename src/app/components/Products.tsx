import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Star, ShoppingCart, Filter, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "./productsData";
import { useCart } from "./CartContext";
import type { Product } from "./productsData";

const BADGE_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  featured: { bg: "rgba(212,175,55,0.15)", color: "#D4AF37", label: "Featured" },
  bestseller: { bg: "rgba(37,99,235,0.15)", color: "#60A5FA", label: "Best Seller" },
  new: { bg: "rgba(34,197,94,0.15)", color: "#4ADE80", label: "New" },
};

const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Rating"];

export function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Default");
  const [added, setAdded] = useState<number | null>(null);
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "Rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, search, sort]);

  const handleAdd = (p: Product) => {
    addItem(p);
    setAdded(p.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="products" className="py-24 px-6 relative" style={{ background: "#020208" }}>
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto">
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
              background: "rgba(37,99,235,0.1)",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "#60A5FA",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            PRODUCT MARKETPLACE
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
            Premium{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Electronics
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
            {PRODUCTS.length}+ premium devices from top global brands
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search + sort */}
          <div className="flex gap-3 flex-wrap">
            <div
              className="flex items-center gap-2 flex-1 min-w-64 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Search size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="bg-transparent flex-1 outline-none text-sm"
                style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <SlidersHorizontal size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent outline-none text-sm"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Inter', sans-serif" }}
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o} value={o} style={{ background: "#0a0a0a" }}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap items-center">
            <Filter size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-3 py-1.5 rounded-full text-xs transition-all"
                style={{
                  background: category === cat ? "linear-gradient(135deg, #D4AF37, #FFD700)" : "rgba(255,255,255,0.04)",
                  color: category === cat ? "#000000" : "rgba(255,255,255,0.6)",
                  border: category === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: category === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p
          className="text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
        >
          Showing {filtered.length} products
        </p>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px rgba(212,175,55,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Badge */}
                {p.badge && (
                  <div
                    className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: BADGE_STYLES[p.badge].bg,
                      color: BADGE_STYLES[p.badge].color,
                      border: `1px solid ${BADGE_STYLES[p.badge].color}33`,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {BADGE_STYLES[p.badge].label}
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden" style={{ paddingTop: "100%", background: "#111" }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="p-3">
                  <p
                    className="text-xs mb-1 truncate"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.category}
                  </p>
                  <p
                    className="text-sm mb-2 leading-tight line-clamp-2"
                    style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.name}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill={i < p.rating ? "#D4AF37" : "transparent"}
                        style={{ color: i < p.rating ? "#D4AF37" : "rgba(255,255,255,0.2)" }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: "#D4AF37",
                        fontSize: "0.85rem",
                      }}
                    >
                      ${p.price.toLocaleString()}
                    </span>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAdd(p)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        background: added === p.id ? "rgba(34,197,94,0.2)" : "rgba(212,175,55,0.15)",
                        border: `1px solid ${added === p.id ? "rgba(34,197,94,0.4)" : "rgba(212,175,55,0.3)"}`,
                        color: added === p.id ? "#4ADE80" : "#D4AF37",
                      }}
                    >
                      <ShoppingCart size={13} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
              No products found for "{search}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
