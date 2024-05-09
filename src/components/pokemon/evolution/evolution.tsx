import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
import { PockemonEvolutionStyle as style } from "../../../styles/styles";
import { getPokemonDetailsByUrlApi } from "../../../api/v1/get";
import usePokemonGet from "@hooks/v1/usePokemonGet";
import getHTTP from "~/api/v1/getHTTP";

const apiurl = process.env.EXPO_PUBLIC_API_URL;

export function Evolution({ evolution }: { evolution: any }) {

  const { evolutionChain, evolutionChain2 } =
    usePokemonGet.usePockemonEvolutionImage(evolution, apiurl);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Evolution</Text>
      </View>
      <View>
        {evolution.chain.evolves_to.map((item: any, index: number) => (
          <View style={style.bodyContainer} key={index}>
            {evolutionChain && (
              <Image style={style.image} source={{ uri: evolutionChain }} />
            )}
            <Text style={style.subTitle}>{item.species.name}</Text>
          </View>
        ))}
      </View>
      <View>
        {evolution.chain.evolves_to[0] &&
          evolution.chain.evolves_to[0].evolves_to.map(
            (item: any, index: number) => (
              <View style={style.bodyContainer} key={index}>
                {evolutionChain2 && (
                  <Image
                    style={style.image}
                    source={{ uri: evolutionChain2 }}
                  />
                )}
                <Text style={style.subTitle}>{item.species.name}</Text>
              </View>
            )
          )}
      </View>
    </View>
  );
}
