import React from "react";
import Filter from "@/components/cards/filter";

export default function Welcome() {
  const handleSearch = (filters: any) => {
    console.log("Filtros aplicados:", filters);
  };
  return (
    <div className="h-[1055px] w-full relative bg-cover bg-homeimagen bg-no-repeat bg-center flex-shrink-0  filter drop-shadow-[0px 2px 8px rgba(0, 0, 0, 0.25)] z-0">
      <div className="absolute   text-white px-2 top-[104px] right-24">
        <p
          className="text-white
text-[58px]
font-bold"
        >
          <span>Tu compañero feliz,</span>
          <br />
          <span className="ml-0">siempre cuidado</span>
        </p>
      </div>
      <div
        className="absolute text-4xl font-medium text-white px-2 right-28 top-[316px]"
      >
        <p className="">
          <span>Donde el amor y la atención se</span>
          <br />
          <span>unen para el bienestar de tu</span>
          <br />
          <span>mascota</span>
        </p>
      </div>
      <div className="absolute z-20 bg-transparent bottom-52 right-[120px] left-[691px] top-[489px]">
        <Filter onSearch={handleSearch} />
      </div>
    </div>
  );
}
