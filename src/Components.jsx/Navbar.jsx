import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 text-sm font-medium transition
     ${isActive ? "text-black" : "text-gray-600 hover:text-black"}`;

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md font-bold">
            e
          </div>
          <span className="text-lg font-semibold tracking-wide text-gray-900">
            Trade
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button className="flex items-center gap-1 text-gray-700 hover:text-black transition">
            <span className="text-2xl">🛒</span>
            <span className="hidden sm:block text-sm font-medium">Cart</span>
          </button>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
