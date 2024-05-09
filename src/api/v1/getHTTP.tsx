import {
  HTTP,
  PokemonDetails,
  ResponsePokemon,
  ResponseSpeciesPokemon,
  ResponseEvolutionPokemon,
} from "./typesHTTP";
import { getPokemonDetailsByUrlApi } from "./get";

export default class getHTTP implements HTTP {
  private apiurl: string | undefined = process.env.EXPO_PUBLIC_API_URL;

  /**this function is used to get the list of pokemons from the API
   *
   * @param url: String
   * @returns
   */
  getAllDataPokemon(url: string | undefined | null)  {
    return this.AllDataPokemon(url);
  }

  /**this function is used to get the details of a specific pokemon
   *
   * @param evolution: Array
   * @param setEvolutionChain: function
   * @param setEvolutionChain2: function
   * @param apiurl: String
   * @returns Array
   */
  getPockemonEvolutionImage(evolution: any, apiurl: any) {
    return this.PockemonEvolutionImage(evolution, apiurl);
  }

  /**this function is used to get the list of pokemons from the API
   *
   * @param url: String
   * @returns
   */
  public async getPokemonDetailsByUrlApi(url: string): Promise<any> {
    return this.PokemonDetailsByUrlApi(url);
  }

  /**this function is used to get the details of a specific pokemon
   *
   * @param apiurl: String
   * @param id: Number
   * @returns Array
   */
  public async getPockemon(
    apiurl: string | undefined,
    id: number
  ): Promise<PokemonDetails> {
    return this.Pockemon(apiurl, id);
  }

  private async getPokemonsApi(enpontUrl: string | undefined| null) {
    try {
      const result = await fetch(
        enpontUrl || `${this.apiurl}/pokemon?limit=${60}&offset=0`
      )
        .then((response) => response.json())
        .then((json) => {
          return json;
        })
        .catch((error) => {
          return error;
        });
      return result;
    } catch (error) {
      throw error;
    }
  }

  private async AllDataPokemon(URL: string | undefined | null) {
    const response = await this.getPokemonsApi(URL);
    if (!response || !response.results) return console.error("Error fetching pokemon list:", response?.error);
    const pokemonsArray = await Promise.all(
      response.results.map(async (pokemon: any) => {
        const pokemonDetails = await this.getPokemonDetailsByUrlApi(pokemon.url);
        return {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        };
      })
    );
    const updatePokemonList = (prevData:  any) => {
      if (!Array.isArray(prevData)) {
        prevData = [];
      }
      const dataWithUniqueKeys: any = new Map(
        prevData.map((item: any) => [item.id, item])
      );
      pokemonsArray.forEach((item) => dataWithUniqueKeys.set(item.id, item));
      return [...dataWithUniqueKeys.values()];
    };
    response.next
    response.previous

    return { pokemonsArray, updatePokemonList, response };
  }

  /**this function is used to get the list of pokemons from the API
   *
   * @param url: String
   * @returns
   */
  private async PokemonDetailsByUrlApi(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error("Error fetching pokemon details:", url, error);
      /* error.context = "fetching pokemon details";
      throw error; */
      return null;
    }
  }

  /**this function is used to get the details of a specific pokemon
   *
   * @param apiurl: String
   * @param id: Number
   * @returns Array
   */
  private async Pockemon(
    apiurl: string | undefined,
    id: number
  ): Promise<PokemonDetails> {
    /**
     * Fetches the details of a specific pokemon from the API
     * @param {string} url - The URL of the pokemon
     * @returns {Promise<ResponsePokemon>} - The details of the pokemon
     */
    const response: ResponsePokemon | any =
      await this.getPokemonDetailsByUrlApi(`${apiurl}/pokemon/${id}`);

    /**
     * Fetches the details of a specific pokemon species from the API
     * @param {string} url - The URL of the pokemon species
     * @returns {Promise<responseSpeciesPokemon>} - The details of the pokemon species
     * @returns {Promise<void>} - The details of the pokemon species
     */
    const responseSpecies: ResponseSpeciesPokemon | void =
      await this.getPokemonDetailsByUrlApi(response?.species?.url);
    if (!responseSpecies) {
      console.error("Failed to fetch species details.");
    }

    const responseDescription = await this.getPokemonDetailsByUrlApi(
      response.species.url
    ).then((res: any) => {
      // filter out non-english entries
      const filteredEntries = res.flavor_text_entries
        .filter(
          (item: { language: { name: string } }) => item.language.name === "en"
        )
        .map((entry: { flavor_text: string }) => ({
          ...entry,
          flavor_text: entry.flavor_text
            .replace(/[\n\f\r]/g, " ")
            .toLowerCase(),
        }));

      const uniqueEntries = Array.from(
        new Set(
          filteredEntries.map(
            (entry: { flavor_text: any }) => entry.flavor_text
          )
        )
      ).map((text) =>
        filteredEntries.find(
          (entry: { flavor_text: unknown }) => entry.flavor_text === text
        )
      );
      return uniqueEntries;
    });

    /**
     * Fetches the details of a specific pokemon evolution from the API
     * @param {string} url - The URL of the pokemon evolution
     * @returns {Promise<responseEvolutionPokemon>} - The details of the pokemon evolution
     */
    const responseEvolution: ResponseEvolutionPokemon | void =
      await this.getPokemonDetailsByUrlApi(
        responseSpecies!.evolution_chain.url
      );

    /* const responseEvolution2 = await this.getPokemonDetailsByUrlApi(
      responseEvolution!.chain.species.url
    ); */
    /**
     * Fetches the details of a specific pokemon abilities from the API
     * @param {string} url - The URL of the pokemon abilities
     * @returns {Promise<any>} - The details of the pokemon abilities
     */
    const responseAbilities = response?.abilities
      ? await Promise.all(
          response.abilities.map(async (item: { ability: { url: string } }) => {
            const abilityResponse = await this.getPokemonDetailsByUrlApi(
              item.ability.url
            );
            if (!abilityResponse) return null;
            return {
              name: abilityResponse.name,
              effect: abilityResponse.effect_entries?.[0]?.effect,
            };
          })
        )
      : [];

    const data: PokemonDetails = {
      id: response!.id,
      name: response!.name,
      type: [response!.types[0].type.name, response!.types[1]?.type.name],
      order: response!.order,
      image: response!.sprites.other["official-artwork"].front_default,
      description: responseDescription,
      evolution: responseEvolution,
      weight: response!.weight,
      height: response!.height,
      stats: response!.stats,
      abilities: response!.abilities,
      moves: response!.moves,
      abilitiesDetails: responseAbilities,
    };

    return data;
  }

  private async PockemonEvolutionImage(
    evolution: string | any,
    apiurl: string | undefined
  ) {
    if (evolution) {
      const evolutionChain = await this.getPokemonDetailsByUrlApi(
        `${apiurl}/pokemon/${evolution}`
      );
      return evolutionChain.sprites.other["official-artwork"].front_default;
    }
    return null;
  }
}
