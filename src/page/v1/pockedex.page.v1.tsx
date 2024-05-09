import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../../api/v1/get";
import ListPokemons from "../../components/lists/list-pockemons.components";
import getHTTP from "~/api/v1/getHTTP";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [afterUrl, setAfterUrl] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const pokedex = new getHTTP();

/*   const fetchPokemons = async () => {
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
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
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
  }; */

  useEffect(() => {
    pokedex.getAllDataPokemon(nextUrl).then((res: any) => {
      setPokemons(res.pokemonsArray);
      setNextUrl(res.response.next);
      setAfterUrl(res.response.previous);
    });
    //fetchPokemons();
  }, []);

  return (
    <SafeAreaView>
      <Text>What pokemon are you looking for?</Text>
      <ListPokemons
        pokemons={pokemons}
        nextUrl={nextUrl}        
        afterUrl={afterUrl}
      />
    </SafeAreaView>
  );
}
