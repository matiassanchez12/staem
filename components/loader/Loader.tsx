import React from "react";
import { Box } from "@chakra-ui/react";
import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${spin} infinite 1.3s ease`;

  return (
    <Box
      border="4px solid #ffffff"
      w="38px"
      h="38px"
      borderRadius="full"
      borderLeftColor="rgba(171, 171, 171, 0.8)"
      animation={animation}
    ></Box>
  );
};

export default Loader;
