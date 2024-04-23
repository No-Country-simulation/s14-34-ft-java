'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

interface CardMascotasProps {
    id: number;
    foto: string;
    nombre: string;
}

export default function CardMascotas({id, foto, nombre}:{id:string, foto:string, nombre:string}){

    return (
        <div className="card">
            <div className="card-content">
                <div className="image-container">
                    <Image className="image" src={foto} alt={nombre} width={20} height={30} />
                </div>
                <div className="name">{nombre}</div>
            </div>
            <div className="view-more">
                <Link href={`/ruta/${id}`}>
                    Ver más
                </Link>
            </div>
        </div>
    )
}

