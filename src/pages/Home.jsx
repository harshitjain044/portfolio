import { motion } from "framer-motion";
import heroImg from "../assets/image-2.jpg"; // add any sample photo here

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Left Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-blue-500 overflow-hidden flex items-center justify-center bg-gray-800"
        >
          <img
            src={heroImg}
            alt="Harshit Jain"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Harshit Jain</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            A passionate web developer creating modern, responsive, and engaging
            web applications with React and Tailwind CSS.
          </p>

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg "
          >
            View My Work
          </motion.a>
        </motion.div>
        
         
      </div>
    </section>
  );
}
