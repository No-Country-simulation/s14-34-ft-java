'use client'

import React, { useState, ChangeEvent, useEffect } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import { Toaster } from 'sonner';
import Swal from 'sweetalert2';

interface FilterProps {
  onSearch: (filters: Filters) => void;
}

interface Filters {
  lugar: string;
  tipoServicio: string;
  tipoMascota: string;
  fecha: string;
}

const Filter: React.FC<FilterProps> = ({ onSearch }) => {
  const router = useRouter()
  const [filters, setFilters] = useState<Filters>({
    lugar: '',
    tipoServicio: '',
    tipoMascota: '',
    fecha: ''
  });



  const handleInputChange = (selectedOption: any, fieldName: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [fieldName]: selectedOption.value
    }));
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const lugarOptions = [
    { value: 'buenos_aires', label: 'Buenos Aires' },
    { value: 'catamarca', label: 'Catamarca' },
    { value: 'chaco', label: 'Chaco' },
    { value: 'chubut', label: 'Chubut' },
    { value: 'cordoba', label: 'Córdoba' },
    { value: 'corrientes', label: 'Corrientes' },
    { value: 'entre_rios', label: 'Entre Ríos' },
    { value: 'formosa', label: 'Formosa' },
    { value: 'jujuy', label: 'Jujuy' },
    { value: 'la_pampa', label: 'La Pampa' },
    { value: 'la_rioja', label: 'La Rioja' },
    { value: 'mendoza', label: 'Mendoza' },
    { value: 'misiones', label: 'Misiones' },
    { value: 'neuquen', label: 'Neuquén' },
    { value: 'rio_negro', label: 'Río Negro' },
    { value: 'salta', label: 'Salta' },
    { value: 'san_juan', label: 'San Juan' },
    { value: 'san_luis', label: 'San Luis' },
    { value: 'santa_cruz', label: 'Santa Cruz' },
    { value: 'santa_fe', label: 'Santa Fe' },
    { value: 'santiago_del_estero', label: 'Santiago del Estero' },
    { value: 'tierra_del_fuego', label: 'Tierra del Fuego' },
    { value: 'tucuman', label: 'Tucumán' },
  ];

  const tipoServicioOptions = [
    { value: 'paseo', label: 'Paseo' },
    { value: 'alojamiento', label: 'Alojamiento' },
    { value: 'visitas_a_domicilio', label: 'Visitas' },
  ];

  const tipoMascotaOptions = [
    { value: 'DOG', label: 'perro' },
    { value: 'CAT', label: 'gato' },
    { value: 'CHINCHILLA', label: 'chinchilla' },
    { value: 'HAMSTER', label: 'Hamster' },
    { value: 'RABIIT', label: 'Conejo'},
    { value: 'FERRET', label: 'Hurón' },
    { value: 'HEDGEHOGGROUND', label:'Erizo'},
    { value: 'GUINEAPIG', label: 'Conejillo de Indias' },
  ];

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      color: '#6B7280',
      borderColor: 'transparent',
      fontSize: '18px',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: 'orange',
      position: 'absolute',
      right: '-10px',
      top: '50%',
      transform: 'translateY(-180%)', // Centrar verticalmente con respecto al contenedor
      boder: '2',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),
  };

  //alert
  
  function showAlert() {
    Swal.fire({
      background:"#FAFAFA10",
      confirmButtonColor:"#DF8B3F",
      confirmButtonText: ' Por favor, completatodos Todos los Campos',
      
    });
  }

  const handleSearch = () => {

    if (!filters.lugar || !filters.tipoServicio || !filters.tipoMascota || !filters.fecha) {
      //toast('Por favor, completa todos los campos.');
      showAlert();
      return;
    }
    onSearch(filters);
    console.log('Filtros enviados:', filters);

    switch (filters.tipoServicio) {
      case 'paseo':
        router.push(`/search/paseos/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`);
        break;
      case 'alojamiento':
        router.push(`/search/alojamiento/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`); 
        break;
      case 'visitas':
        router.push(`/search/visitas/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`);
        break;
      default:
        router.push('/');
        break;
    }
  };

  return (
    <div className='flex w-[1200px] h-[150px] bg-white rounded-[100px] border border-orange-400 backdrop-blur-[25px]  items-start justify-center bg-opacity-80'>
      <div className="w-[233px] h-[150px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex border-r border-orange-400">
        <div className='text-black text-xl font-semibold'><span>Ubicación</span></div>
        <Select
          options={lugarOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'lugar')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
          className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
        />
      </div>
      <div className="w-[291px] h-[150px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex border-r border-orange-400">
        <div className='text-black text-xl font-semibold'><span>Tipo de Servicio</span></div>
        <Select
          options={tipoServicioOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoServicio')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
          className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
        />
      </div>
      <div className="w-[291px] h-[150px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex border-r border-orange-400">
        <div className='text-black text-xl font-semibold'><span>Tipo de Mascota</span></div>
        <Select
          options={tipoMascotaOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoMascota')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
          className="w-full text-lg text-color2 bg-transparent border-0 border-b-2  appearance-none dark:text-gray-400  focus:outline-none focus:ring-0  peer"
        />
      </div>
      <div className="w-[197px] h-[150px] p-2 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex top-0 border-r border-orange-400">
        <div className='text-black text-xl font-semibold'><span>Fecha</span></div>
        <input type="date" name="fecha" onChange={handleDateChange} className="border-none shadow-none bg-transparent" />
      </div>
      <div className="w-[202px] h-[150px] p-2   rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex">
        <button onClick={handleSearch} className="bg-color2 p-4 rounded-[50px] text-color4 text-xl"><div className="flex gap-2"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </div><div>Buscar</div></div></button>
      </div>
    </div>
  );
};

export default Filter;
