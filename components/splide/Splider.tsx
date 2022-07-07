import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Pagination from "./Pagination";

import { GameType } from "../../types/staem.types";

import VirtualizedPage from "./VirtualizedPage";
import Image from "next/image";
import Carousel from "./Carousel";

interface Props {
  games: Array<GameType>;
}

const images = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
];

const Splider: React.FC<Props> = (props) => {
  const { games } = props;
  //si o si tengo que usar este hook para manejar el slide visible
  const [visibleSlide, setVisibleSlide] = React.useState(0);

  return (
    <Box h="100%" w="100%" paddingY={4}>
      <Carousel />
    </Box>
  );
};

export default Splider;
