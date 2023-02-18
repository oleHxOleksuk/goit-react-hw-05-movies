import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Home from "./pages/HomePage/Home";
import Movies from "./pages/MoviesPage/Movies";
import NoteFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <BrowserRouter>

    <Navigation/>

    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/movies" element = {<Movies/>}/>
      <Route path="*" element = {<NoteFoundPage/>}/>
    </Routes>

    </BrowserRouter>
  );
};
