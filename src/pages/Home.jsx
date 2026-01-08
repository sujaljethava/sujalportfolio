import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto text-white">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-sm">
          Hi, I'm <span className="text-blue-400">Kishan</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A passionate <span className="text-blue-400">Frontend Developer</span> crafting modern
          & interactive digital experiences using React, Tailwind & animations.
        </p>

        <motion.a
          href="#tech"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-lg font-medium shadow-lg cursor-pointer"
        >
          Explore More ↓
        </motion.a>
      </motion.section>


      {/* HEADLINE / HIGHLIGHT SECTION */}
      <motion.section
        id="headline"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 drop-shadow">
          Building Clean & Modern React Interfaces
        </h2>
        <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
          I specialize in creating high‑performance, elegant, user‑friendly UIs using
          **React.js**, **TailwindCSS**, **Framer Motion**, and modern frontend tools.
        </p>
      </motion.section>


      {/* SUMMARY SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
      >
        <h3 className="text-3xl font-bold mb-4">Short Summary</h3>
        <p className="text-gray-200 leading-relaxed">
          I enjoy designing interactive user interfaces with a mix of animations,
          smooth transitions, and attention to detail.  
          I aim to build products that feel fast, responsive, and visually pleasing.
        </p>
      </motion.section>


      {/* TECH STACK SECTION */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Tech Stack</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">

          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "Framer Motion",
            "Node.js",
            "Firebase",
            "Git & GitHub",
            "REST APIs",
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, rotateX: 5 }}
              className="bg-white/10 p-4 rounded-xl border border-white/10 shadow-lg"
            >
              {tech}
            </motion.div>
          ))}

        </div>
      </motion.section>


      {/* EXTRA INFO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24 mb-20 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
      >
        <h3 className="text-3xl font-bold mb-4">More About Me</h3>
        <p className="text-gray-300">
          I love working on UI/UX animations, performance optimization, and creating
          user experiences that feel premium.  
          I also enjoy collaborating on projects, learning new technologies, and pushing
          the limits of frontend development.
        </p>
      </motion.section>

    </div>
  );
}
