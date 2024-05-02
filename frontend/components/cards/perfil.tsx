'use client';

import React from 'react'
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import Volver from "@/components/buttons/volver";
import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment, useEffect, useRef, useState } from 'react';

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

const data = { imageUrl: '/perfil/fotoperfil.png', nombre: 'Cristina', apellido: 'Gonzales', email: "cristiana@gmail.com", direccion: "Buenos Aires" }
// 

export default function Perfil() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const token = session?.user.token;
    const [userData, setUserData] = useState<UserData | null>(null); 

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

    const handleGoBack = () => {
        router.back();
    }
    //
    const editarDatos = () => {
        router.push('/dashboard/profile');
    }
    //
    const misMascotas = () => {
        router.push('/dashboard/pets');
    }
    // 
    const misReservas = () => {
        router.push('/dashboard/reservas');
    }
    //
    const home = () => {
        router.push('/');
    }
    //  
    if (session) {
        return (
          <div className="mt-36 ml-10">
            <div>
              <Volver />
            </div>
            {userData && (
              <div className="grid grid-cols-2 mt-20 gap-2 mr-20 justify-center">
                <div className="justify-start items-center gap-8 inline-flex">
                  <Image
                    className="w-[200px] h-[200px] relative rounded-[200px]"
                    src={data.imageUrl}
                    width={400}
                    height={400}
                    alt={data.imageUrl}
                    quality={100}
                    priority
                  />
                  <div className="w-[351px] h-[133px] flex-col justify-center items-start gap-4 inline-flex">
                    <br />
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 self-stretch text-black text-[28px] font-semibold">
                        {userData.firstName} {userData.lastName}
                      </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal ">
                        {userData.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group group-hover:text-color2 bg-invitacion w-[600px] h-[200px] px-[60px] py-[60px] rounded-2xl bg-cover">
                  <div className="flex flex-row justify-center gap-2 bg-color8 p-2">
                    <div className="group">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="ion:paw">
                          <path
                            id="Vector"
                            d="M30.647 11.4231C30.3002 10.5988 29.7239 10.0044 28.9802 9.705L28.9702 9.70125C28.6316 9.56866 28.2712 9.50081 27.9077 9.50125H27.8677C26.1652 9.52688 24.427 10.9738 23.5433 13.1019C22.8952 14.6581 22.8208 16.3319 23.3445 17.5794C23.6908 18.4044 24.2683 18.9987 25.0152 19.2981L25.0233 19.3012C25.3618 19.4337 25.7222 19.5016 26.0858 19.5012C27.8045 19.5012 29.5608 18.0544 30.4608 15.8981C31.1008 14.3438 31.1714 12.6713 30.647 11.4231ZM23.8445 20.6019C22.8627 20.0119 21.9345 19.4538 21.3283 18.4513C19.6558 15.6763 18.6458 14.0013 15.9977 14.0013C13.3495 14.0013 12.337 15.6763 10.6608 18.4513C10.0533 19.455 9.12328 20.0137 8.13828 20.6062C7.00891 21.285 5.84203 21.9862 5.33828 23.3662C5.14245 23.8637 5.04379 24.3941 5.04766 24.9287C5.04766 27.1756 6.79766 29.0037 8.94766 29.0037C10.057 29.0037 11.2377 28.6194 12.487 28.2125C13.6883 27.8212 14.9302 27.4169 16.0039 27.4169C17.0777 27.4169 18.3164 27.8212 19.5133 28.2125C20.7602 28.6169 21.9352 29.0012 23.0477 29.0012C25.1945 29.0012 26.9414 27.1731 26.9414 24.9262C26.9432 24.3912 26.8424 23.8608 26.6445 23.3637C26.1408 21.9825 24.9733 21.2806 23.8445 20.6019ZM9.37266 11.8044C10.1164 12.7375 11.0602 13.2513 12.0302 13.2513C12.1626 13.2512 12.2948 13.2414 12.4258 13.2219C14.4489 12.9244 15.7095 10.4556 15.2958 7.59688C15.1227 6.395 14.6602 5.27562 13.9977 4.44563C13.2552 3.51438 12.3102 3.00125 11.3408 3.00125C11.2084 3.00125 11.0761 3.01107 10.9452 3.03063C8.92203 3.32813 7.66141 5.79688 8.07516 8.65563C8.24766 9.85563 8.71016 10.9738 9.37266 11.8044ZM19.5702 13.2219C19.7011 13.2414 19.8334 13.2512 19.9658 13.2513C20.9364 13.2513 21.8795 12.7375 22.6233 11.8044C23.2852 10.9738 23.7452 9.85563 23.9202 8.65438C24.3339 5.79688 23.0733 3.32813 21.0502 3.02938C20.9192 3.00982 20.787 3 20.6545 3C19.6852 3.00125 18.7402 3.51438 17.9977 4.44563C17.3352 5.27562 16.8727 6.395 16.7002 7.59813C16.2864 10.4556 17.547 12.9244 19.5702 13.2219ZM6.97203 19.3012L6.98078 19.2981C7.72641 18.9987 8.30328 18.405 8.64891 17.5806C9.17266 16.3306 9.09891 14.6587 8.45203 13.1025C7.55641 10.9488 5.80078 9.50125 4.08391 9.50125C3.72034 9.50072 3.35991 9.56857 3.02141 9.70125L3.01266 9.70438C2.26891 10.0013 1.69203 10.5975 1.34641 11.4219C0.822657 12.6719 0.896407 14.3438 1.54328 15.9C2.43891 18.0538 4.19453 19.5012 5.91141 19.5012C6.27435 19.5015 6.63412 19.4337 6.97203 19.3012Z"
                            fill="#0A6141"
                          />
                        </g>
                      </svg>
                    </div>
                    <div>
                      <p className="text-black text-lg font-normal group-hover:text-color2">
                        ¿Quieres ser cuidador? Sumate a HappyPaws
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-20 grid grid-cols-3 items-stretch mt-40 h-auto">
              <div className="group hover:text-color4 hover:bg-color1  w-[380px] h-[280px] px-[39.50px] pt-[72px] pb-[71px] bg-neutral-50 rounded-2xl border border-emerald-800 justify-center items-center inline-flex">
                <button
                  onClick={editarDatos}
                  className="self-stretch p-4 rounded-xl backdrop-blur-[25px] flex-col justify-center items-center gap-6 inline-flex"
                >
                  <div className="w-12 h-12 relative">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="person info DEFAULT">
                        <path
                          className="group-hover:text-color4 fill-color1 group-hover:fill-color7"
                          id="Vector"
                          d="M23.0001 2.46484V17.2103C23.0001 19.7817 24.2053 21.0074 26.7767 21.0074H41.3215V39.2483C41.3215 43.4268 39.2524 45.5363 35.0935 45.5363H13.7593C9.62097 45.5363 7.53125 43.4474 7.53125 39.2483V8.77256C7.53125 4.59399 9.62097 2.46484 13.7593 2.46484H23.0001ZM24.4315 33.088C19.9281 33.088 17.1261 36.1763 17.1261 38.4143C17.1261 39.178 17.6121 39.568 18.9827 39.568H29.8787C31.2407 39.568 31.7267 39.178 31.7267 38.4143C31.7267 36.1771 28.9238 33.088 24.4307 33.088M24.4307 23.9706C22.5733 23.9706 20.9593 25.5931 20.9593 27.7188C20.9593 29.8703 22.5733 31.5357 24.4307 31.5357C26.295 31.5357 27.8995 29.8694 27.8995 27.7008C27.8995 25.558 26.2873 23.9706 24.4307 23.9706ZM25.7301 2.68599C26.5744 2.82656 27.4187 3.40942 28.3418 4.37284L39.4333 15.6434C40.377 16.6274 40.9598 17.4314 41.1004 18.2551H26.8375C26.1141 18.2551 25.7318 17.8934 25.7318 17.17L25.7301 2.68599Z"
                          fill="#0A6141"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-black group-hover:text-color4 text-[28px] font-medium text-center">
                    Mis datos personales
                  </div>
                </button>
              </div>
              <div className="group hover:bg-color1 w-[380px] h-[280px] px-[39.50px] pt-[72px] pb-[71px] bg-neutral-50 rounded-2xl border border-emerald-800 justify-center items-center inline-flex">
                <button
                  onClick={misMascotas}
                  className="self-stretch p-4 rounded-xl backdrop-blur-[25px] flex-col justify-center items-center gap-6 inline-flex"
                >
                  <div className="w-12 h-12 relative">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="ion:paw">
                        <path
                          className="group-hover:text-color4 fill-color1 group-hover:fill-color7"
                          id="Vector"
                          d="M30.647 11.4231C30.3002 10.5988 29.7239 10.0044 28.9802 9.705L28.9702 9.70125C28.6316 9.56866 28.2712 9.50081 27.9077 9.50125H27.8677C26.1652 9.52688 24.427 10.9738 23.5433 13.1019C22.8952 14.6581 22.8208 16.3319 23.3445 17.5794C23.6908 18.4044 24.2683 18.9987 25.0152 19.2981L25.0233 19.3012C25.3618 19.4337 25.7222 19.5016 26.0858 19.5012C27.8045 19.5012 29.5608 18.0544 30.4608 15.8981C31.1008 14.3438 31.1714 12.6713 30.647 11.4231ZM23.8445 20.6019C22.8627 20.0119 21.9345 19.4538 21.3283 18.4513C19.6558 15.6763 18.6458 14.0013 15.9977 14.0013C13.3495 14.0013 12.337 15.6763 10.6608 18.4513C10.0533 19.455 9.12328 20.0137 8.13828 20.6062C7.00891 21.285 5.84203 21.9862 5.33828 23.3662C5.14245 23.8637 5.04379 24.3941 5.04766 24.9287C5.04766 27.1756 6.79766 29.0037 8.94766 29.0037C10.057 29.0037 11.2377 28.6194 12.487 28.2125C13.6883 27.8212 14.9302 27.4169 16.0039 27.4169C17.0777 27.4169 18.3164 27.8212 19.5133 28.2125C20.7602 28.6169 21.9352 29.0012 23.0477 29.0012C25.1945 29.0012 26.9414 27.1731 26.9414 24.9262C26.9432 24.3912 26.8424 23.8608 26.6445 23.3637C26.1408 21.9825 24.9733 21.2806 23.8445 20.6019ZM9.37266 11.8044C10.1164 12.7375 11.0602 13.2513 12.0302 13.2513C12.1626 13.2512 12.2948 13.2414 12.4258 13.2219C14.4489 12.9244 15.7095 10.4556 15.2958 7.59688C15.1227 6.395 14.6602 5.27562 13.9977 4.44563C13.2552 3.51438 12.3102 3.00125 11.3408 3.00125C11.2084 3.00125 11.0761 3.01107 10.9452 3.03063C8.92203 3.32813 7.66141 5.79688 8.07516 8.65563C8.24766 9.85563 8.71016 10.9738 9.37266 11.8044ZM19.5702 13.2219C19.7011 13.2414 19.8334 13.2512 19.9658 13.2513C20.9364 13.2513 21.8795 12.7375 22.6233 11.8044C23.2852 10.9738 23.7452 9.85563 23.9202 8.65438C24.3339 5.79688 23.0733 3.32813 21.0502 3.02938C20.9192 3.00982 20.787 3 20.6545 3C19.6852 3.00125 18.7402 3.51438 17.9977 4.44563C17.3352 5.27562 16.8727 6.395 16.7002 7.59813C16.2864 10.4556 17.547 12.9244 19.5702 13.2219ZM6.97203 19.3012L6.98078 19.2981C7.72641 18.9987 8.30328 18.405 8.64891 17.5806C9.17266 16.3306 9.09891 14.6587 8.45203 13.1025C7.55641 10.9488 5.80078 9.50125 4.08391 9.50125C3.72034 9.50072 3.35991 9.56857 3.02141 9.70125L3.01266 9.70438C2.26891 10.0013 1.69203 10.5975 1.34641 11.4219C0.822657 12.6719 0.896407 14.3438 1.54328 15.9C2.43891 18.0538 4.19453 19.5012 5.91141 19.5012C6.27435 19.5015 6.63412 19.4337 6.97203 19.3012Z"
                          fill="#0A6141"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-black group-hover:text-color4 text-[28px] font-medium text-center">
                    Mis mascotas
                  </div>
                </button>
              </div>
              <div className="group hover:bg-color1 w-[380px] h-[280px] px-[39.50px] pt-[72px] pb-[71px] bg-neutral-50 rounded-2xl border border-emerald-800 justify-center items-center inline-flex">
                <button
                  onClick={misReservas}
                  className="self-stretch p-4 rounded-xl backdrop-blur-[25px] flex-col justify-center items-center gap-6 inline-flex"
                >
                  <div className="w-12 h-12 relative">
                    <svg
                      width="36"
                      height="42"
                      viewBox="0 0 36 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <path
                          className="group-hover:text-color4 fill-color1 group-hover:fill-color7"
                          id="Vector"
                          d="M36 18V32C36 33.0609 35.5786 34.0783 34.8284 34.8284C34.0783 35.5786 33.0609 36 32 36H4C2.93913 36 1.92172 35.5786 1.17157 34.8284C0.421427 34.0783 0 33.0609 0 32V18H36ZM26 0C26.5304 0 27.0391 0.210714 27.4142 0.585786C27.7893 0.960859 28 1.46957 28 2V4H32C33.0609 4 34.0783 4.42143 34.8284 5.17157C35.5786 5.92172 36 6.93913 36 8V14H0V8C0 6.93913 0.421427 5.92172 1.17157 5.17157C1.92172 4.42143 2.93913 4 4 4H8V2C8 1.46957 8.21071 0.960859 8.58579 0.585786C8.96086 0.210714 9.46957 0 10 0C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2V4H24V2C24 1.46957 24.2107 0.960859 24.5858 0.585786C24.9609 0.210714 25.4696 0 26 0Z"
                          fill="#0A6141"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-black group-hover:text-color4 text-[28px] font-medium text-center">
                    Mis reservas
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
    }
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
