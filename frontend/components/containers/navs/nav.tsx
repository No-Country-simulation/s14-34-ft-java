'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Nav() {
    const router = useRouter();

    const { data: session, status } = useSession();

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

    if (!session) {
        return (
            <div className="flex flex-row gap-2.5 justify-center items-center">
                <div className="w-[180px] h-[55px] px-6 py-4  rounded-[50px] justify-center items-center inline-flex text-color2 hover:bg-color2 border-color2 hover:text-color3 border-2">
                    <Link href="#" onClick={() => signIn()} className="text-xl font-medium">Iniciar Sesión</Link>
                </div>
                <div className="w-[130px] h-[55px] px-6 py-4 bg-color1 rounded-[50px] justify-center items-center inline-flex text-color4 hover:bg-color5">
                    <Link href="/auth/register" className="text-xl font-medium">Registrar</Link>
                </div>
                <div>
                    {/* <Link href="#" onClick={() => signOut()}>Salir</Link> */}
                </div>
            </div>

        )
    }
    if (session) {
        return (
            <div className="flex flex-row gap-2.5 justify-center items-center mr-4">
                <div className="flex gap-2">
                    <div>Foto</div>
                    <div>Nombre Apellido</div>
                </div>
                <div>
                    <Menu as="div" >
                        <div>
                            <Menu.Button >
                                <div className="w-14 h-14 p-4 bg-orange-400 rounded-[50px] justify-center items-center gap-2.5 inline-flex">
                                    {/* botom */}
                                    <div className="w-6 h-6 relative">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Component 7">
                                                <path id="Vector" d="M12 18.9238C11.7369 18.9238 11.4903 18.883 11.2601 18.8014C11.0299 18.7199 10.8161 18.5798 10.6188 18.3812L1.5426 9.30493C1.18087 8.9432 1 8.48281 1 7.92377C1 7.36472 1.18087 6.90433 1.5426 6.5426C1.90433 6.18087 2.36472 6 2.92377 6C3.48281 6 3.9432 6.18087 4.30493 6.5426L12 14.2377L19.6951 6.5426C20.0568 6.18087 20.5172 6 21.0762 6C21.6353 6 22.0957 6.18087 22.4574 6.5426C22.8191 6.90433 23 7.36472 23 7.92377C23 8.48281 22.8191 8.9432 22.4574 9.30493L13.3812 18.3812C13.1839 18.5785 12.9701 18.7186 12.7399 18.8014C12.5097 18.8843 12.2631 18.9251 12 18.9238Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link 
                                            href="/dashboard"
                                                className={`${active ? 'bg-color1 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Perfil
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-color1 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Notificaciones
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-color1 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Mensajes
                                            </button>
                                        )}
                                    </Menu.Item>
                                    
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button 
                                            onClick={() => signOut()}
                                                className={`${active ? 'bg-color1 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Cerrar Sesión
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        )
    }
}
