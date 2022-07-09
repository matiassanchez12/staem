import React from "react";
import { Box, Stack, Text, Select, Input } from "@chakra-ui/react";
import Section from "../../../components/section/Section";
import { GameType } from "../../../types/staem.types";

interface Props {
  games: Array<GameType>;
  currentGames: Array<GameType>;
  handleSet: (newArray: Array<GameType>) => void;
}

const Filters: React.FC<Props> = (props) => {
  const { games, currentGames, handleSet } = props;
  const [sortBy, setSortBy] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const gamesListByTitle = games.filter((game) => game.title.toLowerCase().includes(target.value.toLowerCase()));
    handleSet(gamesListByTitle);
    setSearch(target.value);
  };

  const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;

    if (target.value === "price") {
      const listSortedByPrice = currentGames.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
      handleSet(listSortedByPrice);
    } else if (target.value === "title") {
      const listSortedByTitle = currentGames.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
      handleSet(listSortedByTitle);
    } else {
      handleSet(currentGames);
    }
    setSortBy(target.value);
  };

  return (
    <Section paddingY={6}>
      <Stack direction="row" justifyContent="space-between" marginBottom={6}>
        <Stack direction="row" alignItems="center" w="100%">
          <Box
            position="absolute"
            left={{ base: "-84px", md: "-44px" }}
            width="110px"
            height="8px"
            backgroundColor="#214B6B"
            borderRadius={6}
          ></Box>
          <Text fontSize="2xl" w="200px" minW="200px" fontWeight="700">
            New & Trending
          </Text>
          <Box w="full" position="relative" h="full">
            <Box
              position="absolute"
              top={3}
              left={0}
              right={{ base: "-50px", md: "inherit" }}
              width={{ base: "125%", md: "100px" }}
              height={{ base: "10px", md: "6px" }}
              backgroundColor="#214B6B"
              borderRadius={6}
            ></Box>
          </Box>
        </Stack>
        <Stack flex={1} />
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Stack>
          <Input
            placeholder="Search"
            borderRadius="full"
            color="#c4c4c4"
            value={search}
            onChange={handleChangeSearch}
            bg="#1A3A53"
            variant="filled"
            _hover={{}}
            _focusVisible={{}}
            _focus={{}}
            _placeholder={{ color: "#c4c4c4" }}
          />
        </Stack>
        <Stack flex={1}></Stack>
        <Stack direction="row" w={{ base: "full", md: "16rem" }} alignItems="center">
          <Text flex={{ base: "inherit", md: 1 }} textAlign="end">
            Sort by:
          </Text>
          <Select
            value={sortBy}
            onChange={handleChangeSortBy}
            placeholder="All games"
            variant="filled"
            flex={1}
            _focusVisible={{}}
            _hover={{}}
            borderRadius="full"
            bg="#1A3A53"
          >
            <option value="price">Price</option>
            <option value="title">Title</option>
          </Select>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Filters;
