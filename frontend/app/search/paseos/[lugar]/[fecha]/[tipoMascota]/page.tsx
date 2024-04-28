"use client";

import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Welcome3 from "@/components/cards/welcome3";
import { useRouter } from 'next/navigation';
import Alojamiento from "@/components/cards/alojamiento";


export default function Resultados({ params }: { params: { lugar: string, tipoMascota: string, fecha: string } }) {
    const router = useRouter();
    const { lugar, fecha, tipoMascota } = params;

    return (
      <div className="bg-color7">
        <HeadersOne />
        <main className="flex min-h-screen flex-col">
          <div className="mt-[95px]">
            <Welcome3 />
          </div>
          <div className="mt-8">
            <div className="justify-self-end text-right px-24 bg-color7">
              <h1 className="text-[38px]  text-right font-semibold mb-10 bg-color7">
                Paseos
              </h1>
            </div>
            <Alojamiento
              lugar={lugar}
              fecha={fecha}
              tipoMascota={tipoMascota}
            />
          </div>
        </main>
        <FootersOne />
        <Foothercopyrigth />
      </div>
    );
}