import swr from "swr";

import { SwiperSlide } from "swiper/react";
import { Spacer, Text, Loading } from "@nextui-org/react";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import CardGeneric from "../../../components/CardGeneric/CardGeneric";

import {
  getPopularTVSeries,
  getTopRatedTVSeries,
  getOnTheAirTVSeries,
  getAiringTodayTVSeries,
  getTrendingMovies,
} from "../../../services/tmdb.service";

const SeriesView = () => {
  const {
    data: dataPopularTVSeries,
    error: errorPopularTVSeries,
    isLoading: isLoadingPopularTVSeries,
  } = swr(`getPopularTVSeries`, () => getPopularTVSeries());

  const {
    data: dataTopRatedTVSeries,
    error: errorTopRatedTVSeries,
    isLoading: isLoadingTopRatedTVSeries,
  } = swr(`getTopRatedTVSeries`, () => getTopRatedTVSeries());

  const {
    data: dataOnTheAirTVSeries,
    error: errorOnTheAirTVSeries,
    isLoading: isLoadingOnTheAirTVSeries,
  } = swr(`getOnTheAirTVSeries`, () => getOnTheAirTVSeries());

  const {
    data: dataAiringTodayTVSeries,
    error: errorAiringTodayTVSeries,
    isLoading: isLoadingAiringTodayTVSeries,
  } = swr(`getAiringTodayTVSeries`, () => getAiringTodayTVSeries());

  const {
    data: dataTrendingMovies,
    error: errorTrendingTVSeries,
    isLoading: isLoadingTrendingMovies,
  } = swr(`getTrendingTVSeries`, () => getTrendingMovies());

  // Condicional para mostrar loading:
  if (
    isLoadingPopularTVSeries ||
    isLoadingTopRatedTVSeries ||
    isLoadingOnTheAirTVSeries ||
    isLoadingAiringTodayTVSeries ||
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

      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          On The Air Series
        </Text>
        <SwiperGeneric>
          {dataOnTheAirTVSeries.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />

      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Airing Today Series
        </Text>
        <SwiperGeneric>
          {dataAiringTodayTVSeries.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGeneric user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />

      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Trending Series
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

export default SeriesView;
