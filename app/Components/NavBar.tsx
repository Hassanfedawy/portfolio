"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><Link href="#home" className="text-gray-800 dark:text-gray-200">Home</Link></li>
          <li><Link href="#about" className="text-gray-800 dark:text-gray-200">About</Link></li>
          <li><Link href="#projects" className="text-gray-800 dark:text-gray-200">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-800 dark:text-gray-200">Contact</Link></li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="dark:text-gray-200 text-gray-700 p-2 rounded-full focus:outline-none"
        >
          {darkMode ? <FontAwesomeIcon icon={faSun} size='2xl'/> : <FontAwesomeIcon icon={faMoon} size='2xl'/>}
        </button>
      </div>
    </nav>
  );
}
