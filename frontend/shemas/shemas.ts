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



export const EditUserSchema = z.object({
    nombre: z.string().optional(),
    apellido: z.string().optional(),
    direccion: z.string().optional(),
    email: z.string().optional(),
    telefono: z.string().optional(),
    dni: z.string().optional(),
    localizacion: z.string().optional(),
    provincia: z.string().optional(),
    postal: z.number().optional(),
});


export const RegisterPetSchema = z.object({
    nombre: z.string().optional(),
    breed: z.string().optional(),
    color: z.string().optional(),
    edad: z.string().optional(),
    tamanio: z.string().optional(),
    comportamiento: z.string().optional(),
    salud: z.string().optional(),
    ubicacion: z.string().optional(),
    vacuna: z.boolean().optional(),
    esterilizado: z.boolean().optional(),
    descripcionGeneral: z.string().max(300, {message: "maximo te caracter es de 300"}).optional(),
});


