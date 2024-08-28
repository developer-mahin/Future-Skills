import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { postService } from './post.service';

const createPost = catchAsync(async (req, res) => {
  const result = await postService.createPostIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Post created successful',
    data: result,
  });
});

const getAllPost = catchAsync(async (req, res) => {
  const result = await postService.getAllPostFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post retrieve successful',
    meta: result.meta,
    data: result.result,
  });
});

const getSinglePost = catchAsync(async (req, res) => {
  const { title } = req.params;

  const result = await postService.getSinglePostFromDB(title);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post retrieve successful',
    data: result,
  });
});

export const postController = {
  createPost,
  getAllPost,
  getSinglePost,
};
