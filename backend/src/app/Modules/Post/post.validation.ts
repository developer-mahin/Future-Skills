import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Post details are required').optional(),
    description: z.string().min(1, 'Post details are required').optional(),
  }),
});

export const postValidation = {
  createPostValidationSchema,
};
