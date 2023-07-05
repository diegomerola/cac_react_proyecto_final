import { tmdb, tmdb_paths } from "../core/APIS/tmdb.api";
import { moviesAdapter, tvAdapter } from "../adapters/tmdb.adapters";

export const getPopularMovies = async () => {
  const { data } = await tmdb.get(`${tmdb_paths.movies.topRated}`);
  return moviesAdapter(data.results);
};
