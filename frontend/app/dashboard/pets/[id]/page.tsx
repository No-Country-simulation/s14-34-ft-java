'use client';

import Link from "next/link";
import Image from "next/image";


export default function MascotaId({params}: {params: {id:string}}) { 
    console.log(params.id)

    return (
        <div>
            <h1> Mascota Numero : {params.id}</h1>
        </div>
    )
}