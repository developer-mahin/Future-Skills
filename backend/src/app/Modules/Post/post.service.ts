import QueryBuilder from '../../QueryBuilder/QueryBuilder';
import { TPost } from './post.interface';
import Post from './post.model';

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPostFromDB = async (query: Record<string, unknown>) => {
  const postSearchableQuery = ['postDetails'];

  const postQuery = new QueryBuilder(Post.find({}), query).search(
    postSearchableQuery,
  );

  const result = await postQuery.queryModel;
  const meta = await postQuery.countTotal();
  return {
    result,
    meta,
  };
};

const getSinglePostFromDB = async (query: string) => {
  return await Post.findOne({
    title: query,
  });
};

export const postService = {
  createPostIntoDB,
  getAllPostFromDB,
  getSinglePostFromDB,
};
