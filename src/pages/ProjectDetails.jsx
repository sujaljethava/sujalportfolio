import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return (
      <div className="pt-28 text-center text-white text-2xl">
        Project Not Found
      </div>
    );

  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto text-white">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-blue-400"
      >
        {project.title}
      </motion.h1>

      <p className="text-gray-400 mt-2">{project.timeline}</p>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-xl"
      >
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="text-gray-300">{project.description}</p>
      </motion.div>

      {/* Roles & Contributions */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 bg-white/5 p-6 rounded-xl border border-white/10"
      >
        <h2 className="text-2xl font-bold mb-3">My Role & Contributions</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          {project.role.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {project.tech.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12 }}
              className="bg-white/10 text-center p-3 rounded-lg border border-white/10 shadow-lg"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
