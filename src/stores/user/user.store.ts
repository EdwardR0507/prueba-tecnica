import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import { PokemonDetails } from "@/interfaces/pokemon.interface";

interface UserState {
  loggedIn: boolean;
  pokemons: PokemonDetails[];
}

interface Actions {
  toggleLogin: () => void;
  isAlreadyCaptured: (id: string) => boolean;
  capturePokemon: (pokemon: PokemonDetails) => void;
}

const storeAPI: StateCreator<UserState & Actions> = (set, get) => ({
  loggedIn: false,
  pokemons: [],
  toggleLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
  isAlreadyCaptured: (name: string) => {
    return get().pokemons.some((pokemon) => pokemon.name === name);
  },
  capturePokemon: (pokemon) => {
    set((state) => ({ pokemons: [...state.pokemons, pokemon] }));
  },
});

export const useUserStore = create<UserState & Actions>()(
  persist(storeAPI, { name: "user-store" })
);
