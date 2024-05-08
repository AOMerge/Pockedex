import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { createStackNavigator } from "@react-navigation/stack";
import Pockedex from "../../page/v1/pockedex.page.v1";
import { TouchableOpacity } from "react-native";
import PockemonScreen from "../../page/v1/pockemon.page.v1";
import Icon from "react-native-vector-icons/AntDesign";
import { HeartIcon } from "../pokemon/headerRigth";
import { useBackgroundColor } from "../../hooks/backgroundColor.hook";

const Stack = createStackNavigator();

export function PokedexNavigation() {
  const { backgroundColor, changeBackgroundColor } = useBackgroundColor("hola");
  const [Heart, setHeart] = useState(false);
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
