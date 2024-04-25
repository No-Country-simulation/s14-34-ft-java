import React from 'react';
import Image from "next/image";

export default function FootersOne() {
    return (
        <div id="contacto" className="w-full h-[350px] px-[100px] py-[50px] bg-white flex-col justify-between items-center inline-flex shadow-lg">
            <div className="self-stretch justify-center items-start gap-24 inline-flex">
                <div className="mt-30 h-[180px] px-[69px] py-4 bg-white  justify-center items-center flex">
                <Image src="/logo/1_Isotipo Color.svg" alt="log" width={250} height={180}/>
                </div>
                <div className="justify-start items-start gap-20 flex">
                    <div className="flex-col justify-center items-start gap-6 inline-flex">
                        <div className="text-orange-400 text-2xl font-medium   text-24">Nosotros</div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="text-black text-lg font-normal  ">Quienes somos</div>
                            <div className="text-black text-lg font-normal  ">Cómo funciona</div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-6 inline-flex">
                        <div className="text-orange-400 text-2xl font-medium  text-24">Servicios</div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="text-black text-lg font-normal  text-18">Visitas a domicilio</div>
                            <div className="text-black text-lg font-normal  text-18">Cuidado de mascota</div>
                            <div className="text-black text-lg font-normal  ">Paseos</div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-6 inline-flex">
                        <div className="text-orange-400 text-2xl font-medium  text-24">Ayuda</div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="text-black text-lg font-normal  text-18">Preguntas frecuentes</div>
                            <div className="text-black text-lg font-normal  text-18">Términos y condiciones</div>
                            <div className="text-black text-lg font-normal  text-18">Políticas de privacidad</div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-6 inline-flex">
                        <div className="text-orange-400 text-2xl font-medium  text-24">Contacto</div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="text-black text-lg font-normal  text-18">+54 9 11 0000-0000</div>
                            <div className="justify-start items-center gap-4 inline-flex">
                                <div className="w-8 h-8 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" height="32" width="32" id="Github-Logo-1--Streamline-Ultimate"><desc>Github Logo 1 Streamline Icon: https://streamlinehq.com</desc><path d="M15.5 0.36166666666666675a15.5 15.5 0 0 0 -4.805000000000001 30.237916666666667l0.36166666666666675 0a1.2916666666666667 1.2916666666666667 0 0 0 0.9041666666666667 -0.31 1.3562500000000002 1.3562500000000002 0 0 0 0.465 -1.0591666666666666v-0.27125l0 -1.407916666666667a0.6329166666666667 0.6329166666666667 0 0 0 -0.24541666666666667 -0.42625 0.6458333333333334 0.6458333333333334 0 0 0 -0.5295833333333333 -0.12916666666666668c-3.4745833333333334 0.7491666666666666 -4.210833333333333 -1.4208333333333336 -4.249583333333334 -1.5629166666666667A5.993333333333333 5.993333333333333 0 0 0 5.166666666666667 22.604166666666668l-0.19375 -0.14208333333333334a0.9429166666666667 0.9429166666666667 0 0 1 0.49083333333333334 -0.09041666666666669 1.9116666666666668 1.9116666666666668 0 0 1 1.4725 1.1366666666666667 3.875 3.875 0 0 0 5.166666666666667 1.4983333333333333 0.6845833333333334 0.6845833333333334 0 0 0 0.3875 -0.465 2.5833333333333335 2.5833333333333335 0 0 1 0.7233333333333335 -1.5758333333333334 0.6458333333333334 0.6458333333333334 0 0 0 0.19375 -0.6845833333333334 0.6329166666666667 0.6329166666666667 0 0 0 -0.5425 -0.45208333333333334c-3.0612500000000002 -0.34875000000000006 -6.2 -1.4208333333333336 -6.2 -6.703750000000001a5.166666666666667 5.166666666666667 0 0 1 1.3691666666666669 -3.5908333333333333 0.6329166666666667 0.6329166666666667 0 0 0 0.11625 -0.6716666666666667A4.598333333333334 4.598333333333334 0 0 1 8.163333333333334 7.75a7.194583333333334 7.194583333333334 0 0 1 3.2550000000000003 1.4854166666666666 0.62 0.62 0 0 0 0.5425 0.0775A13.769166666666667 13.769166666666667 0 0 1 15.5 8.847916666666666a13.317083333333334 13.317083333333334 0 0 1 3.5520833333333335 0.465 0.5941666666666667 0.5941666666666667 0 0 0 0.5295833333333333 -0.0775A7.142916666666667 7.142916666666667 0 0 1 22.836666666666666 7.75a4.572500000000001 4.572500000000001 0 0 1 0 3.0741666666666667 0.62 0.62 0 0 0 0.12916666666666668 0.6716666666666667 5.166666666666667 5.166666666666667 0 0 1 1.3562500000000002 3.5520833333333335c0 5.295833333333333 -3.1387500000000004 6.355 -6.212916666666667 6.690833333333333a0.6329166666666667 0.6329166666666667 0 0 0 -0.5425 0.45208333333333334 0.6329166666666667 0.6329166666666667 0 0 0 0.19375 0.6716666666666667 2.8804166666666666 2.8804166666666666 0 0 1 0.7879166666666667 2.260416666666667v4.107500000000001a1.3691666666666669 1.3691666666666669 0 0 0 0.4779166666666667 1.0591666666666666 1.5241666666666667 1.5241666666666667 0 0 0 1.3691666666666669 0.24541666666666667A15.5 15.5 0 0 0 15.5 0.36166666666666675Z" fill="#000000" strokeWidth"1"></path></svg>
                                </div>
                                <div className="w-7 h-7 rounded-[50px] justify-center items-center gap-2.5 flex">
                                    <div className="h-8 justify-start items-start flex">
                                        {/* icono de figma */}
                                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="28" height="28" rx="14" fill="black" />
                                            <g clip-path="url(#clip0_672_3521)">
                                                <path d="M8.66406 9.16667C8.66406 7.69467 9.85873 6.5 11.3307 6.5H13.9974V11.8333H11.3307C9.85873 11.8333 8.66406 10.6387 8.66406 9.16667Z" fill="#F24E1E" />
                                                <path d="M14 6.5H16.6667C18.1387 6.5 19.3333 7.69467 19.3333 9.16667C19.3333 10.6387 18.1387 11.8333 16.6667 11.8333H14V6.5Z" fill="#FF7262" />
                                                <path d="M8.66406 14.5007C8.66406 13.0287 9.85873 11.834 11.3307 11.834H13.9974V17.1673H11.3307C9.85873 17.1673 8.66406 15.9727 8.66406 14.5007Z" fill="#A259FF" />
                                                <path d="M19.3333 14.5007C19.3333 15.9727 18.1387 17.1673 16.6667 17.1673C15.1947 17.1673 14 15.9727 14 14.5007C14 13.0287 15.1947 11.834 16.6667 11.834C18.1387 11.834 19.3333 13.0287 19.3333 14.5007Z" fill="#1ABCFE" />
                                                <path d="M11.3307 22.4993C12.8027 22.4993 13.9974 21.3047 13.9974 19.8327V17.166H11.3307C9.85873 17.166 8.66406 18.3607 8.66406 19.8327C8.66406 21.3047 9.85873 22.4993 11.3307 22.4993Z" fill="#0ACF83" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_672_3521">
                                                    <rect width="10.6667" height="16" fill="white" transform="translate(8.66406 6.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
