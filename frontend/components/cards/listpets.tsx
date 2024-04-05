'use client'

import { useState } from 'react';

const ListPets = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const cardData = [
    { id: 1, name: 'Pet 1', image: 'url_de_la_imagen' },
    { id: 2, name: 'Pet 2', image: 'url_de_la_imagen' },
    { id: 3, name: 'Pet 3', image: 'url_de_la_imagen' },
    { id: 4, name: 'Pet 4', image: 'url_de_la_imagen' },
    { id: 5, name: 'Pet 5', image: 'url_de_la_imagen' },
    { id: 6, name: 'Pet 6', image: 'url_de_la_imagen' },
    { id: 7, name: 'Pet 7', image: 'url_de_la_imagen' },
    { id: 8, name: 'Pet 8', image: 'url_de_la_imagen' },
    { id: 9, name: 'Pet 9', image: 'url_de_la_imagen' },
    // Agrega más datos de tarjetas según sea necesario
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardData.map(card => (
          <div key={card.id} role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              {/* Aquí puedes mostrar la imagen de la mascota */}
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4">
              <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                {/* Icono de la mascota */}
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center space-x-4 ">
        <div className="flex gap-2">
          <button onClick={() => setCurrentPage(currentPage - 1)} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Previous
          </button>
          <span className="text-lg font-bold p-2">{currentPage}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPets;