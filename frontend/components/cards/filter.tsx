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
    { value: 'Buenos Aires', label: 'Buenos Aires' },
    { value: 'Catamarca', label: 'Catamarca' },
    { value: 'Chaco', label: 'Chaco' },
    { value: 'Chubut', label: 'Chubut' },
    { value: 'Córdoba', label: 'Córdoba' },
    { value: 'Corrientes', label: 'Corrientes' },
    { value: 'Entre Ríos', label: 'Entre Ríos' },
    { value: 'Formosa', label: 'Formosa' },
    { value: 'Jujuy', label: 'Jujuy' },
    { value: 'La Pampa', label: 'La Pampa' },
    { value: 'La Rioja', label: 'La Rioja' },
    { value: 'Mendoza', label: 'Mendoza' },
    { value: 'Misiones', label: 'Misiones' },
    { value: 'Neuquén', label: 'Neuquén' },
    { value: 'Río Negro', label: 'Río Negro' },
    { value: 'Salta', label: 'Salta' },
    { value: 'San Juan', label: 'San Juan' },
    { value: 'San Luis', label: 'San Luis' },
    { value: 'Santa Cruz', label: 'Santa Cruz' },
    { value: 'Santa Fe', label: 'Santa Fe' },
    { value: 'Santiago del Estero', label: 'Santiago del Estero' },
    { value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
    { value: 'Tucumán', label: 'Tucumán' }
  ];

  const tipoServicioOptions = [
    { value: 'paseo', label: 'paseo' },
    { value: 'alojamiento', label: 'alojamiento' },
    { value: 'visitas a domicilio', label: 'visitas a domicilio' },
  ];

  const tipoMascotaOptions = [
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
    { value: 'otro', label: 'Pato' },
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
