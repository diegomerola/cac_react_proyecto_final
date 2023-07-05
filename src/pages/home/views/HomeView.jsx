import swr from "swr";

import { SwiperSlide } from "swiper/react";
import { Modal, Spacer, Text } from "@nextui-org/react";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import CardGenericMovie from "../../../components/CardGenericMovie/CardGenericMovie";
import CardPrimary from "../../../components/Card/CardPrimary";

import { getPopularMovies } from "../../../services/tmdb.service";

const HomeView = () => {
  const {
    data: dataPopularMovies,
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = swr(`getPopularMovies`, () => getPopularMovies());

  // Condicional para mostrar loading:
  if (isLoadingPopularMovies) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {/* {console.log(dataPopularMovies)} */}

      <Spacer y={1.2} />
      <div>
        <Text h1>Popular Movies</Text>
        <SwiperGeneric>
          {dataPopularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGenericMovie user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
      <div>
        <Text h1>Popular Movies</Text>
        <SwiperGeneric>
          {dataPopularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardGenericMovie user={movie} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
      <Spacer y={2.4} />
    </div>
  );
};

export default HomeView;
