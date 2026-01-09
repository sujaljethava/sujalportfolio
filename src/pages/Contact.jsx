// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto text-white">

//       {/* PAGE TITLE */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl font-extrabold text-center"
//       >
//         Contact <span className="text-blue-500">Me</span>
//       </motion.h1>

//       {/* CONTACT INFO SECTION */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-12 grid md:grid-cols-3 gap-8"
//       >
//         {/* Email */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white/10 p-6 rounded-xl backdrop-blur-xl border border-white/10 shadow-xl"
//         >
//           <FaEnvelope className="text-3xl text-blue-400" />
//           <h3 className="text-xl font-bold mt-3">Email</h3>
//           <p className="text-gray-300 mt-1">sujaljethava13@gmail.com</p>
//         </motion.div>

//         {/* Phone */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white/10 p-6 rounded-xl backdrop-blur-xl border border-white/10 shadow-xl"
//         >
//           <FaPhone className="text-3xl text-blue-400" />
//           <h3 className="text-xl font-bold mt-3">Phone</h3>
//           <p className="text-gray-300 mt-1">+91 9601389117</p>
//         </motion.div>

//         {/* Location */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white/10 p-6 rounded-xl backdrop-blur-xl border border-white/10 shadow-xl"
//         >
//           <FaMapMarkerAlt className="text-3xl text-blue-400" />
//           <h3 className="text-xl font-bold mt-3">Location</h3>
//           <p className="text-gray-300 mt-1">Surat, Gujarat 🇮🇳</p>
//         </motion.div>
//       </motion.div>

//       {/* CONTACT FORM SECTION */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="mt-16 bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">Send Me a Message</h2>

//         <form className="grid gap-6">

//           {/* Name */}
//           <motion.div whileFocus={{ scale: 1.02 }}>
//             <label className="text-gray-300">Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
//             />
//           </motion.div>

//           {/* Email */}
//           <motion.div whileFocus={{ scale: 1.02 }}>
//             <label className="text-gray-300">Your Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
//             />
//           </motion.div>

//           {/* Message */}
//           <motion.div whileFocus={{ scale: 1.02 }}>
//             <label className="text-gray-300">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Write your message..."
//               className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
//             ></textarea>
//           </motion.div>

//           {/* BUTTON */}
//           <motion.button
//             whileHover={{ scale: 1.07 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium shadow-xl transition"
//           >
//             Send Message
//           </motion.button>

//         </form>
//       </motion.div>

//     </div>
//   );
// }





import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-6xl mx-auto text-white">
      
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold">
          Let’s <span className="text-blue-400">Connect</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have a project in mind or just want to say hello?  
          Feel free to reach out — I’d love to hear from you.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-5">
            <FaEnvelope className="text-blue-400 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">sujaljethava13@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaPhoneAlt className="text-blue-400 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+91 9601389117</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-400">Surat, Gujarat, India</p>
            </div>
          </div>

          {/* SUB TEXT */}
          <p className="text-gray-500 pt-6 text-sm leading-relaxed">
            I’m currently open to frontend opportunities, freelance work,
            and collaborations. I usually reply within 24 hours.
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-2 w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Your Email</label>
            <input
              type="email"
              placeholder="john@email.com"
              className="mt-2 w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your idea..."
              className="mt-2 w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-blue-400 transition resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
