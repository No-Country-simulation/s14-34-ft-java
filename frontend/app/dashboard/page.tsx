import React from 'react';
import Perfil from "@/components/cards/perfil";
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import HeadersOne from "@/components/containers/headers/headersOne";


export default function page() {
  return (
    <div className="bg-color7">
      <HeadersOne />
      <main className="flex min-h-screen flex-col">
        <div className="justify-center">
          <Perfil />
        </div>
      </main>
      <FootersOne />
      <Foothercopyrigth />
    </div>

  )
}

