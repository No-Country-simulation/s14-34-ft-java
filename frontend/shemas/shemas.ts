import {z} from "zod"

// Register 

export const RegisterShema = z.object({
    name:z
    .string()
    .min(3,{message:"Name must have at least three characters"}),
    lastname:z
    .string()
    .min(3,{message:"Last name must have at least three characters"}),
    email:z
    .string()
    .email({ message: "Enter a valid email address" }),
    phone:z.object({
        countryCode:z.string(),
        number: z.string().min(9,{message:"Phone number must have at least 9 characters"}),
    }),
    password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" }),
    confirmPassword: z
    .string()
    .min(6, { message: "It is recommended that the password have at least 6 characters"}),
})
.refine((data)=> data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path:["confirmPassword"],
})


export const LoginShema = z.object({
    email:z
    .string()
    .email({ message: "Enter a valid email" }),
    password: z
    .string()
    .min(6, { message: "Enter your password" }),
})