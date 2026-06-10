import { useState } from "react";
import { TorchlightCursor } from "./components/TorchlightCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Portfolio } from "./components/Portfolio";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { CartProvider, useCart } from "./components/CartContext";

function AppInner() {
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  return (
    <div
      className="min-h-screen"
      style={{ background: "#000000", fontFamily: "'Inter', sans-serif" }}
    >
      <TorchlightCursor />
      <Navbar cartCount={count} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
