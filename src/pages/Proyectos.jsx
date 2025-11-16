// src/pages/Proyectos.jsx
import { Link } from "react-router-dom";
import { proyectos } from "../data/proyectos";

export default function Proyectos() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p) => (
          <div
            key={p.slug}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={p.imagen} alt={p.titulo} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{p.titulo}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{p.descripcion}</p>
              <div className="flex gap-3">
                <Link
                  to={p.demo} // ← navega adentro
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                >
                  Ver Demo
                </Link>
                <a
                  href={p.codigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
