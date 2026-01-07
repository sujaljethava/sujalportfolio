import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <motion.h1
          className="text-3xl font-extrabold text-blue-400 select-none drop-shadow-xl"
          whileHover={{ scale: 1.15, rotateX: 10, rotateY: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Sujal
        </motion.h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          {links.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.2,
                rotateX: 8,
                rotateY: -8,
                translateZ: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              className="cursor-pointer"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 drop-shadow-lg"
                      : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="text-white text-3xl md:hidden"
          whileTap={{ scale: 0.8 }}
        >
          ☰
        </motion.button>
      </div>
    </motion.nav>
  );
}
