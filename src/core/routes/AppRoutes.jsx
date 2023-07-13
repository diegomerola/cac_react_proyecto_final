import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView";
import MoviesView from "../../pages/movies/views/MoviesView";
import GeneralLayout from "../../layout/general/GeneralLayout";
import SeriesView from "../../pages/series/views/SeriesView";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <GeneralLayout>
        <HomeView />
      </GeneralLayout>
    ),
  },
  {
    path: "/peliculas",
    element: (
      <GeneralLayout>
        <MoviesView />
      </GeneralLayout>
    ),
  },
  {
    path: "/series",
    element: (
      <GeneralLayout>
        <SeriesView />
      </GeneralLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <GeneralLayout>
        <LoginView />
      </GeneralLayout>
    ),
  },
]);

export const routes = [
  {
    name: "Inicio",
    to: "/",
  },
  {
    name: "Series",
    to: "/series",
  },
  {
    name: "Peliculas",
    to: "/peliculas",
  },
  {
    name: "Mi Lista",
    to: "/milista",
  },
  {
    name: "Login",
    to: "/login",
  },
];
