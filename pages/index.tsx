import type { NextPage } from "next";

import EclipseBackground from "../components/EclipseBackground";
import React from "react";
import Layout from "../components/layout/Layout";
import Filters from "../screens/Home/sections/Filters";
import Presentation from "../screens/Home/sections/Presentation";

import { GameType } from "../types/staem.types";
import { getAllGames } from "../supabase";
import Games from "../screens/Home/sections/Games";
import Loader from "../components/loader/Loader";
import { Stack, useMediaQuery } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [games, setGames] = React.useState<GameType[]>([]);
  const [dinamycList, setDinamycList] = React.useState<GameType[]>([]);
  const [desktop, tablet, mobile] = useMediaQuery(["(min-width: 1024px)", "(min-width: 464px)", "(min-width: 0px)"]);

  React.useEffect(() => {
    const fetchGames = async () => {
      const res = await getAllGames();
      setGames(res);
      setDinamycList(res);
    };
    fetchGames();
  }, []);

  const handleSet = (newArray: Array<GameType>) => {
    setDinamycList(newArray);
  };

  const getCurrentScreen = (): string => {
    if (desktop) return "desktop";
    else if (tablet) return "tablet";
    else return "mobile";
  };

  //esto no va a pasar porque se va a setea los datos en el lado del servidor
  if (games.length === 0)
    return (
      <Layout
        headProps={{
          title: "Home",
          description: "Comments page",
          url: "https://comments.com",
        }}
      >
        <Stack w="full" h="300px" justifyContent="center" alignItems="center">
          <Loader />
        </Stack>
      </Layout>
    );

  return (
    <Layout
      headProps={{
        title: "Home",
        description: "Comments page",
        url: "https://comments.com",
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
