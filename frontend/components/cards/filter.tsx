'use client'

import React, { useState, ChangeEvent } from 'react';
import Select from 'react-select';

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

  const handleSearch = () => {
    onSearch(filters);
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
    { value: 'visitas_a_domicilio', label: 'Visitas a domicilio' },
  ];

  const tipoMascotaOptions = [
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
    { value: 'conejo', label: 'Conejo' },
    { value: 'cobayo', label: 'Cobayo' },
    { value: 'huron', label: 'Huron' }, 
    { value: 'hamster', label: 'Hamster' }, 
    { value: 'chinchilla', label: 'Chinchilla' }, 
    { value: 'erizo', label: 'Erizo' }, 
    { value: 'ave', label: 'Ave' }, 
    { value: 'reptil', label: 'Reptil' }, 
  ];

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      background: 'transparent', 
      color: '#6B7280', 
      borderColor: 'transparent', 
    }),
  };

  return (
    <div className='flex w-[1200px] h-[100px] bg-white bg-opacity-90 rounded-[100px] border border-orange-400 backdrop-blur-[25px]  items-start justify-center'>
      <div className="w-[233px] h-[100px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex">
        <div className='text-black text-xl font-medium'><span>Ubicacion</span></div>
        <Select
          options={lugarOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'lugar')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
        />
      </div>
      <div className="w-[291px] h-[100px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex">
        <div className='text-black text-xl font-medium'><span>Tipo de Servicio</span></div>
        <Select
          options={tipoServicioOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoServicio')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
        />
      </div>
      <div className="w-[291px] h-[100px] p-6 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex">
        <div className='text-black text-xl font-medium'><span>Tipo de Mascota</span></div>
        <Select
          options={tipoMascotaOptions}
          onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoMascota')}
          placeholder="Seleccionar"
          styles={customSelectStyles}
        />
      </div>
      <div className="w-[197px] h-[100px] p-2 rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex top-0">
        <div className='text-black text-xl font-medium'><span>Fecha</span></div>
        <input type="date" name="fecha" onChange={handleDateChange} className="border-none shadow-none bg-transparent"/>
      </div>
      <div className="w-[202px] h-[100px] p-2   rounded-tl-[100px] rounded-bl-[100px]  flex-col justify-center items-center gap-4 inline-flex">
        <button onClick={handleSearch} className="bg-color2 p-2 rounded-[50px] text-color4"><div className="flex gap-2"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </div><div>Buscar</div></div></button>
      </div>
    </div>
  );
};

export default Filter;
