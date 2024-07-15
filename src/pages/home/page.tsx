import { useState } from "react";

import { ListOfPokemons } from "@/components/list-of-pokemons/list-of-pokemons";
import { Pagination } from "@/components/pagination/pagination";
import { usePokemons } from "@/hooks/use-pokemons";
import { useUserStore } from "@/stores/user/user.store";
import { Loader } from "@/components/loader/loader";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemons, totalPages, loading, error } = usePokemons(currentPage);
  const { loggedIn, pokemons: userPokemons } = useUserStore();

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  if (error) return <div>{error}</div>;

  const updatedPokemons = pokemons.map((pokemon) => ({
    ...pokemon,
    captured: userPokemons.some(
      (userPokemon) => userPokemon.name === pokemon.name
    ),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon App</h1>
      <ListOfPokemons pokemons={updatedPokemons} loggedIn={loggedIn} />
      {pokemons.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}
