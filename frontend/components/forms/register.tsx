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
        <div className='border-2 border-color-w p-2 text-gray-600'>
            <div>
                <h1>Register</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="2email">email:</label>
                            <input
                                type="email"
                                id="2email"
                                autoComplete="given-name"
                                {...register("email")}
                            />
                            {errors.email && <span>required field</span>}
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="given-name"
                                {...register("password")}
                            />
                            {errors.password && <span>required field</span>}
                        </div>
                        <div>
                            <label htmlFor="confirmpassword"> Confirm Password:</label>
                            <input
                                id="confirmpassword"
                                type="password"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && <span>required field confirm Password</span>}
                        </div>
                        <div className="flex flex-row gap-2">
                            <div>
                                <button type="submit">Send</button>
                            </div>
                            <div>
                                <button type="reset">Reset</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <p>Do you already have an account? <Link href="/auth/login">Enter here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}