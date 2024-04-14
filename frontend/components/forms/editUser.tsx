'use client'

import React from 'react';
import { EditUserShema } from "@/shemas/shemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import './input-phone.css';

interface Editar {
    nombre?: string;
    apellido?: string;
    direccion?: string;
    email?: string;
    telefono?: string;
    dni?: string;
    foto?: File;
}

export default function EditUser() {

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [foto, setFoto] = useState<File | undefined>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Editar>({
        resolver: zodResolver(EditUserShema),
    });

    const [telefono, setTelefono] = useState('');

    const onSubmit: SubmitHandler<Editar> = async (data) => {

        try {
            const formData = {
                nombre: data.nombre,
                apellido: data.apellido,
                foto:foto,
                direccion: data.direccion,
                email: data.email,
                telefono: data.telefono,
                dni: data.dni
            }
            console.log('Estos Datos se enviaran...', formData)

        } catch (error) {
            console.error('Error durante la solicitud de actualización:', error)
            setErrorMessage('Error durante la solicitud de actualización');
        }
    }

    const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setFoto(file);
        }
    }

    return (
        <div className=' border-2 border-color2 p-2'>
            <div>
                <h1>Actualizar Datos</h1>
            </div>
            <div className='flex flex-col'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                    <div>
                        <label htmlFor="nombre" className='p-2'>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            
                            placeholder="Nombre"
                            {...register("nombre")}

                        />
                        {errors.nombre && <span>{errors.nombre.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='apellido' className='p-2'>Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            
                            placeholder="Apellido"
                            {...register("apellido")}

                        />
                        {errors.apellido && <span>{errors.apellido.message}</span>}
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
                        <label htmlFor="direccion" className='p-2'>Direccion</label>
                        <input
                            type=""
                            id="direccion"
                            
                            placeholder="Direccion"
                            {...register("direccion")}

                        />
                        {errors.direccion && <span>{errors.direccion.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className='p-2'>Email</label>
                        <input
                            type="email"
                            id="email"
                            
                            placeholder="Correo"
                            {...register("email")}

                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label  className='p-2'>Telefono</label>
                        <PhoneInput
                            defaultCountry="ar"
                            value={telefono}
                            onChange={setTelefono}
                        />
                        {errors.telefono && <span>{errors.telefono.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="dni" className='p-2' >DNI</label>
                        <input
                            type="number"
                            id="dni"
                            placeholder="DNI"
                            {...register("dni")}

                        />
                        {errors.dni && <span>{errors.dni.message}</span>}
                    </div>
                    <div className="mt-4">
                            <button type="submit" >
                                Actualizar
                            </button>
                        </div>
                </form>
            </div>
        </div>
    )
}
