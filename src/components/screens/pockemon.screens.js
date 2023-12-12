import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { getPokemonDetailsByUrlApi } from "../../api/get";
import { colors, PockemonButtonStyle } from "../../styles/styles";
import { About } from "../pokemon/about/about";
import { Stats } from "../pokemon/stats/stats";
import { Evolution } from "../pokemon/evolution/evolution";
import { Header } from "../pokemon/header/header";
import { Body } from "../pokemon/body/body";
import { NavPockemon } from "../pokemon/nav/navigation";
import { Button } from "../pokemon/button/button";
import { BodyNavigation } from "../pokemon/body/bodyNavigation";
import { LoadingPokemon } from "../pokemon/loadingPokemon";
import { useBackgroundColor } from "../../hooks/backgroundColor.hook";

const apiurl = process.env.EXPO_PUBLIC_API_URL;

export default function Pockemon(props, { route, changeBackgroundColor, backgroundColor }) {
  const [PockemonPages, setPockemonPages] = useState(1);
  const [pockemon, setPockemon] = useState(null);
  const firstItemType = pockemon?.type[0];
  console.log(route);
  console.log(props.route.params.id);

  const id = props.route.params.id;
  useEffect(() => {
    getPockemon();
    /* changeBackgroundColor(colors.typesPokemon[firstItemType]); */
  }, []);
  console.log("h3",changeBackgroundColor)
  const backgroundColor2 = colors.typesPokemon[firstItemType];
  console.log("h2", backgroundColor2);
  console.log("h1", backgroundColor);

  const getPockemon = async () => {
    const response = await getPokemonDetailsByUrlApi(`${apiurl}/pokemon/${id}`);
    const responseSpecies = await getPokemonDetailsByUrlApi(
      response.species.url
    );
    const responseDescription = await getPokemonDetailsByUrlApi(
      response.species.url
    ).then((res) => {
      // filter out non-english entries
      const filteredEntries = res.flavor_text_entries
        .filter((item) => item.language.name === "en")
        .map((entry) => ({
          ...entry,
          flavor_text: entry.flavor_text
            .replace(/[\n\f\r]/g, " ")
            .toLowerCase(),
        }));
      // filter out duplicate entries
      const uniqueText = new Set(
        filteredEntries.map((item) => item.flavor_text)
      );
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

  return (
    <View>
      {pockemon ? (
        <ScrollView>
          <View style={[pockemon.type[0] && { backgroundColor: "red" }]}>
            <Header pockemon={pockemon} />
            <Body>
              <NavPockemon>
                <Button
                  title="About"
                  Style={PockemonPages === 1 && PockemonButtonStyle.activate}
                  onPress={() => setPockemonPages(1)}
                />
                <Button
                  Style={PockemonPages === 2 && PockemonButtonStyle.activate}
                  title="Stats"
                  onPress={() => setPockemonPages(2)}
                />
                <Button
                  Style={PockemonPages === 3 && PockemonButtonStyle.activate}
                  title="Evolution"
                  onPress={() => setPockemonPages(3)}
                />
              </NavPockemon>
              <BodyNavigation>
                {(() => {
                  switch (PockemonPages) {
                    case 1:
                      return <About pockemon={pockemon} />;
                    case 2:
                      return <Stats stats={pockemon.stats} />;
                    case 3:
                      return <Evolution evolution={pockemon.evolution} />;
                    default:
                      return <About pockemon={pockemon} />;
                  }
                })()}
              </BodyNavigation>
            </Body>
          </View>
        </ScrollView>
      ) : (
        <LoadingPokemon />
      )}
    </View>
  );
}
