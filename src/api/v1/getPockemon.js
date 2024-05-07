export const getPockemon = async () => {
  const response = await getPokemonDetailsByUrlApi(`${apiurl}/pokemon/${id}`);
  const responseSpecies = await getPokemonDetailsByUrlApi(response.species.url);
  const responseDescription = await getPokemonDetailsByUrlApi(
    response.species.url
  ).then((res) => {
    // filter out non-english entries
    const filteredEntries = res.flavor_text_entries
      .filter((item) => item.language.name === "en")
      .map((entry) => ({
        ...entry,
        flavor_text: entry.flavor_text.replace(/[\n\f\r]/g, " ").toLowerCase(),
      }));
    // filter out duplicate entries
    const uniqueText = new Set(filteredEntries.map((item) => item.flavor_text));
    const uniqueEntries = [...uniqueText].map((text) =>
      filteredEntries.find((entry) => entry.flavor_text === text)
    );
    return uniqueEntries;
  });
  const responseEvolution = await getPokemonDetailsByUrlApi(
    responseSpecies.evolution_chain.url
  );
  const responseEvolution2 = await getPokemonDetailsByUrlApi(
    responseEvolution.chain.species.url
  );
  const responseAbilities = await Promise.all(
    response.abilities.map(async (item) => {
      const response = await getPokemonDetailsByUrlApi(item.ability.url);
      return {
        name: response.name,
        effect: response.effect_entries[0].effect,
      };
    })
  );

  const data = {
    id: response.id,
    name: response.name,
    type: [response.types[0].type.name, response.types[1]?.type.name],
    order: response.order,
    image: response.sprites.other["official-artwork"].front_default,
    description: responseDescription,
    evolution: responseEvolution,
    weight: response.weight,
    height: response.height,
    stats: response.stats,
    abilities: response.abilities,
    moves: response.moves,
    abilitiesDetails: responseAbilities,
  };
  setPockemon(data);
};
