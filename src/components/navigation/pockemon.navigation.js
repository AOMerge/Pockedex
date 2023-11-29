import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pockedex from "../screens/pockedex.screens";
import PockemonScreen from "../screens/pockemon.screens";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

export function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokede"
        component={Pockedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PockemonScreen}
        options={{
          title: "",
          headerStyle: { backgroundColor: "blue", height:42 },
          headerRight: () => (
            <Icon name="heart" color={"white"} size={22} />
          ),
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
