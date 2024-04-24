'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/shemas/shemas";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from "next/link";
import { useState } from 'react';
import {
    PhoneInput,
    defaultCountries,
    parseCountry,
} from 'react-international-phone';
//import 'react-international-phone/style.css';
import './input-phone.css';
import Swal from 'sweetalert2';
import Image from 'next/image';


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

    const countries = defaultCountries.filter((country) => {
        const { iso2 } = parseCountry(country);
        return ['es', 'mx', 'ar', 'co', 'pe', 've', 'cl', 'ec', 'gt', 'cu', 'bo', 'do', 'hn', 'py', 'sv', 'ni', 'cr', 'uy', 'pr', 'pa', 'gq'].includes(iso2);
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
    });

    // mensaje de exito
    function showAlert() {
        Swal.fire({
            title: "Registro exitoso",
            icon: "success",
            background: "#FAFAFA",
            confirmButtonColor: "#DF8B3F",
            footer: '<a href="/auth/login">Puedes Ingresar</a>',

        });
    }
    //   mensaje de error
    function showAlert2() {
        Swal.fire({
            title: "Oops... Ocurrio un problema en el servidor",
            icon: "error",
            background: "#FAFAFA",
            confirmButtonColor: "#DF8B3F",
            confirmButtonText: 'Cerrar',
        });
    }

    function showAlert3() {
        Swal.fire({
            title: "Oops... Cuenta Existente",
            icon: "error",
            background: "#FAFAFA",
            confirmButtonColor: "#DF8B3F",
            confirmButtonText: 'Cerrar',
        });
    }



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

            const [firstName, lastName] = data.nombrecompleto.split(' ');

            const formData = {
                firstName,
                lastName,
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
                showAlert();
            } else {
                setErrorMessage('Error en la solicitud de registro');
                showAlert2();
            }
            if (res.status == 403) {
                showAlert3();
            }

            console.log('Código de respuesta:', res.status);
        } catch (error) {

            setErrorMessage('Error en la solicitud de registro');
        }
    };

    return (
        <div className="bg-register bg-cover bg-center mt-24">
            <div className="mt-20 mb-20 ml-36 w-[658px] h-[1262px] p-[60px] bg-white rounded-2xl shadow-sm backdrop-blur-[25px] flex-col justify-start items-start gap-[50px] inline-flex">
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex">
                    <div className="h-[100px] mb-10">
                        <Image src="/logo/5_Imagotipo Negro.svg" alt="logo" className="object-contain" width="500" height="100" />
                    </div>
                    <div className="self-stretch h-[95px] flex-col justify-start items-center gap-12 flex">
                        <div className="self-stretch h-[95px] flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="grow shrink basis-0 self-stretch text-center text-black text-[38px] font-semibold">Crea tu cuenta</div>
                            </div>
                            <div className="self-stretch text-center text-black text-[22px] font-semibold">Por favor, ingresa los datos requeridos</div>
                            <form onSubmit={handleSubmit(onSubmit)} className="self-stretch h-[231px] flex-col justify-start items-start gap-6 flex">
                                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                                    <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-black text-lg font-semibold">Nombre y Apellido</div>
                                    </div>
                                    <input
                                        type="text"
                                        id="nombrecompleto"
                                        autoComplete="given-name"
                                        placeholder='Nombre y Apellido'
                                        {...register("nombrecompleto")}
                                        className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"

                                    />
                                    {errors.nombrecompleto && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                                    <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-black text-lg font-semibold">Email</div>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"

                                        placeholder='Email'
                                        {...register("email")}
                                        className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    {errors.email && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                                    <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-black text-lg font-semibold">Telefono</div>
                                    </div>
                                    <PhoneInput
                                        defaultCountry="ar"
                                        value={phone}
                                        onChange={setPhone}
                                        countries={countries}
                                        className=""
                                    />
                                    {isPhoneValid(phone) && <div style={{ color: 'green' }}>Campo Verificado</div>}
                                    {!isPhoneValid(phone) && <div style={{ color: 'grey' }}>Campo requerido</div>}
                                </div>
                                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                                    <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-black text-lg font-semibold">Contraseña</div>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder='Contraseña'
                                        {...register("password")}
                                        className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    {errors.password && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                                    <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-black text-lg font-semibold">Confirmar Contraseña</div>
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder='Repetir Contraseña'
                                        {...register("confirmPassword")}
                                        className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    {errors.confirmPassword && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div className="self-stretch px-4 py-2 justify-start items-start gap-4 inline-flex">
                                    <div className="w-6 h-6 relative">
                                        <input
                                            type="checkbox"
                                            id="terminos"
                                            {...register("terminos")}
                                            className="w-6 h-6 left-0 top-0"
                                        />
                                    </div>
                                    <label className="text-black text-lg font-normal" htmlFor="terminos">Aceptar <Link href="/termsandconditions" target="_blank" className="text-orange-400 text-lg font-normal ">Terminos y condiciones</Link> </label>
                                    {errors.terminos && <span className="text-red-500">{errors.terminos.message}</span>}
                                </div>
                                <div className="self-stretch h-[125px] flex-col justify-start items-center gap-8 flex">
                                    <div className="self-stretch h-14 px-[50px] py-4 bg-orange-400 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                        <button className="grow shrink basis-0 self-stretch text-center text-white text-xl font-medium " type="submit" >Registrarme</button>
                                    </div>
                                    <div className="self-stretch justify-between items-start inline-flex">
                                        <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
                                            <div className="text-black text-lg font-medium ">¿Ya tenés una cuenta?</div>
                                        </div>
                                        <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
                                            <div className="text-orange-400 text-lg font-semibold "><Link href="/auth/login">Ingrese Aqui</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-center items-center gap-20 inline-flex">
                                    <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
                                        <div className="w-12 h-12 relative">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 4">
                                                    <path id="Vector" d="M47.5332 19.2996H45.6V19.2H24V28.8H37.5636C35.5848 34.3884 30.2676 38.4 24 38.4C16.0476 38.4 9.6 31.9524 9.6 24C9.6 16.0476 16.0476 9.6 24 9.6C27.6708 9.6 31.0104 10.9848 33.5532 13.2468L40.3416 6.4584C36.0552 2.4636 30.3216 0 24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 22.3908 47.8344 20.82 47.5332 19.2996Z" fill="#FFC107" />
                                                    <path id="Vector_2" d="M2.76562 12.8292L10.6508 18.612C12.7844 13.3296 17.9516 9.6 23.9984 9.6C27.6692 9.6 31.0088 10.9848 33.5516 13.2468L40.34 6.4584C36.0536 2.4636 30.32 0 23.9984 0C14.78 0 6.78562 5.2044 2.76562 12.8292Z" fill="#FF3D00" />
                                                    <path id="Vector_3" d="M24.0027 47.9985C30.2019 47.9985 35.8347 45.6261 40.0935 41.7681L32.6655 35.4825C30.175 37.3765 27.1317 38.401 24.0027 38.3985C17.7603 38.3985 12.4599 34.4181 10.4631 28.8633L2.63672 34.8933C6.60872 42.6657 14.6751 47.9985 24.0027 47.9985Z" fill="#4CAF50" />
                                                    <path id="Vector_4" d="M47.5332 19.3027H45.6V19.2031H24V28.8031H37.5636C36.617 31.4628 34.912 33.7869 32.6592 35.4883L32.6628 35.4859L40.0908 41.7715C39.5652 42.2491 48 36.0031 48 24.0031C48 22.3939 47.8344 20.8231 47.5332 19.3027Z" fill="#1976D2" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
                                        <div className="w-12 h-12 relative">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 5">
                                                    <path id="Vector" d="M48 24C48 10.7452 37.2547 0 24 0C10.7452 0 0 10.7452 0 24C0 35.979 8.7765 45.9081 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3153 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.6798 15.75 27.75 17.6001 27.75 19.4981V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2235 45.9081 48 35.9792 48 24Z" fill="#1877F2" />
                                                    <path id="Vector_2" d="M33.3422 30.9375L34.4062 24H27.75V19.4981C27.75 17.5999 28.6798 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3151 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4905 47.9028 22.7443 48.0003 24 48C25.2557 48.0004 26.5095 47.9029 27.75 47.7084V30.9375H33.3422Z" fill="white" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <div className="mt-20 mb-20 ml-36 w-[658px] h-[1234px] p-[60px] bg-white rounded-2xl shadow backdrop-blur-[25px] flex-col justify-start items-start gap-[50px] inline-flex">
// <div className="self-stretch h-[1114px] flex-col justify-start items-center gap-8 flex">
//     <div className="self-stretch h-[100px] bg-zinc-300"></div>
//     <div className="self-stretch h-[95px] flex-col justify-start items-center gap-12 flex">
//         <div className="self-stretch h-[95px] flex-col justify-start items-start gap-6 flex">
//             <div className="self-stretch justify-between items-center inline-flex">
//                 <div className="grow shrink basis-0 self-stretch text-center text-black text-[38px] font-medium ">Crea tu cuenta</div>
//             </div>
//             <div className="self-stretch text-center text-black text-[22px] font-medium ">Por favor, ingresa los datos requeridos</div>
//         </div>
//     </div>
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex-col justify-start items-start gap- flex">
//             <div className="w-full h-[530px] flex-col justify-start items-start gap-4 flex">
//                 <div className="self-stretch h-[82px] flex-col justify-start items-start flex">
//                     <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
//                         <label htmlFor="nombrecompleto" className="text-black text-lg font-medium ">Nombre y Apellido</label>
//                     </div>
//                     {/*  */}
//                     <input
//                         type="text"
//                         id="nombrecompleto"
//                         autoComplete='name'
//                         placeholder="Nombre y Apellido"
//                         {...register("nombrecompleto")}
//                         className="w-full px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
//                     />
//                     {errors.nombrecompleto && <span className="text-red-500">{errors.nombrecompleto.message}</span>}
//                 </div>
//                 <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
//                     <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
//                         <label htmlFor="email" className="text-black text-lg font-medium ">Email</label>
//                     </div>
//                     {/*  */}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         autoComplete="email"
//                         {...register("email")}
//                         className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
//                     />
//                     {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//                 </div>
//                 <div className="self-stretch h-[85px] flex-col justify-start items-start flex">

//                     <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
//                         <label htmlFor="" className="text-black text-lg font-medium ">Teléfono</label>
//                     </div>
//                     {/*  */}
//                     <PhoneInput
//                         defaultCountry="ar"
//                         value={phone}
//                         onChange={setPhone}
//                         countries={countries}
//                         className=""
//                     />
//                     {!isPhoneValid(phone) && <div style={{ color: 'red' }}></div>}
//                 </div>
//                 <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
//                     <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
//                         <label htmlFor="password" className="text-black text-lg font-medium ">Contraseña</label>
//                     </div>
//                     {/*  */}
//                     <input
//                         type="password"
//                         placeholder="Contraseña"
//                         id="password"
//                         autoComplete="email"
//                         {...register("password")}
//                         className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
//                     />
//                     {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//                 </div>
//                 <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
//                     <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
//                         <label htmlFor="confirmPassword" className="text-black text-lg font-medium ">Confirmar Contraseña</label>
//                     </div>
//                     <input
//                         id="confirmPassword"
//                         type="password"
//                         autoComplete='new-password'
//                         placeholder="Confirmar Contraseña"
//                         {...register("confirmPassword")}
//                         className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
//                     />
//                     {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
//                 </div>
//             </div>
//             <div className="self-stretch px-4 py-2 justify-start items-start gap-4 inline-flex">
//                 <div className="w-6 h-6 relative">
//                     <input
//                         type="checkbox"
//                         id="terminos"
//                         {...register("terminos")}
//                         className="w-6 h-6 left-0 top-0"
//                     />
//                 </div>
//                 <label className="text-black text-lg font-normal" htmlFor="terminos">Aceptar <Link href="/termsandconditions" target="_blank" className="text-orange-400 text-lg font-normal ">Terminos y condiciones</Link> </label>
//                 {errors.terminos && <span className="text-red-500">{errors.terminos.message}</span>}
//             </div>
//         </div>
//     </form>
//     <div className="self-stretch h-[125px] flex-col justify-start items-center gap-8 flex">
//         <div className="self-stretch h-14 px-[50px] py-4 bg-orange-400 rounded-2xl justify-center items-center gap-2.5 inline-flex">
//             <button className="grow shrink basis-0 self-stretch text-center text-white text-xl font-medium " type="submit" >Registrarme</button>
//         </div>
//         <div className="self-stretch justify-between items-start inline-flex">
//             <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
//                 <div className="text-black text-lg font-medium ">¿Ya tenés una cuenta?</div>
//             </div>
//             <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
//                 <div className="text-orange-400 text-lg font-semibold "><Link href="/auth/login">Ingrese Aqui</Link></div>
//             </div>
//         </div>
//     </div>
//     <div className="self-stretch justify-center items-center gap-20 inline-flex">
//         <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
//             <div className="w-12 h-12 relative">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <g id="Group 4">
//                         <path id="Vector" d="M47.5332 19.2996H45.6V19.2H24V28.8H37.5636C35.5848 34.3884 30.2676 38.4 24 38.4C16.0476 38.4 9.6 31.9524 9.6 24C9.6 16.0476 16.0476 9.6 24 9.6C27.6708 9.6 31.0104 10.9848 33.5532 13.2468L40.3416 6.4584C36.0552 2.4636 30.3216 0 24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 22.3908 47.8344 20.82 47.5332 19.2996Z" fill="#FFC107" />
//                         <path id="Vector_2" d="M2.76562 12.8292L10.6508 18.612C12.7844 13.3296 17.9516 9.6 23.9984 9.6C27.6692 9.6 31.0088 10.9848 33.5516 13.2468L40.34 6.4584C36.0536 2.4636 30.32 0 23.9984 0C14.78 0 6.78562 5.2044 2.76562 12.8292Z" fill="#FF3D00" />
//                         <path id="Vector_3" d="M24.0027 47.9985C30.2019 47.9985 35.8347 45.6261 40.0935 41.7681L32.6655 35.4825C30.175 37.3765 27.1317 38.401 24.0027 38.3985C17.7603 38.3985 12.4599 34.4181 10.4631 28.8633L2.63672 34.8933C6.60872 42.6657 14.6751 47.9985 24.0027 47.9985Z" fill="#4CAF50" />
//                         <path id="Vector_4" d="M47.5332 19.3027H45.6V19.2031H24V28.8031H37.5636C36.617 31.4628 34.912 33.7869 32.6592 35.4883L32.6628 35.4859L40.0908 41.7715C39.5652 42.2491 48 36.0031 48 24.0031C48 22.3939 47.8344 20.8231 47.5332 19.3027Z" fill="#1976D2" />
//                     </g>
//                 </svg>
//             </div>
//         </div>
//         <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
//             <div className="w-12 h-12 relative">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <g id="Group 5">
//                         <path id="Vector" d="M48 24C48 10.7452 37.2547 0 24 0C10.7452 0 0 10.7452 0 24C0 35.979 8.7765 45.9081 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3153 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.6798 15.75 27.75 17.6001 27.75 19.4981V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2235 45.9081 48 35.9792 48 24Z" fill="#1877F2" />
//                         <path id="Vector_2" d="M33.3422 30.9375L34.4062 24H27.75V19.4981C27.75 17.5999 28.6798 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3151 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4905 47.9028 22.7443 48.0003 24 48C25.2557 48.0004 26.5095 47.9029 27.75 47.7084V30.9375H33.3422Z" fill="white" />
//                     </g>
//                 </svg>
//             </div>
//         </div>
//     </div>
// </div>
// </div> 