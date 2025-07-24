import { FaUser, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#020617] text-white overflow-hidden pt-10">
      {/* Contenido principal */}
    <div className="px-6 pt-16 pb-0 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Imagen + estadísticas */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-6" data-aos="fade-up">
          <img
            src="/img/perfil.jpg"
            alt="Foto Denis"
            className="w-64 h-64 rounded-full object-cover animate-float"
            style={{
              boxShadow: '0 0 10px rgba(0, 217, 192, 0.3)',
            }}
          />

          <div className="flex flex-row md:flex-col gap-4">
            <div
              className="bg-[#1e293b] p-6 rounded-lg shadow-md border border-cyan-700 text-center hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-2xl font-bold text-green-400">1+</p>
              <p className="text-gray-300 text-sm">Años de experiencia</p>
            </div>
            <div
              className="bg-[#1e293b] p-6 rounded-lg shadow-md border border-cyan-700 text-center hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-2xl font-bold text-green-400">3+</p>
              <p className="text-gray-300 text-sm">Proyectos completados</p>
            </div>
          </div>
        </div>

        {/* Texto de presentación */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">¡Hola!</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">Soy Denis 👋</h2>
          <p className="text-gray-300 text-lg mb-4">
            Soy desarrollador de software apasionado por crear soluciones tecnológicas que aporten a mi comunidad.
          </p>
          <p className="text-gray-300 text-lg">
            Actualmente trabajo en una app de reportes ciudadanos y una biblioteca virtual para estudiantes de Ingeniería en Sistemas.
          </p>
        </div>

        {/* Contacto */}
        <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-white">Contáctame:</span>
          </div>
          <a
            href="https://wa.me/59171020304?text=Hola%20Denis%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#00d9c0] transition-colors duration-300"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            Escríbeme por WhatsApp
          </a>
        </div>

        {/* Botones de navegación */}
        <div className="mt-6 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">
          <Link
            to="/sobre-mi"
            className="flex items-center gap-2 px-6 py-2 border border-white text-white rounded-full hover:text-[#00d9c0] hover:border-[#00d9c0] transition-colors duration-300 transform hover:-translate-y-2"
          >
            <FaUser />
            Más sobre mí
          </Link>
          <Link
            to="/contacto"
            className="flex items-center gap-2 px-6 py-2 border border-white text-white rounded-full hover:text-[#00d9c0] hover:border-[#00d9c0] transition-colors duration-300 transform hover:-translate-y-2"
          >
            <FaEnvelope />
            Contactos
          </Link>
        </div>
      </div>

      {/* Carrusel de tecnologías */}
      <div className="scroll-logos-wrapper py-10 bg-transparent w-full" data-aos="fade-up" data-aos-delay="600">
        <div className="scroll-logos px-10">
          {[
            { name: 'HTML', src: '/img/logos/html.png' },
            { name: 'CSS', src: '/img/logos/css.png' },
            { name: 'JavaScript', src: '/img/logos/js.png' },
            { name: 'React', src: '/img/logos/react.png' },
            { name: 'Java', src: '/img/logos/java.png' },
            { name: 'Python', src: '/img/logos/python.png' },
            { name: 'Flutter', src: '/img/logos/flutter.png' },
            { name: 'Spring Boot', src: '/img/logos/springboot.png' },
            { name: 'Bootstrap', src: '/img/logos/bootstrap.png' },
            { name: 'Git Hub', src: '/img/logos/github.png' },
            { name: 'Git', src: '/img/logos/git.png' },
            { name: 'PostgreSQL', src: '/img/logos/postgresql.png' },
            { name: 'MySQL', src: '/img/logos/mysql.png' },
          ]
            .concat([
              { name: 'HTML', src: '/img/logos/html.png' },
              { name: 'CSS', src: '/img/logos/css.png' },
              { name: 'JavaScript', src: '/img/logos/js.png' },
              { name: 'React', src: '/img/logos/react.png' },
              { name: 'Java', src: '/img/logos/java.png' },
              { name: 'Python', src: '/img/logos/python.png' },
              { name: 'Flutter', src: '/img/logos/flutter.png' },
              { name: 'Spring Boot', src: '/img/logos/springboot.png' },
              { name: 'Bootstrap', src: '/img/logos/bootstrap.png' },
              { name: 'Git Hub', src: '/img/logos/github.png' },
              { name: 'Git', src: '/img/logos/git.png' },
              { name: 'PostgreSQL', src: '/img/logos/postgresql.png' },
              { name: 'MySQL', src: '/img/logos/mysql.png' },
            ])
            .map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full p-2 flex items-center justify-center shadow-md bg-[#1e293b] transform transition-transform duration-300 hover:-translate-y-2">
                  <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-300 mt-2">{tech.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
