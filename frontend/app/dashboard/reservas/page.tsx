import React from 'react';
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import HeadersOne from "@/components/containers/headers/headersOne";
import Reserva from "@/components/cards/reservas";


export default function page() {
  return (
    <div className="bg-color7">
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div className="justify-center">
        <Reserva />
        </div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>

  )
}