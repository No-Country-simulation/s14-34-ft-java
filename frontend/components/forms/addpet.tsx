'use client'

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPetSchema } from "@/shemas/shemas";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";
import { useState } from 'react';

interface Mascota {
    foto?: File;
    nombre?:string;
    tipo?:string;
    breed?:string;

    edad?:string;
    tamanio?:string;
    comportamiento?:string;
    salud?:string;
    ubicacion?:string;
    vacuna?:boolean;
    esterilizado?:boolean;
    descripcionGeneral?:string;
}

export default function Addpet() {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [foto, setFoto] = useState<File | undefined>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Mascota>({
        resolver: zodResolver(RegisterPetSchema),
    });

    const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setFoto(file);
        }
    }

    const onSubmit: SubmitHandler<Mascota> = async (data) => {
        try {
            const formData = {
                foto,
                nombre: data.nombre,
                tipo: data.tipo,
                breed: data.breed,
                color: data.color,
                edad: data.edad,
                tamanio: data.tamanio,
                comportamiento: data.comportamiento,
                salud: data.salud,
                ubicacion: data.ubicacion,
                vacuna: data.vacuna,
                esterilizado:data.esterilizado,
                descripcionGeneral: data.descripcionGeneral
            }
            

        } catch (error) {
            console.error('Error durante la solicitud de actualización:', error);
            setErrorMessage('Error durante la solicitud de actualización');
        }
    };

  return (
    <div className='border-2 border-color2 p-2'>
            <div>
                <h1>Actualizar Datos de Mascota</h1>
            </div>
            <div className='flex flex-col'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="tipo" className='p-2'>Tipo de mascota</label>
                        <input
                            type="text"
                            id="tipo"
                            placeholder=" tipo de mascota"
                            {...register("tipo")}
                        />
                        {errors.tipo && <span>{errors.tipo.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="nombre" className='p-2'>Nombre de la mascota</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder=" Nombre de la mascota"
                            {...register("nombre")}
                        />
                        {errors.nombre && <span>{errors.nombre.message}</span>}
                    </div>
                    <div>
                        <label className='p-2'>Foto</label>
                        <input
                            type="file"
                            id="foto"
                            onChange={handleFotoChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="breed" className='p-2'>Raza</label>
                        <input
                            type="text"
                            id="breed"
                            placeholder="Raza "
                            {...register("breed")}
                        />
                        {errors.breed && <span>{errors.breed.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="color" className='p-2'>Color</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="Color de la mascota"
                            {...register("color")}
                        />
                        {errors.color && <span>{errors.color.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="edad" className='p-2'>Edad</label>
                        <input
                            type="text"
                            id="edad"
                            placeholder="Edad de la mascota"
                            {...register("edad")}
                        />
                        {errors.edad && <span>{errors.edad.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="tamanio" className='p-2'>Tamaño</label>
                        <input
                            type="text"
                            id="tamanio"
                            placeholder="Tamaño de la mascota"
                            {...register("tamanio")}
                        />
                        {errors.tamanio && <span>{errors.tamanio.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="comportamiento" className='p-2'>Comportamiento</label>
                        <input
                            type="text"
                            id="comportamiento"
                            placeholder="Comportamiento de la mascota"
                            {...register("comportamiento")}
                        />
                        {errors.comportamiento && <span>{errors.comportamiento.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="salud" className='p-2'>Salud</label>
                        <input
                            type="text"
                            id="salud"
                            placeholder="Estado de salud de la mascota"
                            {...register("salud")}
                        />
                        {errors.salud && <span>{errors.salud.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="ubicacion" className='p-2'>Ubicación</label>
                        <input
                            type="text"
                            id="ubicacion"
                            placeholder="Ubicación de la mascota"
                            {...register("ubicacion")}
                        />
                        {errors.ubicacion && <span>{errors.ubicacion.message}</span>}
                    </div>
                    <div>
                        <label className='p-2'>Posee sus Vacunas ?</label>
                        <input
                            type="checkbox"
                            id="vacuna"
                            {...register("vacuna")}
                        />
                        {errors.vacuna && <span>{errors.vacuna.message}</span>}
                    </div>
                    <div>
                        <label className='p-2'>Esterilizado</label>
                        <input
                            type="checkbox"
                            id="esterilizado"
                            {...register("esterilizado")}
                        />
                        {errors.esterilizado && <span>{errors.esterilizado.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="descripcionGeneral" className='p-2'>Descripción General</label>
                        <textarea
                            id="descripcionGeneral"
                            placeholder="Descripción general de la mascota"
                            {...register("descripcionGeneral")}
                        />
                        {errors.descripcionGeneral && <span>{errors.descripcionGeneral.message}</span>}
                    </div>
                    <div className="mt-4">
                        <button type="submit">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}
