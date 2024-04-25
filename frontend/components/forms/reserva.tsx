'use client'

import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Volver from "@/components/buttons/volver";
import { useSession, signIn, signOut } from "next-auth/react";
import Addpet from "@/components/forms/addpet";
import { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface FormularioProps {
    onClose: () => void;
}

// 

interface DataReserva {
    foto?: File;
    nombre?: string;
    tipo?: string;
    breed?: string;
    color?: string;
    edad?: string;
    tamanio?: string;
    comportamiento?: string;
    salud?: string;
    ubicacion?: string;
    vacuna?: boolean;
    esterilizado?: boolean;
    descripcionGeneral?: string;
}

// 

const AddReserva: React.FC<FormularioProps> = ({ onClose }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    // datos del formulario
    const [petName, setPetName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        showAlert()
        console.log({
            petName,
            serviceType,
            date,
            time,
            instructions
        });
        onClose(); // Cerrar el formulario al completar los datos
    };

    function showAlert() {
        Swal.fire({
            title: "Registro exitoso",
            icon: "success",
            background: "#FAFAFA",
            confirmButtonColor: "#DF8B3F",
            confirmButtonText: 'Cerrar',

        });
    }

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario)
    }
    return( 
        <div className=" fixed inset-0 flex items-center justify-center bg-white z-50 overflow-auto">
            <div className="mt-80 w-[787px] p-[60px] bg-white rounded-2xl shadow">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-medium">Contactar a pet sitter</h2>
                    <button onClick={onClose} className="text-gray-500 text-3xl">&times;</button>
                </div>
                <div className="self-stretch h-[114px] flex flex-col justify-start items-start gap-6">
                        <p className="text-[22px] font-medium">¿Para quién es el servicio?</p>
                        <div className="flex gap-6">
                            <div className="h-[64px] px-[24px] py-[16px] bg-white rounded-2xl border border-emerald-800 flex justify-center items-center gap-2 hover:bg-color1 hover:text-white text-xl font-mediumh-[64px]  text-color1">
                                <div className="w-[32px] h-[32px] "></div>
                                <button >Añadir mascota existente</button>
                            </div>
                            <div className="text-white text-xl font-mediumh-[64px] px-[24px] py-[16px] bg-emerald-800 rounded-2xl border border-emerald-800 flex justify-center items-center gap-2 hover:bg-white hover:text-color1">
                                <div className="w-[32px] h-[32px] "></div>
                                <button className="">Añadir mascota</button>
                            </div>
                        </div>
                    </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-8">
                        <label htmlFor="petName" className="block text-sm font-semibold text-gray-700">Nombre de la mascota</label>
                        <input type="text" id="petName" value={petName} onChange={(e) => setPetName(e.target.value)} className="mt-1 p-2 border rounded-md w-full" />
                    </div>
                    <div className="mt-4">
                        <p className="block text-sm font-semibold text-gray-700">¿Para quién es el servicio?</p>
                        <div className="mt-2 flex flex-col">
                            <div className="mr-4">
                                <input type="radio" id="visita" name="serviceType" value="visita" checked={serviceType === "visita"} onChange={() => setServiceType("visita")} className="border-color1"/>
                                <label htmlFor="visita" className="ml-2 text-sm font-semibold text-gray-700 cursor-pointer">Visita a domicilio</label>
                            </div>
                            <br/>
                            <div className="mr-4">
                                <input type="radio" id="alojamiento" name="serviceType" value="alojamiento" checked={serviceType === "alojamiento"} onChange={() => setServiceType("alojamiento")} className="border-color1"/>
                                <label htmlFor="alojamiento" className="ml-2 text-sm font-semibold text-gray-700 cursor-pointer">Alojamiento</label>
                            </div>
                            <br/>
                            <div>
                                <input type="radio" id="paseo" name="serviceType" value="paseo" checked={serviceType === "paseo"} onChange={() => setServiceType("paseo")} className="border-color1"/>
                                <label htmlFor="paseo" className="ml-2 text-sm font-semibold text-gray-700 cursor-pointer">Paseo</label>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <input type="datetime-local" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1 p-2 border rounded-md w-full" placeholder="Hora" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700">Indicaciones</label>
                        <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="mt-1 p-2 border rounded-md w-full" placeholder="Texto"></textarea>
                    </div>
                    <div className="mt-8 flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="w-[317.50px] h-14 px-6 py-4 bg-white rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex text-emerald-800 text-xl font-medium">Cancelar</button>
                        <button type="submit" className="w-[317.50px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex text-white text-xl font-medium  hover:bg-color1 hover:text-white font-mediumh-[64px]  ">Reservar cuidador</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddReserva;