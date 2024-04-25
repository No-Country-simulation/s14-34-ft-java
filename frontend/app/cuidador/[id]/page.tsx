'use client';

import Link from "next/link";
import Image from "next/image";
import HeadersOne from "@/components/containers/headers/headersOne";
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Volver from "@/components/buttons/volver";



const cuidadores = [
    { id: 1, imageUrl: '/paseo/Cuidadores/1.png', nombre: 'Concen', ubicacion: 'Ubicación 1' },
    { id: 2, imageUrl: '/paseo/Cuidadores/2.png', nombre: 'Mati', ubicacion: 'Ubicación 2' },
    { id: 3, imageUrl: '/paseo/Cuidadores/3.png', nombre: 'Mati', ubicacion: 'Ubicación 3' },
    { id: 4, imageUrl: '/paseo/Cuidadores/4.png', nombre: 'Orlando', ubicacion: 'Ubicación 1' },
    { id: 5, imageUrl: '/paseo/Cuidadores/6.png', nombre: 'Valeri', ubicacion: 'Ubicación 2' },
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
            <div className="mt-36 ml-10 flex">
                <div>
                    <Volver />
                </div>
                <div>
                    <div className="w-[241px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex">
                        <div className="text-white text-xl font-medium ">Contactar al cuidador</div>
                    </div>
                </div>
                <div className="w-[1200px] h-[790px] p-[60px] bg-white rounded-2xl shadow flex-col justify-start items-start gap-[50px] inline-flex">
                    <div className="self-stretch justify-start items-start gap-[69px] inline-flex">
                        <div className="px-20 py-[50px] bg-neutral-50 rounded-2xl border border-orange-400 justify-start items-start gap-[54px] flex">
                            <Image className="w-[150px] h-[150px] rounded-full" src={cuidador.imageUrl} alt="foto" width={150} height={150} />
                            <div className="flex-col justify-start items-start gap-5 inline-flex">
                                <div className="self-stretch text-black text-[28px] font-medium ">Valentina López</div>
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