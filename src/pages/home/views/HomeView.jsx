import swr from "swr";

import { SwiperSlide } from "swiper/react";
import { Modal, Spacer, Text, Loading } from "@nextui-org/react";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import CardGenericMovie from "../../../components/CardGenericMovie/CardGenericMovie";

import { getPopularMovies } from "../../../services/tmdb.service";

const HomeView = () => {
  const {
    data: dataPopularMovies,
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = swr(`getPopularMovies`, () => getPopularMovies());

  // Condicional para mostrar loading:
  if (isLoadingPopularMovies) {
    return (
      <Loading
        type="gradient"
        size="md"
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
      {/* {console.log(dataPopularMovies)} */}

      <Spacer y={1.3} />
      <div>
        <Text h1 css={{ fontSize: "$lg" }}>
          Popular Movies
        </Text>
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
        <Text h1 css={{ fontSize: "$lg" }}>
          Popular Movies
        </Text>
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
