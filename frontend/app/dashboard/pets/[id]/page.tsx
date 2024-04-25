'use client';

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from 'react';
//valire //las comentadas, no se encuentran en el figma
interface Pet {
    id: number;
    typeOfPet: string;
    name: string;
    breed: string;
    age: number;
    size: string; 
    gender: string;
    photo: string;
    //behaviour: string;
    //healthStatus: string;
    //location: string;
    vaccinated: boolean;
    sterilized: boolean;
    generalDescription: string;
}

export default function MascotaId({params}: {params: {id:string}}) { 
    const [petData, setPetData] = useState<Pet | null>(null);
    const id =  params.id
    console.log(params.id)


    // Peticion fecth para ver datos de un mascota
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pet/${params.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                const petData: Pet = await res.json();
                console.log(petData)
                setPetData(petData);
            } catch (error) {
                console.error("Error fetching pet data:", error);
            }
        };
        fetchPets();
    }, [params.id]);
    // 
    
    if (!petData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-[787px] h-[1502px] p-[60px] bg-white rounded-2xl shadow flex-col justify-start items-start gap-[50px] inline-flex">
    <div className="self-stretch h-[1382px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch h-[1262px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch justify-between items-end inline-flex">
                <div className="grow shrink basis-0 self-stretch text-black text-[28px] font-medium ">Detalle de la mascota</div>
                <div className="w-8 h-8 relative">
                    <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                </div>
            </div>
            <div className="self-stretch h-[200px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-black text-[22px] font-medium ">Foto</div>
                <div className="self-stretch justify-center items-center gap-6 inline-flex">
                    <Image className="w-[150px] h-[150px] relative rounded-[200px]" src="/mascotas/4.png" alt="foto" width={150} height={150}/>
                </div>
            </div>
            <div className="self-stretch h-[633px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[87px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-black text-[22px] font-medium ">Nombre de tu mascota</div>
                    <div className="self-stretch grow shrink basis-0 px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.name}</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[90px] flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch text-black text-[22px] font-medium">Tipo de mascota</div>
                        <div className="self-stretch grow shrink basis-0 px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.typeOfPet}</div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-[90px] flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch text-black text-[22px] font-medium">Raza</div>
                        <div className="self-stretch grow shrink basis-0 px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.breed}</div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch grow shrink basis-0 text-black text-[22px] font-medium">Edad</div>
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.age}</div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.age}</div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[90px] flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch text-black text-[22px] font-medium">Tamaño</div>
                        <div className="self-stretch grow shrink basis-0 px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.size}</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-[90px] flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch text-black text-[22px] font-medium">Género</div>
                        <div className="self-stretch grow shrink basis-0 px-4 py-3 bg-white rounded-xl border border-emerald-800 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">{petData.gender}</div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-black text-[22px] font-medium">Vacunas</div>
                    <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 h-8 justify-start items-center gap-4 flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">Si</div>
                        </div>
                        <div className="grow shrink basis-0 h-8 justify-start items-center gap-4 flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">No</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-black text-[22px] font-medium">Esterilizado/a</div>
                    <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 h-8 justify-start items-center gap-4 flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">Si</div>
                        </div>
                        <div className="grow shrink basis-0 h-8 justify-start items-center gap-4 flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal">No</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-[300px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch grow shrink basis-0 text-black text-[22px] font-medium">Información adicional</div>
                <div className="self-stretch h-[250px] px-4 py-8 rounded-xl border border-emerald-800 justify-between items-start inline-flex">
                    <div className="grow shrink basis-0 text-justify text-black text-lg font-normal">{petData.generalDescription}</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-center items-center gap-8 inline-flex">
            <div className="grow shrink basis-0 h-14 px-6 py-4 bg-white rounded-2xl border border-emerald-800 justify-center items-center gap-2 flex">
                <div className="text-emerald-800 text-xl font-medium">Cancelar</div>
            </div>
            <div className="grow shrink basis-0 h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 flex justify-center items-center gap-2">
                <div className="p-2 rounded-[50px] justify-start items-start gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                        <div className="w-[17px] h-[17px] left-[4px] top-[3px] absolute">
                        </div>
                    </div>
                </div>
                <div className="text-white text-xl font-medium flex items-center justify-center">Editar</div>
            </div>
        </div>
    </div>
</div>
    );
}



{/* <div className="bg-slate-400 p-8 m-2-0">
<h1>{petData.name}</h1>
<div className="bg-color2 p-4 mt-2 mb-8 rounded-lg border-2"><p>tipo de Mascota {petData.typeOfPet}</p></div>

<p>Breed: {petData.breed}</p>
<p>Edad: {petData.age}</p>
<p>Tamanio: {petData.size}</p>
<p>Gender: {petData.gender}</p>
<p>Location: {petData.location}</p>
<p>Vaccinated: {petData.vaccinated ? "Yes" : "No"}</p>
<p>Sterilized: {petData.sterilized ? "Yes" : "No"}</p>
<p>Behaviour: {petData.behaviour}</p>
<p>Health Status: {petData.healthStatus}</p>
<p>Description: {petData.generalDescription}</p>
</div> */}