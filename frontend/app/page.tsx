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
      <main className="flex min-h-screen flex-col ">
        <div className="mt-[95px]">
          <Welcome />
        </div>
        <div className="mt-10">
          <Nuestroservicios />
        </div>
        <div className="mt-30">
          <Comofunciona />
        </div>
        <div>
          <div className="mt-28 justify-self-end text-right px-24 bg-color7">
            <h1
              className="  text-right mb-20 bg-color7 text-black
text-[38px]
font-medium"
            >
              Clientes felices
            </h1>
          </div>
          <div className="p-2 overflow-hidden w-full embla bg-gradient-to-tr from-orange-200 via-orange-400 to-orange-200 h-[500px]">
            <Carouselclientes />
          </div>
        </div>
        <div className="mt-20 mb-40">
          <Happypaws />
        </div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>
  );
}