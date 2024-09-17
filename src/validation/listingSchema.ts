import { z } from "zod";
import { MAX_FILE_SIZE } from "../constants";

export const listingSchema = z.object({
    address: z
        .string()
        .min(2, { message: 'Message shoult contain at least 2 symbols' }),
    image: z
        .instanceof(File, { message: 'Image is required and it should be file' })
        .refine((file) => file.size <= MAX_FILE_SIZE, { message: 'File is too large, it must be less than 1MB' })
        .optional(),
    region_id: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
    description: z
        .string()
        .refine((description) => description.split(' ').filter((word) => word.length > 0).length > 4, { message: 'Description should be at least 5 words' }),
    city_id: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
    zip_code: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
    price: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
    area: z
        .number({ invalid_type_error: 'Value must be number' }),
    bedrooms: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
    is_rental: z
        .number()
        .int({ message: 'Is rental should be whole number' })
        .refine((value) => value === 1 || value === 0, { message: 'Is rental should be true or false' }),
    agent_id: z
        .number({ invalid_type_error: 'Value must be number' })
        .int({ message: 'Number should be whole number' }),
});

export type Listing = z.infer<typeof listingSchema>;
