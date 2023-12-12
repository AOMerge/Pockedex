import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScreenPokemon as HeaderPokemon } from "../../../styles/styles";

export function Header({ pockemon }) {
  return (
    <View style={HeaderPokemon.container}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={HeaderPokemon.title}>{pockemon.name}</Text>
        <Text style={HeaderPokemon.id}>
          #{pockemon.id.toString().padStart(3, "0")}
        </Text>
      </View>
      <View style={HeaderPokemon.typesContainer}>
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
      <Image source={{ uri: pockemon.image }} style={HeaderPokemon.image} />
    </View>
  );
}