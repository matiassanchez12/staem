import type { NextPage } from "next";

import EclipseBackground from "../components/EclipseBackground";
import React from "react";
import Layout from "../components/layout/Layout";
import Filters from "../screens/Home/sections/Filters";
import Presentation from "../screens/Home/sections/Presentation";

import { GameType } from "../types/staem.types";
import { getAllGames } from "../supabase";
import Games from "../screens/Home/sections/Games";
import { useMediaQuery } from "@chakra-ui/react";

interface Props {
  games: Array<GameType>;
}

const Home: NextPage<Props> = ({ games }) => {
  const [dinamycList, setDinamycList] = React.useState<GameType[]>(games);
  const [desktop, tablet, mobile] = useMediaQuery(["(min-width: 1024px)", "(min-width: 464px)", "(min-width: 0px)"]);

  const handleSet = (newArray: Array<GameType>) => {
    setDinamycList(newArray);
  };

  const getCurrentScreen = (): string => {
    if (desktop) return "desktop";
    else if (tablet) return "tablet";
    else return "mobile";
  };

  return (
    <Layout
      headProps={{
        title: "Staem",
        description: "Staem home page",
        url: "https://staem-ten.vercel.app",
      }}
    >
      <Presentation games={games} screen={getCurrentScreen()} />
      <Filters games={games} currentGames={dinamycList} handleSet={handleSet} />
      <EclipseBackground />
      <Games games={dinamycList} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const games = await getAllGames();
  return {
    props: {
      games,
    },
  };
}
