// src/pages/SobreMi.jsx

import React from "react";
import { FaUserAlt, FaBullseye, FaRegIdBadge } from "react-icons/fa";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt,
  FaBootstrap, FaNodeJs
} from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";

export default function SobreMi() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] text-white px-6 py-16">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16" data-aos="fade-up">
        Sobre Mí
      </h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div
          className="bg-[#1e293b] p-6 rounded-lg shadow-md border border-cyan-700 hover:shadow-cyan-500/20 transition duration-300"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <FaUserAlt size={22} />
            <h3 className="text-xl font-semibold">¿Quién Soy?</h3>
          </div>
          <p>
            Soy Denis Martínez, desarrollador de software enfocado en crear soluciones reales para mi comunidad.
            Apasionado por construir herramientas tecnológicas útiles e intuitivas.
          </p>
        </div>

        <div
          className="bg-[#1e293b] p-6 rounded-lg shadow-md border border-cyan-700 hover:shadow-cyan-500/20 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <FaBullseye size={22} />
            <h3 className="text-xl font-semibold">Mi Objetivo</h3>
          </div>
          <p>
            Aprender constantemente y aplicar mis conocimientos en proyectos frontend y backend con impacto real.
            Me gusta resolver problemas con código limpio y eficiente.
          </p>
        </div>

        <div
          className="bg-[#1e293b] p-6 rounded-lg shadow-md border border-cyan-700 hover:shadow-cyan-500/20 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <FaRegIdBadge size={22} />
            <h3 className="text-xl font-semibold">Mi Perfil</h3>
          </div>
          <p>
            Responsable, adaptable y comprometido con la calidad.
            Me caracterizo por ser detallista, autónomo y siempre dispuesto a colaborar en equipo.
          </p>
        </div>
      </div>

      {/* Habilidades */}
      <div className="text-center" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Mis Habilidades Técnicas</h3>
        <div className="flex flex-wrap justify-center gap-8 px-4" data-aos="zoom-in" data-aos-delay="100">
          <Skill icon={<FaHtml5 size={32} />} label="HTML" color="text-orange-500" />
          <Skill icon={<FaCss3Alt size={32} />} label="CSS" color="text-blue-500" />
          <Skill icon={<FaJs size={32} />} label="JavaScript" color="text-yellow-400" />
          <Skill icon={<FaReact size={32} />} label="React" color="text-cyan-400" />
          <Skill icon={<FaBootstrap size={32} />} label="Bootstrap" color="text-purple-500" />
          <Skill icon={<FaNodeJs size={32} />} label="Node.js" color="text-green-500" />
          <Skill icon={<FaJava size={32} />} label="Java" color="text-red-500" />
          <Skill icon={<FaGitAlt size={32} />} label="Git" color="text-orange-600" />
          <Skill icon={<SiMysql size={32} />} label="MySQL" color="text-blue-300" />
          <Skill icon={<SiPostgresql size={32} />} label="PostgreSQL" color="text-blue-400" />
        </div>
      </div>

    </section>
  );
}

// Componente reutilizable para cada habilidad
function Skill({ icon, label, color }) {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div className={`mb-1 ${color}`}>{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
