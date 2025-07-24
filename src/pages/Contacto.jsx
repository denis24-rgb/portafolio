// src/pages/Contacto.jsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contacto() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white flex flex-col items-center justify-center">
      <h1
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        data-aos="fade-up"
      >
        Contáctame
      </h1>

      <div
        className="bg-[#1e293b] border border-cyan-700 p-8 rounded-xl shadow-md max-w-md w-full text-center hover:shadow-cyan-500/20 transition duration-300"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-lg text-gray-300 mb-6">
          Si deseas ponerte en contacto conmigo, puedes escribirme a través de:
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://wa.me/59171020304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-cyan-300 hover:text-[#00d9c0] transition-colors text-lg"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            WhatsApp
          </a>

          <a
            href="mailto:denis.tuemail@ejemplo.com"
            className="flex items-center gap-3 text-cyan-300 hover:text-[#00d9c0] transition-colors text-lg"
          >
            <FaEnvelope className="text-yellow-400 text-xl" />
            Correo electrónico
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
