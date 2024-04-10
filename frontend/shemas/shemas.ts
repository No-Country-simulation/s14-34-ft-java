import {z} from "zod"

// Register 

export const RegisterSchema = z.object({
    fullName: z.string().min(6, { message: "Enter Full Name, firstName and lastName" }),
    agreeTerms: z.boolean(),
    email: z.string().email({ message: "Enter a valid email address" }),
    password: z.string().min(6, { message: "Password must have at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "It is recommended that the password have at least 6 characters" }),
})

.refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

.refine(data => data.agreeTerms === true, {
    message: "You must agree to the terms and conditions",
    path: ['agreeTerms'],
});

export const LoginShema = z.object({
    email:z
    .string()
    .email({ message: "Enter a valid email" }),
    password: z
    .string()
    .min(6, { message: "Enter your password" }),
})