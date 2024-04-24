"use client";

import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Welcome2 from "@/components/cards/welcome2";
import { useRouter } from 'next/navigation';
import Alojamiento from "@/components/cards/alojamiento";
import Filteralojamiento from "@/components/cards/filteralojamiento";


export default function Resultados({ params }: { params: { lugar: string, tipoMascota: string, fecha: string } }) {
  const router = useRouter();
  const { lugar, fecha, tipoMascota } = params;

  return (
    <div className="bg-color7">
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div>
          <Welcome2 />
        </div>
        <div>
          <Filteralojamiento />
        </div>
        <div>
          <Alojamiento lugar={lugar} fecha={fecha} tipoMascota={tipoMascota} />
        </div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>
  );
}