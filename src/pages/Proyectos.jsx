// src/pages/Proyectos.jsx

import React from "react";

function Proyectos() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
      <h1
        className="text-4xl font-bold mb-12 text-center text-cyan-400"
        data-aos="fade-up"
      >
        Mis Proyectos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          className="bg-[#1e293b] border border-cyan-700 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold text-cyan-400">Proyecto 1</h2>
          <p className="text-gray-300 mt-2">
            Una breve descripción del primer proyecto.
          </p>
        </div>

        <div
          className="bg-[#1e293b] border border-cyan-700 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-xl font-semibold text-cyan-400">Proyecto 2</h2>
          <p className="text-gray-300 mt-2">
            Una breve descripción del segundo proyecto.
          </p>
        </div>

        <div
          className="bg-[#1e293b] border border-cyan-700 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-xl font-semibold text-cyan-400">Proyecto 3</h2>
          <p className="text-gray-300 mt-2">
            Una breve descripción del tercer proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
