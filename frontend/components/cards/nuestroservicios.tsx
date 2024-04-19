import React from 'react'
import Image from "next/image";

export default function Nuestroservicios() {
  return (
    <div className="bg-color7 p-2 w-full ">
      <div className="justify-self-end text-right px-24">
        <h1 className="text-[38px]  text-right font-semibold">Nuestro servicios</h1>
      </div>
      <div className="flex justify-around p-[80px]">
        <div className="w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/nuestroservicio1.jpg" width={380} height={187} alt="Pasos"
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
        <div className="w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/nuestroservicio2.jpg" width={380} height={187} alt="Pasos2" 
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
        <div className="w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2">
          <Image className="self-stretch rounded-tl-2xl rounded-tr-2xl w-[380px] h-[187px] object-cover" src="/nuestroservicio3.jpg" width={380} height={187} alt="Pasos3" 
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
