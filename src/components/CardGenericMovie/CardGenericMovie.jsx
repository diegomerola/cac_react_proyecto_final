import { Card, Text, Modal, Link, Image } from "@nextui-org/react";
import React, { useState } from "react";

import { motion } from "framer-motion";
import CardVideo from "../CardVideo/CardVideo";

const CardGenericMovie = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <motion.div key={user.id} initial={{ y: -100 }} animate={{ y: 0 }}>
      {/* {console.log(user)} */}
      <Card
        onClick={() => console.log(`${user.id}`)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPress={handler}
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
            justifyContent: "flex-end",
            padding: "0",
          }}
        >
          <Text
            css={{
              color: "$red700",
              fontWeight: "$semibold",
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
          css={{
            bgBlur: "10px",
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
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >
          <Text color="#363449">
            Photo by{" "}
            <Link
              color
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/@anniespratt"
            >
              Annie Spratt
            </Link>{" "}
            on{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </Link>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default CardGenericMovie;
