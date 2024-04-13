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
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
}


export default function FormRegister() {

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
    });

    const [phone, setPhone] = useState('');

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
                    message: "Passwords do not match",
                } as any);
                return;
            }

            const [firstname, lastname] = data.fullName.split(' ');

            const formData = {
                firstname,
                lastname,
                email: data.email,
                password: data.password,
                phone,
            };

            const res = await fetch(`${process.env.BACKEND}/auth/register`, {
                method: "POST",
                body: JSON.stringify({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password
                }),
                headers: {
                    "Content-Type": 'applications/json'
                }
            });
            if (!res.ok) {
                throw new Error('Error en la solicitud de registro');
            }
            // 
            console.log('Datos del formulario:', formData);
        } catch (error) {
            console.error('Error durante la solicitud de registro:', error);
            setErrorMessage('Error en la solicitud de registro');
            setSuccessMessage('');
        }
    };

    return (
        <div className="grid grid-cols-2 w-1920 h-1024">
            <div className="p-10">
                <div className=" rounded-lg border-4 border-slate-300 w-725 h-925 p-10">
                    <div className="bg-slate-300 w-396 h-125 p-16 mt-0"></div>
                    <div className="w-550 h-70 gap-16 justify-center text-center p-4">
                        <p className="text-lg font-bold">Create Account</p>
                        <p>Please enter the required data</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                        <div>
                            <label htmlFor="name" className='p-2'>Name and Lastname</label>
                            <input
                                type="text"
                                id="name"
                                autoComplete='name'
                                placeholder="Enter your name and lastname"
                                {...register("fullName")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className='p-2'>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                id="email"
                                autoComplete='email'
                                {...register("email")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div>
                            <p className='p-2'>Phone</p>

                            <PhoneInput
                                defaultCountry="ar"
                                value={phone}
                                onChange={setPhone}
                            />
                            {!isPhoneValid(phone) && <div style={{ color: 'red' }}>Phone is not valid</div>}
                        </div>
                        <div>
                            <label htmlFor="password" className='p-2'>Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                autoComplete='new-password'
                                {...register("password")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className='p-2'>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                autoComplete='new-password'
                                placeholder="Enter password"
                                {...register("confirmPassword")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                {...register("agreeTerms")}
                                className="mr-2 mt-1"
                            />
                            <label htmlFor="agreeTerms">I agree </label>
                            <Link href="/termsandconditions" target="_blank" className="border-b border-gray-500">terms and conditions</Link>
                            <br />
                            {errors.agreeTerms && <span className="text-red-500">{errors.agreeTerms.message}</span>}
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="w-full p-2 bg-slate-300 rounded-full" >
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4">
                        <p>Do you already have an account? <Link href="/auth/login">Enter here</Link></p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 w-960 h-1024">
            </div>
        </div>
    )
}