import { Navbar, Link } from "@nextui-org/react";

const NavCollapseItem = ({ routes }) => {
  return (
    <>
      {routes.map((item, index) => (
        <Navbar.CollapseItem
          key={item.name}
          activeColor="warning"
          /* css={{
            color: index === routes.length - 1 ? "$error" : "",
          }} */
          isActive={index === 0}
        >
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href={item.to}
            key={item.name}
          >
            {item.name}
          </Link>
        </Navbar.CollapseItem>
      ))}
    </>
  );
};

export default NavCollapseItem;
