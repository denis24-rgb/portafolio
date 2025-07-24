// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-center text-sm py-4 mt-8 text-gray-400 dark:text-gray-500">
      © {new Date().getFullYear()} Denis. Todos los derechos reservados.
    </footer>
  );
}
