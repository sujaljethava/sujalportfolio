import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-center"
      >
        My <span className="text-blue-500">Projects</span>
      </motion.h1>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-blue-400">{p.title}</h2>
            <p className="text-gray-400 mt-1">{p.timeline}</p>

            <p className="mt-3 text-gray-300">
              {p.description}
            </p>

            <Link
              to={`/projects/${p.slug}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
