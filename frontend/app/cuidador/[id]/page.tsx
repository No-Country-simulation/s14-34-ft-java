'use client';

import Link from "next/link";
import Image from "next/image";
import HeadersOne from "@/components/containers/headers/headersOne";
import FootersOne from "@/components/containers/footers/footersOne";
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";
import Volver from "@/components/buttons/volver";
import Carouselclientes from "@/components/carrusel/clientesfelices/clients";



const cuidadores = [
    {
        id: 1,
        imageUrl: '/paseo/Cuidadores/1.png',
        nombre: 'Julieta Fernández',
        ubicacion: 'Ubicación 1',
        detalles: 'Soy una amante de los animales con experiencia en el cuidado de perros y gatos. Me encanta pasar tiempo al aire libre, jugar y pasear a los peludos. Además, tengo habilidades en la administración de medicamentos y primeros auxilios.'
    },
    {
        id: 2,
        imageUrl: '/paseo/Cuidadores/2.png',
        nombre: 'Abril Sánchez',
        ubicacion: 'Ubicación 2',
        detalles: 'Tengo una pasión por los animales desde que era niña. He trabajado con perros de todas las edades y tamaños. Disfruto de largos paseos y de proporcionarles todo el amor y cuidado que necesitan.'
    },
    {
        id: 3,
        imageUrl: '/paseo/Cuidadores/3.png',
        nombre: 'Agustina Pérez',
        ubicacion: 'Ubicación 3',
        detalles: 'Me considero una persona responsable y confiable, especialmente cuando se trata del cuidado de mascotas. Tengo experiencia en el cuidado de animales domésticos y estoy comprometida a proporcionarles un ambiente seguro y amoroso.'
    },
    {
        id: 4,
        imageUrl: '/paseo/Cuidadores/4.png',
        nombre: 'Catalina Diaz',
        ubicacion: 'Ubicación 1',
        detalles: 'Mi amor por los animales me llevó a convertirme en cuidadora profesional. He trabajado con una variedad de mascotas y disfruto creando un vínculo especial con cada una. Estoy comprometida a brindarles el mejor cuidado posible.'
    },
    {
        id: 5,
        imageUrl: '/paseo/Cuidadores/5.png',
        nombre: 'Azmin Alvarez',
        ubicacion: 'Ubicación 2',
        detalles: 'Como amante de los animales, disfruto pasar tiempo con perros y gatos. Tengo habilidades en el entrenamiento básico y en proporcionarles una atención integral. Estoy comprometida a hacer que su experiencia de cuidado sea lo más placentera posible.'
    },
    {
        id: 6,
        imageUrl: '/paseo/Cuidadores/6.png',
        nombre: 'Franco Bravo',
        ubicacion: 'Ubicación 2',
        detalles: 'Soy un entusiasta de los animales con experiencia en el cuidado de perros y gatos. Me encanta interactuar con ellos, ya sea jugando, paseando o simplemente brindándoles compañía. Estoy comprometido a proporcionarles el cuidado y la atención que se merecen.'
    }
];


export default function CuidadorId({ params }: { params: { id: string } }) {
    // Encuentra el cuidador con la ID proporcionada en los parámetros
    const cuidador = cuidadores.find(c => c.id === parseInt(params.id));

    if (!cuidador) {
        // Si no se encuentra el cuidador, puedes mostrar un mensaje de error o redireccionar
        return (
            <div>
                <p>Cuidador no encontrado</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <HeadersOne />
            </div>
            <div className="mt-36 ml-10">
                <div className="flex flex-row justify-between">
                    <div className="">
                        <Volver />
                    </div>
                    <div className="mr-24">
                        <button className="w-[250px] h-14 px-6 py-4 bg-emerald-800 rounded-2xl border border-emerald-800 justify-center items-center gap-2 inline-flex">
                            <div className="text-white text-xl font-medium ">Contactar al cuidador</div>
                        </button>
                    </div>
                </div>

                <div className="mt-10 w-[1200px] h-[790px] p-[60px] bg-white rounded-2xl shadow-md border-2 flex-col justify-start items-start gap-[50px] inline-flex">
                    <div className="self-stretch justify-start items-start gap-[69px] inline-flex">
                        <div className="px-20 py-[50px] bg-neutral-50 rounded-2xl border border-orange-400 justify-start items-start gap-[54px] flex">
                            <Image className="w-[150px] h-[150px] rounded-full" src={cuidador.imageUrl} alt="foto" width={150} height={150} />
                            <div className="flex-col justify-start items-start gap-5 inline-flex">
                                <div className="self-stretch text-black text-[28px] font-medium ">{cuidador.nombre}</div>
                                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                    <div className="w-[25.67px] h-[36.67px] relative">
                                        <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8333 0C5.73833 0 0 5.73833 0 12.8333C0 22.4583 12.8333 36.6667 12.8333 36.6667C12.8333 36.6667 25.6667 22.4583 25.6667 12.8333C25.6667 5.73833 19.9283 0 12.8333 0ZM3.66667 12.8333C3.66667 7.77333 7.77333 3.66667 12.8333 3.66667C17.8933 3.66667 22 7.77333 22 12.8333C22 18.1133 16.72 26.015 12.8333 30.9467C9.02 26.0517 3.66667 18.0583 3.66667 12.8333Z" fill="#0A6141" />
                                            <path d="M12.8333 17.4167C15.3646 17.4167 17.4167 15.3646 17.4167 12.8333C17.4167 10.302 15.3646 8.25 12.8333 8.25C10.302 8.25 8.25 10.302 8.25 12.8333C8.25 15.3646 10.302 17.4167 12.8333 17.4167Z" fill="#0A6141" />
                                        </svg>

                                    </div>
                                    <div className="grow shrink basis-0 text-black text-[28px] font-medium ">Qulimes</div>
                                </div>
                                <div className="self-stretch h-[50px] justify-start items-start gap-[5px] inline-flex">
                                    <div className="justify-start items-center flex">
                                        <div className="w-[37px] h-[37px] relative">
                                            <svg width="60" height="30" viewBox="0 0 185 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {/* Icono de estrella */}
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-black text-[28px] font-medium ">4.9</div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                            <div className="self-stretch text-orange-400 text-[22px] font-medium ">Descripción</div>
                            <div className="self-stretch h-[194px] text-black text-lg font-normal ">¡Hola! Soy un amante de los animales y ofrezco servicios de paseos y visitas a domicilio para tus mascotas. Con dedicación y cuidado excepcional, aseguro que estén felices y activos mientras estás fuera. ¡Reserva conmigo para que tus peludos amigos reciban el amor y la atención que merecen!</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-[94px] inline-flex">
                        <div className="grow shrink basis-0 h-[229px] justify-start items-start gap-[60px] flex">
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Habilidades adicionales</div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Horario flexible</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Vivo cerca de un parque</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="grow shrink basis-0 text-black text-lg font-normal ">Experiencia cuidados especiales</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Mascota que cuida</div>
                                <div className="self-stretch h-[126px] flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Perro</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-[11px] inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Gato</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Hurón</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[280px] h-[229px] flex-col justify-start items-start gap-[30px] inline-flex">
                                <div className="self-stretch text-orange-400 text-[22px] font-medium ">Servicios que ofrece</div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Visitas a domicilio</div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                        <div className="w-8 h-8 relative"></div>
                                        <div className="text-black text-lg font-normal ">Paseos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[81px] flex-col justify-start items-start gap-[30px] flex">
                        <div className="text-orange-400 text-[22px] font-medium ">Mi residencia</div>
                        <div className="self-stretch justify-start items-start gap-[100px] inline-flex">
                            <div className="h-[25px] justify-start items-center gap-2.5 flex">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4169 10.6014C22.4169 10.3464 22.3158 10.1018 22.1358 9.92147C21.9558 9.74114 21.7117 9.63983 21.4572 9.63983C21.2026 9.63983 20.9585 9.74114 20.7786 9.92147C20.5986 10.1018 20.4975 10.3464 20.4975 10.6014H22.4169ZM4.50253 10.6014C4.50253 10.3464 4.40141 10.1018 4.22144 9.92147C4.04146 9.74114 3.79736 9.63983 3.54283 9.63983C3.2883 9.63983 3.0442 9.74114 2.86422 9.92147C2.68424 10.1018 2.58313 10.3464 2.58313 10.6014H4.50253ZM23.3382 13.8451C23.426 13.9396 23.532 14.0154 23.6497 14.0679C23.7674 14.1205 23.8945 14.1487 24.0234 14.151C24.1522 14.1533 24.2802 14.1295 24.3997 14.0812C24.5192 14.0328 24.6278 13.9608 24.7189 13.8695C24.81 13.7782 24.8819 13.6694 24.9302 13.5497C24.9784 13.43 25.0021 13.3017 24.9999 13.1726C24.9976 13.0435 24.9694 12.9162 24.9169 12.7982C24.8645 12.6803 24.7888 12.5741 24.6946 12.4861L23.3382 13.8451ZM12.5 1.62674L13.1782 0.94723C12.9982 0.76716 12.7543 0.666016 12.5 0.666016C12.2457 0.666016 12.0018 0.76716 11.8218 0.94723L12.5 1.62674ZM0.30545 12.4861C0.211161 12.5741 0.135534 12.6803 0.0830809 12.7982C0.0306278 12.9162 0.00242292 13.0435 0.000149356 13.1726C-0.00212421 13.3017 0.0215798 13.43 0.0698475 13.5497C0.118115 13.6694 0.189958 13.7782 0.281089 13.8695C0.37222 13.9608 0.480773 14.0328 0.600272 14.0812C0.719772 14.1295 0.847768 14.1533 0.976627 14.151C1.10549 14.1487 1.23257 14.1205 1.35029 14.0679C1.46801 14.0154 1.57396 13.9396 1.66182 13.8451L0.30545 12.4861ZM6.10202 25.666H18.898V23.7429H6.10202V25.666ZM22.4169 22.1403V10.6014H20.4975V22.1403H22.4169ZM4.50253 22.1403V10.6014H2.58313V22.1403H4.50253ZM24.6946 12.4861L13.1782 0.94723L11.8218 2.30625L23.3382 13.8451L24.6946 12.4861ZM11.8218 0.94723L0.30545 12.4861L1.66182 13.8451L13.1782 2.30625L11.8218 0.94723ZM18.898 25.666C19.8312 25.666 20.7263 25.2946 21.3862 24.6333C22.0461 23.9721 22.4169 23.0753 22.4169 22.1403H20.4975C20.4975 23.0249 19.7809 23.7429 18.898 23.7429V25.666ZM6.10202 23.7429C5.2191 23.7429 4.50253 23.0249 4.50253 22.1403H2.58313C2.58313 23.0753 2.95387 23.9721 3.61379 24.6333C4.27371 25.2946 5.16875 25.666 6.10202 25.666V23.7429Z" fill="#0A6141" />
                                </svg>

                                <div className="text-black text-lg font-normal ">Vivo en departamento</div>
                            </div>
                            <div className="h-[25px] justify-start items-center gap-[9px] flex">
                                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9853 21.0484C25.8851 21.4948 26.6288 22.1226 27.2164 22.9317C27.8041 23.7408 28.1759 24.6523 28.332 25.666H26.817C26.716 25.1359 26.5278 24.643 26.2523 24.1872C25.9769 23.7315 25.6418 23.3409 25.2469 23.0154C24.8521 22.6899 24.4068 22.4295 23.911 22.2342C23.4152 22.0388 22.901 21.9458 22.3684 21.9551C21.8267 21.9551 21.3125 22.0481 20.8259 22.2342C20.3392 22.4202 19.8939 22.6759 19.4899 23.0014C19.0859 23.327 18.7508 23.7222 18.4845 24.1872C18.2182 24.6523 18.03 25.1452 17.9198 25.666H16.4048C16.5517 24.6616 16.919 23.7548 17.5066 22.9456C18.0943 22.1365 18.8426 21.5041 19.7516 21.0484C19.2282 20.6298 18.8242 20.123 18.5396 19.5277C18.255 18.9325 18.1081 18.3001 18.0989 17.6304C18.0989 17.2119 18.154 16.8074 18.2642 16.4167C18.3743 16.0261 18.5396 15.6587 18.76 15.3146C18.9803 14.9705 19.242 14.6636 19.545 14.3939C19.848 14.1242 20.1877 13.8963 20.5642 13.7103C20.3163 13.3476 20.0317 13.0267 19.7103 12.7477C19.3889 12.4687 19.04 12.2222 18.6636 12.0083C18.2871 11.7944 17.8923 11.641 17.4791 11.548C17.0659 11.455 16.639 11.3992 16.1982 11.3806C15.4637 11.3806 14.7613 11.5247 14.091 11.813C13.4207 12.1013 12.8377 12.5245 12.3419 13.0825C12.5622 13.6871 12.6724 14.3102 12.6724 14.9519C12.6724 15.8076 12.4842 16.612 12.1077 17.3654C11.7313 18.1187 11.2033 18.7511 10.5239 19.2627C11.1207 19.5696 11.6578 19.9462 12.1353 20.3927C12.6127 20.8391 13.0259 21.3413 13.3748 21.8993C13.7237 22.4574 13.9854 23.0526 14.1599 23.685C14.3343 24.3175 14.4261 24.9778 14.4353 25.666H12.6724C12.6724 24.9313 12.5347 24.2384 12.2592 23.5874C11.9838 22.9363 11.6073 22.369 11.1299 21.8854C10.6524 21.4018 10.0877 21.0158 9.43582 20.7275C8.78391 20.4392 8.09986 20.2997 7.38368 20.309C6.64913 20.309 5.96509 20.4485 5.33154 20.7275C4.69799 21.0065 4.1379 21.3878 3.65126 21.8714C3.16463 22.3551 2.78358 22.927 2.50813 23.5874C2.23267 24.2477 2.09494 24.9406 2.09494 25.666H0.332031C0.332031 24.9871 0.42385 24.3314 0.607486 23.699C0.791123 23.0665 1.05281 22.4713 1.39253 21.9133C1.73226 21.3553 2.14085 20.853 2.61831 20.4066C3.09576 19.9602 3.63749 19.5789 4.24349 19.2627C3.56404 18.7511 3.03608 18.1187 2.65963 17.3654C2.28317 16.612 2.09494 15.8076 2.09494 14.9519C2.09494 14.2172 2.23267 13.5243 2.50813 12.8733C2.78358 12.2222 3.16004 11.6549 3.63749 11.1713C4.11495 10.6877 4.67504 10.3017 5.31777 10.0134C5.96049 9.72507 6.64913 9.58557 7.38368 9.59487C8.16413 9.59487 8.90327 9.76227 9.60109 10.0971C10.2989 10.4319 10.9049 10.8969 11.4191 11.4922C11.6578 11.2596 11.9149 11.0504 12.1904 10.8644C12.4658 10.6784 12.7551 10.5017 13.0581 10.3343C12.3786 9.82273 11.8506 9.1903 11.4742 8.43696C11.0977 7.68363 10.9095 6.87914 10.9095 6.0235C10.9095 5.28877 11.0472 4.59588 11.3227 3.94485C11.5981 3.29382 11.9746 2.7265 12.4521 2.24287C12.9295 1.75925 13.4896 1.37328 14.1323 1.08497C14.7751 0.796658 15.4637 0.657151 16.1982 0.666452C16.9236 0.666452 17.6076 0.805958 18.2504 1.08497C18.8931 1.36398 19.4532 1.7453 19.9307 2.22892C20.4081 2.71255 20.7892 3.28452 21.0738 3.94485C21.3584 4.60519 21.4962 5.29807 21.487 6.0235C21.487 6.87914 21.2987 7.68363 20.9223 8.43696C20.5458 9.1903 20.0179 9.82273 19.3384 10.3343C19.9812 10.6784 20.5596 11.0969 21.0738 11.5898C21.588 12.0827 22.0241 12.6547 22.3822 13.3057C22.9698 13.3057 23.5208 13.4173 24.0349 13.6406C24.5491 13.8638 25.0036 14.1753 25.3984 14.5752C25.7933 14.9752 26.0963 15.4309 26.3074 15.9424C26.5186 16.4539 26.6288 17.0166 26.638 17.6304C26.638 18.3001 26.4957 18.9325 26.211 19.5277C25.9264 20.123 25.5178 20.6298 24.9853 21.0484ZM7.38368 18.5233C7.87032 18.5233 8.32482 18.4303 8.74718 18.2443C9.16955 18.0583 9.546 17.8025 9.87655 17.477C10.2071 17.1515 10.4596 16.7748 10.634 16.347C10.8085 15.9192 10.9003 15.4541 10.9095 14.9519C10.9095 14.459 10.8177 13.9986 10.634 13.5708C10.4504 13.143 10.1979 12.7617 9.87655 12.4268C9.55518 12.092 9.18332 11.8363 8.76095 11.6596C8.33859 11.4829 7.8795 11.3899 7.38368 11.3806C6.89704 11.3806 6.44254 11.4736 6.02018 11.6596C5.59781 11.8456 5.22136 12.1013 4.89081 12.4268C4.56027 12.7524 4.30777 13.129 4.13331 13.5569C3.95886 13.9847 3.86704 14.4497 3.85786 14.9519C3.85786 15.4448 3.94967 15.9052 4.13331 16.333C4.31695 16.7609 4.56945 17.1422 4.89081 17.477C5.21218 17.8118 5.58404 18.0676 6.0064 18.2443C6.42877 18.421 6.88786 18.514 7.38368 18.5233ZM12.6724 6.0235C12.6724 6.51642 12.7642 6.9768 12.9479 7.40462C13.1315 7.83244 13.384 8.21375 13.7054 8.54857C14.0267 8.88338 14.3986 9.13915 14.821 9.31585C15.2433 9.49256 15.7024 9.58557 16.1982 9.59487C16.6849 9.59487 17.1394 9.50186 17.5617 9.31585C17.9841 9.12985 18.3606 8.87408 18.6911 8.54857C19.0217 8.22305 19.2742 7.84639 19.4486 7.41857C19.6231 6.99075 19.7149 6.52572 19.7241 6.0235C19.7241 5.53058 19.6322 5.07021 19.4486 4.64239C19.265 4.21457 19.0125 3.83325 18.6911 3.49843C18.3697 3.16362 17.9979 2.90786 17.5755 2.73115C17.1531 2.55444 16.6941 2.46144 16.1982 2.45213C15.7116 2.45213 15.2571 2.54514 14.8347 2.73115C14.4124 2.91716 14.0359 3.17292 13.7054 3.49843C13.3748 3.82395 13.1223 4.20062 12.9479 4.62844C12.7734 5.05626 12.6816 5.52128 12.6724 6.0235ZM22.3684 14.8124C21.9828 14.8124 21.6247 14.8868 21.2942 15.0356C20.9636 15.1844 20.6698 15.3844 20.4127 15.6355C20.1556 15.8866 19.9536 16.1842 19.8067 16.5283C19.6598 16.8725 19.5863 17.2398 19.5863 17.6304C19.5863 18.0211 19.6598 18.3838 19.8067 18.7186C19.9536 19.0534 20.151 19.351 20.3989 19.6114C20.6468 19.8718 20.9407 20.0765 21.2804 20.2253C21.6201 20.3741 21.9828 20.4485 22.3684 20.4485C22.7541 20.4485 23.1122 20.3741 23.4427 20.2253C23.7733 20.0765 24.0671 19.8765 24.3242 19.6254C24.5813 19.3743 24.7833 19.0767 24.9302 18.7325C25.0771 18.3884 25.1505 18.0211 25.1505 17.6304C25.1505 17.2398 25.0771 16.8771 24.9302 16.5423C24.7833 16.2075 24.5858 15.9099 24.3379 15.6494C24.09 15.389 23.7962 15.1844 23.4565 15.0356C23.1168 14.8868 22.7541 14.8124 22.3684 14.8124Z" fill="#0A6141" />
                                </svg>

                                <div className="text-black text-lg font-normal ">Vivo con 1 persona</div>
                            </div>
                            <div className="h-6 justify-start items-center gap-2.5 flex">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M4.16797 20.3368V20.3377C4.16733 21.0923 4.40132 21.7141 4.8727 22.2523C5.32502 22.7686 5.84067 23 6.48047 23C7.54903 23 8.60703 22.91 9.65509 22.7302C10.8154 22.5311 11.9865 22.4316 13.168 22.4316C14.3494 22.4316 15.5206 22.5311 16.6808 22.7302C17.7289 22.91 18.7869 23 19.8555 23H19.8564C20.4943 23.0006 21.0092 22.7698 21.4616 22.2527C21.9335 21.7133 22.1678 21.0911 22.168 20.3376L4.16797 20.3368ZM4.16797 20.3368C4.16797 19.492 4.44457 18.772 5.02079 18.1326C5.75876 17.3138 6.49089 16.5056 7.21717 15.7078C7.87172 15.0003 8.437 14.2292 8.91187 13.3956C9.31341 12.6907 9.79236 12.027 10.3504 11.404L10.3615 11.3916M4.16797 20.3368L10.3615 11.3916M10.3615 11.3916L10.3722 11.3788M10.3615 11.3916L10.3722 11.3788M10.3722 11.3788C10.759 10.9168 11.2038 10.5385 11.7089 10.2393C12.1573 9.97366 12.6373 9.8421 13.168 9.8421C13.7101 9.8421 14.1982 9.96901 14.6498 10.2208C15.1439 10.4963 15.5812 10.8588 15.9638 11.3157L15.9691 11.322M10.3722 11.3788L15.9691 11.322M15.9691 11.322L15.9745 11.3283M15.9691 11.322L15.9745 11.3283M15.9745 11.3283C16.5157 11.9533 16.9945 12.6274 17.4113 13.3515C17.8945 14.191 18.4612 14.9736 19.1105 15.6987L19.1105 15.6987M15.9745 11.3283L19.1105 15.6987M19.1105 15.6987L19.1164 15.7052M19.1105 15.6987L19.1164 15.7052M19.1164 15.7052C19.8442 16.5037 20.5769 17.3127 21.3148 18.1322M19.1164 15.7052L21.3148 18.1322M21.3148 18.1322C21.8904 18.7717 22.1673 19.4921 22.168 20.3375L21.3148 18.1322ZM7.91002 1.61918L7.22784 0.944114L7.91002 1.61918C8.32244 1.20242 8.80439 1 9.41797 1C10.0316 1 10.5135 1.20242 10.9259 1.61918C11.3388 2.03642 11.543 2.52843 11.543 3.15789C11.543 3.78736 11.3388 4.27937 10.9259 4.69661C10.5135 5.11337 10.0316 5.31579 9.41797 5.31579C8.80439 5.31579 8.32244 5.11337 7.91002 4.6966C7.49713 4.27937 7.29297 3.78736 7.29297 3.15789C7.29297 2.52843 7.49713 2.03642 7.91002 1.61918ZM3.79297 10.3684C3.17939 10.3684 2.69744 10.166 2.28502 9.74924C1.87213 9.332 1.66797 8.83999 1.66797 8.21053C1.66797 7.58106 1.87213 7.08905 2.28502 6.67182C2.69744 6.25505 3.17939 6.05263 3.79297 6.05263C4.40655 6.05263 4.88849 6.25505 5.30092 6.67181C5.71381 7.08905 5.91797 7.58106 5.91797 8.21053C5.91797 8.83999 5.71381 9.332 5.30092 9.74924C4.88849 10.166 4.40655 10.3684 3.79297 10.3684ZM16.918 5.31579C16.3044 5.31579 15.8224 5.11337 15.41 4.6966C14.9971 4.27937 14.793 3.78736 14.793 3.15789C14.793 2.52843 14.9971 2.03642 15.41 1.61918C15.8224 1.20242 16.3044 1 16.918 1C17.5316 1 18.0135 1.20242 18.4259 1.61919C18.8388 2.03642 19.043 2.52843 19.043 3.15789C19.043 3.78736 18.8388 4.27937 18.4259 4.69661C18.0135 5.11337 17.5316 5.31579 16.918 5.31579ZM22.543 10.3684C21.9294 10.3684 21.4474 10.166 21.035 9.74923C20.6221 9.332 20.418 8.83999 20.418 8.21053C20.418 7.58106 20.6221 7.08905 21.035 6.67181C21.4474 6.25505 21.9294 6.05263 22.543 6.05263C23.1566 6.05263 23.6385 6.25505 24.0509 6.67182C24.4638 7.08905 24.668 7.58106 24.668 8.21053C24.668 8.83999 24.4638 9.332 24.0509 9.74924C23.6385 10.166 23.1565 10.3684 22.543 10.3684Z" stroke="#0A6141" stroke-width="2" />
                                </svg>

                                <div className="text-black text-lg font-normal ">Tengo 1 perro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Carouselclientes />
                <FootersOne />
                <Foothercopyrigth />
            </div>
        </div>
    )
}
{/* <h2>{cuidador.nombre}</h2>
<Image src={cuidador.imageUrl} alt={cuidador.nombre} width={200} height={200} />
<p>{cuidador.ubicacion}</p>
<Link href="/otra-pagina">Volver</Link> */}