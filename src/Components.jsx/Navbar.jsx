import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  //menuOpen → mobile menu open hai ya nahi
  //false → default closed
  //ye islie hai taki mobile screen me right me menu bar aye jisme home , about , product,contact ho
  const [menuOpen, setMenuOpen] = useState(false);


  // NavLink className ke function ko ek object deta hai
  // jisme isActive property hoti hai jo batati hai
  // ki current route active hai ya nahi
const linkClass = ({ isActive }) =>
  `relative block py-2 text-sm font-medium transition-colors duration-300

   md:after:content-[''] 
   md:after:absolute md:after:left-0 md:after:-bottom-1
   md:after:h-[2px] md:after:w-full md:after:bg-black
   md:after:origin-left md:after:scale-x-0
   md:after:transition-transform md:after:duration-300
   md:hover:after:scale-x-100

   ${isActive
     ? "text-black md:after:scale-x-100"
     : "text-gray-600 hover:text-black"
   }`;




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
          {/* Navbar me active page highlight karna hota hai, isliye NavLink. */}
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
            // toggle menu open/close
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* Agar menuOpen true hai to mobile menu render karo */}
      {/* Link par click karte hi menuOpen state ko false kar rahe hain */}

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
