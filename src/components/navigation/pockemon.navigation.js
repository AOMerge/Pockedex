import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pockedex from "../screens/pockedex.screens";
import { TouchableOpacity } from "react-native";
import PockemonScreen from "../screens/pockemon.screens";
import Icon from "react-native-vector-icons/AntDesign";
import { HeartIcon } from "../pokemon/headerRigth";
import { useBackgroundColor } from "../../hooks/backgroundColor.hook";

const Stack = createStackNavigator();

export function PokedexNavigation() {
  const { backgroundColor, changeBackgroundColor } =
    useBackgroundColor("hola");  
  const [Heart, setHeart] = useState(false);
  console.log("b1", backgroundColor);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokede"
        component={Pockedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={ PockemonScreen }
        options={{
          title: "",
          headerStyle: {
            backgroundColor: `${backgroundColor || "red"}`,
          },
          headerRight: () => <HeartIcon heart={Heart} setHeart={setHeart} />,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

