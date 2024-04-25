
'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import LocationMap from "@/components/map/LocationMap";
import { useRouter } from 'next/navigation';

const cuidadores = [
    {
        id: 1,
        imageUrl: '/paseo/Cuidadores/1.png',
        nombre: 'Julieta Fernández',
        ubicacion: 'Ubicación 1',
        detalles: 'Soy una amante de los animales con experiencia en el cuidado de perros y gatos. '
    },
    {
        id: 2,
        imageUrl: '/paseo/Cuidadores/2.png',
        nombre: 'Abril Sánchez',
        ubicacion: 'Ubicación 2',
        detalles: 'Tengo una pasión por los animales desde que era niña. He trabajado con perros de todas las edades y tamaños.'
    },
    {
        id: 3,
        imageUrl: '/paseo/Cuidadores/3.png',
        nombre: 'Agustina Pérez',
        ubicacion: 'Ubicación 3',
        detalles: 'Me considero una persona responsable y confiable, especialmente cuando se trata del cuidado de mascotas.'
    },
    {
        id: 4,
        imageUrl: '/paseo/Cuidadores/4.png',
        nombre: 'Catalina Diaz',
        ubicacion: 'Ubicación 1',
        detalles: 'Mi amor por los animales me llevó a convertirme en cuidadora profesional.'
    },
    {
        id: 5,
        imageUrl: '/paseo/Cuidadores/5.png',
        nombre: 'Azmin Alvarez',
        ubicacion: 'Ubicación 2',
        detalles: 'Como amante de los animales, disfruto pasar tiempo con perros y gatos.'
    },
    {
        id: 6,
        imageUrl: '/paseo/Cuidadores/6.png',
        nombre: 'Franco Bravo',
        ubicacion: 'Ubicación 2',
        detalles: 'Soy un entusiasta de los animales con experiencia en el cuidado de perros y gatos. '
    }
];

const formatPlace = (place: string) => {
    const words = place.split('_');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const formattedPlace = capitalizedWords.join(' ');
    return formattedPlace;
};

export default function Alojamiento({ lugar, fecha, tipoMascota }: { lugar: string, fecha: string, tipoMascota: string }) {
    const router = useRouter()
    const formattedPlace = formatPlace(lugar);
    const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('');
    const ubicacion = { lat: -34.603722, lng: -58.381592 };

    const handleCuidadorClick2 = (ubicacion: string) => {
        setUbicacionSeleccionada(ubicacion);
    };

    const handleCuidadorClick = (id: number) => {
        // Redireccionar a una ruta dinámica con el ID del cuidador como parámetro
        router.push(`/cuidador/${id}`);
    };

    return (
        <div>
            <div className="justify-self-end text-right px-24 bg-color7 mb-20">
                <div className="grid grid-cols-2 gap-20">
                    <div style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', maxHeight: '655px', width: '585px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="">
                            {cuidadores.map(cuidador => (
                                <div key={cuidador.id} className=" hover:border-color2 hover:border-2 w-[585px] h-[202px] bg-white rounded-2xl border-1 border-emerald-800 justify-center items-start gap-2.5 inline-flex" onClick={() => handleCuidadorClick(cuidador.id)}>
                                    <div className=" overflow-hidden w-[175px] h-[200px]">
                                        <Image src={cuidador.imageUrl} alt="fotocuidador" width={173} height={199} />
                                    </div>
                                    <div className="grow shrink basis-0 p-5 flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className="self-stretch text-black text-[24px] font-semibold text-left">{cuidador.nombre}</div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="justify-center items-end flex p">
                                            <div>
                                                <svg width="80" height="37" viewBox="0 0 185 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5965 4.85674C16.768 4.50927 17.0334 4.21673 17.3625 4.01218C17.6916 3.80762 18.0714 3.69922 18.4589 3.69922C18.8464 3.69922 19.2262 3.80762 19.5553 4.01218C19.8844 4.21673 20.1498 4.50927 20.3213 4.85674L23.8315 11.9694L31.6804 13.1118C32.0641 13.1671 32.4247 13.3288 32.7213 13.5784C33.0179 13.828 33.2387 14.1557 33.3588 14.5243C33.4789 14.8929 33.4934 15.2878 33.4007 15.6642C33.308 16.0406 33.1118 16.3836 32.8343 16.6543L27.1525 22.1908L28.4933 30.0074C28.559 30.3894 28.5164 30.7823 28.3704 31.1414C28.2245 31.5005 27.9809 31.8117 27.6673 32.0395C27.3536 32.2674 26.9825 32.403 26.5958 32.4309C26.2092 32.4588 25.8224 32.378 25.4793 32.1975L18.4589 28.505L11.4385 32.1975C11.0954 32.378 10.7087 32.4588 10.322 32.4309C9.93531 32.403 9.56417 32.2674 9.25055 32.0395C8.93692 31.8117 8.69334 31.5005 8.54736 31.1414C8.40138 30.7823 8.35882 30.3894 8.42451 30.0074L9.76304 22.1908L4.0858 16.652C3.80903 16.3813 3.6134 16.0387 3.52099 15.6628C3.42857 15.2869 3.44306 14.8926 3.56281 14.5245C3.68256 14.1563 3.90281 13.829 4.1987 13.5794C4.4946 13.3298 4.85436 13.1678 5.23741 13.1118L13.084 11.9694L16.5965 4.85674Z" fill="#FFD21E" />
                                                    <path d="M53.5965 4.85674C53.768 4.50927 54.0334 4.21673 54.3625 4.01218C54.6916 3.80762 55.0714 3.69922 55.4589 3.69922C55.8464 3.69922 56.2262 3.80762 56.5553 4.01218C56.8844 4.21673 57.1498 4.50927 57.3213 4.85674L60.8315 11.9694L68.6804 13.1118C69.0641 13.1671 69.4247 13.3288 69.7213 13.5784C70.0179 13.828 70.2387 14.1557 70.3588 14.5243C70.4789 14.8929 70.4934 15.2878 70.4007 15.6642C70.308 16.0406 70.1118 16.3836 69.8343 16.6543L64.1525 22.1908L65.4933 30.0074C65.559 30.3894 65.5164 30.7823 65.3704 31.1414C65.2245 31.5005 64.9809 31.8117 64.6673 32.0395C64.3536 32.2674 63.9825 32.403 63.5958 32.4309C63.2092 32.4588 62.8224 32.378 62.4793 32.1975L55.4589 28.505L48.4385 32.1975C48.0954 32.378 47.7087 32.4588 47.322 32.4309C46.9353 32.403 46.5642 32.2674 46.2505 32.0395C45.9369 31.8117 45.6933 31.5005 45.5474 31.1414C45.4014 30.7823 45.3588 30.3894 45.4245 30.0074L46.763 22.1908L41.0858 16.652C40.809 16.3813 40.6134 16.0387 40.521 15.6628C40.4286 15.2869 40.4431 14.8926 40.5628 14.5245C40.6826 14.1563 40.9028 13.829 41.1987 13.5794C41.4946 13.3298 41.8544 13.1678 42.2374 13.1118L50.084 11.9694L53.5965 4.85674Z" fill="#FFD21E" />
                                                    <path d="M90.5965 4.85674C90.768 4.50927 91.0334 4.21673 91.3625 4.01218C91.6916 3.80762 92.0714 3.69922 92.4589 3.69922C92.8464 3.69922 93.2262 3.80762 93.5553 4.01218C93.8844 4.21673 94.1498 4.50927 94.3213 4.85674L97.8315 11.9694L105.68 13.1118C106.064 13.1671 106.425 13.3288 106.721 13.5784C107.018 13.828 107.239 14.1557 107.359 14.5243C107.479 14.8929 107.493 15.2878 107.401 15.6642C107.308 16.0406 107.112 16.3836 106.834 16.6543L101.152 22.1908L102.493 30.0074C102.559 30.3894 102.516 30.7823 102.37 31.1414C102.224 31.5005 101.981 31.8117 101.667 32.0395C101.354 32.2674 100.982 32.403 100.596 32.4309C100.209 32.4588 99.8224 32.378 99.4793 32.1975L92.4589 28.505L85.4385 32.1975C85.0954 32.378 84.7087 32.4588 84.322 32.4309C83.9353 32.403 83.5642 32.2674 83.2505 32.0395C82.9369 31.8117 82.6933 31.5005 82.5474 31.1414C82.4014 30.7823 82.3588 30.3894 82.4245 30.0074L83.763 22.1908L78.0858 16.652C77.809 16.3813 77.6134 16.0387 77.521 15.6628C77.4286 15.2869 77.4431 14.8926 77.5628 14.5245C77.6826 14.1563 77.9028 13.829 78.1987 13.5794C78.4946 13.3298 78.8544 13.1678 79.2374 13.1118L87.084 11.9694L90.5965 4.85674Z" fill="#FFD21E" />
                                                    <path d="M127.596 4.85674C127.768 4.50927 128.033 4.21673 128.362 4.01218C128.692 3.80762 129.071 3.69922 129.459 3.69922C129.846 3.69922 130.226 3.80762 130.555 4.01218C130.884 4.21673 131.15 4.50927 131.321 4.85674L134.832 11.9694L142.68 13.1118C143.064 13.1671 143.425 13.3288 143.721 13.5784C144.018 13.828 144.239 14.1557 144.359 14.5243C144.479 14.8929 144.493 15.2878 144.401 15.6642C144.308 16.0406 144.112 16.3836 143.834 16.6543L138.152 22.1908L139.493 30.0074C139.559 30.3894 139.516 30.7823 139.37 31.1414C139.224 31.5005 138.981 31.8117 138.667 32.0395C138.354 32.2674 137.982 32.403 137.596 32.4309C137.209 32.4588 136.822 32.378 136.479 32.1975L129.459 28.505L122.439 32.1975C122.095 32.378 121.709 32.4588 121.322 32.4309C120.935 32.403 120.564 32.2674 120.251 32.0395C119.937 31.8117 119.693 31.5005 119.547 31.1414C119.401 30.7823 119.359 30.3894 119.425 30.0074L120.763 22.1908L115.086 16.652C114.809 16.3813 114.613 16.0387 114.521 15.6628C114.429 15.2869 114.443 14.8926 114.563 14.5245C114.683 14.1563 114.903 13.829 115.199 13.5794C115.495 13.3298 115.854 13.1678 116.237 13.1118L124.084 11.9694L127.596 4.85674Z" fill="#FFD21E" />
                                                    <path d="M164.596 4.85674C164.768 4.50927 165.033 4.21673 165.362 4.01218C165.692 3.80762 166.071 3.69922 166.459 3.69922C166.846 3.69922 167.226 3.80762 167.555 4.01218C167.884 4.21673 168.15 4.50927 168.321 4.85674L171.832 11.9694L179.68 13.1118C180.064 13.1671 180.425 13.3288 180.721 13.5784C181.018 13.828 181.239 14.1557 181.359 14.5243C181.479 14.8929 181.493 15.2878 181.401 15.6642C181.308 16.0406 181.112 16.3836 180.834 16.6543L175.152 22.1908L176.493 30.0074C176.559 30.3894 176.516 30.7823 176.37 31.1414C176.224 31.5005 175.981 31.8117 175.667 32.0395C175.354 32.2674 174.982 32.403 174.596 32.4309C174.209 32.4588 173.822 32.378 173.479 32.1975L166.459 28.505L159.439 32.1975C159.095 32.378 158.709 32.4588 158.322 32.4309C157.935 32.403 157.564 32.2674 157.251 32.0395C156.937 31.8117 156.693 31.5005 156.547 31.1414C156.401 30.7823 156.359 30.3894 156.425 30.0074L157.763 22.1908L152.086 16.652C151.809 16.3813 151.613 16.0387 151.521 15.6628C151.429 15.2869 151.443 14.8926 151.563 14.5245C151.683 14.1563 151.903 13.829 152.199 13.5794C152.495 13.3298 152.854 13.1678 153.237 13.1118L161.084 11.9694L164.596 4.85674Z" fill="#FFD21E" />
                                                </svg>

                                            </div>
                                            <div className="text-black text-base font-normal ">12 reseñas</div>
                                            </div>
                                            
                                        </div>
                                        <div className="justify-start items-center gap-[9px] inline-flex">
                                            <div className="w-[23px] h-[23px] relative">
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.4974 1.91602C7.78865 1.91602 4.78906 4.9156 4.78906 8.62435C4.78906 13.6556 11.4974 21.0827 11.4974 21.0827C11.4974 21.0827 18.2057 13.6556 18.2057 8.62435C18.2057 4.9156 15.2061 1.91602 11.4974 1.91602ZM6.70573 8.62435C6.70573 5.97935 8.8524 3.83268 11.4974 3.83268C14.1424 3.83268 16.2891 5.97935 16.2891 8.62435C16.2891 11.3843 13.5291 15.5148 11.4974 18.0927C9.50406 15.5339 6.70573 11.3556 6.70573 8.62435Z" fill="black" />
                                                    <path d="M11.4974 11.0202C12.8206 11.0202 13.8932 9.94753 13.8932 8.62435C13.8932 7.30117 12.8206 6.22852 11.4974 6.22852C10.1742 6.22852 9.10156 7.30117 9.10156 8.62435C9.10156 9.94753 10.1742 11.0202 11.4974 11.0202Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="text-black text-base font-medium">Ubicación : {formattedPlace} </div>
                                        </div>
                                        <div className="self-stretch text-black text-sm text-left font-medium ">{cuidador.detalles}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-full border-4 rounded-2xl">
                        <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    );
}
