// src/components/TarjetaProyecto.jsx

import React from "react";

function TarjetaProyecto({ repo }) {
  return (
    <div
      className="bg-[#1e293b] border border-cyan-700 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <h2 className="text-xl font-semibold text-cyan-400">{repo.name}</h2>
      <p className="text-gray-300 mt-2">
        {repo.description || "Sin descripción"}
      </p>
      <div className="mt-4 text-sm text-gray-400 flex justify-between items-center">
        <span>⭐ {repo.stargazers_count}</span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}

export default TarjetaProyecto;
