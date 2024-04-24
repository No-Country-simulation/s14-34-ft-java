import React from 'react'
import { Copyright } from "@/components/icons/icons"

export default function Foothercopyrigth() {
    return (
        <div className="w-full h-[50px] p-[50px] bg-emerald-800 flex-col justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-xl font-normal ">2024</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A6141" xmlns="http://www.w3.org/2000/svg">
                        <g id="ic:baseline-copyright">
                            <path id="Vector" d="M11.88 9.14C13.16 9.2 13.49 10.29 13.51 10.8H15.3C15.22 8.82 13.81 7.61 11.85 7.61C9.64 7.61 8 9 8 12.14C8 14.08 8.93 16.38 11.84 16.38C14.06 16.38 15.25 14.73 15.28 13.43H13.49C13.46 14.02 13.04 14.81 11.86 14.87C10.55 14.83 10 13.81 10 12.14C10 9.25 11.28 9.16 11.88 9.14ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#FFFFFF" />
                        </g>
                    </svg>
                </div>
                <div className="text-white text-xl font-normal ">-</div>
                <div className="text-white text-xl font-normal ">HappyPaws.</div>
                <div className="text-white text-xl font-normal ">-</div>
                <div className="text-white text-xl font-normal ">Todos los derechos reservados</div>
            </div>
        </div>
    )
}
