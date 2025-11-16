// src/pages/ProyectoDemo.jsx
import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { proyectos } from "../data/proyectos";

export default function ProyectoDemo() {
  const { slug } = useParams();
  const proyecto = useMemo(() => proyectos.find(p => p.slug === slug), [slug]);

  const [lightbox, setLightbox] = useState({ open: false, src: null });

  if (!proyecto) {
    return (
      <section className="min-h-screen px-6 py-10 text-white">
        <Link to="/proyectos" className="text-cyan-400 hover:underline">← Volver</Link>
        <h1 className="text-2xl font-bold mt-6">Proyecto no encontrado</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Link to="/proyectos" className="text-cyan-400 hover:underline">← Volver</Link>
          <a
            href={proyecto.codigo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
          >
            Ver código en GitHub
          </a>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mt-6">{proyecto.titulo}</h1>
        <p className="text-gray-300 mt-3">{proyecto.descripcion}</p>

        {/* Badges de stack */}
        {proyecto.stack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {proyecto.stack.map((t) => (
              <span key={t} className="text-xs px-3 py-1 bg-gray-700/70 rounded-full">{t}</span>
            ))}
          </div>
        )}

        {/* Video (opcional) */}
        {proyecto.video && (
          <div className="mt-8">
            <div className="aspect-video max-w-5xl mx-auto">
              <iframe
                src={proyecto.video} // usa la URL de EMBED, ej: https://www.youtube.com/embed/ABC123XYZ
                title={proyecto.titulo}
                className="w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}


        {/* Highlights / features */}
        {proyecto.features?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">¿Qué incluye?</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              {proyecto.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {/* Galería de imágenes */}
        {proyecto.imagenes?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Capturas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {proyecto.imagenes.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ open: true, src })}
                  className="group block"
                >
                  <img
                    src={src}
                    alt={`${proyecto.titulo} ${i + 1}`}
                    className="w-full rounded-lg shadow-md group-hover:opacity-90 transition"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox simple */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox({ open: false, src: null })}
        >
          <img
            src={lightbox.src}
            alt="preview"
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
