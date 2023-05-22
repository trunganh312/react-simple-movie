import React from "react";
import MoviesCart from "./MoviesCart";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { withErrorBoundary } from "react-error-boundary";
import { TMDB_API } from "config";
import { fetcher } from "config";
import MoviesCartLoading from "./MoviesCartLoading";
const MoviesList = ({ type }) => {
  const { data, isLoading } = useSWR(TMDB_API.getMovieList(type), fetcher);

  return (
    <div className="h-auto select-none movies-list ">
      {isLoading ? (
        <Swiper spaceBetween={20} slidesPerView={"5"} grabCursor={"true"}>
          {new Array(5).fill(0).map((item, i) => (
            <SwiperSlide key={i}>
              <MoviesCartLoading></MoviesCartLoading>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper spaceBetween={20} slidesPerView={"5"} grabCursor={"true"}>
          {data.results.map((movies) => {
            return (
              <SwiperSlide key={movies.id}>
                <MoviesCart movies={movies}></MoviesCart>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

function FallbackComponent() {
  return <div className="text-3xl text-center text-red-400">Lỗi gòi</div>;
}

export default withErrorBoundary(MoviesList, {
  FallbackComponent,
});
