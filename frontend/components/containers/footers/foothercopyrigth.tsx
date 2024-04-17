import React from 'react'
import {Copyright} from "@/components/icons/icons"

export default function Foothercopyrigth() {
    return (
        <div className="w-full h-[50px] p-[50px] bg-emerald-800 flex-col justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-xl font-normal font-['Roboto']">2024</div>
                    <Copyright/>
                </div>
                <div className="text-white text-xl font-normal font-['Roboto']">-</div>
                <div className="text-white text-xl font-normal font-['Roboto']">HappyPaws.</div>
                <div className="text-white text-xl font-normal font-['Roboto']">-</div>
                <div className="text-white text-xl font-normal font-['Roboto']">Todos los derechos reservados</div>
            </div>
        </div>
    )
}
