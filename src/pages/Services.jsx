import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCogs,
  FaPalette,
} from "react-icons/fa";
import { SiFigma, SiCanva, SiMysql, SiMongodb } from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, responsive, and high‑performance user interfaces using React.js, Tailwind CSS, and component‑based architecture.",
    icon: <FaReact />,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    desc: "Basic backend logic and API integrations for smooth communication between frontend and server.",
    icon: <FaServer />,
    tech: ["Node.js (Basic)", "REST APIs"],
  },
  {
    title: "UI / UX Design",
    desc: "Designing clean and aesthetic layouts before development for better user experience.",
    icon: <FaPalette />,
    tech: ["Figma", "Canva"],
  },
  {
    title: "Database Management",
    desc: "Designing and integrating structured and non‑structured databases for efficient data handling.",
    icon: <FaDatabase />,
    tech: ["MySQL", "MongoDB", "MariaDB"],
  },
  {
    title: "ERPNext Customization",
    desc: "Custom ERPNext solutions to automate workflows and match real‑world business processes.",
    icon: <FaCogs />,
    tech: ["Doctypes", "Client Scripts", "Server Scripts"],
  },
  {
    title: "ERPNext Workflow & Automation",
    desc: "Creating custom workflows, validations, and automated business logic inside ERPNext.",
    icon: <FaCogs />,
    tech: ["Workflow Automation", "Custom Reports"],
  },
  
];

export default function Services() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-white">

      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center"
      >
        My <span className="text-blue-500">Services</span>
      </motion.h1>

      <p className="mt-4 text-center text-gray-400 max-w-3xl mx-auto">
        I provide end‑to‑end development services — from UI design to frontend,
        backend, database handling, and ERPNext customization.
      </p>

      {/* SERVICES GRID */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl"
          >
            <div className="text-4xl text-blue-400 mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {service.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-white/10 rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
