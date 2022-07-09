import React from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import Section from "./section/Section";

const EclipseBackground: React.FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center" position="relative" bottom={{ base: "25rem", md: "35rem" }}>
      <Box
        position="absolute"
        w="867px"
        h="346px"
        overflow="hidden"
        maxW="100%"
        borderRadius="full"
        filter="blur(370px)"
        backgroundColor="#4D6E95"
      ></Box>
    </Stack>
  );
};

export default EclipseBackground;
