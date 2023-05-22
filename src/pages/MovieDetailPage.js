import MoviesCart from "components/movies/MoviesCart";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, TMDB_API } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(TMDB_API.getDetailsMovie(movieId), fetcher);

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative page-container mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-50 overlay"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url(${TMDB_API.imageOriginal(
              data?.poster_path || data?.backdrop_path
            )})`,
          }}
        ></div>
      </div>
      <div className=" -mt-[200px] w-full mx-auto max-w-[700px] h-[400px] rounded-lg relative z-[10] mb-10 ">
        <img
          src={TMDB_API.imageOriginal(data?.backdrop_path)}
          alt=""
          className="object-cover w-full h-full rounded-lg "
        />
      </div>
      <h3 className="text-4xl font-bold text-center text-white">
        {data?.title}
      </h3>
      <div className="flex items-center justify-center my-10 gap-x-5">
        {data?.genres.map((item) => {
          return (
            <span
              key={item.id}
              className="px-5 py-2 border border-[#424063] text-[#6e72ad] rounded-xl"
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <p className="max-w-[600px] w-full mx-auto text-white tracking-wide leading-7 mb-10">
        {data?.overview}
      </p>
      <MoviesCredits></MoviesCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MoviesCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(TMDB_API.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length === 0) return null;
  const newItem = cast.filter((item) => item.profile_path !== null);

  return (
    <div className="py-10">
      <h3 className="flex-wrap mb-10 text-3xl font-bold text-center text-white">
        Cast
      </h3>
      <div className="credits">
        <Swiper spaceBetween={0} slidesPerView={"4"} grabCursor={"true"}>
          {newItem?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <CastItem item={item}></CastItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

function CastItem({ item }) {
  return (
    <div className="credits">
      <img
        src={TMDB_API.imageOriginal(item?.profile_path)}
        alt=""
        className="object-cover w-full h-full mb-5 rounded-lg"
      />
      <p className="font-bold text-center text-white">{item?.name}</p>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(TMDB_API.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10 page-container max-w-[1200px]">
      <div className="grid grid-cols-1 gap-y-10">
        {results.slice(0, 3).map((item) => {
          return (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <div className="" key={item.id}>
              <h3 className="inline-block p-3 mb-5 text-xl font-medium text-white bg-secondary ">
                {item.name}
              </h3>
              <div className="w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="The Super Mario Bros. Movie - In Theaters Now (TV SPOT 66)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="object-fill w-full h-full"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(TMDB_API.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length === 0) return null;
  const newSimilarFilm = results.filter((item) => item.backdrop_path != null);
  return (
    <div className="h-auto select-none movies-list page-container ">
      <h3 className="my-5 text-3xl font-bold text-white">Similar moviess</h3>
      <Swiper spaceBetween={20} slidesPerView={"5"} grabCursor={"true"}>
        {newSimilarFilm.map((movies) => {
          return (
            <SwiperSlide key={movies.id}>
              <MoviesCart movies={movies}></MoviesCart>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieDetailPage;
