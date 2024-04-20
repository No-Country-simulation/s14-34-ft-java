'use client'
// import Select from 'react-select';
// import React, { useState, ChangeEvent, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Swal from 'sweetalert2';



//   interface Filters {
//     tipoalojamiento: string;
//     personacon: string;
//     rangoetario: string;
//     tienemascota: string;
//   }

//   const Filter: React.FC<FilterProps> = ({ onSearch }) => {
//     const router = useRouter()
//     const [filters, setFilters] = useState<Filters>({
//       tipoalojamiento: '',
//       personacon: '',
//       rangoetario: '',
//       tienemascota: ''
//     });

//     const handleInputChange = (selectedOption: any, fieldName: string) => {
//       setFilters(prevFilters => ({
//         ...prevFilters,
//         [fieldName]: selectedOption.value
//       }));
//     };

//     const tipodealojamientoOptions = [
//       { value: 'Casa', label: 'Casa' },
//       { value: 'Apartamento', label: 'Apartamento' },
//       { value: 'Chalet', label: 'Chalet' },
//       { value: 'Piso', label: 'Piso' },
//       { value: 'Cabaña', label: 'Cabaña' },
//       { value: 'Granja', label: 'Granja' },
//       { value: 'Hotel para mascotas', label: 'Hotel para mascotas' },
//       { value: 'Residencia canina', label: 'Residencia canina' },
//       { value: 'Guardería de mascotas', label: 'Guardería de mascotas' },
//       { value: 'Otros', label: 'Otros' },
//     ];

//     const personaconOptions = [
//       { value: 'Solo', label: 'Solo' },
//       { value: 'Con familia', label: 'Con familia' },
//       { value: 'Con compañeros de piso', label: 'Con compañeros de piso' },
//       { value: 'Con pareja', label: 'Con pareja' },
//       { value: 'En una residencia estudiantil', label: 'En una residencia estudiantil' },
//       { value: 'En un hogar de ancianos', label: 'En un hogar de ancianos' },
//       { value: 'En una comunidad de retiro', label: 'En una comunidad de retiro' },
//       { value: 'En una casa de cuidado', label: 'En una casa de cuidado' },
//       { value: 'En un refugio', label: 'En un refugio' },
//       { value: 'Sin hogar', label: 'Sin hogar' },
//     ];

//     const rangoetarioOptions = [
//       { value: 'Cachorro (0-1 año)', label: 'Cachorro (0-1 año)' },
//       { value: 'Joven (1-3 años)', label: 'Joven (1-3 años)' },
//       { value: 'Adulto (3-7 años)', label: 'Adulto (3-7 años)' },
//       { value: 'Adulto mayor (7+ años)', label: 'Adulto mayor (7+ años)' },
//     ];

//     const tienemascotaOptions = [
//       { value: 'Si', label: 'Sí' },
//       { value: 'No', label: 'No' },
//     ];

//     const Filteralojamiento: React.FC = () => {
//       const router = useRouter();

//   // filtro 2

//   interface FilterProps {
//     onSearch: (filters: Filters) => void;
//   }





//     const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = event.target;
//       setFilters(prevFilters => ({
//         ...prevFilters,
//         [name]: value
//       }));
//     };



//     //alert

//     function showAlert() {
//       Swal.fire({
//         background: "#FAFAFA10",
//         confirmButtonColor: "#DF8B3F",
//         confirmButtonText: ' Por favor, completatodos Todos los Campos',

//       });
//     }

//     const handleSearch = () => {

//     };

//     //end filtro 2
//   }
//     return (
//       <div>
//         <div><h1 className="text-[28px] text-right font-semibold mb-10 bg-color7 pr-20">Alojamiento </h1></div>
//         <div className="flex justify-center mb-20 mt-10">

//           <div className="w-[1200px] h-[364px] p-[60px] bg-white rounded-2xl shadow border border-orange-400 flex-col justify-start items-start gap-[50px] inline-flex">
//             <div className="self-stretch justify-start items-start gap-20 inline-flex">
//               <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
//                 <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Tipo de alojamiento</div>
//                   <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
//                     <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
//                       <Select
//                         options={tipodealojamientoOptions}
//                         onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoalojamiento')}
//                         placeholder="Seleccionar"
//                       // styles={customSelectStyles}
//                       //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
//                       />
//                     </div>
//                     <div className="w-6 h-6 relative"></div>
//                   </div>
//                 </div>
//                 <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Rango etario</div>
//                   <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
//                     <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
//                       <Select
//                         options={rangoetarioOptions}
//                         onChange={(selectedOption) => handleInputChange(selectedOption, 'rangoetario')}
//                         placeholder="Seleccionar"
//                       // styles={customSelectStyles}
//                       //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
//                       />
//                     </div>
//                     <div className="w-6 h-6 relative"></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
//                 <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Personas con las que vive</div>
//                   <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
//                     <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
//                       <Select
//                         options={personaconOptions}
//                         onChange={(selectedOption) => handleInputChange(selectedOption, 'personacon')}
//                         placeholder="Seleccionar"
//                       // styles={customSelectStyles}
//                       //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
//                       />
//                     </div>
//                     <div className="w-6 h-6 relative"></div>
//                   </div>
//                 </div>
//                 <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
//                   <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Tiene mascota</div>
//                   <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
//                     <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
//                       <Select
//                         options={tienemascotaOptions}
//                         onChange={(selectedOption) => handleInputChange(selectedOption, 'tienemascota')}
//                         placeholder="Seleccionar"
//                       // styles={customSelectStyles}
//                       //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
//                       />
//                     </div>
//                     <div className="w-6 h-6 relative"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }


import Select from 'react-select';
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface Filters {
  tipoalojamiento: string;
  personacon: string;
  rangoetario: string;
  tienemascota: string;
}

const Filteralojamiento: React.FC = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    tipoalojamiento: '',
    personacon: '',
    rangoetario: '',
    tienemascota: ''
  });

  const handleInputChange = (selectedOption: any, fieldName: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [fieldName]: selectedOption.value
    }));
  };

  const tipodealojamientoOptions = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Apartamento', label: 'Apartamento' },
    { value: 'Chalet', label: 'Chalet' },
    { value: 'Piso', label: 'Piso' },
    { value: 'Cabaña', label: 'Cabaña' },
    { value: 'Granja', label: 'Granja' },
    { value: 'Hotel para mascotas', label: 'Hotel para mascotas' },
    { value: 'Residencia canina', label: 'Residencia canina' },
    { value: 'Guardería de mascotas', label: 'Guardería de mascotas' },
    { value: 'Otros', label: 'Otros' },
  ];

  const personaconOptions = [
    { value: 'Solo', label: 'Solo' },
    { value: 'Con familia', label: 'Con familia' },
    { value: 'Con compañeros de piso', label: 'Con compañeros de piso' },
    { value: 'Con pareja', label: 'Con pareja' },
    { value: 'En una residencia estudiantil', label: 'En una residencia estudiantil' },
    { value: 'En un hogar de ancianos', label: 'En un hogar de ancianos' },
    { value: 'En una comunidad de retiro', label: 'En una comunidad de retiro' },
    { value: 'En una casa de cuidado', label: 'En una casa de cuidado' },
  ];

  const rangoetarioOptions = [
    { value: 'Cachorro (0-1 año)', label: 'Cachorro (0-1 año)' },
    { value: 'Joven (1-3 años)', label: 'Joven (1-3 años)' },
    { value: 'Adulto (3-7 años)', label: 'Adulto (3-7 años)' },
    { value: 'Adulto mayor (7+ años)', label: 'Adulto mayor (7+ años)' },
  ];

  const tienemascotaOptions = [
    { value: 'Si', label: 'Sí' },
    { value: 'No', label: 'No' },
  ];

  const handleSearch = () => {
    // Lógica de búsqueda
  };

  return (
      <div>
        <div><h1 className="text-[28px] text-right font-semibold mb-10 bg-color7 pr-20">Alojamiento </h1></div>
        <div className="flex justify-center mb-20 mt-10">

          <div className="w-[1200px] h-[364px] p-[60px] bg-white rounded-2xl shadow border border-orange-400 flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
                <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Tipo de alojamiento</div>
                  <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
                      <Select
                        options={tipodealojamientoOptions}
                        onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoalojamiento')}
                        placeholder="Seleccionar"
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: 'none',
                            borderBottom: '2px solid transparent', // Borde inferior transparente
                            boxShadow: 'none',
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: 'orange',
                            marginLeft: '-10px', // Mueve la flecha un poco a la izquierda
                          }),
                          indicatorSeparator: (provided: any) => ({
                            ...provided,
                            display: 'none',
                          }),
                        }}
                      //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
                      />
                    </div>
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
                <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Rango etario</div>
                  <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
                      <Select
                        options={rangoetarioOptions}
                        onChange={(selectedOption) => handleInputChange(selectedOption, 'rangoetario')}
                        placeholder="Seleccionar"
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: 'none',
                            borderBottom: '2px solid transparent', // Borde inferior transparente
                            boxShadow: 'none',
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: 'orange',
                            marginLeft: '-10px', // Mueve la flecha un poco a la izquierda
                          }),
                          indicatorSeparator: (provided: any) => ({
                            ...provided,
                            display: 'none',
                          }),
                        }}
                      // styles={customSelectStyles}
                      //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
                      />
                    </div>
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
                <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Personas con las que vive</div>
                  <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
                      <Select
                        options={personaconOptions}
                        onChange={(selectedOption) => handleInputChange(selectedOption, 'personacon')}
                        placeholder="Seleccionar"
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: 'none',
                            borderBottom: '2px solid transparent', // Borde inferior transparente
                            boxShadow: 'none',
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: 'orange',
                            marginLeft: '-10px', // Mueve la flecha un poco a la izquierda
                          }),
                          indicatorSeparator: (provided: any) => ({
                            ...provided,
                            display: 'none',
                          }),
                        }}
                      // styles={customSelectStyles}
                      //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
                      />
                    </div>
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
                <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[26px] text-black text-[22px] font-medium font-['Roboto']">Tiene mascota</div>
                  <div className="self-stretch px-4 py-3 rounded-xl border border-orange-400 justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch text-black text-lg font-normal font-['Roboto']">
                      <Select
                        options={tienemascotaOptions}
                        onChange={(selectedOption) => handleInputChange(selectedOption, 'tienemascota')}
                        placeholder="Seleccionar"
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: 'none',
                            borderBottom: '2px solid transparent', // Borde inferior transparente
                            boxShadow: 'none',
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: 'orange',
                            marginLeft: '-10px', // Mueve la flecha un poco a la izquierda
                          }),
                          indicatorSeparator: (provided: any) => ({
                            ...provided,
                            display: 'none',
                          }),
                        }}
                      // styles={customSelectStyles}
                      //className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
                      />
                    </div>
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Filteralojamiento;
