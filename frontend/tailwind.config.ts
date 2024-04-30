import type { Config } from "tailwindcss";

const config: Config = {

  darkMode: ["class"],  //  className=" bg-color1 dark:bg-color2 hover:bg-color3 "

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        roboto:['Roboto'],
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
      },
      fontWeight:{
        'regular':'400',
      },
      backgroundImage: {
        "homeimagen": "url('/pprincipal/imagenprincipal.png')",
        "homeimagen2":"url('/alojamiento/fondo.png')",
        "homeimagen3":"url('/paseo/background.png')",
        "login":"url('/loginregister/iniicio.png')",
        "register":"url('/loginregister/registro.png')",
        "invitacion":"url('/perfil/sercuidador.png')",
      },

      
      colors:{
        color1:"#0A6141",
        color2:"#DF8B3F",
        color3:"#FAFAFA",
        color4:"#FFFFFF",
        color5:"#25C389",
        color6:"#CB6100",
        color7:"#FAFAFA",
        color8:"#FFFFFF80"


      }
    },
  },
  fontFamily: {
    sans: ['Roboto'],

  },
  plugins: [],
};
export default config;
