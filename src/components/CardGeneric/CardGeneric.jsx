import { Card, Text, Modal } from "@nextui-org/react";
import React, { useState } from "react";
import CardModal from "../CardModal/CardModal";

const CardGeneric = ({ user }) => {
  // State CardGenericMovie
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  // State CardModal
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      {/* {console.log(user)} */}
      <Card
        //onClick={() => console.log(`${user.id}`)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handler}
        isHoverable
        isPressable
        css={{
          backgroundImage: `url(${user.backdrop})`,
          backgroundSize: "cover",
          backgroundColor: "Black",
          backgroundBlendMode: `${isHovered ? "screen" : "normal"}`,
          height: "150px",
          width: "240px",
          borderRadius: "4px",
        }}
      >
        <Card.Header
          css={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "0",
          }}
        >
          <Text
            css={{
              color: "$red700",
              fontWeight: "$bold",
              fontSize: "$sm",
              bgBlur: "10px",
              padding: "0 $1",
              borderRadius: "2px",
            }}
          >
            ★ {user.rating}
          </Text>
        </Card.Header>

        <Card.Body
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              opacity: `${isHovered ? "1.0" : "0"}`,
              transition: "0.2s ease-in-out",
              color: "whitesmoke",
              overflowY: "hidden",
            }}
          >
            <ion-icon name="play-circle-outline" size="large"></ion-icon>
          </div>
        </Card.Body>

        <Card.Footer
          isBlurred
          css={{
            //bgBlur: "10px",
            bgBlur: "#0f111466",
            borderRadius: "0px",
          }}
        >
          <Text
            css={{
              fontWeight: "light",
              lineHeight: "1.2",
              color: "WhiteSmoke",
            }}
          >
            {user.title}
          </Text>
        </Card.Footer>
      </Card>

      <Modal noPadding open={visible} onClose={closeHandler}>
        <CardModal user={user} closeHandler={closeHandler} />
      </Modal>
    </>
  );
};

export default CardGeneric;
