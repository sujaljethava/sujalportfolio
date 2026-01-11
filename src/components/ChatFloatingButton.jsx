import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatFloatingButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl cursor-pointer border border-white/10 backdrop-blur-lg"
            >
                {/* Change LINK as per your preference */}
                {/* <Link to="/contact">
          <FaComments className="text-3xl" />
        </Link> */}
                <a
                    href="https://wa.me/919601389117"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>



            </motion.div>
        </motion.div>
    );
}
