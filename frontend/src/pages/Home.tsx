/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PostCard from "../components/PostCard";
import Spinner from "../components/Spinner";

export type TPostCard = {
  id: string;
  description: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

const Home = () => {
  const [postCards, setPostCards] = useState<TPostCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://futureslikksbackend.vercel.app/cards`, {
          params: {
            searchTerm: searchTerm,
          },
        });
        setPostCards(response.data.data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="bg-[#DADBF0] lg:py-32 py-20 flex items-center justify-center flex-col gap-y-3">
        <h2 className="lg:text-5xl text-3xl font-semibold text-center">
          How can we help?
        </h2>
        <div className="mt-3 relative">
          <input
            placeholder="Search"
            className="px-3 py-2 w-[450px] rounded-md border border-gray-900 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaArrowRightLong className="absolute right-[10px] top-3" />
        </div>
      </div>

      <div className="lg:w-[900px] mx-auto grid lg:grid-cols-2 gap-14 py-20">
        {postCards.map((item: TPostCard, i: number) => (
          <PostCard key={i} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
