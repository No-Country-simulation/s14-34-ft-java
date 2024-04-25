'use client'

import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Welcome from "@/components/cards/welcome";
import Nuestroservicios from "@/components/cards/nuestroservicios";
import Comofunciona from "@/components/cards/comofunciona";
import Carouselclientes from "@/components/carrusel/clientesfelices/clients";
import Happypaws from "@/components/cards/happypaws";


export default function Home() {
  return (
    <div className="bg-color7">
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div>
          <Welcome />
        </div>
        <div className="mt-40">
          <Nuestroservicios />
        </div>
        <div className="mt-40">
          <Comofunciona />
        </div>
        <div>
          <div className="mt-40 justify-self-end text-right px-24 bg-color7">
            <h1 className="text-[38px]  text-right font-semibold mb-10 bg-color7">Clientes felices</h1>
          </div>
          <div  className="p-2 overflow-hidden w-full embla bg-gradient-to-tr from-orange-200 via-orange-400 to-orange-200 h-[500px]">
          <Carouselclientes />
          </div>
        </div>
        <div className="mt-40 mb-40">
          <Happypaws />
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