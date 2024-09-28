import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HeroSection from "./Components/HeroSection";




const projectsData = [
  {
    title: "Countries-app",
    description: `An interactive web application that provides detailed information about countries, featuring a user-friendly interface for searching and viewing essential country details.

    Technologies Used
    Next.js
    Tailwind CSS
    TypeScript
    Framer Motion
    Redux
    Vercel
    `,
    link: "https://countries-app-liart-iota.vercel.app/",
    github: "https://github.com/Hassanfedawy/countries_app",
  },
  {
    title: "Amazon Clone",
    description:` A fully functional e-commerce application that mimics the Amazon shopping experience, allowing users to browse products, add them to their cart, and proceed to checkout seamlessly.

    Technologies Used
    Next.js
    Tailwind CSS
    TypeScript
    Redux
    Framer Motion
    Vercel`,
    link: "https://amazonclone-rosy-omega.vercel.app/",
    github: "https://github.com/Hassanfedawy/amazonclone",
  },
  {
    title: "Tip Calculator App",
    description: `A simple and intuitive tip calculator that allows users to easily calculate tips based on their bill amount and preferred tip percentage.

    Technologies Used
    HTML
    CSS
    JavaScript
    GitHub Pages
    `,
    link: "https://hassanfedawy.github.io/tip-calculator-app/",
    github: "https://github.com/Hassanfedawy/tip-calculator-app",
  },
  {
    title: `Age Calculator App`,
    description: `An easy-to-use age calculator that helps users determine their exact age in years, months, and days based on their birth date.

    Technologies Used
    HTML
    CSS
    JavaScript
    GitHub Pages`,
    link: "https://hassanfedawy.github.io/age-calculator-app/",
    github: "https://github.com/Hassanfedawy/age-calculator-app",
  },
  {
    title: "Airbnb Clone",
    description: `A responsive Airbnb clone that allows users to browse listings, filter properties, and view detailed information about each property. The app mimics the core features of the Airbnb platform, providing a clean user experience.

    Technologies Used
    Next.js
    Tailwind CSS
    TypeScript
    Framer Motion
    Vercel`,
    link: "https://air-bnb-clone-rose.vercel.app/",
    github: "https://github.com/Hassanfedawy/air-bnb_clone",
  },
  {
    title: "Legacy Basketball Academy",
    description: `A website for a basketball and fitness academy, currently under development. It aims to provide detailed information about the academy’s programs, trainers, and services. The design focuses on a vibrant, user-friendly interface.

    Technologies Used
    Next.js
    Tailwind CSS
    TypeScript
    Framer Motion
    Vercel`,
    link: "https://legacy-basketball-academy.vercel.app/",
    github: "https://github.com/Hassanfedawy/Legacy-Basketball-Academy",
  },
];


const Home: React.FC = () => {
  return (
    <>

<HeroSection/>
<About/>
<section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">My Projects</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Here are some of my recent projects:
      </p>
      <Projects projects={projectsData} />
    </div>
  </section>
<Contact/>
</>

  );
}

export default Home;

