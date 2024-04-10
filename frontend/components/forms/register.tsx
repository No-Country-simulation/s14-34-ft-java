'use client'

import 'react-phone-number-input/style.css';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterShema } from "@/shemas/shemas";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import PhoneInput from 'react-phone-number-input';
import { useState } from "react";

interface Register {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
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

    const [phoneValue, setPhoneValue] = useState<string | undefined>(undefined);

    const onSubmit: SubmitHandler<Register> = async (data) => {
        // 
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match",
            } as any);
            return;
        }
        //
        const [value, setValue] = useState()
        //
        const [name, lastname] = data.name.split(' ');
        // 
        const formData = {
            name,
            lastname,
            email: data.email,
            phone: `+${phoneValue}`,
            password: data.password,
        };
        // 
        console.log(formData);
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
                                placeholder="Enter your name and lastname"
                                autoComplete="given-name"
                                {...register("name")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.name && <span className="text-red-500">Required field</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className='p-2'>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Email"
                                autoComplete="given-name"
                                {...register("email")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.email && <span className="text-red-500">Required field</span>}
                        </div>
                        <div>
                            <label htmlFor="phone" className='p-2'>Phone</label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    id="phone"
                                    value={phoneValue}
                                    onChange={setPhoneValue}
                                    className="w-full h-auto bg-transparent border-2  p-2 flex items-center border-gray-300 rounded-full "
                                />

                            {errors.phone && <span className="text-red-500">Required field</span>}

                        </div>
                        <div>
                            <label htmlFor="password" className='p-2'>Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                autoComplete="given-name"
                                {...register("password")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"

                            />
                            {errors.password && <span className="text-red-500">Required field</span>}
                        </div>
                        <div >
                            <label htmlFor="confirmPassword" className='p-2'>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter password"
                                {...register("confirmPassword")}
                                className="w-full h-auto bg-transparent border-2 border-slate-300 rounded-full p-2"
                            />
                            {errors.confirmPassword && <span className="text-red-500">Required field</span>}
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