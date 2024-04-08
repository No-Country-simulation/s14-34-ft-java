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
        <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg className="w-10 h-40 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            <div className=" p-2 text-gray-600">
            <div>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="given-name"
                                placeholder='Email'
                                {...register("email")}
                                className="border border-gray-300 rounded-md px-3 py-2"
                            />
                            {errors.email && <span className="text-red-500">required field</span>}
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                placeholder="** password **"
                                autoComplete="given-name"
                                {...register("password")}
                                className="border border-gray-300 rounded-md px-3 py-2"
                            />
                            {errors.password && <span className="text-red-500">required field</span>}
                        </div>
                        <div className="flex flex-row justify-between p-2">
                            <div>
                                <button type="submit">Send</button>
                            </div>
                            <div>
                                <button type="reset">Reset</button>
                            </div>
                        </div>
                        <div>
                            <p>Do you already have an account? <Link href="/auth/register">Enter here</Link></p>
                        </div>
                        <div>Userexample : eve.holt@reqres.in // cityslicka </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}