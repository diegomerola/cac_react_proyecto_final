/* import { Navbar, Text } from "@nextui-org/react";

const Links = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Navbar.Link href={route.to} key={route.name}>
          {console.log(route.to)}
          {route.name}
        </Navbar.Link>
      ))}
    </>
  );
};

export default Links; */

import { Link } from "react-router-dom";

const Links = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Link to={route.to} key={route.name}>
          {console.log(route.to)}
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default Links;
