import React from 'react';
import Filter from "@/components/cards/filter";

export default function Welcome() {
  const handleSearch = (filters: any) => {
    //   // Aquí puedes manejar la lógica para realizar la búsqueda utilizando los filtros
    console.log('Filtros aplicados:', filters);
  };
  return (
    <div className="h-[1055px] w-[1440 px] relative bg-cover bg-homeimagen bg-no-repeat bg-center flex-shrink-0 h-screen w-full filter drop-shadow-[0px 2px 8px rgba(0, 0, 0, 0.25)]">
      <div style={{ position: 'absolute', top: '190px', left: '790px', right: '120px', bottom: '325px' }} className="text-blod text-[58px] px text-white  w-[530px] f-[125px]">
        <p>Tu compañero feliz, siempre cuidado</p>
        
      </div >
      <div style={{ position: 'absolute', top: '450px', left: '790px', right: '120px', bottom: '325px' }} className="text-medium text-4xl text-white w-[530px] f-[125px]">
      <p >Donde el amor y la atecion se unen para el bienestar de tu mascota</p>
      </div>
      <div style={{ position: 'absolute', top: '770px', left: '70px', right: '120.5px', bottom: '325px' }}>
        <Filter onSearch={handleSearch} />
      </div>

    </div>
  )
}