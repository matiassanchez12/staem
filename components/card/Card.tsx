import React from "react";
import Image from "next/image";
import { Box, Stack, Text, Select, Input, useMediaQuery } from "@chakra-ui/react";
import { GameType } from "../../types/staem.types";
import { FaWindows, FaLinux } from "react-icons/fa";

const Card: React.FC<GameType> = (props) => {
  const { title, tags, platforms, image, link, price } = props;
  const [isResponsive] = useMediaQuery("(max-width: 680px)");

  return (
    <Stack
      as="a"
      href={link}
      target="_blank"
      direction={{ base: "column", md: "row" }}
      w="100%"
      h={{ base: "480px", md: "250px" }}
      bg="#17202D"
      borderRadius="30px"
      cursor="pointer"
      transition="all .3s ease-in-out"
      _hover={{ backgroundColor: "#131b26" }}
    >
      <Box flex={1} w="full" h="full" position="relative" borderLeftRadius={4} borderRadius={{ base: "4", md: "inherit" }}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          style={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: isResponsive ? "0px" : "30px",
            borderTopRightRadius: isResponsive ? "30px" : "inherit",
          }}
        />
      </Box>
      <Stack flex={1} direction={{ base: "column", md: "row" }}>
        <Stack flex={2} justifyContent="center" paddingX={10} paddingBottom={{ base: 0, md: 10 }} gap={2}>
          <Text fontWeight={600} color="#FFFFFF" fontSize="24px">
            {title}
          </Text>
          <Text fontWeight={400} color="#FFFFFF" fontSize="16px" margin="0 !important" opacity="0.5">
            {tags.join(", ")}
          </Text>
          <Box position="relative" width="120px" height="8px" backgroundColor="#214B6B" borderRadius={6}></Box>
        </Stack>
        <Stack
          flex={1}
          paddingY={4}
          margin={"0px !important"}
          paddingTop={{ base: 0, md: "inherit" }}
          paddingX={8}
          direction={{ base: "row", md: "column" }}
        >
          <Stack alignItems="end" paddingTop={4} direction={{ base: "row", md: "column" }}>
            {platforms.map((platform, index) => {
              if (platform === "Windows") {
                return <FaWindows key={index} color="#214B6B" size={48} />;
              }
              return <FaLinux key={index} color="#214B6B" size={48} />;
            })}
          </Stack>
          <Stack flex={1} justifyContent="end" alignItems="end">
            <Text fontWeight={700} fontSize="38px" color="#FFFFFF">
              ${price}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
