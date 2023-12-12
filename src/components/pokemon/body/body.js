import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PokemonBodyStyle } from "../../../styles/styles";

export function Body({ children }) {
  return <View style={PokemonBodyStyle}>{children}</View>;
}
