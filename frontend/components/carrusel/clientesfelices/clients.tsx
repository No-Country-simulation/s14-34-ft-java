'use client'

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const usuarios = [
    {
        nombre: 'Pedro M.',
        imagen: '/pprincipal/review/clientesfelices/1.png',
        testimonio: 'Increíble servicio de principio a fin. ¡Recomiendo HappyPaws a todos los amantes de las mascotas!',
        tiempo: 'Hace 2 sem.'
    },
    {
        nombre: 'Lorena Suares',
        imagen: '/pprincipal/review/clientesfelices/2.png',
        testimonio: 'No puedo expresar con palabras lo feliz que estoy con el cuidado que HappyPaws brindó a mi mascota. ¡Simplemente excepcional!',
        tiempo: 'Hace 1 dia.'
    },
    {
        nombre: 'Juan G.',
        imagen: '/pprincipal/review/clientesfelices/3.png',
        testimonio: 'Mis expectativas fueron superadas con creces. HappyPaws realmente se preocupa por el bienestar de las mascotas y eso se refleja en su servicio.',
        tiempo: 'Hace 4 dias.'
    },
    {
        nombre: 'Orlando C',
        imagen: '/pprincipal/review/clientesfelices/4.png',
        testimonio: 'HappyPaws ofrece un servicio excepcional. ¡Mis mascotas y yo estamos encantados',
        tiempo: 'Hace 1 Seman.'
    },
    {
        nombre: 'R. T',
        imagen: '/pprincipal/review/clientesfelices/5.png',
        testimonio: '¡Increíble atención al cliente! Siempre dispuestos a responder preguntas y brindar la mejor atención tanto a mí como a mi mascota.',
        tiempo: 'Hace 1 Seman.'
    },
    {
        nombre: 'J.O',
        imagen: '/pprincipal/review/clientesfelices/6.png',
        testimonio: 'HappyPaws ha sido una verdadera bendición para mi mascota y para mí. No puedo imaginar llevarla a otro lugar después de la experiencia que tuvimos.',
        tiempo: 'Hace 5 dias'
    },
    {
        nombre: 'J.L',
        imagen: '/pprincipal/review/clientesfelices/7.png',
        testimonio: 'La calidad del servicio de HappyPaws es insuperable. Cada detalle está cuidadosamente pensado para garantizar la comodidad y seguridad de las mascotas.',
        tiempo: 'Hace 4 dias'
    },
    {
        nombre: 'P . L',
        imagen: '/pprincipal/review/clientesfelices/8.png',
        testimonio: 'Mi mascota solía poner resistencia cada vez que la llevaba al cuidado, ¡pero desde que descubrimos HappyPaws, está emocionada de ir cada vez',
        tiempo: 'Hace 3 dias'
    },
    {
        nombre: 'A. C',
        imagen: '/pprincipal/review/clientesfelices/9.png',
        testimonio: 'Maravilloso! Es la única palabra que puedo usar para describir la experiencia que tuve con HappyPaws. Definitivamente regresaré y lo recomendaré a todos mis amigos.',
        tiempo: 'Hace 1 dia.'
    },
    
];

const Carouselclientes = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="" ref={emblaRef}>
            <div className="flex embla__container">
                {usuarios.map((usuario, index) => (
                    <div key={index} className="flex w-full embla__slide content-center py-20 px-5">
                        <div className="w-[410px] h-[314px] bg-white rounded-[20px] flex-col justify-start items-start gap-[15px] inline-flex">
                            <div className="justify-start  gap-[15px] flex p-4">
                                <div className="justify-center items-center gap-[21px] flex">
                                    <div className="w-[75px] h-[75px] justify-center items-center">
                                        <Image
                                            src={usuario.imagen}
                                            alt={`Imagen_${index}`}
                                            width={75}
                                            height={75}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-2">
                                        <div className="flex">
                                            <div className="text-black text-xl font-normal ">{usuario.nombre}</div>
                                        </div>
                                        <div className="w-[196px] justify-center items-center gap-1 inline-flex">
                                            <div className="self-stretch justify-start items-start inline-flex">
                                                <svg width="60" height="30" viewBox="0 0 185 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    {/* Icono de estrella */}
                                                </svg>
                                            </div>
                                            <div className="grow shrink basis-0 self-stretch pr-[23px] py-0.5 justify-start items-center inline-flex">
                                                <div>
                                                </div>
                                                <div className="text-black text-base font-normal ">{usuario.tiempo}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch text-black text-xl font-normal w-[370px] p-4">{usuario.testimonio}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default  Carouselclientes;