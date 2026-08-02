import { links } from "../data/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (!section) return;

  const navbarHeight = 80;

  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-xl font-semibold">
          {name}
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
  href={link.href}
  onClick={(e) => {
    e.preventDefault();

    if (link.name === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    scrollToSection(link.href.substring(1));
  }}
  className="hover:text-cyan-400 transition-colors duration-300"
>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
  {isOpen && (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="md:hidden flex flex-col items-center gap-6 py-6 bg-slate-900 border-t border-slate-700"
    >
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={(e) => {
  e.preventDefault();

  setIsOpen(false);

  if (link.name === "Home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  scrollToSection(link.href.substring(1));
}}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>
    </nav>
  );
}

export default Navbar;