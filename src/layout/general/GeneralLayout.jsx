import Nav from "../../components/Nav/Nav";
import { Container } from "@nextui-org/react";
const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Container
        css={{
          maxW: "100%",
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default GeneralLayout;
