import Nav from "@/components/containers/navs/nav";
import Link from "next/link";
import Image from "next/image";

/// frontend/public/logo/1_Isotipo Color.svg
export default function HeadersOne() {
    return (

        <div className='flex w-full h-[100px] px-[50px] bg-white shadow-md justify-between items-center fixed top-0 z-50'>
            <div className="w-[350px] h-[60px] py-4 justify-center items-center inline-flex">
            <Image src="/logo/2_Imagotipo Color.svg" alt="log" width={350} height={60}/>
            </div>
            <div className="p-2.5">
                <Link href="/#nosotros" className="hover:text-color2 text-xl font-normal  text-20"> <p>Nosotros</p></Link>
            </div>
            <div className="p-2.5">
                <Link href="/#servicios" className="hover:text-color2 text-xl font-normal  text-20">Servicios</Link>
            </div>
            <div className="p-2.5">
                <Link href="/#contacto" className="hover:text-color2 text-xl font-normal  text-20"> Contacto</Link>
            </div>
            <div className="px-50">
                <Nav />
            </div>
        </div>
    )
}
