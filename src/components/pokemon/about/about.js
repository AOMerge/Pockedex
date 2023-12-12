import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import styles from "../../../styles/styles";
import { Description } from "./description";
import { Profile } from "./porfile";
import { Abilities } from "./abilities";

export function About({ pockemon }) {    
  
  return (
    <View
      style={{
        marginTop: 22,
        height: "100%",
        marginHorizontal: 20,
      }}
    >
      <Description description={pockemon.description} />
      <Profile height={pockemon.height} weight={pockemon.weight} />
      <Abilities pockemon={pockemon} />
    </View>
  );
}
