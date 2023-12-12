import React from "react";
import { View, Text } from "react-native";
import { PockemonAbltiesStyle as style } from "../../../styles/styles";
 export function Abilities({ pockemon }) {
    return (
      <View style={style.container}>
        <Text
          style={style.title}
        >
          Abilities
        </Text>
        {pockemon.abilities.map((item, index) => (
          <View style={style.bodycontainer} key={index}>
            <Text style={style.subTitle}>
              {item.ability.name}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              {pockemon.abilitiesDetails[index].effect}
            </Text>
          </View>
        ))}
      </View>
    );
 }  