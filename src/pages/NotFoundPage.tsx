import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';

const NotFoundPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center text-center">

      <Navbar />

      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale"
        style={{
          backgroundImage: `url('https://sdygfmfocvxwbeoojqwh.supabase.co/storage/v1/object/public/product-images/img/banner.webp')`,
        }}
      ></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="bg-black bg-opacity-85 rounded-lg p-8 shadow-lg max-w-md">
          <h1
            className="text-9xl font-extrabold text-red-500 tracking-tight"
            style={{
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white mt-4">
            Oops... Página no encontrada
          </h2>
          <p className="text-gray-300 mt-2">
            Parece que la página que buscas no existe o fue movida. ¡Pero no te
            preocupes!
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-red-500 text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
