import { tmdb, tmdb_paths } from "../core/APIS/tmdb.api";
import { moviesAdapter, tvAdapter } from "../adapters/tmdb.adapters";

// Movies
export const getPopularMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.movies.popular}`);
  return moviesAdapter(data.results);
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.movies.topRated}`);
  return moviesAdapter(data.results);
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.movies.upComing}`);
  return moviesAdapter(data.results);
};

export const getNowPlayingMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.movies.nowPlaying}`);
  return moviesAdapter(data.results);
};

export const getTrendingMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.trending.movies}`);
  return moviesAdapter(data.results);
};

// TVSEries
export const getPopularTVSeries = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.tv.popular}`);
  return tvAdapter(data.results);
};

export const getTopRatedTVSeries = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.tv.topRated}`);
  return tvAdapter(data.results);
};

export const getOnTheAirTVSeries = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.tv.onTheAir}`);
  return tvAdapter(data.results);
};

export const getAiringTodayTVSeries = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.tv.airingToday}`);
  return tvAdapter(data.results);
};

export const getTrendingTVSeries = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.trending.tv}`);
  return moviesAdapter(data.results);
};

// Movies & TVSeries trending
export const getTrendingAll = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.trending.all}`);
  return moviesAdapter(data.results);
};
