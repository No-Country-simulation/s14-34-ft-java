import React from 'react';
import Filter from "@/components/cards/filter";

export default function Welcome() {
  const handleSearch = (filters: any) => {
    console.log('Filtros aplicados:', filters);
  };
  return (
    <div className="h-[1055px] w-full relative bg-cover bg-homeimagen bg-no-repeat bg-center flex-shrink-0  filter drop-shadow-[0px 2px 8px rgba(0, 0, 0, 0.25)] z-0">
      <div className="absolute  font-bold text-5xl text-white px-2 top-52 right-24">
        <p className="font-bold text-5xl ">
          <span>Tu compañero feliz,</span><br /><span className="ml-0">siempre cuidado</span>
        </p>
      </div>
      <div className="absolute  font-medium text-4xl text-white px-2 right-10 top-96">
        <p className="font-medium text-4xl"><span>Donde el amor y la atención se</span><br /><span>unen para el bienestar de tu</span><br/><span>mascota</span></p>
      </div>
      <div className="absolute z-20 bg-transparent bottom-60 right-14">
        <Filter onSearch={handleSearch} />
      </div>
    </div>
  )
}
