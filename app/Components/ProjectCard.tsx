"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="project-card bg-white dark:bg-gray-600 rounded-lg shadow-md p-4"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">{project.title}</h3>
      <p className="text-gray-800 dark:text-gray-200 mt-2">{project.description}</p>
      <div className="mt-4">
        <a
          href={project.link}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <span className="mx-2">|</span>
        <a
          href={project.github}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
