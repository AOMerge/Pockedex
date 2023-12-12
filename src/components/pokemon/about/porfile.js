import React from "react";
import { View, Text } from "react-native";
import { PockemonProfileStyle as style } from "../../../styles/styles";

export function Profile({ height, weight }) {
  return (
    <View style={style.container}>
      <Text
        style={style.title}
      >
        Profile
      </Text>
      <View
        style={style.bodycontainer}
      >
        <View>
          <Text style={style.subTitle}>Height</Text>
          <Text style={style.text2}>{height}</Text>
        </View>
        <View>
          <Text style={style.subTitle}>Weight</Text>
          <Text style={style.text2}>{weight}</Text>
        </View>
      </View>
    </View>
  );
}
