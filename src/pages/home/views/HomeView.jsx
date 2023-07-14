import swr from "swr";

import { SwiperSlide } from "swiper/react";
import { Spacer, Text, Loading } from "@nextui-org/react";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import CardGeneric from "../../../components/CardGeneric/CardGeneric";

import {
  getPopularMovies,
  getTopRatedMovies,
  getPopularTVSeries,
  getTopRatedTVSeries,
} from "../../../services/tmdb.service";

const HomeView = () => {
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
    data: dataTopRatedTVSeries,
    error: errorTopRatedTVSeries,
    isLoading: isLoadingTopRatedTVSeries,
  } = swr(`getTopRatedTVSeries`, () => getTopRatedTVSeries());

  const {
    data: dataPopularTVSeries,
    error: errorPopularTVSeries,
    isLoading: isLoadingPopularTVSeries,
  } = swr(`getPopularTVSeries`, () => getPopularTVSeries());

  // Condicional para mostrar loading:
  if (
    isLoadingPopularMovies ||
    isLoadingTopRatedMovies ||
    isLoadingPopularTVSeries ||
    isLoadingTopRatedTVSeries
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
          Popular Series
        </Text>
        <SwiperGeneric>
          {dataPopularTVSeries.map((movie) => (
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
          Top Rated Series
        </Text>
        <SwiperGeneric>
          {dataTopRatedTVSeries.map((movie) => (
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

export default HomeView;
