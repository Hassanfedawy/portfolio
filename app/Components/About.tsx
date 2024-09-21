import CTA from "./CTA";

function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto text-center mb-5 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">About Me</h2>
        <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm a front-end developer with experience in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. My passion lies in building accessible, performant, and user-friendly websites. I enjoy solving complex problems and learning new technologies to keep myself updated with the latest trends in web development.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Skills & Technologies</h3>
          <ul className="flex flex-wrap text-gray-800 dark:text-gray-200 justify-center space-x-4 mt-4">
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">HTML</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">CSS</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">JavaScript</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">TypeScript</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">Tailwind CSS</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">React</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">Next.js</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded mb-2">Redux</li>
          </ul>
        </div>
      </div>
      <CTA />
    </section>
  );
}

export default About;
