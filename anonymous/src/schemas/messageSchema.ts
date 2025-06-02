import {z} from 'zod'


export const messageSchema = z.object({
    content: z.string().min(10,{message: "Content must be atleast 10 length"}).max(300,{message: "Content must be atmost 300 length"})
})