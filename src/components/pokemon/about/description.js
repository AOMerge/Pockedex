import React from "react";
import { View, Text } from "react-native";
import { PockemonDescriptionStyle as style } from "../../../styles/styles";

export function Description ({description}) {
    return (
      <View style={style.container}>
        <Text style={style.title}>Description</Text>
        <Text style={style.Text}>
          {description[0].flavor_text +
            description[1].flavor_text +
            description[2].flavor_text}
        </Text>
        <Text style={style.Text}>
          {description[4].flavor_text +
            description[5].flavor_text +
            description[6].flavor_text}
        </Text>
      </View>
    );
}