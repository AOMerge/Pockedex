import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import { getPokemonDetailsByUrlApi } from "../../api/get";
const apiurl = process.env.EXPO_PUBLIC_API_URL;
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../styles/styles";
import { styles, ScreenPokemon, NavPockemon } from "../../styles/styles";

export default function Pockemon({ route }) {
  const [PockemonPages, setPockemonPages] = useState(1);
  const [pockemon, setPockemon] = useState(null);
  const id = route.params.id;
  useEffect(() => {
    getPockemon();
  }, []);  
  
  const getPockemon = async () => {
    const response = await getPokemonDetailsByUrlApi(`${apiurl}/pokemon/${id}`);
    const responseSpecies = await getPokemonDetailsByUrlApi( response.species.url);
    const responseDescription = await getPokemonDetailsByUrlApi( response.species.url).then((res) => {
      // filter out non-english entries
       const filteredEntries = res.flavor_text_entries
         .filter((item) => item.language.name === "en")
         .map(entry => ({ ...entry, flavor_text: entry.flavor_text.replace(/[\n\f\r]/g, ' ').toLowerCase() }));
       // filter out duplicate entries
      const uniqueText = new Set(filteredEntries.map((item) => item.flavor_text));
      const uniqueEntries = [...uniqueText].map((text) =>
        filteredEntries.find((entry) => entry.flavor_text === text)
      );
      return uniqueEntries;
    } );
    const responseEvolution = await getPokemonDetailsByUrlApi( responseSpecies.evolution_chain.url);
    const responseEvolution2 = await getPokemonDetailsByUrlApi( responseEvolution.chain.species.url);    
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
      evolution2: responseEvolution2,
      with: response.weight,
      height: response.height,
      stats: response.stats,
      abilities: response.abilities,
      moves: response.moves,
      abilitiesDetails: responseAbilities,
    };
    setPockemon(data);
  };
    const firstItemType = pockemon?.type[0];

  // Mapear 'type' a colores específicos.
  const backgroundColor = firstItemType
    ? colors.typesPokemon[firstItemType]
    : "white";
  
  const pokemonPagesNav = () => {
    switch (PockemonPages) {
      case 1:
        return (
          <View style={{ marginTop:22,height: "100%", marginHorizontal: 20 }}>
            {pockemon.description && (
              pockemon.description.map((item, index) => (
                <Text style={{ textAlign: "center", fontSize: 20 }} key={index}>
                  {item.flavor_text
                    .replace(/\n/g, " ")
                    .replace(/\f/g, " ")
                    .replace(/\'/g, "'")}
                </Text>
              ))
            )}
            <View>
              <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>Profile</Text>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                  <Text style={{textAlign:"center", fontSize:20}}>Height</Text>
                  <Text style={{textAlign:"center", fontSize:20}}>{pockemon.height}PL</Text>
                </View>
                <View>
                  <Text style={{textAlign:"center", fontSize:20}}>Weight</Text>
                  <Text style={{textAlign:"center", fontSize:20}}>{pockemon.with}PL</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>Abilities</Text>
              {
                pockemon.abilities.map((item, index) => (
                  <View style={{ flexDirection: "row" }} key={index}>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                      {item.ability.name}
                    </Text>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                      {pockemon.abilitiesDetails[index].effect}
                    </Text>
                  </View>
                ))
              }              
            </View>
          </View>
        );
      case 2:
        return (
          <View style={{marginHorizontal:20}}>
            <View >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Stats
              </Text>
              <View>
                {
                  pockemon.stats.map((item, index) => (
                    <View style={{ flexDirection: "row" }} key={index}>
                      <Text style={{ textAlign: "center", fontSize: 20 }}>
                        {item.stat.name}
                      </Text>
                      <Text style={{ textAlign: "center", fontSize: 20 }}>
                        {item.base_stat}
                      </Text>
                    </View>
                  ))
                }                
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={{marginHorizontal:20}}>            
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Evolution
              </Text>
              {pockemon.evolution.chain.evolves_to.map((item, index) => (
                <View style={{ flexDirection: "row" }} key={index}>
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {item.species.name}
                  </Text>                  
                  <Image source={{ uri: item.species.url }} />
                </View>
              ))}
              {
                pockemon.evolution.chain.evolves_to[0].evolves_to.map((item, index) => (
                  <View style={{ flexDirection: "row" }} key={index}>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                      {item.species.name}
                    </Text>                                        
                  </View>
                ))
              }
            </View>
          </View>
        );
      default:
        return (
          <View>
            <Text>Page 1</Text>
          </View>
        );
    }
  }
    
  return (
    <View>
      {pockemon ? (
        <ScrollView>
          <View
            style={[
              pockemon.type[0] === firstItemType && { backgroundColor },
              ]}
          >
            <View style={ScreenPokemon.container}>
              <View
                style={{
                  marginHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={ScreenPokemon.title}>{pockemon.name}</Text>
                <Text style={ScreenPokemon.id}>
                  #{pockemon.id.toString().padStart(3, "0")}
                </Text>
              </View>
              <View style={ScreenPokemon.typesContainer}>
                {pockemon.type.map((item, index) => (
                  <Text
                    key={index}
                    style={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      paddingVertical: 5,
                      paddingHorizontal: 25,
                      borderRadius: 22,
                      color: "white",
                    }}
                  >
                    {item}
                  </Text>
                ))}
              </View>
              <Image
                source={{ uri: pockemon.image }}
                style={ScreenPokemon.image}
              />
            </View>
            <View style={[ScreenPokemon.main]}>
              <View style={NavPockemon.container}>
                <Button
                  style
                  title="About"
                  onPress={() => setPockemonPages(1)}
                />
                <Button title="Stats" onPress={() => setPockemonPages(2)} />
                <Button title="Evolution" onPress={() => setPockemonPages(3)} />                
              </View>
              <View style={{height:"100%", marginVertical:20}}>{pokemonPagesNav()}</View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
}
