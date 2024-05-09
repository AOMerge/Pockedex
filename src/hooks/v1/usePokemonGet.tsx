import { useState, useEffect, useCallback } from "react";
import getHTTP from "~/api/v1/getHTTP";

export default class usePokemonGet {
    /**
     * Hook to get the data of a pokemon
     * @param id - The id of the pokemon
     * @param apiurl - The url of the API
     * @returns {pockemon, PockemonPages, setPockemonPages} 
     */

  static useAllDataPokemon(id: number, apiurl: string | undefined) {
    const [PockemonPages, setPockemonPages] = useState(1);
    const [pockemon, setPockemon]: any[] = useState(null);

    useEffect(() => {
      const dataPokemon = new getHTTP();
      const getPockemon = dataPokemon
        .getPockemon(apiurl, id)
        .then((res) => {
          setPockemon(res);
        })
        .catch((error) => {
          console.error("Error fetching pokemon details:", error);
          throw error;
        });
      /* changeBackgroundColor(colors.typesPokemon[firstItemType]); */
    }, []);

    return { pockemon, PockemonPages, setPockemonPages };
  }
  /**
   * this hook is used to get the image of the pokemon evolution
   * @param evolution 
   * @param apiurl 
   * @returns 
   */
  static usePockemonEvolutionImage(evolution: any, apiurl: any) {
    const [evolutionChain, setEvolutionChain] = useState(null);
    const [evolutionChain2, setEvolutionChain2] = useState(null);

    const evolutionChainImage = new getHTTP();

    useEffect(() => {
      evolutionChainImage.getPockemonEvolutionImage(
        evolution.chain.evolves_to[0].species.name,
        apiurl
      ).then((res) => {
        setEvolutionChain(res);
      });

      evolutionChainImage.getPockemonEvolutionImage(
        evolution.chain.evolves_to[0].evolves_to[0].species.name,
        apiurl
      ).then((res) => {
        setEvolutionChain2(res);
      });
    }, []);

    return { evolutionChain, evolutionChain2 };
  }

  static usePokemonList() {
    const [pokemons, setPokemons] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [afterUrl, setAfterUrl] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const fetchPokemons = async () => {
      setIsFetching(true);
      const response = await getPokemonsApi(nextUrl);
      if (!response || !response.results) {
        // handle error here
        return console.error("Error fetching pokemon list:", response?.error);
      }
      const pokemonsArray = await Promise.all(
        response.results.map(async (pokemon) => {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemons((prevData) => {
        if (!Array.isArray(prevData)) {
          prevData = [];
        }
        const dataWithUniqueKeys = new Map(
          prevData.map((item) => [item.id, item])
        );
        pokemonsArray.forEach((item) => dataWithUniqueKeys.set(item.id, item));
        return [...dataWithUniqueKeys.values()];
      });
      setNextUrl(response.next);
      setAfterUrl(response.previous); // should be setNextUrl(response.next)
      setIsFetching(false);
    };

    useEffect(() => {
      fetchPokemons();
    }, []);

    return { pokemons, nextUrl, afterUrl, isFetching, fetchPokemons };

  }
}