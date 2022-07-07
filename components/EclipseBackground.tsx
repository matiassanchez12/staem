import React from "react";
import { Box } from "@chakra-ui/react";

const EclipseBackground: React.FC = () => {
  return (
    <Box
      position="absolute"
      left="296px"
      top="189px"
      w="867px"
      h="346px"
      maxW="100%"
      borderRadius="full"
      filter="blur(370px)"
      backgroundColor="#4D6E95"
    ></Box>
  );
};

export default EclipseBackground;
