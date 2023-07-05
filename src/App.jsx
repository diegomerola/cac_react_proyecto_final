import { RouterProvider } from "react-router-dom";
import RouteProviders from "./core/providers/RouteProviders";
import { appRouter } from "./core/routes/AppRoutes";

const App = () => {
  return (
    <RouteProviders>
      <RouterProvider router={appRouter}></RouterProvider>
    </RouteProviders>
  );
};

export default App;
