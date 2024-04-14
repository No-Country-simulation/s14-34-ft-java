import {z} from "zod"

// Register 

export const RegisterSchema = z.object({
    nombrecompleto: z.string().min(6, { message: "Ingrese su Nombre y apellodio" }),
    terminos: z.boolean(),
    email: z.string().email({ message: "Ingrese un email Valido" }),
    password: z.string().min(6, { message: "Password debe tener 6 caracteres como minimo" }),
    confirmPassword: z.string().min(6, { message: "Este campo es requerido" }),
})

.refine(data => data.password === data.confirmPassword, {
    message: "Passwords no coiciden",
    path: ["confirmPassword"],
})

.refine(data => data.terminos === true, {
    message: "Debes aceptar Terminos y Condiciones",
    path: ['terminos'],
});

export const LoginShema = z.object({
    email:z
    .string()
    .email({ message: "Ingrese un Email Valido" }),
    password: z
    .string()
    .min(6, { message: "Error al ingresar el Email" }),
})


export const EditUserShema = z.object({
    nombre: z.string().min(3, { message: "El nombre debe tener al menos tres caracteres" }).optional(),
    apellido: z.string().min(3, { message: "El apellido debe tener al menos tres caracteres" }).optional(),
    direccion: z.string().optional(), 
    email: z.string().email({ message: "Ingrese un email Valido" }).optional(),
    telefono: z.string().optional(), 
    dni: z.string().min(7).max(9).optional(), 
  });


  export const RegisterPetSchema = z.object({
    tipo: z.string().min(3, { message: "El tipo de mascota debe tener mínimo 3 caracteres" }),
    nombre: z.string().min(1, { message: "El nombre de la mascota debe tener como mínimo una letra o número" }),
    breed: z.string(),
    color: z.string(),
    edad: z.string(),
    tamanio: z.string(),
    comportamiento: z.string(),
    salud: z.string(),
    ubicacion: z.string(),
    vacuna: z.boolean(),
    esterilizado: z.boolean(),
    descripcionGeneral: z.string().max(300, {message: "maximo te caracter es de 300"})
});