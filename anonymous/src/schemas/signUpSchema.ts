import {z} from 'zod';


export const usernameValidation = z.string().min(2,'Username must be atleast 2 characters').max(20,"Username must be atmost 20 characters").regex(/^[a-zA-Z0-9]+$/, "Username must not contain any special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(5,{message: "Password must be atleast 5 characters"}).max(12,{message: "Password must be atmost 12 characters"}),

})
