'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterShema } from "@/shemas/shemas";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";


interface Register {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function FormRegister() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Register>({
        resolver: zodResolver(RegisterShema),
    });

    const onSubmit: SubmitHandler<Register> = async (data) => {
        // Validar si las contraseñas coinciden
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Las contraseñas no coinciden",
            } as any);
            return; // Detener el envío del formulario
        }

        // Envío de datos solo si las contraseñas coinciden
        const formData = {
            email: data.email,
            password: data.password,
        };

        // Lógica para enviar formData al servidor
        console.log(formData);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg className="w-10 h-auto text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            <div className=" p-2 text-gray-600">
                <div>
                    <h1>Register</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    autoComplete="given-name"
                                    {...register("email")}
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                />
                                {errors.email && <span className="text-red-500">Required field</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password"></label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="** password **"
                                    autoComplete="given-name"
                                    {...register("password")}
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                />
                                {errors.password && <span className="text-red-500">Required field</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword"></label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder=" confirm Password"
                                    {...register("confirmPassword")}
                                    className="border border-gray-300 rounded-md px-3 py-2"
                                />
                                {errors.confirmPassword && <span className="text-red-500">Required field</span>}
                            </div>
                            <div className="flex flex-row justify-between p-2">
                                <button type="submit">
                                    Send
                                </button>
                                <button type="reset" >
                                    Reset
                                </button>
                            </div>
                        </form>
                        <div>
                            <p>Do you already have an account? <Link href="/auth/login">Enter here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}