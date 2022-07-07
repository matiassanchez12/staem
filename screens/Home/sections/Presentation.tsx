import React from "react";

import Carousel from "../../../components/splide/Carousel";
import { GameType } from "../../../types/staem.types";

interface Props {
  games: Array<GameType>;
}
const Presentation: React.FC<Props> = (props) => {
  const { games } = props;

  return <Carousel games={games.slice(0, 10)} />;
};

export default Presentation;
