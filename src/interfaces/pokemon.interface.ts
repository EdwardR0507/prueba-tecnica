export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface PokemonDetails {
  name: string;
  types: Type[];
  abilities: Ability[];
  base_experience: number;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}
