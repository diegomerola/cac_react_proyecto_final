import React from "react";
import { Card, Col, Row, Text, Container } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CardModal = ({ user, closeHandler }) => {
  return (
    <Card css={{ w: "100%", h: "350px" }}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          paddingTop: "$3",
          /* bgBlur: "#0f111466", */
        }}
      >
        <Row>
          <Col>
            <Text
              css={{ textAlign: "left" }}
              size={16}
              weight="bold"
              transform="uppercase"
              color="red"
            >
              ★ {user.rating}
            </Text>
          </Col>
          <Col>
            <Text
              css={{ textAlign: "right" }}
              onClick={closeHandler}
              className={"icon-card-modal"}
            >
              <ion-icon name="close-circle-outline" size={"large"}></ion-icon>
            </Text>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={`${user.backdrop}`}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>

      <Card.Footer
        //isBlurred
        css={{
          bgBlur: "#0f111466",
          padding: "$2",
          //position: "absolute",
          //bottom: 0,
          //zIndex: 1,
        }}
      >
        <Container css={{ padding: "0" }}>
          <Row>
            <Text
              color="grey"
              css={{
                textAlign: "left",
                lineHeight: "$sm",
                paddingTop: "$2",
                paddingLeft: "$3",
                paddingBottom: "$0",
              }}
            >
              {user.title}
            </Text>
          </Row>

          <Row>
            <Text
              color="grey"
              css={{
                textAlign: "left",
                paddingTop: "$0",
                paddingLeft: "$3",
                paddingBottom: "$2",
              }}
            >
              {user.releaseDate}
            </Text>
          </Row>

          <Row>
            <Col>
              <Row justify="flex-start">
                <Link className="icon-card-modal">
                  <ion-icon name="play-circle-outline" />
                </Link>
                <Link className="icon-card-modal">
                  <ion-icon name="add-circle-outline" />
                </Link>
                <Link className="icon-card-modal">
                  <ion-icon name="heart-circle-outline" />
                </Link>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Link className="icon-card-modal">
                  <ion-icon name="caret-down-circle"></ion-icon>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default CardModal;
