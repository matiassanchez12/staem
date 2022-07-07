import { Box, Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
  slide: number;
  setSlide(slide: number, speed: number): void;
  quantity: number;
}

const Pagination: React.FC<Props> = (props) => {
  const { slide, setSlide, quantity } = props;

  return (
    <Stack w="100%" paddingTop={4} direction="row" justifyContent="center">
      {Array.from({ length: quantity }).map((_, i) => (
        <Box
          key={i}
          w="10px"
          h="10px"
          borderRadius="full"
          bg={slide === i ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)"}
          cursor="pointer"
          onClick={() => setSlide(i, 300)}
        ></Box>
      ))}
    </Stack>
  );
};

export default Pagination;
