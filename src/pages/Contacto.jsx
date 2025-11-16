// src/pages/Contacto.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";

function Contacto() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_syl3yy2",     // 🔁 remplaza
        "template_cuap7ku",    // 🔁 remplaza
        form.current,
        "LxprxsTXKmlHmt0Ex"      // 🔁 remplaza
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* FORMULARIO */}
        <div
          className="bg-[#1e293b] border border-cyan-700 p-8 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            📬 ¡Hablemos!
          </h2>

          <form ref={form} onSubmit={enviarCorreo} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="bg-[#0f172a] border border-cyan-700 p-3 rounded-md text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="bg-[#0f172a] border border-cyan-700 p-3 rounded-md text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="5"
              className="bg-[#0f172a] border border-cyan-700 p-3 rounded-md text-white placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-md font-semibold transition duration-300"
            >
              Enviar mensaje
            </button>
            {enviado && (
              <p className="text-green-400 text-center mt-2">¡Mensaje enviado con éxito!</p>
            )}
          </form>
        </div>

        {/* CONTACTOS */}
        <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="150">
          {/* Nuevo título y párrafo */}
          <h2 className="text-2xl font-bold text-cyan-400 text-center md:text-left">
            Trabajemos juntos
          </h2>
          <p className="text-gray-300 text-lg">
            Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes.
            Si tienes una idea, pregunta o simplemente quieres saludar, estaré encantado de colaborar y crear soluciones juntos.
            Contactame a traves del formulario o por mis redes socicales.
          </p>
          <h2 className="text-2xl font-bold text-cyan-400 text-center md:text-left">
            Puedes encontrarme también en:
          </h2>

          <div className="flex gap-6 mt-6 text-3xl">
            <a
              href="https://wa.me/59163516136"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transform transition-transform duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:denis.gm2000@gmail.com"
              className="p-3 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.facebook.com/denis.guarayo.1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/denis24-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transform transition-transform duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Contacto;
