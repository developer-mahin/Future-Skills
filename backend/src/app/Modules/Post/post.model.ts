import mongoose from 'mongoose';
import { TPost } from './post.interface';

const postSchema = new mongoose.Schema<TPost>(
  {
    id: {
      type: String,
      trim: true,
      unique: true,
    },
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model<TPost>('Post', postSchema);
export default Post;
