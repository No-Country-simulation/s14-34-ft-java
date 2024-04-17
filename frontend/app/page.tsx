'use client'

import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Welcome from "@/components/cards/welcome";
import Nuestroservicios from "@/components/cards/nuestroservicios";


export default function Home() {
  return (
    <div className="">
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div>
        <Welcome />
        </div>
        <div>
          <Nuestroservicios />
        </div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>
  );
}


{/* 
<p className="font-roboto text-18 font-normal">Texto de tamaño 18px con Roboto Regular</p>
<p className="font-roboto text-20 font-normal">Texto de tamaño 20px con Roboto Regular</p>
<p className="font-roboto text-24 font-normal">Texto de tamaño 24px con Roboto Regular</p>
<p className="font-roboto text-28 font-normal">Texto de tamaño 28px con Roboto Regular</p>
<p className="font-roboto text-14 font-normal">Texto de tamaño 14px con Roboto Regular</p>
<p className="font-roboto text-16 font-normal">Texto de tamaño 16px con Roboto Regular</p>
<p className="font-roboto text-18 font-normal">Texto de tamaño 18px con Roboto Regular</p>
<p className="font-roboto text-20 font-normal">Texto de tamaño 20px con Roboto Regular</p> 
*/}


// const handleSearch = (filters:any) => {
//   // Aquí puedes manejar la lógica para realizar la búsqueda utilizando los filtros
//   console.log('Filtros aplicados:', filters);
// };
//<Filter onSearch={handleSearch} />