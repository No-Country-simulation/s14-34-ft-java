'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import Volver from "@/components/buttons/volver";
import { useSession, signIn, signOut } from "next-auth/react";
import Addpet from "@/components/forms/addpet";
import { Fragment, useEffect, useState } from 'react';


interface Pet {
    id: number;
    typeOfPet: string;
    name: string;
    breed: string;
    age: number;
    size: string;
    gender: string;
    photo: string;
    behaviour: string;
    healthStatus: string;
    location: string;
    vaccinated: boolean;
    sterilized: boolean;
    generalDescription: string;
}

const Mascotas = [
    { id: '1', foto: '/mascotas/1.png', nombre: 'uno' },
    { id: '2', foto: '/mascotas/2.png', nombre: 'dos' },
    { id: '4', foto: '/mascotas/4.png', nombre: 'cuatro' },
    { id: '5', foto: '/mascotas/5.png', nombre: 'cinco' },
    { id: '6', foto: '/mascotas/6.png', nombre: 'seis' },
    { id: '7', foto: '/mascotas/7.png', nombre: 'siete' },
    { id: '8', foto: '/mascotas/8.png', nombre: 'ocho' },
    { id: '9', foto: '/mascotas/9.png', nombre: 'nueve' },
    { id: '10', foto: '/mascotas/10.png', nombre: 'diez' },
    { id: '11', foto: '/mascotas/11.png', nombre: 'once' },
]

export default function Mascota() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [petData, setPetData] = useState<Pet[]>([]);

    // peticion para ver las mascotas creadas

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario)
    }

    const { data: session, status } = useSession();

    // 
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pet/all`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const pet = await res.json();
                setPetData(pet);
            } catch (error) {
                console.error("Error fetching pet data:", error);
            }
        };
        fetchPets();
    }, []);

    if (session) {

        return (
            <div className=" mt-36 ml-10 mr-20 mb-20">
                <div>
                    <Volver />
                </div>
                <div>
                    <div className="mt-20 mb-20 w-[400px] h-[280px] px-[68.50px] bg-neutral-50 rounded-2xl border-2 border-emerald-800 justify-center items-center inline-flex">
                        <button onClick={toggleFormulario} className="px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex">
                            <div className="w-8 h-8 relative">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="ic:round-add">
                                        <path id="Vector" d="M24.4974 17.3346H17.8307V24.0013C17.8307 24.7346 17.2307 25.3346 16.4974 25.3346C15.7641 25.3346 15.1641 24.7346 15.1641 24.0013V17.3346H8.4974C7.76406 17.3346 7.16406 16.7346 7.16406 16.0013C7.16406 15.268 7.76406 14.668 8.4974 14.668H15.1641V8.0013C15.1641 7.26797 15.7641 6.66797 16.4974 6.66797C17.2307 6.66797 17.8307 7.26797 17.8307 8.0013V14.668H24.4974C25.2307 14.668 25.8307 15.268 25.8307 16.0013C25.8307 16.7346 25.2307 17.3346 24.4974 17.3346Z" fill="white" />
                                    </g>
                                </svg>
                            </div>
                            <div className="text-white text-xl font-medium">Agregar mascota</div>
                        </button>
                    </div>
                </div>
                <div className="">{mostrarFormulario && <Addpet onClose={toggleFormulario} />}</div>
                
                <div className="text-center ml-2 mr-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {petData.map((mascota) => (
                        <div key={mascota.id} className="p-2 w-full bg-white rounded-2xl border border-orange-400 hover:border-orange-200 overflow-hidden flex flex-col justify-between items-center gap-2">
                            <div className="self-stretch flex flex-col justify-start items-center gap-3">
                                <div className="image-container w-[125px] h-[125px] mt-4">

                                    <Image className="image" src={mascota.photo} alt={mascota.name} width={125} height={125} />
                                </div>

                                <div className="w-[332px] text-center text-black text-[28px] font-medium">{mascota.name}</div>
                            </div>
                            <div className="view-more w-[332px] px-4 py-2 bg-orange-300 hover:bg-orange-500 rounded-xl justify-center items-center text-white text-xl font-medium">

                                <Link href={`/dashboard/pets/${mascota.id}`}>
                                    Ver más
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    }

    // 
    if (!session) {
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
