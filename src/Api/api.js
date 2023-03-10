import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '654dca5a8217a14f67a4e1bec4dc984e',
  },
});

export const fetchTrending = async (page) => {
  const mediaType = 'movie';
  const timeWindow = 'week';
  const { data } = await instance.get(
    `/trending/${mediaType}/${timeWindow}?page=${page}`
  );
  return data;
};

export const fetchMovies = async (page , query) => {
  const { data } = await instance.get(`/search/movie?page=${page}&query=${query}`);
  return data;
};

export const fetchGenres = async () => {
  const { data } = await instance.get(`/genre/movie/list`);
  return data.genres;
};

export const fetchMovieById = async (movieID) => {
  const { data } = await instance.get(`/movie/${movieID}`);
  return data;
};

export const fetchCredits = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchReviews = async (movieID) => {
  const { data } = await instance.get(`/movie/${movieID}/reviews`);
  return data;
};
