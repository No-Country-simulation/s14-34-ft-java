'use client'

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPetSchema } from "@/shemas/shemas";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";
import { useState } from 'react';
import { useEffect } from 'react';


// necesario para ser llamado 
interface FormularioProps {
    onClose: () => void;
}

interface Mascota {
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

const Addpet: React.FC<FormularioProps> = ({ onClose }) => {
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

    useEffect(() => {
        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                esterilizado: data.esterilizado,
                descripcionGeneral: data.descripcionGeneral
            }


        } catch (error) {
            console.error('Error durante la solicitud de actualización:', error);
            setErrorMessage('Error durante la solicitud de actualización');
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
            <div className='bg-white mx-auto'>
                <div className=" flex justify-between ml-10 mr-10 mb-5">
                    <div className="self-stretch justify-between items-end inline-flex text-left">
                        <p className="text-black text-[28px] font-medium">Añadir mascota</p>
                    </div>
                    <div className="text-right">
                        <button onClick={onClose}>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="close">
                                    <mask id="mask0_1023_2676" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
                                        <rect id="Bounding box" x="0.5" width="32" height="32" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1023_2676)">
                                        <path id="close_2" d="M16.501 17.8677L9.96771 24.401C9.72326 24.6455 9.41215 24.7677 9.03438 24.7677C8.6566 24.7677 8.34549 24.6455 8.10104 24.401C7.8566 24.1566 7.73438 23.8455 7.73438 23.4677C7.73438 23.0899 7.8566 22.7788 8.10104 22.5344L14.6344 16.001L8.10104 9.46771C7.8566 9.22326 7.73438 8.91215 7.73438 8.53438C7.73438 8.1566 7.8566 7.84549 8.10104 7.60104C8.34549 7.3566 8.6566 7.23438 9.03438 7.23438C9.41215 7.23438 9.72326 7.3566 9.96771 7.60104L16.501 14.1344L23.0344 7.60104C23.2788 7.3566 23.5899 7.23438 23.9677 7.23438C24.3455 7.23438 24.6566 7.3566 24.901 7.60104C25.1455 7.84549 25.2677 8.1566 25.2677 8.53438C25.2677 8.91215 25.1455 9.22326 24.901 9.46771L18.3677 16.001L24.901 22.5344C25.1455 22.7788 25.2677 23.0899 25.2677 23.4677C25.2677 23.8455 25.1455 24.1566 24.901 24.401C24.6566 24.6455 24.3455 24.7677 23.9677 24.7677C23.5899 24.7677 23.2788 24.6455 23.0344 24.401L16.501 17.8677Z" fill="#0A6141" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* fomulario */}
                <div className="p-2 mx-auto" >
                    <form onSubmit={handleSubmit(onSubmit)} className="gap-2">
                        <div className='flex gap-4 justify-center'>
                            <div className="mb-4">
                                <label htmlFor="foto" className="flex items-center justify-center bg-white rounded-2xl border border-emerald-800 w-[360px] h-16 px-6 py-4 cursor-pointer">
                                    <svg width="73" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ic:round-add">
                                            <path id="Vector" d="M24.4974 17.3346H17.8307V24.0013C17.8307 24.7346 17.2307 25.3346 16.4974 25.3346C15.7641 25.3346 15.1641 24.7346 15.1641 24.0013V17.3346H8.4974C7.76406 17.3346 7.16406 16.7346 7.16406 16.0013C7.16406 15.268 7.76406 14.668 8.4974 14.668H15.1641V8.0013C15.1641 7.26797 15.7641 6.66797 16.4974 6.66797C17.2307 6.66797 17.8307 7.26797 17.8307 8.0013V14.668H24.4974C25.2307 14.668 25.8307 15.268 25.8307 16.0013C25.8307 16.7346 25.2307 17.3346 24.4974 17.3346Z" fill="white" />
                                        </g>
                                    </svg>
                                    <span className="ml-2 justify-center justify-items-center text-center">Agregar Foto</span>
                                </label>
                                <input
                                    type="file"
                                    id="foto"
                                    onChange={handleFotoChange}
                                    className="hidden w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-center items-center text-center"
                                />
                            </div>
                            {/* nombre */}
                        </div>
                        <div className="flex gap-16">
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="nombre" >Nombre</label>
                                </div>
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder=" Nombre de la mascota"
                                    {...register("nombre")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.nombre && <span>{errors.nombre.message}</span>}
                            </div>
                            {/* Tipo de Mascota */}
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="tipo" >Tipo de mascota</label>
                                </div>

                                <div className="select-wrapper">
                                    <select className="select w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex" id="miSelect" name="miSelect">
                                        <option value="perro">Perro</option>
                                        <option value="gato">Gato</option>
                                        <option value="conejo">Conejo</option>
                                        <option value="cobayo">Cobayo</option>
                                        <option value="huron">Huron</option>
                                        <option value="hamster">Hamster</option>
                                        <option value="chinchilla">Chinchilla</option>
                                        <option value="erizo">Erizo</option>
                                        <option value="ave">Ave</option>
                                        <option value="reptil">Reptil</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-16">
                            {/* Raza */}
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="breed" >Raza</label>
                                </div>
                                <input
                                    type="text"
                                    id="breed"
                                    placeholder="Raza "
                                    {...register("breed")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.breed && <span>{errors.breed.message}</span>}
                            </div>
                            {/* Edad */}
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="edad">Edad</label>
                                </div>
                                <input
                                    type="text"
                                    id="edad"
                                    placeholder="Edad de la mascota"
                                    {...register("edad")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.edad && <span>{errors.edad.message}</span>}
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="tamanio" >Tamaño</label>
                                </div>
                                <input
                                    type="text"
                                    id="tamanio"
                                    placeholder="Tamaño de la mascota"
                                    {...register("tamanio")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.tamanio && <span>{errors.tamanio.message}</span>}
                            </div>
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="comportamiento">Comportamiento</label>
                                </div>
                                <input
                                    type="text"
                                    id="comportamiento"
                                    placeholder="Comportamiento de la mascota"
                                    {...register("comportamiento")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.comportamiento && <span>{errors.comportamiento.message}</span>}
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="salud" >Salud</label>
                                </div>
                                <input
                                    type="text"
                                    id="salud"
                                    placeholder="Estado de salud de la mascota"
                                    {...register("salud")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.salud && <span>{errors.salud.message}</span>}
                            </div>
                            <div className="mb-4">
                                <div>
                                    <label htmlFor="ubicacion">Ubicación</label>
                                </div>
                                <input
                                    type="text"
                                    id="ubicacion"
                                    placeholder="Ubicación de la mascota"
                                    {...register("ubicacion")}
                                    className="w-[150px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.ubicacion && <span>{errors.ubicacion.message}</span>}
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="mb-2 flex items-center gap-2">
                                <div>
                                    <label>Posee sus Vacunas ?</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="vacuna"
                                        {...register("vacuna")}
                                        className="w-[25px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                    />
                                    {errors.vacuna && <span>{errors.vacuna.message}</span>}
                                </div>
                            </div>
                            <div className="mb-2 flex items-center gap-2">
                                <div>
                                    <label >Esterilizado</label>
                                </div>
                                <input
                                    type="checkbox"
                                    id="esterilizado"
                                    {...register("esterilizado")}
                                    className="w-[25px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.esterilizado && <span>{errors.esterilizado.message}</span>}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="b-4 justify-center justify-items-center">
                                <div>
                                    <label htmlFor="descripcionGeneral">Descripción General</label>
                                </div>
                                <textarea
                                    id="descripcionGeneral"
                                    placeholder="Descripción general de la mascota"
                                    {...register("descripcionGeneral")}
                                    className="w-[360px] h-[45px] px-4 py-3 rounded-xl border border-emerald-800 justify-between items-center inline-flex"
                                />
                                {errors.descripcionGeneral && <span>{errors.descripcionGeneral.message}</span>}
                            </div>
                        </div>
                        <div className="b-4 flex gap-2 justify-between">
                            <div>
                                <button className="w-[100px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex hover:bg-white text-white hover:text-emerald-950">Cancelar</button>
                            </div>
                            <div>
                                <button type="submit" className="w-[100px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex hover:bg-white text-white hover:text-emerald-950">
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addpet;