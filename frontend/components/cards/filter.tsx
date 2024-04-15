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
    { value: 'Ejemplo casa', label: 'Ejemplo casa' },
    { value: 'lugar2', label: 'Ejemplo pais lo que sea Chile' },
    { value: 'lugar3', label: 'Colombia' },
    { value: 'lugar4', label: 'Venezuela' },
    { value: 'lugar5', label: 'Panama' },
    { value: 'lugar6', label: 'Peru' },
    { value: 'lugar7', label: 'Colombia' },
  ];

  const tipoServicioOptions = [
    { value: 'servicio1', label: 'Cuidar mascota en domicilio' },
    { value: 'servicio2', label: 'Alojamiento' },
    { value: 'servicio3', label: 'Paseos' },
  ];

  const tipoMascotaOptions = [
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
    { value: 'otro', label: 'Pato' },
  ];

  return (
    <div className='p-2'>
      <div className='flex flex-row gap-2 border-2 border-color2 p-2'>
        <div>
          <div className='text-center'><span>Ubicacion</span></div>
          <Select
            options={lugarOptions}
            onChange={(selectedOption) => handleInputChange(selectedOption, 'lugar')}
            placeholder="Seleccionar"
          />
        </div>
        <div>
          <div className='text-center'><span>Tipo de Servicio</span></div>
          <Select
            options={tipoServicioOptions}
            onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoServicio')}
            placeholder="Seleccionar"
          />
        </div>
        <div>
          <div className='text-center'><span>Tipo de Mascota</span></div>
          <Select
            options={tipoMascotaOptions}
            onChange={(selectedOption) => handleInputChange(selectedOption, 'tipoMascota')}
            placeholder="Seleccionar"
          />
        </div>
        <div>
          <div className='text-center'><span>Fecha</span></div>
          <input type="date" name="fecha" onChange={handleDateChange} />
        </div>
        <div>
          <button onClick={handleSearch} className="p-2">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
