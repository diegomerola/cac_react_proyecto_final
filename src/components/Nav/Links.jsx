import { Navbar } from "@nextui-org/react";

const Links = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Navbar.Link href={route.to} key={route.name}>
          {route.name}
        </Navbar.Link>
      ))}
    </>
  );
};

export default Links;
