import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PockemonButtonStyle  as style } from "../../../styles/styles";
export function Button({ title, onPress, Style }) {
  return (
    <TouchableOpacity style={[style.container, Style ]} onPress={() => onPress()}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}