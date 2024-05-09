import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { PockemonStatsStyle as Style } from "../../../styles/styles";

export function Stats({ stats }: { stats: any }) {
    
  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.title}>Stats</Text>
        <View>
          {stats.map((item: any, index: number) => (
            <View style={{ flexDirection: "row" }} key={index}>
              <View
                style={[Style.bodyContainer, { width: `${item.base_stat}%` }]}
              >
                <Text style={Style.subTitle}>{item.stat.name}: </Text>
                <Text style={Style.text}>{item.base_stat}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
