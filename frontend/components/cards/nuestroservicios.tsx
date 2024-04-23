'use client'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Nuestroservicios() {
  const router = useRouter()

  // fecha actual
  const obtenerFechaActualEnFormato = (): string => {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
    const año = fechaActual.getFullYear();
    
    return `${dia}-${mes}-${año}`;
};

const fechaActualEnFormato = obtenerFechaActualEnFormato();

  // paseos
  const handleDivClick1 = () => {
    const fechaActualEnFormato = obtenerFechaActualEnFormato();
    // Redirige al usuario a la página deseada con la fecha actual en la URL
    router.push(`/search/paseos/buenos_aires/${fechaActualEnFormato}/perro`);
};
  // alojamiento
  const handleDivClick2 = () => {
    const fechaActualEnFormato = obtenerFechaActualEnFormato();
    // Redirige al usuario a la página deseada con la fecha actual en la URL
    router.push(`/search/alojamiento/buenos_aires/${fechaActualEnFormato}/perro`);
};
  // visitas
  const handleDivClick3 = () => {
    const fechaActualEnFormato = obtenerFechaActualEnFormato();
    // Redirige al usuario a la página deseada con la fecha actual en la URL
    router.push(`/search/visitas/buenos_aires/${fechaActualEnFormato}/perro`);
};

  return (
    <div id="servicios" className="bg-color7 p-2 w-full ">
      <div className="justify-self-end text-right px-24">
        <h1 className="text-[38px]  text-right font-semibold">Nuestro servicios</h1>
      </div>
      <div className="flex justify-around p-[80px]">
        <div onClick={handleDivClick1} className="cursor-pointer hover:scale-110 hover:border-color2 hover:border-2 w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/pprincipal/nuestroservicios/1.jpg" width={380} height={187} alt="Pasos"
          />
          <div className="p-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="text-black text-[22px] font-medium"><p className="text-[22px] text-balance font-semibold">Paseos</p></div>
            </div>
            <div className="text-black text-lg font-normal">
              <p>Nos aseguramos de que tu compañero reciba el ejercicio para mantenerse feliz y saludable con paseadores de confianza.
              </p>
            </div>
          </div>
        </div>
        <div onClick={handleDivClick2} className="cursor-pointer hover:scale-110 hover:border-color2 hover:border-2 w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/pprincipal/nuestroservicios/2.jpg" width={380} height={187} alt="Pasos2" 
          />
          <div className="p-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="text-black text-[22px] font-medium"><p className="text-[22px] font-semibold text-balance">Alojamiento</p></div>
            </div>
            <div className="text-black text-lg font-normal">
              <p>Nos encargamos de proporcionar un ambiente calido y comodo para tu amigo peludo. Con cuidadores ambalesy atencion personalizada.
              </p>
            </div>
          </div>
        </div>
        <div onClick={handleDivClick3} className="cursor-pointer hover:scale-110 hover:border-color2 hover:border-2 w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/pprincipal/nuestroservicios/3.jpg" width={380} height={187} alt="Pasos3" 
          />
          <div className="p-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="text-black text-[22px] font-medium"><p className="text-[22px] text-balance font-semibold">Visitas a Domicilios</p></div>
            </div>
            <div className="text-black text-lg font-normal">
              <p>Nuestros cuidadores expertos se desplazan hasta tu hogar para alimentar, jugar y mimar a tu mascota.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
