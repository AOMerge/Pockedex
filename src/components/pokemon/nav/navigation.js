import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PockemonNavigationStyle as style } from "../../../styles/styles";

export function NavPockemon({ children }) {
  return <View style={style}>{children}</View>;
}