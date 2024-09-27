'use client';

import { useState, useEffect, createContext } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Globe } from 'lucide-react';

// Create a context for language
const LanguageContext = createContext('en');
type Languages = 'en' | 'es';

// Translations
const translations = {
  en: {
    title: "Jonathan Alva",
    about: "About Me",
    aboutText: "Hello there! I'm Jonathan, a Software Developer based in Chile. I use Node.js and React for building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs. I also happen to like learning new languages: currently learning Portuguese.",
    skills: "Skills",
    projects: "Projects",
    project1: "React Quiz",
    project1Desc: "Quiz app built with React. Features multiple choice questions and a score tracker.",
    project2: "Job Portal",
    project2Desc: "Job Portal for React Devs, showcasing job listings and company profiles. Built with React, Vite, and Tailwind CSS.",
    contact: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    connect: "Connect With Me",
  },
  es: {
    title: "Jonathan Alva",
    about: "Sobre Mí",
    aboutText: "¡Hola todos! Soy Jonathan, desarrollador de software ubicado en Chile. Utilizo Node.js y React para construir aplicaciones web escalables. Me encanta convertir problemas complejos en diseños simples, hermosos e intuitivos. También me gusta aprender nuevos idiomas: actualmente estoy aprendiendo portugués.",
    skills: "Habilidades",
    projects: "Proyectos",
    project1: "Quiz React",
    project1Desc: "Aplicación de Quiz construida con React. Cuenta con preguntas de opción múltiple y un rastreador de puntaje.",
    project2: "Portal de Empleo",
    project2Desc: "Portal de Empleo para Desarrolladores React, que muestra listados de empleo y perfiles de empresas. Construido con React, Vite y Tailwind CSS.",
    contact: "Contáctame",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar Mensaje",
    connect: "Conéctate Conmigo",
  },
};

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Languages>('en');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: darkMode
      ? `rgb(31, 41, 55)`
      : `rgb(${Math.min(255, 235 + scrollPosition * 0.1)}, ${Math.min(255, 235 + scrollPosition * 0.1)}, ${Math.min(255, 240 + scrollPosition * 0.1)})`,
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={language}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
        {/* Header */}
        <header className="sticky top-0 z-10 shadow-sm transition-colors duration-300" style={headerStyle}>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{t.title}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              >
                <Globe className={`w-6 h-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`} />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-6 h-6 text-gray-100" /> : <Moon className="w-6 h-6 text-gray-800" />}
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-6">
          {/* Introduction */}
          <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sm:rounded-lg p-6 mb-6`}>
            <h2 className="text-2xl font-bold mb-4">{t.about}</h2>
            <div className="flex items-center">
              <img
                src="/images/pp.jpg?height=100&width=100"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {t.aboutText}
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sm:rounded-lg p-6 mb-6`}>
            <h2 className="text-2xl font-bold mb-4">{t.skills}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Node.js', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git', 'Docker', 'AWS', 'Postman'].map((skill, index) => (
                <div
                  key={skill}
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sm:rounded-lg p-6 mb-6`}>
            <h2 className="text-2xl font-bold mb-4">{t.projects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: t.project1, description: t.project1Desc, link: "https://jonafiction.github.io/react-quiz/" },
                { name: t.project2, description: t.project2Desc, link: "https://jonafiction.github.io/react-jobs" },
              ].map((project, index) => (
                <div
                  key={project.name}
                  className={`border rounded-lg p-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Links */}
          <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sm:rounded-lg p-6`}>
            <h2 className="text-2xl font-bold mb-4">{t.connect}</h2>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
