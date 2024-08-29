import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
    id: z.string().min(1, 'Post details are required'),
    title: z.string().min(1, 'Post details are required'),
    description: z.string().min(1, 'Post details are required'),
  }),
});

export const postValidation = {
  createPostValidationSchema,
};
