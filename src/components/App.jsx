import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Home from "./pages/HomePage/Home";
import Movies from "./pages/MoviesPage/Movies";





export const App = () => {
  return (
    <BrowserRouter>

    <Navigation/>

    <Routes>
      <Route element = {<Home/>}/>
      <Route path="/" element = {<Movies/>}/>
    </Routes>

    </BrowserRouter>
  );
};
