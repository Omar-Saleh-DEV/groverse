import Link from "next/link";
import { useCart } from "./CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary cursor-pointer">Groverse Energy</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/financing" className="nav-link">Financing</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/cart" className="relative cursor-pointer">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden btn-primary" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white py-4 border-t shadow-md"
          >
            <Link href="/products" className="block text-center py-2 nav-link">Products</Link>
            <Link href="/about" className="block text-center py-2 nav-link">About</Link>
            <Link href="/financing" className="block text-center py-2 nav-link">Solar Financing Packages</Link>
            <Link href="/team" className="block text-center py-2 nav-link">Our Team</Link>
            <Link href="/cart" className="block text-center py-2 nav-link">Cart ({totalItems})</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
