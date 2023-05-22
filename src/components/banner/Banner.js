import { fetcher } from "config";
import { TMDB_API } from "config";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import BannerItem from "./BannerItem";
import BannerLoading from "./BannerLoading";
const Banner = () => {
  const { data, isLoading } = useSWR(
    TMDB_API.getMovieList("upcoming"),
    fetcher
  );

  return (
    <section className="banner h-[400px] page-container mb-10 ">
      {isLoading ? (
        <Swiper slidesPerView={"1"} grabCursor={"true"}>
          <SwiperSlide>
            <BannerLoading />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper slidesPerView={"1"} grabCursor={"true"}>
          {data?.results.map((movies) => {
            return (
              <SwiperSlide key={movies.id}>
                <BannerItem movies={movies}></BannerItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Banner;
