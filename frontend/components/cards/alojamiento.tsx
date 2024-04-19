'use client'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import LocationMap from "@/components/map/LocationMap";



const cuidadores = [
    { id: 1, imageUrl: '/cuidador/uno.jpg', nombre: 'Nombre del Cuidador 1', ubicacion: 'Ubicación 1' },
    { id: 2, imageUrl: '/cuidador/dos.jpg', nombre: 'Nombre del Cuidador 2', ubicacion: 'Ubicación 2' },
    { id: 3, imageUrl: '/cuidador/tres.jpg', nombre: 'Nombre del Cuidador 3', ubicacion: 'Ubicación 3' },
    { id: 4, imageUrl: '/cuidador/cuatro.jpg', nombre: 'Nombre del Cuidador 1', ubicacion: 'Ubicación 1' },
    { id: 5, imageUrl: '/cuidador/cinco.jpg', nombre: 'Nombre del Cuidador 2', ubicacion: 'Ubicación 2' }
];

//
const formatPlace = (place: string) => {
    const words = place.split('_');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const formattedPlace = capitalizedWords.join(' ');
    return formattedPlace;
};

export default function Alojamiento({ lugar, fecha, tipoMascota }: { lugar: string, fecha: string, tipoMascota: string }) {

    const formattedPlace = formatPlace(lugar);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('');
    const ubicacion = { lat: -34.603722, lng: -58.381592 };
    const handleCuidadorClick = (ubicacion: string) => {
        setUbicacionSeleccionada(ubicacion);
    };

    return (
        <div>
            <div className="justify-self-end text-right px-24 bg-color7">
                <h1 className="text-[38px] text-right font-semibold mb-10 bg-color7">Resultados Servicio de Alojamiento en {formattedPlace}</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', maxHeight: '655px', width: '585px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="">
                            {cuidadores.map(cuidador => (
                                <div key={cuidador.id} className="w-[585px] h-[202px] bg-white rounded-2xl border border-emerald-800 justify-center items-start gap-2.5 inline-flex" onClick={() => handleCuidadorClick(cuidador.ubicacion)}>
                                    <div className=" overflow-hidden w-[175px] h-[200px]">
                                        <Image src={cuidador.imageUrl} alt="fotocuidador" width={173} height={199} />
                                    </div>
                                    <div className="grow shrink basis-0 p-5 flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className="self-stretch text-black text-[22px] font-semibold text-left">Cuidador</div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="justify-center items-end flex">
                                                {/* Íconos y detalles del cuidador */}
                                            </div>
                                            <div className="text-black text-base font-normal ">12 reseñas</div>
                                        </div>
                                        <div className="self-stretch text-black text-lg text-left font-medium ">Descripción</div>
                                        <div className="justify-start items-center gap-[9px] inline-flex">
                                            <div className="w-[23px] h-[23px] relative">
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.4974 1.91602C7.78865 1.91602 4.78906 4.9156 4.78906 8.62435C4.78906 13.6556 11.4974 21.0827 11.4974 21.0827C11.4974 21.0827 18.2057 13.6556 18.2057 8.62435C18.2057 4.9156 15.2061 1.91602 11.4974 1.91602ZM6.70573 8.62435C6.70573 5.97935 8.8524 3.83268 11.4974 3.83268C14.1424 3.83268 16.2891 5.97935 16.2891 8.62435C16.2891 11.3843 13.5291 15.5148 11.4974 18.0927C9.50406 15.5339 6.70573 11.3556 6.70573 8.62435Z" fill="black" />
                                                    <path d="M11.4974 11.0202C12.8206 11.0202 13.8932 9.94753 13.8932 8.62435C13.8932 7.30117 12.8206 6.22852 11.4974 6.22852C10.1742 6.22852 9.10156 7.30117 9.10156 8.62435C9.10156 9.94753 10.1742 11.0202 11.4974 11.0202Z" fill="black" />
                                                </svg>

                                            </div>
                                            <div className="text-black text-base font-medium">Ubicación : {formattedPlace} </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div>
                    <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    );
}
