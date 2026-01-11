import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCogs,
  FaLayerGroup,
  FaUniversalAccess,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiMongodb
} from "react-icons/si";




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
          Hi, I'm <span className="text-blue-400">Sujal</span>
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
      {/* <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
      >
        <h3 className="text-3xl font-bold mb-4">Short Summary</h3>
        <p className="text-gray-200 leading-relaxed">
          I am a frontend-focused developer who loves transforming ideas into
          smooth, interactive, and visually engaging web experiences.
          My work revolves around writing clean, reusable React components,
          crafting responsive layouts, and enhancing user interfaces with
          subtle yet meaningful animations.
          <br /><br />
          I believe great UI is not just about looks — it’s about performance,
          accessibility, and how effortlessly users can interact with a product.
        </p>

      </motion.section> */}


      <section className="mt-24 px-6 max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 tracking-widest text-sm mb-3">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-extrabold leading-tight">
              Crafting clean, modern <br />
              <span className="text-blue-400">
                & meaningful web experiences
              </span>
            </h2>

            <p className="mt-5 text-gray-300 leading-relaxed">
              I’m a frontend‑focused developer who enjoys transforming ideas
              into smooth, interactive, and visually engaging interfaces.
              I specialize in writing clean, reusable React components,
              building responsive layouts, and enhancing UX with subtle
              animations.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Along with frontend development, I actively work on
              <span className="text-white font-medium"> ERPNext customization</span>,
              automating workflows and adapting systems to real‑world business
              needs.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white/10 to-white/5 
                     backdrop-blur-xl rounded-2xl p-8 
                     border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              What I focus on
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <FaReact className="text-cyan-400 text-xl mt-1" />
                <span className="text-gray-200">
                  High‑performance React interfaces & reusable components
                </span>
              </li>

              <li className="flex items-start gap-4">
                <FaLayerGroup className="text-blue-400 text-xl mt-1" />
                <span className="text-gray-200">
                  Clean UI, scalable layouts & fully responsive design
                </span>
              </li>

              <li className="flex items-start gap-4">
                <FaCogs className="text-green-400 text-xl mt-1" />
                <span className="text-gray-200">
                  ERPNext customization, workflows, client & server scripts
                </span>
              </li>

              <li className="flex items-start gap-4">
                <FaUniversalAccess className="text-purple-400 text-xl mt-1" />
                <span className="text-gray-200">
                  Accessibility‑friendly design & smooth micro‑interactions
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>


      {/* TECH STACK SECTION */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        // className="mt-20"
        className="mt-20 scroll-mt-40"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Tech Stack</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "MS SQL Server", icon: <FaDatabase className="text-red-500" /> },
            { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateX: 8 }}
              className="flex flex-col items-center gap-3 bg-white/10 p-5 rounded-xl border border-white/10 shadow-lg"
            >
              <div className="text-4xl">{tech.icon}</div>
              <span className="text-sm font-medium text-gray-200">{tech.name}</span>
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
        {/* <p className="text-gray-300">
          I love working on UI/UX animations, performance optimization, and creating
          user experiences that feel premium.
          I also enjoy collaborating on projects, learning new technologies, and pushing
          the limits of frontend development.
        </p> */}
        <p className="text-gray-300 leading-relaxed">
          I enjoy building interfaces that feel fast, intuitive, and premium.
          Animations, micro‑interactions, and smooth transitions are areas where
          I put special focus, as they significantly enhance user experience.
          <br /><br />
          Beyond coding, I like exploring new frontend tools, improving UI
          performance, and learning modern design patterns. I enjoy collaborating
          with teams, understanding real‑world problems, and turning complex
          requirements into simple, elegant solutions.
        </p>

      </motion.section>

    </div>
  );
}
