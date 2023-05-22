import Button from "components/button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 w-full text-white left-5">
        <h3 className="mb-5 text-4xl font-bold">{movies.title}</h3>
        <div className="flex items-center mb-5 gap-x-3">
          <span className="px-5 py-3 border rounded-md">Action</span>
          <span className="px-5 py-3 border rounded-md">Action</span>
          <span className="px-5 py-3 border rounded-md">Action</span>
        </div>
        <Button
          className="w-auto mb-5"
          onClick={() => navigate(`/movie/${movies.id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default BannerItem;
