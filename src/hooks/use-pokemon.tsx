import { useFetch } from "./use-fetch";

import { PokemonDetails } from "@/interfaces/pokemon.interface";

export const usePokemon = (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data, loading, error } = useFetch<PokemonDetails>(url);

  return { pokemon: data, loading, error };
};
