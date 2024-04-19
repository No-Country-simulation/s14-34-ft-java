'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/shemas/shemas";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
//import 'react-international-phone/style.css';
import './input-phone.css';


interface Register {
    nombrecompleto: string;
    email: string;
    password: string;
    confirmPassword: string;
    terminos: boolean;
}


export default function FormRegister() {

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [phone, setPhone] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
    });



    const isPhoneValid = (phone: string): boolean => {
        const numericPhone = phone.replace(/\D/g, '');

        const minDigits = 7;
        const maxDigits = 20;

        const numberOfDigits = numericPhone.length;
        return numberOfDigits >= minDigits && numberOfDigits <= maxDigits;
    };

    const onSubmit: SubmitHandler<Register> = async (data) => {

        try {
            if (data.password !== data.confirmPassword) {
                setError("confirmPassword", {
                    type: "manual",
                    message: "Passwords no coinciden",
                } as any);
                return;
            }

            const [firs_tname, last_name] = data.nombrecompleto.split(' ');

            const formData = {
                firs_tname,
                last_name,
                phone,
                email: data.email,
                password: data.password,
            };
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            if (res.ok) {
                setSuccessMessage('¡Registro exitoso!');
            } else {
                setErrorMessage('Error en la solicitud de registro');
            }
            
            console.log('Código de respuesta:', res.status);
        } catch (error) {
            
            setErrorMessage('Error en la solicitud de registro');
        }
    };

    return (
        <div className="grid grid-cols-2 w-1920 h-1024">
            <div className="p-10">
                <div className=" rounded-lg border-4 border-slate-300 w-725 h-925 p-10">
                    <div className="bg-slate-300 w-396 h-125 p-16 mt-0"></div>
                    <div className="w-550 h-70 gap-16 justify-center text-center p-4">
                        <p className="text-lg font-bold">Crear Cuenta</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                        <div>
                            <label htmlFor="nombrecompleto" className='p-2'>Nombre y Apellido</label>
                            <input
                                type="text"
                                id="nombrecompleto"
                                autoComplete='name'
                                placeholder="Nombre y Apellido"
                                {...register("nombrecompleto")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.nombrecompleto && <span className="text-red-500">{errors.nombrecompleto.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className='p-2'>Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                autoComplete="email"
                                {...register("email")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div>
                            <p className='p-2'>Teléfono</p>
                            <PhoneInput
                                defaultCountry="ar"
                                value={phone}
                                onChange={setPhone}
                            />
                            {!isPhoneValid(phone) && <div style={{ color: 'red' }}></div>}
                        </div>
                        <div>
                            <label htmlFor="password" className='p-2'>Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Contraseña"
                                autoComplete='new-password'
                                {...register("password")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className='p-2'>Confirmar Contraseña</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                autoComplete='new-password'
                                placeholder="Confirmar Contraseña"
                                {...register("confirmPassword")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="terminos"
                                {...register("terminos")}
                                className="mr-2 mt-1"
                            />
                            <label htmlFor="terminos">Aceptar <Link href="/termsandconditions" target="_blank" className="border-b border-gray-500">Terminos y condiciones</Link> </label>

                            <br />
                            {errors.terminos && <span className="text-red-500">{errors.terminos.message}</span>}
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="w-full p-2 bg-slate-300 rounded-full" >
                                Registrar
                            </button>
                        </div>
                    </form>
                    <div className="mt-4">
                        <p>Ya tienes un Cuenta? <Link href="/auth/login">Ingrese Aqui</Link></p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 w-960 h-1024">
            </div>
        </div>
    )
}