import Button from "components/button/Button";
import { TMDB_API } from "config";
import React from "react";
import { useNavigate } from "react-router-dom";

const MoviesCart = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="movies-cart flex flex-col h-[430px] w-full rounded-lg p-3 bg-[#312c26] text-white">
      <img
        src={TMDB_API.imageOriginal(movies.backdrop_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-3"
      />
      <div className="flex flex-col flex-1">
        <h3 className="flex-1 mb-3 font-bold text-white ">{movies.title}</h3>
        <div className="flex items-center justify-between mb-3 opacity-70">
          <span>{new Date(movies.release_date).getFullYear()}</span>
          <span>{movies.vote_average.toFixed(1)}</span>
        </div>
        <Button
          background="secondary"
          onClick={() => navigate(`/movie/${movies.id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default MoviesCart;
