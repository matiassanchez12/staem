import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { GameType } from "../../../types/staem.types";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import Loader from "../../../components/loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  games: Array<GameType>;
}

const Games: React.FC<Props> = (props) => {
  const { games } = props;
  const [items, setItems] = React.useState(games.slice(0, 5));

  const fetchMoreData = (time: number = 2500) => {
    const data = games.slice(items.length, items.length + 5);
    setTimeout(() => {
      setItems((items) => items.concat(data));
    }, time);
  };

  React.useEffect(() => {
    setItems(games.slice(0, 5));
  }, [games]);
  if (games.length === 0) {
    return (
      <Stack align="center">
        <Text>We dont found games :(</Text>
      </Stack>
    );
  }
  return (
    <Section paddingY={8}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        initialScrollY={50}
        hasMore={true}
        loader={
          <Stack height="100px" justifyContent="center" alignItems="center">
            {games.length === items.length ? null : <Loader />}
          </Stack>
        }
      >
        <Stack gap={5} w="100%" h="100%">
          {items.map((game, index) => {
            return (
              <Card
                key={index}
                image={game.image}
                link={game.link}
                platforms={game.platforms}
                price={game.price}
                tags={game.tags}
                title={game.title}
              />
            );
          })}
        </Stack>
      </InfiniteScroll>
    </Section>
  );
};

export default Games;
