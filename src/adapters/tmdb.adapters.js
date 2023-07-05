import { tmdb_paths } from "../core/APIS/tmdb.api";

export const moviesAdapter = (data) => {
  return data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: tmdb_paths.images.poster(movie.poster_path),
    backdrop: `${tmdb_paths.images.backdrop(
      movie.backdrop_path
    )}?append_to_response=images&language=en-US&include_image_language=en,null `,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
  }));
};

export const tvAdapter = (data) => {
  return data.map((tv) => ({
    id: tv.id,
    title: tv.name,
    description: tv.overview,
    poster: tmdb_paths.images.poster(tv.poster_path),
    backdrop: tv.backdrop_path
      ? `${tmdb_paths.images.backdrop(
          tv.backdrop_path
        )}?append_to_response=images&language=en-US&include_image_language=en,null`
      : "https://via.placeholder.com/1920x1080?text=No+Image+Available",
    rating: tv.vote_average,
    releaseDate: tv.first_air_date,
  }));
};
