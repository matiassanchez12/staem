import React from "react";
import Image from "next/image";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { Box, Stack } from "@chakra-ui/react";
import { GameType } from "../../types/staem.types";
import { motion } from "framer-motion";

interface Props {
  games: Array<GameType>;
}

const Carousel: React.FC<Props> = (props) => {
  const { games } = props;
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);
  const plugin = [new AutoPlay({ duration: 2000, direction: "NEXT" })];

  return (
    <div className="container">
      <Flicking
        className="flicking"
        // plugins={plugin}
        onChanged={(e) => setActive(e.index)}
        ref={ref}
        circular={true}
        renderOnlyVisible
      >
        {games.map((item, i) => (
          <motion.div
            {...(active === i
              ? {
                  animate: {
                    height: 250,
                    boxShadow: "0px 3px 50px 2px rgba(0, 0, 0, 0.12)",
                  },
                }
              : {
                  animate: {
                    height: 200,
                    boxShadow: "",
                  },
                })}
            className={`panel ${active === i ? "panel-active" : ""}`}
            key={i}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="fill"
              objectPosition="center"
              style={{ borderRadius: "25px" }}
            />
          </motion.div>
        ))}
      </Flicking>
      <Stack w="100%" paddingTop={2} direction="row" justifyContent="center">
        {games.map((item, i) => (
          <Box
            key={i}
            w="10px"
            h="10px"
            borderRadius="full"
            bg={active === i ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)"}
            cursor="pointer"
            onClick={() => {
              setActive(i);
              ref.current.moveTo(i, 1000);
            }}
          ></Box>
        ))}
      </Stack>
    </div>
  );
};

export default Carousel;
