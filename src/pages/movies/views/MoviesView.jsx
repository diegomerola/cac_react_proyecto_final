import swr from "swr";

import { SwiperSlide } from "swiper/react";
import { Spacer, Text, Loading } from "@nextui-org/react";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import CardGeneric from "../../../components/CardGeneric/CardGeneric";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getTrendingMovies,
} from "../../../services/tmdb.service";

const MoviesView = () => {
  const {
    data: dataPopularMovies,
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = swr(`getPopularMovies`, () => getPopularMovies());

  const {
    data: dataTopRatedMovies,
    error: errorTopRatedMovies,
    isLoading: isLoadingTopRatedMovies,
  } = swr(`getTopRatedMovies`, () => getTopRatedMovies());

  const {
    data: dataUpcomingMovies,
    error: errorUpcomingMovies,
    isLoading: isLoadingUpcomingMovies,
  } = swr(`getUpcomingMovies`, () => getUpcomingMovies());

  const {
    data: dataNowPlayingMovies,
    error: errorNowPlayingMovies,
    isLoading: isLoadingNowPlayingMovies,
  } = swr(`getNowPlayingMovies`, () => getNowPlayingMovies());

  const {
    data: dataTrendingMovies,
    error: errorTrendingMovies,
    isLoading: isLoadingTrendingMovies,
  } = swr(`getTrendingMovies`, () => getTrendingMovies());

  // Condicional para mostrar loading:
  if (
    isLoadingPopularMovies ||
    isLoadingTopRatedMovies ||
    isLoadingUpcomingMovies ||
    isLoadingNowPlayingMovies ||
    isLoadingTrendingMovies
  ) {
    return (
      <Loading
        type="gradient"
        size="md"
        color="warning"
        css={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          paddingTop: "$5",
        }}
      >
        Loading...
      </Loading>
    );
  }

  return (
    <div>
      <Spacer y={1.3} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Popular Movies
        </Text>
        <SwiperGeneric>
          {dataPopularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Top Rated Movies
        </Text>
        <SwiperGeneric>
          {dataTopRatedMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Upcoming Movies
        </Text>
        <SwiperGeneric>
          {dataUpcomingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Now Playing Movies
        </Text>
        <SwiperGeneric>
          {dataNowPlayingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Trending Movies
        </Text>
        <SwiperGeneric>
          {dataTrendingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
    </div>
  );
};

export default MoviesView;
