import { TPostCard } from "../pages/Home";

type TProps = {
  post: TPostCard;
};

const PostCard = ({ post }: TProps) => {
  const { title, description } = post;

  return (
    <div className="bg-[#F4F6F8]  rounded-xl py-4">
      <h2 className="text-xl font-bold text-gray-800 px-6 pb-2" >{title}</h2>
      <div className="border-b border-gray-300"/>
      <p className="px-6 pt-2 text-lg">{description}</p>
    </div>
  );
};

export default PostCard;
