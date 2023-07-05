import Nav from "../../components/Nav/Nav";
import { Container } from "@nextui-org/react";
const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Container
        css={{
          maxW: "96%",
        }}
      >
        <Nav />
        {children}
      </Container>
    </div>
  );
};

export default GeneralLayout;
