import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-blue-400 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Portfolio
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900 flex flex-col justify-center items-center space-y-8 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;