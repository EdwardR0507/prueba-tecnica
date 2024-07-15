import { useMemo } from "react";

import { useFetch } from "./use-fetch";
import { PokemonListResponse } from "@/interfaces/pokemon.interface";

export const usePokemons = (page: number) => {
  const offset = (page - 1) * 20;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;

  const { data, loading, error } = useFetch<PokemonListResponse>(url);

  const memoizedData = useMemo(() => {
    const sortedPokemons = data?.results.sort(() => 0.5 - Math.random()) || [];
    const totalPages = Math.ceil((data?.count || 0) / 20);

    return { pokemons: sortedPokemons, totalPages };
  }, [data]);

  return { ...memoizedData, loading, error };
};
