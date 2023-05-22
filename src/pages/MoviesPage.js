import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

import ReactPaginate from "react-paginate";
import MoviesCart from "components/movies/MoviesCart";
import useDebounce from "hooks/useDebounce";
import { TMDB_API } from "config";
import { fetcher } from "config";
import MoviesCartLoading from "components/movies/MoviesCartLoading";

// Số phần tử trên 1 trang
const itemsPerPage = 20;
const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(TMDB_API.getMovieList("popular", nextPage));
  const debounceValue = useDebounce(filter, 500);
  const { data, isLoading } = useSWR(url, fetcher);
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (debounceValue) {
      setUrl(TMDB_API.getSearchMovie(debounceValue, nextPage));
    } else {
      setUrl(TMDB_API.getMovieList("popular", nextPage));
    }
  }, [debounceValue, nextPage]);

  const newFilm = data?.results?.filter((item) => item.backdrop_path != null);

  useEffect(() => {
    if (!data) return;
    setPageCount(Math.ceil(data.total_pages));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_pages;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <Fragment>
      <div className="flex mb-16 overflow-hidden rounded-lg page-container search">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search film..."
            className="w-full p-4 text-white border-none outline-none bg-[#434242] shadow-lg"
            onChange={handleChangeInput}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-5 gap-6 page-container">
          {new Array(20).fill(0).map((item, i) => (
            <MoviesCartLoading key={i}></MoviesCartLoading>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6 page-container">
          {newFilm?.map((movies) => {
            return <MoviesCart movies={movies} key={movies.id}></MoviesCart>;
          })}
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </Fragment>
  );
};

export default MoviesPage;
