import MoviesList from "components/movies/MoviesList";
import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <section className="mb-10 movies-layout page-container">
        <h3 className="mb-5 text-3xl font-bold text-white">Now playing</h3>
        <MoviesList type="now_playing"></MoviesList>
      </section>
      <section className="mb-10 movies-layout page-container">
        <h3 className="mb-5 text-3xl font-bold text-white">Top rate</h3>
        <MoviesList type="top_rated"></MoviesList>
      </section>
      <section className="mb-10 movies-layout page-container">
        <h3 className="mb-5 text-3xl font-bold text-white">Trending</h3>
        <MoviesList type="popular"></MoviesList>
      </section>
    </Fragment>
  );
};

export default Homepage;
