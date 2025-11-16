// src/data/proyectos.js
export const proyectos = [
  {
    slug: "bibliosys",
    titulo: "Bibliosys",
    descripcion: "Biblioteca digital para Ingeniería en Sistemas (Spring Boot + PostgreSQL + Thymeleaf/Bootstrap).",
    imagen: "/img/bibliosys/1.png",         // portada en la grilla
    demo: "/proyectos/bibliosys",            // << demo interna
    codigo: "https://github.com/denis24-rgb/bibliosys",
    video: "https://www.youtube.com/embed/uPZOWcAnbgE",          // opcional (borra si no usas)
    imagenes: [
      "/img/bibliosys/1.png",
      "/img/bibliosys/2.png",
      "/img/bibliosys/3.png"
    ],
    stack: ["Spring Boot", "PostgreSQL", "JPA", "Thymeleaf", "Bootstrap"],
    features: [
      "Gestión de recursos (PDF/imagenes/videos).",
      "Roles y autenticación.",
      "Comentarios y favoritos."
    ]
  },
  //REPORTES CIUDADANOS
  {
  slug: "app-reportes",
  titulo: "App de Reportes Ciudadanos",
  descripcion: "Aplicación móvil para reportar incidencias con geolocalización, estados de seguimiento y comunicación con instituciones.",
  imagen: "/img/reportes/1.jpg",           // portada que se verá en la grilla
  demo: "/proyectos/app-reportes",          // ruta interna
  codigo: "https://github.com/denis24-rgb/seguridad_ciudadana/tree/main/report_app", // enlace a GitHub
  video: "https://www.youtube.com/embed/EhKWGAWGqAY",            // opcional
  imagenes: [
    "/img/reportes/1.jpg",
    "/img/reportes/2.jpg",
    "/img/reportes/3.jpg"
  ],
  stack: ["Flutter", "PostgreSQL", "Google Maps API", "Firebase"],
  features: [
    "Reportes con geolocalización y fotos.",
    "Seguimiento de estado en tiempo real.",
    "Mapa interactivo con filtrado por tipo de reporte.",
    "Notificaciones push para cambios de estado.",
    "Integración con panel institucional."
  ]
},
//PLATAFORMA WEB INSTITUCIONAL
{
  slug: "plataforma-institucional",
  titulo: "Plataforma Web Institucional",
  descripcion: "Sistema web para la gestión de reportes ciudadanos por parte de instituciones, con roles de administrador, operador y técnico, seguimiento de reportes y panel con mapa interactivo.",
  imagen: "/img/institucional/1.jpg",             // imagen portada
  demo: "/proyectos/plataforma-institucional",    // demo interna
  codigo: "https://github.com/denis24-rgb/Backend", // enlace a GitHub
  video: "/videos/institucional.mp4",             // opcional
  imagenes: [
    "/img/institucional/1.jpg",
    "/img/institucional/2.jpg",
    "/img/institucional/3.jpg"
  ],
  stack: ["Spring Boot", "Thymeleaf", "Bootstrap 5", "PostgreSQL", "JPA"],
  features: [
    "Mapa interactivo con reportes geolocalizados filtrados por zona.",
    "Gestión de usuarios institucionales con roles diferenciados.",
    "Cambio de estado y asignación de técnicos a reportes.",
    "Historial de acciones y subida de evidencias.",
    "Panel de control responsive con acceso seguro."
  ]
}


  // agrega otros proyectos aquí con su propio slug...
];
