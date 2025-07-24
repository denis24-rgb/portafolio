// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaCog } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-md'
        : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
          style={{ color: '#00d9c0' }}
        >
          <FaCog className="animate-spin-slow" />
          Denis Martínez
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition-colors duration-300 ${location.pathname === link.to
                ? 'text-[#00d9c0]'
                : 'text-gray-800 hover:text-[#00d9c0]'
                }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/cv/denis-cv.pdf"
            download
            className="bg-white text-[#00d9c0] px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transition"
          >
            Descargar CV
          </a>
        </div>

        {/* Botón hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow-md">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-gray-800 hover:text-[#00d9c0]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
