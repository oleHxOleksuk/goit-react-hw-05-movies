import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import GlobalStyle from 'styled-components';

import SharedLayout from '../Shared/SharedLayout/SharedLayout'
import Loader from "Shared/Loader/Loader";

const Home = lazy(() => import('./pages/HomePage/Home'));
const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MoviesInformation = lazy(() => import('./pages/MoviesInformation/MoviesInformations'));

const Cast = lazy(() => import('./Cast/Cast'));
const MovieRewiewers = lazy(() => import('./MovieRewiewers/MovieRewiewers'));





export const App = () => {
  return (
    <>
    <GlobalStyle />
    <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MoviesInformation/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<MovieRewiewers />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
</Suspense>
</>
  );
};
