'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import Volver from "@/components/buttons/volver";
import { useSession, signIn, signOut } from "next-auth/react";
import Addpet from "@/components/forms/addpet";
import { useState } from 'react';


const ReservasData = [
    {
        id: '1', foto: '/mascotas/1.png', nombre: 'Belen', apellido: "Perez",
        sevicio: "alojamiento", precio: "30.000", mascota: "Perro", Estado: "activo"
    },

]

export default function Reservas() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // peticion para ver las mascotas creadas

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario)
    }

    const { data: session, status } = useSession();

    if (!session) {

        return (
            <div className=" mt-36 ml-10 mr-20">
                <div className="flex content-center gap-16">
                    <div>
                        <Volver />
                    </div>
                    <div>
                        <button className="w-[470px] h-14 px-[50px] py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-start items-center gap-2.5 inline-flex text-white text-xl font-medium hover:bg-color4 hover:text-color1">
                            Mis reservas
                        </button>
                    </div>
                    <button className="w-[470px] h-14 px-[50px] py-4 bg-white rounded-2xl border border-emerald-800 justify-end items-center gap-2.5 inline-flex text-emerald-800 text-xl font-medium hover:bg-color1 hover:text-white">
                        Mis Historial de reservas
                    </button>

                </div>


                <div className="mt-28 w-[1200px] h-[703px] pt-6 rounded-2xl border border-orange-400 flex-col justify-start items-start inline-flex">
                    {ReservasData.map(reserva => (
                        <div key={reserva.id} className="">

                            <div className="w-[1200px] h-[148px] px-[50px] py-6 bg-white border-t border-orange-400 justify-between items-center inline-flex">
                                <div className="h-[75px] justify-start items-center gap-4 flex">
                                    <div className="w-[75px] h-[75px] justify-center items-center flex">
                                        <Image className="w-[75px] h-[75px] rounded-full" src="https://via.placeholder.com/75x75" alt="foto" width={75}  height={75}/>
                                    </div>
                                    <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[15px] inline-flex">
                                        <div className="self-stretch grow shrink basis-0 justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal ">Belén Pérez</div>
                                        </div>
                                        <div className="self-stretch grow shrink basis-0 justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal ">Cuidador</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 self-stretch justify-start items-start flex">
                                    <div className="grow shrink basis-0 self-stretch p-6 justify-center items-center gap-2.5 flex">
                                        <div className="w-[97px] h-[21px] text-black text-lg font-normal font-['Roboto']">Alojamiento</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-[100px] p-6 justify-center items-center gap-2.5 flex">
                                        <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">$ 80.000</div>
                                    </div>
                                    <div className="grow shrink basis-0 h-[100px] p-6 justify-center items-center gap-2.5 flex">
                                        <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">Perro</div>
                                    </div>
                                    <div className="grow shrink basis-0 p-6 flex-col justify-center items-center gap-2.5 inline-flex">
                                        <div className="self-stretch text-black text-lg font-normal font-['Roboto']">15/04/24</div>
                                        <div className="self-stretch text-black text-lg font-normal font-['Roboto']">25/04/24</div>
                                    </div>
                                </div>
                                <div className="h-[45px] px-6 py-3 bg-green-100 rounded-[50px] justify-center items-center gap-2.5 flex">
                                    <div className="grow shrink basis-0 self-stretch text-center text-emerald-700 text-lg font-medium font-['Roboto']">Activo</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    }

    // 
    if (session) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2 m-24">
                <div className='justify-center text-center justify-items-center'>
                    <div className="text-center text-[30px]"><h1>Debes Iniciar Sesión</h1></div>
                    <div className="w-[180px] h-[55px] px-6 py-4  rounded-[50px] justify-center items-center inline-flex text-color2 hover:bg-color2 border-color2 hover:text-color3 border-2">
                        <Link href="#" onClick={() => signIn()} className="text-xl font-medium">Iniciar Sesión</Link>
                    </div>
                </div>
            </main>
        )
    }
    if (status === "loading") {
        return <div className="flex flex-row gap-2">
            <div>
                <Link href="#" className="p-2"
                >
                    <svg aria-hidden="true" role="status" className="inline w-8 h-8 me-3 text-color2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg> </Link>
            </div>
        </div>;
    }
}

