import React from 'react'

export default function Comofunciona() {
  return (
    <div className="bg-color7">
      <div className="justify-self-end px-24">
        <h1 className="text-[38px] font-semibold">Como Funciona?</h1>
      </div>
      <div className='flex justify-around p-[80px]'>
        <div className="w-[277px] h-[254px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[330px] px-2.5 pt-6 pb-12 bg-white rounded-[10px] border border-emerald-800 flex-col justify-start items-start flex">
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-[22px]  font-semibold">Busca lo que necesitas <br/><br/>
              </div>
            </div>
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-lg font-normal ">Hace una búsqueda personalizada según tus necesidades y las de tu mascota
              </div>
            </div>
          </div>
          <div className="p-4 bg-orange-400 rounded-[50px] justify-center items-center gap-2.5 inline-flex relative bottom-6">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-6 h-6 relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[277px] h-[254px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[330px] px-2.5 pt-6 pb-12 bg-white rounded-[10px] border border-color2 flex-col justify-start items-start flex">
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-[22px]  font-semibold">Encuentra el cuidador perfecto
              </div>
            </div>
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-lg font-normal ">Lee las reseñas, ve las valoraciones y encuentra el perfil que se adapte a lo que buscas
              </div>
            </div>
          </div>
          <div className="p-4 bg-color1 rounded-[50px] justify-center items-center gap-2.5 inline-flex relative bottom-6">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-6 h-6 relative"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.81507 6.53125C4.81507 5.16373 5.35831 3.85222 6.3253 2.88523C7.29228 1.91825 8.60379 1.375 9.97132 1.375C11.3388 1.375 12.6504 1.91825 13.6173 2.88523C14.5843 3.85222 15.1276 5.16373 15.1276 6.53125C15.1276 6.71359 15.0551 6.88845 14.9262 7.01739C14.7973 7.14632 14.6224 7.21875 14.4401 7.21875C14.2577 7.21875 14.0829 7.14632 13.9539 7.01739C13.825 6.88845 13.7526 6.71359 13.7526 6.53125C13.7526 5.5284 13.3542 4.56662 12.6451 3.8575C11.9359 3.14838 10.9742 2.75 9.97132 2.75C8.96847 2.75 8.00669 3.14838 7.29757 3.8575C6.58845 4.56662 6.19007 5.5284 6.19007 6.53125C6.19007 6.71359 6.11763 6.88845 5.9887 7.01739C5.85977 7.14632 5.6849 7.21875 5.50257 7.21875C5.32023 7.21875 5.14536 7.14632 5.01643 7.01739C4.8875 6.88845 4.81507 6.71359 4.81507 6.53125ZM16.8463 10.3125C16.4453 10.3121 16.0505 10.4122 15.6982 10.6038C15.5929 10.278 15.4193 9.97846 15.189 9.72512C14.9587 9.47178 14.677 9.27051 14.3627 9.13474C14.0484 8.99898 13.7087 8.93186 13.3664 8.93786C13.024 8.94385 12.6869 9.02284 12.3776 9.16953V6.53125C12.3776 5.89307 12.1241 5.28103 11.6728 4.82977C11.2215 4.37852 10.6095 4.125 9.97132 4.125C9.33314 4.125 8.7211 4.37852 8.26984 4.82977C7.81858 5.28103 7.56507 5.89307 7.56507 6.53125V13.4062L7.23679 12.8795C6.91576 12.3278 6.38873 11.9262 5.77163 11.7631C5.15453 11.6 4.49792 11.6887 3.94624 12.0098C3.39456 12.3308 2.993 12.8578 2.8299 13.4749C2.6668 14.092 2.75553 14.7486 3.07655 15.3003L5.59624 19.5972C5.6385 19.6809 5.69743 19.755 5.7694 19.8151C5.84138 19.8752 5.92488 19.9199 6.01478 19.9465C6.10467 19.9731 6.19906 19.9811 6.29214 19.9699C6.38522 19.9587 6.47502 19.9285 6.55603 19.8813C6.63703 19.8341 6.70753 19.7709 6.76319 19.6954C6.81884 19.62 6.85848 19.534 6.87966 19.4426C6.90084 19.3513 6.90312 19.2566 6.88636 19.1644C6.86959 19.0721 6.83414 18.9843 6.78218 18.9062L4.26507 14.6094C4.1944 14.492 4.14783 14.3617 4.12808 14.2261C4.10832 14.0906 4.11578 13.9524 4.15002 13.8197C4.18426 13.6871 4.24459 13.5626 4.32749 13.4535C4.41039 13.3444 4.5142 13.2529 4.63284 13.1844C4.75149 13.1159 4.8826 13.0717 5.01851 13.0544C5.15443 13.0372 5.29242 13.0471 5.42444 13.0838C5.55645 13.1205 5.67984 13.183 5.78739 13.2679C5.89495 13.3528 5.98451 13.4582 6.05085 13.5781L6.06288 13.5979L7.66819 16.176C7.74701 16.3032 7.86517 16.4012 8.00473 16.4551C8.14429 16.5091 8.29764 16.516 8.4415 16.4749C8.58536 16.4338 8.71188 16.3468 8.80186 16.2273C8.89184 16.1078 8.94036 15.9621 8.94007 15.8125V6.53125C8.94007 6.25775 9.04872 5.99544 9.24211 5.80205C9.43551 5.60865 9.69781 5.5 9.97132 5.5C10.2448 5.5 10.5071 5.60865 10.7005 5.80205C10.8939 5.99544 11.0026 6.25775 11.0026 6.53125V12.375C11.0026 12.5573 11.075 12.7322 11.2039 12.8611C11.3329 12.9901 11.5077 13.0625 11.6901 13.0625C11.8724 13.0625 12.0473 12.9901 12.1762 12.8611C12.3051 12.7322 12.3776 12.5573 12.3776 12.375V11.3438C12.3776 11.0702 12.4862 10.8079 12.6796 10.6145C12.873 10.4211 13.1353 10.3125 13.4088 10.3125C13.6823 10.3125 13.9446 10.4211 14.138 10.6145C14.3314 10.8079 14.4401 11.0702 14.4401 11.3438V13.0625C14.4401 13.2448 14.5125 13.4197 14.6414 13.5486C14.7704 13.6776 14.9452 13.75 15.1276 13.75C15.3099 13.75 15.4848 13.6776 15.6137 13.5486C15.7426 13.4197 15.8151 13.2448 15.8151 13.0625V12.7188C15.8151 12.4452 15.9237 12.1829 16.1171 11.9895C16.3105 11.7962 16.5728 11.6875 16.8463 11.6875C17.1198 11.6875 17.3821 11.7962 17.5755 11.9895C17.7689 12.1829 17.8776 12.4452 17.8776 12.7188V15.8125C17.8776 17.6696 17.2674 18.932 17.2623 18.9423C17.1808 19.1054 17.1675 19.2942 17.2252 19.4671C17.2829 19.64 17.4069 19.7829 17.5699 19.8645C17.6653 19.9127 17.7707 19.9377 17.8776 19.9375C18.0053 19.9376 18.1305 19.9021 18.2392 19.835C18.3479 19.7679 18.4357 19.6719 18.4929 19.5577C18.5247 19.4949 19.2534 18.0108 19.2534 15.8125V12.7188C19.2534 12.4027 19.1912 12.0897 19.0702 11.7977C18.9492 11.5057 18.7719 11.2404 18.5483 11.017C18.3248 10.7935 18.0595 10.6163 17.7674 10.4954C17.4754 10.3745 17.1624 10.3124 16.8463 10.3125Z" fill="white" />
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[277px] h-[254px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[330px] px-2.5 pt-6 pb-12 bg-white rounded-[10px] border border-emerald-800 flex-col justify-start items-start flex">
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-[22px]  font-semibold">Reserva
              </div>
            </div>
            <div className="self-stretch p-[5px] justify-center items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-lg font-normal "><br/>Reserva y contactate con el cuidado pet sitter<br/><br/><br/>
              </div>
            </div>
          </div>
          <div className="p-4 bg-orange-400 rounded-[50px] justify-center items-center gap-2.5 inline-flex relative bottom-6">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-6 h-6 relative"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 1.83398V5.50065M14.6667 1.83398V5.50065M19.25 12.834V5.50065C19.25 5.01442 19.0568 4.54811 18.713 4.20429C18.3692 3.86047 17.9029 3.66732 17.4167 3.66732H4.58333C4.0971 3.66732 3.63079 3.86047 3.28697 4.20429C2.94315 4.54811 2.75 5.01442 2.75 5.50065V18.334C2.75 18.8202 2.94315 19.2865 3.28697 19.6303C3.63079 19.9742 4.0971 20.1673 4.58333 20.1673H11.9167M2.75 9.16732H19.25M14.6667 18.334L16.5 20.1673L20.1667 16.5007" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


              </div>
            </div>
          </div>
        </div>
        <div className="w-[277px] h-[254px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[330px] px-2.5 pt-6 pb-12 bg-white rounded-[10px] border border-color2 flex-col justify-start items-start flex">
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-black text-[22px]  font-semibold">Encuentra el cuidador perfecto
              </div>
            </div>
            <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex ">
              <div className="grow shrink basis-0 text-center text-black text-lg font-normal "><br/>Deja tu mascota en las mejores manos y relajate <br /><br />
              </div>
            </div>
          </div>
          <div className="p-4 bg-color1 rounded-[50px] justify-center items-center gap-2.5 inline-flex relative bottom-6">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-6 h-6 relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-color4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
