'use client';

import React from 'react'
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import Volver from "@/components/buttons/volver";
import { useSession, signIn, signOut } from "next-auth/react";
import { EditUserSchema } from "@/shemas/shemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Fragment, useEffect, useRef, useState } from 'react';

import './input-phone.css';

interface UserData {
    user_id: number;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    dni: string;
    photo: string;
    role: string;
    createdAt: string;
    lastLogin: string;
}


import {
    PhoneInput,
    defaultCountries,
    parseCountry,
} from 'react-international-phone';

//dato fictio borrar despues de colocar el fecth

interface Editar {
    nombre?: string;
    apellido?: string;
    foto?: File;
    direccion?: string;
    email?: string;
    dni?: string;
    localizacion?: string;
    provincia?: string;
    postal?: number;
}

interface ComponentState {
    editing: boolean;
}

export default function Datosuser() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [state, setState] = useState<ComponentState>({ editing: false });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [foto, setFoto] = useState<File | undefined>();
    const { data: session, status } = useSession();
    const [phone, setPhone] = useState('');
    const token =session?.user.token

    useEffect(() => {
        const fetchUserData = async () => {
            if (session?.user?.token) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/token`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "token": session.user.token,
                        },
                    });
                    const data = await res.json();
                    console.log(data)
                    setUserData(data);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [session]);

    const countries = defaultCountries.filter((country) => {
        const { iso2 } = parseCountry(country);
        return ['es', 'mx', 'ar', 'co', 'pe', 've', 'cl', 'ec', 'gt', 'cu', 'bo', 'do', 'hn', 'py', 'sv', 'ni', 'cr', 'uy', 'pr', 'pa', 'gq'].includes(iso2);
    });

    // datos para mostrar
    const data = {
        imageUrl: '/perfil/fotoperfil.png', nombre: 'Cristina', apellido: 'Gonzales', email: "cristiana@gmail.com",
        direccion: "Buenos Aires", role: "cliente", genero: "Mujer",
        telefono: "+581234567890", dni: "12345678", localizacion: "Barrio 301", provincia:"ejemplo1", postal:"N3440"
    }

    // reacct hookform 
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Editar>({
        resolver: zodResolver(EditUserSchema),
    });

    // telefono 
    const [telefono, setTelefono] = useState('');

    const isPhoneValid = (phone: string): boolean => {
        if (!phone) {
            // Si el número de teléfono está vacío, devuelve true para permitir que el campo sea opcional
            return true;
        }
    
        const numericPhone = phone.replace(/\D/g, '');
    
        // Define la longitud mínima y máxima del número de teléfono que consideras válido
        const minDigits = 7; // Por ejemplo, al menos 7 dígitos
        const maxDigits = 20; // Por ejemplo, máximo 20 dígitos
    
        const numberOfDigits = numericPhone.length;
        return numberOfDigits >= minDigits && numberOfDigits <= maxDigits;
    };

    // peticion para acctualizar
    const onSubmit: SubmitHandler<Editar> = async (data) => {
        // Lógica para enviar los datos
        sendData(data);
        setState({ editing: false }); // Después de enviar los datos, establece editing a false
    };

    // 

    const sendData = async (data: Editar) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(data)
        }
    };

    // peticion para actualizar la imagen 
    const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setFoto(file);
        }
    }


    // activar editar
    const handleEdit = () => {
        setState({ editing: true });
    };

    const handleSave = () => {
        // Aquí iría la lógica para guardar los datos
        setState({ editing: false });
    };

    const handleCancel = () => {
        setState({ editing: false });
    };


    if (session) {

        return (
            <div className="mt-36 ml-10 mr-20">
                <div>
                    <Volver />
                </div>
                {userData && (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* editar */}
                        {state.editing ? (
                            
                            <div className="grid grid-cols-5 mt-20 ml-230 mb-10 gap-10 w-full h-auto mr-60">
                                <div >
                                    <div className="w-[204px] h-[289px] grid gri-cols justify-start items-start gap-8">
                                        <div className="z-0 flex-col justify-start items-center flex">
                                            <Image className="w-[200px] h-[200px] relative rounded-[200px]" src={data.imageUrl} width={400} height={400} alt="fotoperfil" quality={100} priority />
                                            <div className="z-10 mt-[-30px] relative p-2 bg-emerald-800 rounded-[50px] border-2 border-emerald-800 justify-start items-start gap-2.5">
                                                <div className="w-8 h-8 relative">
                                                    <label htmlFor="foto">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="tabler:edit">
                                                                <g id="Group">
                                                                    <path id="Vector" d="M9.33594 9.33203H8.0026C7.29536 9.33203 6.61708 9.61298 6.11699 10.1131C5.61689 10.6132 5.33594 11.2915 5.33594 11.9987V23.9987C5.33594 24.7059 5.61689 25.3842 6.11699 25.8843C6.61708 26.3844 7.29536 26.6654 8.0026 26.6654H20.0026C20.7098 26.6654 21.3881 26.3844 21.8882 25.8843C22.3883 25.3842 22.6693 24.7059 22.6693 23.9987V22.6654" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path id="Vector_2" d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="foto"
                                                        className="hidden"
                                                        onChange={handleFotoChange}
                                                    />
                                                    <div className="w-[22.67px] h-[22.67px] left-[5.33px] top-[4px] absolute">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="z-10 mt-[-22px] w-[204px] justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-black text-[26px] font-medium">{userData.firstName} {userData.lastName}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto col-span-2 grid grid-col gap-8"><div>
                                    <p className="text-black text-[26px] font-medium">Nombre</p>
                                    <input
                                        type="text"
                                        id="nombre"
                                        autoComplete="given-name"
                                        placeholder={`Nombre: ${userData.firstName}`}
                                        {...register("nombre")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Direccion</p>
                                <input
                                        type="text"
                                        id="direccion"
                                        autoComplete="given-name"
                                        placeholder={`Direccion: ${userData.address}`}
                                        {...register("direccion")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">DNI</p>
                                <input
                                        type="text"
                                        id="dni"
                                        autoComplete="given-name"
                                        placeholder={`DNI: ${userData.dni}`}
                                        {...register("dni")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Lozalizacion</p>
                                <input
                                        type="text"
                                        id="localizacion"
                                        autoComplete="given-name"
                                        placeholder={`Localizacion: ${data.localizacion}`}
                                        {...register("localizacion")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                
                                </div>
                                <div className="w-auto col-span-2 grid grid-col gap-8">
                                <div>
                                <p className="text-black text-[26px] font-medium">Apellido</p>
                                <input
                                        type="text"
                                        id="apellido"
                                        autoComplete="given-name"
                                        placeholder={`Apellido: ${userData.lastName}`}
                                        {...register("apellido")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    {errors.apellido && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Email</p>
                                <input
                                        type="email"
                                        id="email"
                                        autoComplete="given-name"
                                        placeholder={`Email: ${userData.phone}`}
                                        {...register("email")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Telefono</p>
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
                                <div>
                                <p className="text-black text-[26px] font-medium">Provincia</p>
                                <input
                                        type="text"
                                        id="provincia"
                                        autoComplete="given-name"
                                        placeholder={`Provincia: ${data.provincia}`}
                                        {...register("provincia")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Codigo Postal</p>
                                <input
                                        type="text"
                                        id="postal"
                                        autoComplete="given-name"
                                        placeholder={`Codigo Postal: ${data.postal}`}
                                        {...register("postal")}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                </div>
                            
                            </div>
                    

                        ) : (
                            // mostrar
                            <div className="grid grid-cols-5 mt-20 ml-230 mb-10 gap-10 w-full h-auto mr-60">
                                <div >
                                    <div className="w-[204px] h-[289px] flex-col justify-start items-start gap-8 inline-flex">
                                        <div className="flex-col justify-start items-center flex">
                                            <Image className="w-[200px] h-[200px] relative rounded-[200px]" src={data.imageUrl} width={400} height={400} alt={data.nombre} quality={100} priority />

                                        </div>
                                        <div className="w-[204px] justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-black text-[26px] font-medium">{userData.firstName} {userData.lastName}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto col-span-2 grid grid-col gap-8"><div>
                                <p className="text-black text-[26px] font-medium">Nombre</p>
                                    <input
                                        type="text"
                                        id="nombre"
                                        autoComplete="given-name"
                                        placeholder={`Nombre: ${userData.firstName}`}
                                        value={userData.firstName}
                                        {...register("nombre")}
                                        disabled={true}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Direccion</p>
                                <input
                                        type="text"
                                        id="direccion"
                                        autoComplete="given-name"
                                        placeholder={`Direccion: ${userData.address}`}
                                        {...register("direccion")}
                                        value={userData.address}
                                        disabled={true}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">DNI</p>
                                <input
                                        type="text"
                                        id="dni"
                                        autoComplete="given-name"
                                        placeholder={`DNI: ${userData.dni}`}
                                        {...register("dni")}
                                        value={userData.dni}
                                        disabled={true}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Localizacion</p>
                                <input
                                        type="text"
                                        id="localizacion"
                                        autoComplete="given-name"
                                        placeholder={`Localizacion: ${userData.address}`}
                                        {...register("localizacion")}
                                        value={userData.address}
                                        disabled={true}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                
                                </div>
                                <div className="w-auto col-span-2 grid grid-col gap-8">
                                <div>
                                <p className="text-black text-[26px] font-medium">Apellido</p>
                                <input
                                        type="text"
                                        id="apellido"
                                        autoComplete="given-name"
                                        placeholder={`Apellido: ${userData.lastName}`}
                                        {...register("apellido")}
                                        value={userData.lastName}
                                        disabled={true}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                    {errors.apellido && <span className="text-red-500">Campo requerido</span>}
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Email</p>
                                <input
                                        type="email"
                                        id="email"
                                        autoComplete="given-name"
                                        placeholder={`Email: ${userData.email}`}
                                        {...register("email")}
                                        disabled={true}
                                        value={userData.email}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Telefono</p>
                                <input
                                        
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                        disabled={true}
                                        value={userData.phone}
                                    />
                                    
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Provincia</p>
                                <input
                                        type="text"
                                        id="provincia"
                                        autoComplete="given-name"
                                        placeholder={`Provincia: ${data.provincia}`}
                                        {...register("provincia")}
                                        disabled={true}
                                        value={data.provincia}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                <div>
                                <p className="text-black text-[26px] font-medium">Codigo Postal</p>
                                <input
                                        type="text"
                                        id="postal"
                                        autoComplete="given-name"
                                        placeholder={`Codigo Postal: ${data.postal}`}
                                        {...register("postal")}
                                        disabled={true}
                                        value={data.postal}
                                        className="w-full self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                                    />
                                </div>
                                </div>
                            </div>
                        )}
                        <div className="justify-center flex flex-row gap-2 p-4">
                            {state.editing ? (
                                <div><button onClick={handleSubmit(onSubmit)} className="w-[393.50px] h-[55px] px-[50px] py-4 bg-emerald-800 hover:bg-color4 hover:text-color1 rounded-2xl border border-emerald-800 justify-center items-center gap-2.5 inline-flex text-xl font-medium text-white">Guardar</button></div>
                            ) : (
                                <div><button onClick={(e) => { e.preventDefault(); handleEdit() }} className="w-[393.50px] h-[55px] px-[50px] py-4 bg-emerald-800 hover:bg-color4 hover:text-color1 rounded-2xl border border-emerald-800 justify-center items-center gap-2.5 inline-flex text-xl font-medium text-white">
                                    Editar
                                </button></div>
                            )}
                            <div><button onClick={(e) => { e.preventDefault(); handleCancel() }} className="w-[393.50px] h-[55px] px-[50px] py-4 bg-emerald-800 hover:bg-color4 hover:text-color1 rounded-2xl border border-emerald-800 justify-center items-center gap-2.5 inline-flex text-xl font-medium text-white">Cancelar</button></div>
                        </div>
                    </form>
                </div>
                )}
            </div >
        )
    }

    // 
    if (!session) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2 m-24">
                <div className='justify-center text-center justify-items-center'>
                    <div className="text-center text-[30px]"><h1>Debes Iniciar Sesión</h1></div>
                    <div className="w-[180px] h-[55px] px-6 py-4  rounded-[50px] justify-center items-center inline-flex text-color2 hover:bg-color2 border-color2 hover:text-color3 border-2">
                        <Link href="#" onClick={() => signIn()} className="text-xl font-medium">Iniciar Sesión</Link>
                    </div>
                </div>
            </main>
        )
    }
    if (status === "loading") {
        return <div className="flex flex-row gap-2">
            <div>
                <Link href="#" className="p-2"
                >
                    <svg aria-hidden="true" role="status" className="inline w-8 h-8 me-3 text-color2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg> </Link>
            </div>
        </div>;
    }
}
