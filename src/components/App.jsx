import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>
    </Suspense>
  );
}

export default App;