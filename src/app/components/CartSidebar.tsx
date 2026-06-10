import { AnimatePresence, motion } from "motion/react";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQty, total, clearCart } = useCart();

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return;
    const lines = items.map((i) => `• ${i.name} x${i.qty} = $${(i.price * i.qty).toLocaleString()}`);
    const msg = encodeURIComponent(
      `Hello IntoreTech! I'd like to order:\n\n${lines.join("\n")}\n\n*Total: $${total.toLocaleString()}*\n\nPlease confirm availability and payment details. Thank you!`
    );
    window.open(`https://wa.me/250791905573?text=${msg}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md flex flex-col"
            style={{
              background: "#050508",
              borderLeft: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-6"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} style={{ color: "#D4AF37" }} />
                <span
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                >
                  Your Cart
                </span>
                {items.length > 0 && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs text-black"
                    style={{ background: "#D4AF37", fontFamily: "'Inter', sans-serif" }}
                  >
                    {items.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </div>
              <button onClick={onClose} style={{ color: "rgba(255,255,255,0.5)" }}>
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag size={48} className="mx-auto mb-4" style={{ color: "rgba(212,175,55,0.3)" }} />
                  <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                    Your cart is empty
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                      style={{ background: "#111" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="truncate text-sm mb-1"
                        style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-sm mb-3"
                        style={{ color: "#D4AF37", fontFamily: "'Orbitron', sans-serif" }}
                      >
                        ${item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: "rgba(255,255,255,0.07)", color: "#ffffff" }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          className="w-6 text-center text-sm"
                          style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="p-6 space-y-4"
                style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: "#D4AF37",
                      fontSize: "1.25rem",
                    }}
                  >
                    ${total.toLocaleString()}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(37,185,37,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={buildWhatsAppMessage}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <MessageCircle size={18} />
                  Order via WhatsApp
                </motion.button>

                <button
                  onClick={clearCart}
                  className="w-full text-sm py-2"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
