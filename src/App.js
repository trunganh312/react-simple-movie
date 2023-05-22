import { Fragment, lazy, Suspense } from "react";
import "./App.scss";
// Import Swiper styles
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import MoviesPageLoadMore from "pages/MoviesPageLoadMore";
import NotFound from "components/notfound/NotFound";
// import Homepage from "./pages/Homepage";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailPage from "./pages/MovieDetailPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <Homepage></Homepage>
                </>
              }
            ></Route>
            <Route
              path="/movie"
              element={<MoviesPageLoadMore></MoviesPageLoadMore>}
            ></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
