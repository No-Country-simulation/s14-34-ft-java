'use client'

import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";
import Filter from "@/components/cards/filter";
import Addpet from "@/components/forms/addpet";
import EditUser from "@/components/forms/editUser";



const handleSearch = (filters:any) => {
  // Aquí puedes manejar la lógica para realizar la búsqueda utilizando los filtros
  console.log('Filtros aplicados:', filters);
};

export default function Home() {
  return (
    <div>
      <HeadersOne />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
      <Filter onSearch={handleSearch} />
      <Addpet/>
      <EditUser />
      </main>
      <FootersOne />
    </div>
  );
}


{/* 
<p className="font-roboto text-18 font-normal">Texto de tamaño 18px con Roboto Regular</p>
<p className="font-roboto text-20 font-normal">Texto de tamaño 20px con Roboto Regular</p>
<p className="font-roboto text-24 font-normal">Texto de tamaño 24px con Roboto Regular</p>
<p className="font-roboto text-28 font-normal">Texto de tamaño 28px con Roboto Regular</p>
<p className="font-roboto text-14 font-normal">Texto de tamaño 14px con Roboto Regular</p>
<p className="font-roboto text-16 font-normal">Texto de tamaño 16px con Roboto Regular</p>
<p className="font-roboto text-18 font-normal">Texto de tamaño 18px con Roboto Regular</p>
<p className="font-roboto text-20 font-normal">Texto de tamaño 20px con Roboto Regular</p> 
*/}