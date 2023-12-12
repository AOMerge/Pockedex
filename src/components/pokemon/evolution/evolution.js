import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
const apiurl = process.env.EXPO_PUBLIC_API_URL;
import  { PockemonEvolutionStyle as style } from "../../../styles/styles";
import { getPokemonDetailsByUrlApi } from "../../../api/get";

export function Evolution({ evolution }) {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [evolutionChain2, setEvolutionChain2] = useState(null);
  useEffect(() => {
    getPockemonEvolutionImage();
  }, []);
  const getPockemonEvolutionImage = async () => {    
    if (evolution.chain.evolves_to[0].species.name ) {
      const evolutionChain = await getPokemonDetailsByUrlApi(
        `${apiurl}/pokemon/${evolution.chain.evolves_to[0].species.name}`
      );
      setEvolutionChain(
        evolutionChain.sprites.other["official-artwork"].front_default
      );
    }
    if( evolution.chain.evolves_to[0].evolves_to[0] ) {
      const evolutionChain2 = await getPokemonDetailsByUrlApi(
        `${apiurl}/pokemon/${evolution.chain.evolves_to[0].evolves_to[0].species.name}`
      );
      setEvolutionChain2(
        evolutionChain2.sprites.other["official-artwork"].front_default
      );
    }
  };  
  
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Evolution</Text>
        {evolution.chain.evolves_to.map((item, index) => (
          <View style={style.bodyContainer} key={index}>
            {evolutionChain && (
              <Image style={style.image} source={{ uri: evolutionChain }} />
            )}
            <Text style={style.subTitle}>{item.species.name}</Text>
          </View>
        ))}
        {evolution.chain.evolves_to[0] &&
          evolution.chain.evolves_to[0].evolves_to.map((item, index) => (
            <View style={style.bodyContainer} key={index}>
              {evolutionChain2 && (
                <Image style={style.image} source={{ uri: evolutionChain2 }} />
              )}
              <Text style={style.subTitle}>{item.species.name}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}
