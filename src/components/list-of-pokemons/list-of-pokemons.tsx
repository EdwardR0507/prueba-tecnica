import { Pokemon } from "@/interfaces/pokemon.interface";
import { Link } from "react-router-dom";

interface CustomPokemon extends Pokemon {
  captured: boolean;
}

interface ListOfPokemonsProps {
  pokemons: CustomPokemon[];
  loggedIn: boolean;
}

export const ListOfPokemons = ({ pokemons, loggedIn }: ListOfPokemonsProps) => {
  return (
    <>
      {pokemons.length > 0 ? (
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pokemons.map((pokemon) => {
            const id = pokemon.url.split("/").filter(Boolean).pop();
            return (
              <Link
                key={pokemon.name}
                to={`/pokemon/${id}`}
                className="bg-gray-200 p-4 rounded text-center"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt={pokemon.name}
                  className="mx-auto size-48"
                />
                <p className="capitalize">{pokemon.name}</p>
                {pokemon.captured && loggedIn && (
                  <p className="text-green-500">Captured</p>
                )}
              </Link>
            );
          })}
        </section>
      ) : (
        <div className="bg-gray-200 p-4 rounded text-center">
          No Pokemons Found
        </div>
      )}
    </>
  );
};
