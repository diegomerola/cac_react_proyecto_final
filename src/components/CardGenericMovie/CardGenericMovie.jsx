import { Card, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";

import { motion } from "framer-motion";

const CardGenericMovie = ({ user }) => {
  /* const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false); */

  return (
    <motion.div key={user.id} initial={{ y: -100 }} animate={{ y: 0 }}>
      {console.log(user)}
      <Card
        onClick={() => console.log("Hizo click....")}
        /* onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} */
        isPressable
        isHoverable
        css={{
          backgroundImage: `url(${user.backdrop})`,
          backgroundSize: "cover",
          height: "150px",
          width: "240px",
          borderRadius: "2px",
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

        <Card.Body></Card.Body>

        <Card.Footer
          css={{
            bgBlur: "10px",
            borderRadius: "0px",
          }}
        >
          <Text css={{ fontWeight: "light", lineHeight: "1.2" }}>
            {user.title}
          </Text>
        </Card.Footer>

        {/* <Test isHovered={isHovered}>
          <Card.Footer
            css={{
              bgBlur: "10px",
              borderRadius: "0px",
            }}
          >
            <Text css={{ fontWeight: "light", lineHeight: "1.2" }}>
              {user.title}
            </Text>
          </Card.Footer>
        </Test> */}
      </Card>
    </motion.div>
  );
};

export default CardGenericMovie;
