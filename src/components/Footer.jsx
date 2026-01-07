import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaGithub, FaInstagram, FaLinkedin, 
  FaTwitter, FaFacebook, FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white pt-16 pb-6 mt-20 border-t border-white/10"
    >
      {/* Main Footer Sections */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14">

        {/* SECTION 1 – INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Passionate Frontend Developer creating  
            clean, modern & animated web experiences.  
            Love working with React, Tailwind & Motion.
          </p>
        </div>

        {/* SECTION 2 – NAVIGATION */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Navigation</h2>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Services", link: "/services" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <Link className="hover:text-white transition" to={item.link}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* SECTION 3 – SOCIAL */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Connect With Me</h2>

          <div className="flex gap-6 mt-4 text-3xl">
            {[
              { icon: <FaGithub />, url: "#" },
              { icon: <FaInstagram />, url: "#" },
              { icon: <FaLinkedin />, url: "#" },
              { icon: <FaTwitter />, url: "#" },
              { icon: <FaFacebook />, url: "#" },
              { icon: <FaEnvelope />, url: "mailto:yourmail@gmail.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                whileHover={{ scale: 1.3, rotate: 8 }}
                className="text-gray-300 hover:text-white transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SMALL BAR */}
      <div className="text-center text-gray-500 text-sm mt-14 pt-6 border-t border-white/10">
        © {new Date().getFullYear()} Yash Koladiya. All rights reserved.
      </div>
    </motion.footer>
  );
}
