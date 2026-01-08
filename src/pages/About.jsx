import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBug,
  FaTools,
  FaGitAlt,
  FaNodeJs
} from "react-icons/fa";

import {
  SiReactrouter,
  SiMui,
  SiAntdesign,
  SiAxios,
  SiMariadb,
  SiNodedotjs,
  SiFrappe,
  SiJavascript,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";


export default function About() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* HERO TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center"
      >
        About <span className="text-blue-500">Sujal Jethava</span>
      </motion.h1>

      {/* SUMMARY SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-3">Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m Sujal Jethava, a React.js Developer focused on building responsive,
          user-friendly web applications with modern UI, API integrations, and
          reusable components. I also work on ERPNext customization, including
          client/server scripts, custom doctypes, and workflow automation,
          helping businesses streamline operations. Passionate about learning new
          technologies and solving real-world challenges, I aim to grow
          continuously while contributing to impactful projects.
        </p>
      </motion.div>

      {/* EXPERIENCE SECTION */}
      {/* <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">GalaxyERP Software Pvt. Ltd</h3>
          <p className="text-blue-400 font-medium mt-1">
            React.js & ERPNext Developer (Dec 2024 – Present)
          </p>
          <p className="text-gray-300 mt-3">
            Working on React.js frontend development, ERPNext customization,
            workflow automation, and backend integration.
          </p>
        </div>
      </motion.div> */}
      {/* EXPERIENCE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">
            GalaxyERP Software Pvt. Ltd
          </h3>

          <p className="text-blue-400 font-medium mt-1">
            React.js & ERPNext Developer (Dec 2024 – Present)
          </p>

          <p className="text-gray-300 mt-3 leading-relaxed">
            Currently working as a React.js & ERPNext Developer, focusing on building
            scalable, responsive, and visually appealing web applications.
            I develop modern React components, manage application state,
            and integrate APIs to deliver smooth and interactive user experiences.
            <br /><br />
            In ERPNext, I handle customization such as creating custom doctypes,
            writing client & server scripts, implementing workflow automation,
            and optimizing reports. I work closely with teams and clients to
            translate business requirements into efficient technical solutions
            while maintaining performance, reliability, and clean code standards.
          </p>
        </div>
      </motion.div>


      {/* EDUCATION SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Atmanand Saraswati Science College</h3>
            <p className="text-gray-400">BCA (2022 – 2025) • Surat, India</p>
            <p className="text-gray-300 mt-2">CGPA: 7.2</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Mangalm Vidhayalay</h3>
            <p className="text-gray-400">Std 11 – 12 • Surat, Gujarat</p>
          </div>
        </div>
      </motion.div>

      {/* SKILLS SECTION */}
      {/* <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {[
            "React.js",
            "React Hooks",
            "React Router",
            "MUI / Ant Design",
            "Responsive Design",
            "JavaScript ES6+",
            "Axios / REST APIs",
            "HTML / CSS",
            "ERPNext Customization",
            "Client Scripts",
            "Server Scripts",
            "Workflow Automation",
            "MariaDB (Basic SQL)",
            "Problem Solving",
            "Debugging",
            "Performance Optimization",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateX: 8 }}
              className="bg-white/10 p-4 text-center rounded-lg border border-white/10 shadow-lg cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* SKILLS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {[
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "MS SQL Server", icon: <FaDatabase className="text-red-500" /> },
            { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "ERPNext", icon: <SiFrappe className="text-green-500" /> },
            { name: "MariaDB (SQL)", icon: <SiMariadb className="text-red-500" /> },
            { name: "Performance Optimization", icon: <FaTools className="text-lime-400" /> },

          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 shadow-lg text-center"
            >
              <div className="text-3xl">{skill.icon}</div>
              <span className="text-sm text-gray-200 font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}

        </div>
      </motion.div>


      {/* LANGUAGES */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Languages</h2>
        <p className="text-gray-300">English • Gujarati • Hindi</p>
      </motion.div>

    </div>
  );
}
