"use client"
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: -50 }} // Starting state
        animate={{ opacity: 1, y: 0 }} // Ending state
        transition={{ duration: 0.5 }} // Animation duration
        className="hero bg-gray-100 dark:bg-gray-800 py-20"
      >
        <div className=" flex flex-col justify-center items-center mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            I am a Front-End Developer with a passion for creating beautiful and functional web applications.
          </p>
          <a href="#projects" className=" mt-3 px-6 py-3 bg-blue-500 text-white rounded-full">View Projects</a>

        </div>

      </motion.section>
    );
  };

  export default HeroSection