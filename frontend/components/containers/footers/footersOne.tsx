import React from 'react';
import Image from "next/image";

export default function FootersOne() {
    return (
      <div
        id="contacto"
        className="w-full h-[350px] px-[100px] py-[50px] bg-white flex-col justify-between items-center inline-flex shadow-lg"
      >
        <div className="self-stretch justify-center items-start gap-10 inline-flex">
          <div className="mt-30 h-[180px] px-[69px] py-4 bg-white  justify-center items-center flex">
            <Image
              src="/logo/1_Isotipo Color.svg"
              alt="log"
              width={250}
              height={180}
            />
          </div>
          <div className="justify-start items-start gap-20 flex">
            <div className="flex-col justify-center items-start gap-6 inline-flex">
              <div
                className=" text-orange-400
text-2xl
font-medium"
              >
                Nosotros
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="text-black text-lg font-normal  ">
                  Quienes somos
                </div>
                <div className="text-black text-lg font-normal  ">
                  Cómo funciona
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-6 inline-flex">
              <div
                className="text-orange-400 
text-2xl
font-medium"
              >
                Servicios
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="text-black text-lg font-normal  text-18">
                  Visitas a domicilio
                </div>
                <div className="text-black text-lg font-normal  text-18">
                  Cuidado de mascota
                </div>
                <div className="text-black text-lg font-normal  ">Paseos</div>
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-6 inline-flex">
              <div
                className="text-orange-400
text-2xl
font-medium"
              >
                Ayuda
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="text-black text-lg font-normal  text-18">
                  Preguntas frecuentes
                </div>
                <div className="text-black text-lg font-normal  text-18">
                  Términos y condiciones
                </div>
                <div className="text-black text-lg font-normal  text-18">
                  Políticas de privacidad
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-6 inline-flex">
              <div
                className="text-orange-400
text-2xl
font-medium"
              >
                Contacto
              </div>
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="text-black text-lg font-normal  text-18">
                  +54 9 11 0000-0000
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-8 h-8 relative">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9974 0.166016C12.2464 0.166016 10.5126 0.510893 8.89495 1.18096C7.27728 1.85102 5.80742 2.83314 4.56931 4.07126C2.06882 6.57174 0.664063 9.96313 0.664062 13.4993C0.664063 19.3927 4.49073 24.3927 9.78406 26.166C10.4507 26.2727 10.6641 25.8594 10.6641 25.4993V23.246C6.97073 24.046 6.18406 21.4593 6.18406 21.4593C5.57073 19.9127 4.70406 19.4993 4.70406 19.4993C3.49073 18.6727 4.7974 18.6993 4.7974 18.6993C6.13073 18.7927 6.8374 20.0727 6.8374 20.0727C7.9974 22.0993 9.9574 21.4993 10.7174 21.1793C10.8374 20.3127 11.1841 19.726 11.5574 19.3927C8.5974 19.0593 5.49073 17.9127 5.49073 12.8327C5.49073 11.3527 5.9974 10.166 6.86406 9.21935C6.73073 8.88602 6.26406 7.49935 6.9974 5.69935C6.9974 5.69935 8.1174 5.33935 10.6641 7.05935C11.7174 6.76602 12.8641 6.61935 13.9974 6.61935C15.1307 6.61935 16.2774 6.76602 17.3307 7.05935C19.8774 5.33935 20.9974 5.69935 20.9974 5.69935C21.7307 7.49935 21.2641 8.88602 21.1307 9.21935C21.9974 10.166 22.5041 11.3527 22.5041 12.8327C22.5041 17.926 19.3841 19.046 16.4107 19.3793C16.8907 19.7927 17.3307 20.606 17.3307 21.846V25.4993C17.3307 25.8594 17.5441 26.286 18.2241 26.166C23.5174 24.3793 27.3307 19.3927 27.3307 13.4993C27.3307 11.7484 26.9859 10.0146 26.3158 8.3969C25.6457 6.77923 24.6636 5.30937 23.4255 4.07126C22.1874 2.83314 20.7175 1.85102 19.0998 1.18096C17.4822 0.510893 15.7484 0.166016 13.9974 0.166016Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-[50px] justify-center items-center gap-2.5 flex">
                    <div className="h-8 justify-start items-start flex">
                      {/* icono de figma */}
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="28"
                          height="28"
                          rx="14"
                          fill="black"
                        />
                        <g clip-path="url(#clip0_672_3521)">
                          <path
                            d="M8.66406 9.16667C8.66406 7.69467 9.85873 6.5 11.3307 6.5H13.9974V11.8333H11.3307C9.85873 11.8333 8.66406 10.6387 8.66406 9.16667Z"
                            fill="#F24E1E"
                          />
                          <path
                            d="M14 6.5H16.6667C18.1387 6.5 19.3333 7.69467 19.3333 9.16667C19.3333 10.6387 18.1387 11.8333 16.6667 11.8333H14V6.5Z"
                            fill="#FF7262"
                          />
                          <path
                            d="M8.66406 14.5007C8.66406 13.0287 9.85873 11.834 11.3307 11.834H13.9974V17.1673H11.3307C9.85873 17.1673 8.66406 15.9727 8.66406 14.5007Z"
                            fill="#A259FF"
                          />
                          <path
                            d="M19.3333 14.5007C19.3333 15.9727 18.1387 17.1673 16.6667 17.1673C15.1947 17.1673 14 15.9727 14 14.5007C14 13.0287 15.1947 11.834 16.6667 11.834C18.1387 11.834 19.3333 13.0287 19.3333 14.5007Z"
                            fill="#1ABCFE"
                          />
                          <path
                            d="M11.3307 22.4993C12.8027 22.4993 13.9974 21.3047 13.9974 19.8327V17.166H11.3307C9.85873 17.166 8.66406 18.3607 8.66406 19.8327C8.66406 21.3047 9.85873 22.4993 11.3307 22.4993Z"
                            fill="#0ACF83"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_672_3521">
                            <rect
                              width="10.6667"
                              height="16"
                              fill="white"
                              transform="translate(8.66406 6.5)"
                            />
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
    );
}
