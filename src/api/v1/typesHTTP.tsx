export interface PokemonDetails {
  id: number;
  name: string;
  type: string[];
  order: number;
  image: string;
  description: any;
  evolution: any;
  weight: number;
  height: number;
  stats: any;
  abilities: any;
  moves: any;
  abilitiesDetails: any;
}

export interface HTTP {
  getPokemonDetailsByUrlApi(url: string): any;
  getPockemon(apiurl: string | undefined, id: number): any;
}

export type ResponsePokemon = {
  species: any;
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  stats: {};
  abilities: {
    ability: {
      url: string;
    };
  }[];
  moves: {};
  effect_entries: {
    effect: string;
  }[];

};

export type ResponseSpeciesPokemon = {
  evolution_chain: {
    url: string;
  };
};

export type ResponseEvolutionPokemon = {
  chain: {
    species: {
      url: string;
    };
  };
};
