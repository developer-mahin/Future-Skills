import { Router } from 'express';
import { postController } from './post.controller';
import validateRequest from '../../../middlewares/validation';
import { postValidation } from './post.validation';
const router = Router();

router.post(
  '/',
  validateRequest(postValidation.createPostValidationSchema),
  postController.createPost,
);

router.get('/', postController.getAllPost);

router.get('/:title', postController.getSinglePost);

export const postRoutes = router;
