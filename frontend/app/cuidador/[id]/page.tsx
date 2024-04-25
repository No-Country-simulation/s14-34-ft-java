'use client';

import Link from "next/link";
import Image from "next/image";
import HeadersOne from "@/components/containers/headers/headersOne";
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Volver from "@/components/buttons/volver";



const cuidadores = [
    {
        id: 1,
        imageUrl: '/paseo/Cuidadores/1.png',
        nombre: 'Julieta Fernández',
        ubicacion: 'Ubicación 1',
        detalles: 'Soy una amante de los animales con experiencia en el cuidado de perros y gatos. Me encanta pasar tiempo al aire libre, jugar y pasear a los peludos. Además, tengo habilidades en la administración de medicamentos y primeros auxilios.'
    },
    {
        id: 2,
        imageUrl: '/paseo/Cuidadores/2.png',
        nombre: 'Abril Sánchez',
        ubicacion: 'Ubicación 2',
        detalles: 'Tengo una pasión por los animales desde que era niña. He trabajado con perros de todas las edades y tamaños. Disfruto de largos paseos y de proporcionarles todo el amor y cuidado que necesitan.'
    },
    {
        id: 3,
        imageUrl: '/paseo/Cuidadores/3.png',
        nombre: 'Agustina Pérez',
        ubicacion: 'Ubicación 3',
        detalles: 'Me considero una persona responsable y confiable, especialmente cuando se trata del cuidado de mascotas. Tengo experiencia en el cuidado de animales domésticos y estoy comprometida a proporcionarles un ambiente seguro y amoroso.'
    },
    {
        id: 4,
        imageUrl: '/paseo/Cuidadores/4.png',
        nombre: 'Catalina Diaz',
        ubicacion: 'Ubicación 1',
        detalles: 'Mi amor por los animales me llevó a convertirme en cuidadora profesional. He trabajado con una variedad de mascotas y disfruto creando un vínculo especial con cada una. Estoy comprometida a brindarles el mejor cuidado posible.'
    },
    {
        id: 5,
        imageUrl: '/paseo/Cuidadores/5.png',
        nombre: 'Azmin Alvarez',
        ubicacion: 'Ubicación 2',
        detalles: 'Como amante de los animales, disfruto pasar tiempo con perros y gatos. Tengo habilidades en el entrenamiento básico y en proporcionarles una atención integral. Estoy comprometida a hacer que su experiencia de cuidado sea lo más placentera posible.'
    },
    {
        id: 6,
        imageUrl: '/paseo/Cuidadores/6.png',
        nombre: 'Franco Bravo',
        ubicacion: 'Ubicación 2',
        detalles: 'Soy un entusiasta de los animales con experiencia en el cuidado de perros y gatos. Me encanta interactuar con ellos, ya sea jugando, paseando o simplemente brindándoles compañía. Estoy comprometido a proporcionarles el cuidado y la atención que se merecen.'
    }
];


export default function CuidadorId({ params }: { params: { id: string } }) {
    // Encuentra el cuidador con la ID proporcionada en los parámetros
    const cuidador = cuidadores.find(c => c.id === parseInt(params.id));

    if (!cuidador) {
        // Si no se encuentra el cuidador, puedes mostrar un mensaje de error o redireccionar
        return (
            <div>
                <p>Cuidador no encontrado</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <HeadersOne />
            </div>
            <div className="mt-36 ml-10">
                <div className="flex flex-row justify-between">
                    <div className="">
                        <Volver />
                    </div>
                    <div className="mr-24">
                        <button className="w-[250px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex">
                            <div className="text-white text-xl font-medium ">Contactar al cuidador</div>
                        </button>
                    </div>
                </div>

                <div className="mt-10 w-[1200px] h-[790px] p-[60px] bg-white rounded-2xl shadow-md border-2 flex-col justify-start items-start gap-[50px] inline-flex">
                    <div className="self-stretch justify-start items-start gap-[69px] inline-flex">
                        <div className="px-20 py-[50px] bg-neutral-50 rounded-2xl border border-orange-400 justify-start items-start gap-[54px] flex">
                            <Image className="w-[150px] h-[150px] rounded-full" src={cuidador.imageUrl} alt="foto" width={150} height={150} />
                            <div className="flex-col justify-start items-start gap-5 inline-flex">
                                <div className="self-stretch text-black text-[28px] font-medium ">{cuidador.nombre}</div>
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div className="w-[25.67px] h-[36.67px] relative"></div>
                                    <div className="grow shrink basis-0 text-black text-[28px] font-medium ">Qulimes</div>
                                </div>
                                <div className="self-stretch h-[50px] justify-start items-start gap-[5px] inline-flex">
                                    <div className="justify-start items-center flex">
                                        <div className="w-[37px] h-[37px] relative"></div>
                                        <div className="w-[37px] h-[37px] relative"></div>
                                        <div className="w-[37px] h-[37px] relative"></div>
                                        <div className="w-[37px] h-[37px] relative"></div>
                                        <div className="w-[37px] h-[37px] relative"></div>
                                    </div>
                                    <div className="text-black text-[28px] font-medium ">4.9</div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                            <div className="self-stretch text-orange-400 text-[22px] font-medium ">Descripción</div>
                            <div className="self-stretch h-[194px] text-black text-lg font-normal ">¡Hola! Soy un amante de los animales y ofrezco servicios de paseos y visitas a domicilio para tus mascotas. Con dedicación y cuidado excepcional, aseguro que estén felices y activos mientras estás fuera. ¡Reserva conmigo para que tus peludos amigos reciban el amor y la atención que merecen!</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-[94px] inline-flex">
                        <div className="grow shrink basis-0 h-[229px] justify-start items-start gap-[60px] flex">
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Habilidades adicionales</div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Horario flexible</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Vivo cerca de un parque</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="grow shrink basis-0 text-black text-lg font-normal ">Experiencia cuidados especiales</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Mascota que cuida</div>
                                <div className="self-stretch h-[126px] flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Perro</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-[11px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Gato</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Hurón</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Servicios que ofrece</div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Visitas a domicilio</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Paseos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[81px] flex-col justify-start items-start gap-[30px] flex">
                        <div className="text-orange-400 text-[22px] font-medium ">Mi residencia</div>
                        <div className="self-stretch justify-start items-start gap-[100px] inline-flex">
                            <div className="h-[25px] justify-start items-center gap-2.5 flex">
                                <div className="text-black text-lg font-normal ">Vivo en departamento</div>
                            </div>
                            <div className="h-[25px] justify-start items-center gap-[9px] flex">
                                <div className="text-black text-lg font-normal ">Vivo con 1 persona</div>
                            </div>
                            <div className="h-6 justify-start items-center gap-2.5 flex">
                                <div className="text-black text-lg font-normal ">Tengo 1 perro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FootersOne />
                <Foothercopyrigth />
            </div>
        </div>
    )
}
{/* <h2>{cuidador.nombre}</h2>
<Image src={cuidador.imageUrl} alt={cuidador.nombre} width={200} height={200} />
<p>{cuidador.ubicacion}</p>
<Link href="/otra-pagina">Volver</Link> */}