import supabase from "./Supabase";
import { GameType } from "./../types/staem.types";

type ValidationReturnType = GameType[];

const getAllGames = async (): Promise<ValidationReturnType> => {
  const { data } = await supabase.from("steam").select("*");

  let games: Array<GameType> = [];

  if (data) {
    data?.map((element) => {
      games.push(element);
    });
  }

  return games;
};

export { getAllGames };
