import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "../themes/themes";
import { HelmetProvider } from "react-helmet-async";

const RouteProviders = ({ children }) => {
  return (
    <HelmetProvider>
      <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>
    </HelmetProvider>
  );
};

export default RouteProviders;
