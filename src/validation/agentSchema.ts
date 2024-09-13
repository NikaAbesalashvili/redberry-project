import { z } from "zod";

export const agentSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' }),
    surname: z
        .string()
        .min(2, { message: 'Surname must be at least 2 characters long.' }),
    email: z
        .string()
        .email({ message: 'Invalid email format' })
        .regex(/@redberry\.ge$/, { message: 'Email must end with @redberry.ge' }),
    avatar: z
        .instanceof(File, { message: 'Avatar is required and must be a file' }),
    phone_number: z
        .string()
        .regex(/^5\d{8}$/, { message: 'Phone number must have 5XXXXXXXX format' }),
});

export type Agent = z.infer<typeof agentSchema>;
