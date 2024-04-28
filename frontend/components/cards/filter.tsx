"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";
import Swal from "sweetalert2";

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
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    lugar: "",
    tipoServicio: "",
    tipoMascota: "",
    fecha: "",
  });

  const handleInputChange = (selectedOption: any, fieldName: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [fieldName]: selectedOption.value,
    }));
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const lugarOptions = [
    { value: "buenos_aires", label: "Buenos Aires" },
    { value: "catamarca", label: "Catamarca" },
    { value: "chaco", label: "Chaco" },
    { value: "chubut", label: "Chubut" },
    { value: "cordoba", label: "Córdoba" },
    { value: "corrientes", label: "Corrientes" },
    { value: "entre_rios", label: "Entre Ríos" },
    { value: "formosa", label: "Formosa" },
    { value: "jujuy", label: "Jujuy" },
    { value: "la_pampa", label: "La Pampa" },
    { value: "la_rioja", label: "La Rioja" },
    { value: "mendoza", label: "Mendoza" },
    { value: "misiones", label: "Misiones" },
    { value: "neuquen", label: "Neuquén" },
    { value: "rio_negro", label: "Río Negro" },
    { value: "salta", label: "Salta" },
    { value: "san_juan", label: "San Juan" },
    { value: "san_luis", label: "San Luis" },
    { value: "santa_cruz", label: "Santa Cruz" },
    { value: "santa_fe", label: "Santa Fe" },
    { value: "santiago_del_estero", label: "Santiago del Estero" },
    { value: "tierra_del_fuego", label: "Tierra del Fuego" },
    { value: "tucuman", label: "Tucumán" },
  ];

  const tipoServicioOptions = [
    { value: "paseo", label: "Paseo" },
    { value: "alojamiento", label: "Alojamiento" },
    { value: "visitas_a_domicilio", label: "Visitas" },
  ];

  const tipoMascotaOptions = [
    { value: "DOG", label: "perro" },
    { value: "CAT", label: "gato" },
    { value: "CHINCHILLA", label: "chinchilla" },
    { value: "HAMSTER", label: "Hamster" },
    { value: "RABIIT", label: "Conejo" },
    { value: "FERRET", label: "Hurón" },
    { value: "HEDGEHOGGROUND", label: "Erizo" },
    { value: "GUINEAPIG", label: "Conejillo de Indias" },
  ];

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      background: "transparent",
      color: "#6B7280",
      borderColor: "transparent",
      fontSize: "18px",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "orange",
      position: "absolute",
      right: "-10px",
      top: "50%",
      transform: "translateY(-180%)", // Centrar verticalmente con respecto al contenedor
      boder: "2",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
  };

  //alert

  function showAlert() {
    Swal.fire({
      background: "#FAFAFA10",
      confirmButtonColor: "#DF8B3F",
      confirmButtonText: " Por favor, completatodos Todos los Campos",
    });
  }

  const handleSearch = () => {
    if (
      !filters.lugar ||
      !filters.tipoServicio ||
      !filters.tipoMascota ||
      !filters.fecha
    ) {
      //toast('Por favor, completa todos los campos.');
      showAlert();
      return;
    }
    onSearch(filters);
    console.log("Filtros enviados:", filters);

    switch (filters.tipoServicio) {
      case "paseo":
        router.push(
          `/search/paseos/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`
        );
        break;
      case "alojamiento":
        router.push(
          `/search/alojamiento/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`
        );
        break;
      case "visitas":
        router.push(
          `/search/visitas/${filters.lugar}/${filters.fecha}/${filters.tipoMascota}`
        );
        break;
      default:
        router.push("/");
        break;
    }
  };


  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "white", // Fondo blanco
      border: "2px solid orange", // Borde naranja
      borderRadius: "10px", // Bordes redondeados
      width: "194.50px", // Ancho específico
      height: "45px", // Altura específica
      // Aplicando bordes redondeados grandes
      //borderRadius: "xl",
      // w-[194.50px] h-12
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none", // Ocultar separador de indicadores
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "orange", // Color de la flecha naranja
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "white", // Fondo blanco
      border: "2px solid orange", // Borde naranja
      //borderRadius: "4px", // Bordes redondeados
      // Aplicando bordes redondeados grandes
      borderRadius: "xl",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "orange" : "white", // Fondo naranja si está seleccionado
      color: state.isSelected ? "white" : "black", // Texto blanco si está seleccionado
      "&:hover": {
        backgroundColor: "orange", // Fondo naranja al pasar el ratón
        color: "white", // Texto blanco al pasar el ratón
      },
    }),
  };

  return (
    <div className="bg-opacity-90 rounded-xl shadow border w-[529px] h-[328px] p-[30px] bg-white border-orange-400 backdrop-blur-[25px] justify-start items-center gap-10 m-[30px]">
      <div className="grid grid-rows-3 grid-cols-2 p-30">
        {/* Fila 1 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="w-[194.50px] h-[26px] text-black text-xl font-medium">
              Ubicación
            </span>
            <Select
              options={lugarOptions}
              onChange={(selectedOption) =>
                handleInputChange(selectedOption, "lugar")
              }
              placeholder="Seleccionar"
              //styles={}
              styles={customStyles}
            />
          </div>
          <div>
            <span className="w-[194.50px] h-[26px] text-black text-xl font-medium">
              Tipo de Servicio
            </span>
            <Select
              options={tipoServicioOptions}
              onChange={(selectedOption) =>
                handleInputChange(selectedOption, "tipoServicio")
              }
              placeholder="Seleccionar"
              //styles={}
              styles={customStyles}
              className=""
            />
          </div>
        </div>
        {/* Fila 2 */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="w-[194.50px] h-[26px] text-black text-xl font-medium">
              Tipo de Mascota
            </span>
            <Select
              options={tipoMascotaOptions}
              onChange={(selectedOption) =>
                handleInputChange(selectedOption, "tipoMascota")
              }
              placeholder="Seleccionar"
              //styles={}
              styles={customStyles}
              className=""
            />
          </div>
          <div>
            <span className="w-[194.50px] h-[26px] text-black text-xl font-medium">
              Fecha
            </span>
            <br />
            <input
              type="date"
              name="fecha"
              onChange={handleDateChange}
              className="appearance-none bg-white border-2 border-orange-300 rounded-xl py-2 px-4 text-black leading-tight focus:outline-none focus:border-orange-700 w-[194.50px] h-12"
            />
          </div>
        </div>
        {/* Fila 3 */}
        <div className="mt-10">
          <button
            onClick={handleSearch}
            className="flex  col-span-2 justify-center w-[469px] h-14 px-6 py-4 bg-orange-400 rounded-2xl items-center gap-2.5 text-white text-xl font-medium hover:bg-orange-300"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span>Buscar</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
