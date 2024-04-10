'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginShema } from "@/shemas/shemas";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Login {
    email: string;
    password: string;
}

export default function FormLogin() {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<Login>({
        resolver: zodResolver(LoginShema),
    });

    const onSubmit: SubmitHandler<Login> = async (formData) => {
        const response = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
        });

        if (response?.error) {
            // Manejar errores de inicio de sesión
            console.error(response.error);
            return;
        }

        // Redirigir a la página de dashboard después del inicio de sesión exitoso
        router.push("/dashboard");
    };

    return (
        <div className="grid grid-cols-2">
            <div className="bg-slate-300 w-960 h-1024">

            </div>
            <div className="bg-color1  p-10">
                <div className=" rounded-lg bg-color1 w-725 h-900 p-10 border-4 border-slate-300">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <div className="bg-slate-300 w-396 h-125 p-16"></div>
                        <div className="w-550 h-70 gap-16 justify-center text-center p-4">
                            <p className="text-lg font-bold">Welcome</p>
                            <p>Please enter the required data</p>
                        </div>
                        <label htmlFor="email" className='p-2'>Email</label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="given-name"
                            placeholder='Email'
                            {...register("email")}
                            className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                        />
                        {errors.email && <span className="text-red-500">required field</span>}
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="password"></label>
                                <span className='p-2'>Password</span>
                            </div>
                            <div>
                                <span className='p-2'>recover password ?</span>
                            </div>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="**********"
                            autoComplete="given-name"
                            {...register("password")}
                            className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                        />
                        {errors.password && <span className="text-red-500">required field</span>}
                    </div>
                    <div className="">
                        <div>
                            <button type="submit" className="w-full p-2 bg-slate-300 rounded-full"> Login </button>
                        </div>
                    </div>
                    <div>
                        <p>You do not have an account ? <Link href="/auth/register">Create your account now</Link></p>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}