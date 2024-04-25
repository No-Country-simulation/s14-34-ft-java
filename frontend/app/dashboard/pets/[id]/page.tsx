'use client';

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from 'react';
//valire
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
        <div className="bg-slate-400 p-8 m-2-0">
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
        </div>
    );
}