import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { PokemonBodyStyle } from "../../../styles/styles";

export function Body({ children }: { children: any }) {
  return <View style={PokemonBodyStyle as StyleProp<ViewStyle>}>{children}</View>;
}
