import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10 bg-blue-600"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-on-scroll opacity-0 transition-opacity duration-1000">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Yorman Aguirre"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
            <p className="text-blue-400 font-medium text-lg md:text-xl mb-3">
              Hello, I'm
            </p>
            <h1
              ref={textRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
            >
              Yorman Aguirre
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
              Site Reliability Engineer - DevOps Engineer
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I'm a passionate and experienced Senior Cloud/DevOps Engineer with a strong background in designing,
              implementing, and managing robust cloud infrastructure and CI/CD pipelines. I thrive on leveraging
              cloud technologies, particularly AWS services, to drive innovation, efficiency, and scalability in
              complex systems.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-gray-800 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 animate-bounce transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;