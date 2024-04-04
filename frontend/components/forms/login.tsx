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

    const onSubmit: SubmitHandler<Login> = (async (data) => {
        console.log(data)

        router.push("/dashboard");
    })

    return (
        <div className='border-2 border-color-w p-2 text-gray-600'>
            <div>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="given-name"
                                {...register("email")}
                            />
                            {errors.email && <span>required field</span>}
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                autoComplete="given-name"
                                {...register("password")}
                            />
                            {errors.password && <span>required field</span>}
                        </div>
                        <div className="flex flex-row gap-2">
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
                    </form>
                </div>
            </div>
        </div>
    )
}