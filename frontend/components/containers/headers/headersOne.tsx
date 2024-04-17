
import Nav from "@/components/containers/navs/nav";
import Link from "next/link";


export default function HeadersOne() {
    return (
        <div className='flex w-full h-[100px] px-[50px] bg-white shadow-md justify-between items-center'>
            <div className="w-[350px] h-[60px] py-4 bg-white rounded-[50px] border border-black justify-center items-center inline-flex">
                <p className="p-16">Logo</p>
            </div>
            <div className="p-2.5">
                <Link href="#" className="hover:text-color2 text-xl font-normal  text-20"> <p>Nosotros</p></Link>
            </div>
            <div className="p-2.5">
                <Link href="#" className="hover:text-color2 text-xl font-normal  text-20">Servicios</Link>
            </div>
            <div className="p-2.5">
                <Link href="#" className="hover:text-color2 text-xl font-normal  text-20"> Contacto</Link>
            </div>
            <div className="px-50">
                <Nav />
            </div>
        </div>
    )
}
