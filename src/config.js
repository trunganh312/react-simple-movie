export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const API_KEY = "b3cb41006f314122959fb18f8843ffba";

const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const TMDB_API = {
  getMovieList: (type, page) =>
    `${tmdbEndpoint}/${type}?api_key=${API_KEY}&page=${page}`,
  getDetailsMovie: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${API_KEY}`,
  getSearchMovie: (query, page) =>
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${API_KEY}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
