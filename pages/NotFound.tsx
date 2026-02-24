import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary opacity-20 font-display">404</h1>
        <h2 className="text-4xl font-bold text-secondary -mt-12 mb-6 relative z-10">Página no encontrada</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="bg-accent hover:bg-yellow-400 text-secondary font-bold px-8 py-3 rounded-md transition-colors inline-flex items-center gap-2">
          <span className="material-symbols-outlined">home</span>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;