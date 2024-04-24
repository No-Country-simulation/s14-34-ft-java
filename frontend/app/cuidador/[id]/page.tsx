'use client';

import Link from "next/link";
import Image from "next/image";


export default function CuidadorId({params}: {params: {id:string}}) { 


    console.log(params.id)

    return (
        <div>
            <h1> Cuidador Numero : {params.id}</h1>
        </div>
    )
}