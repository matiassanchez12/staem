import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

interface SectionProps {
  children: React.ReactNode;
  /** Wether the background is an image or not. */
  backgroundIsImage?: boolean;
  /** Background image url. */
  backgroundImage?: string;
  /** Background color. */
  backgroundColor?: string;
  /** Wether to add or not a suttle background gradient effect. */
  hasGradientEffect?: boolean;
  paddingXbase?: number;
  paddingXmd?: number;
  paddingY?: number;
  paddingContainer?: number;
}

const Section: React.FC<SectionProps> = (props) => {
  const {
    backgroundColor = "inherit",
    backgroundIsImage = false,
    backgroundImage = "https://www.petassure.com/petassure/file-streams/page/DKhmRtazcw1FPjHr00Myg4caring-for-pets-teaches-children-responsibility.jpg.jpg",
    hasGradientEffect = false,
    paddingXbase,
    paddingXmd,
    paddingY,
    children,
    paddingContainer,
  } = props;

  return (
    <VStack height="auto" overflow="hidden" position="relative" zIndex={2}>
      <Box
        backgroundColor={backgroundColor}
        backgroundImage={backgroundIsImage ? `url(${backgroundImage})` : "none"}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        height="100%"
        width="100%"
      >
        <Box
          bgGradient={hasGradientEffect ? "linear(to-r, blackAlpha.600, transparent)" : "none"}
          paddingX={{ base: paddingXbase ? paddingXbase : 4, md: paddingXmd ? paddingXmd : 8 }}
          paddingY={paddingY ? paddingY : 20}
        >
          <Container maxWidth="container.xl" padding={paddingContainer ? paddingContainer : "inherit"}>
            {children}
          </Container>
        </Box>
      </Box>
    </VStack>
  );
};

export default Section;
