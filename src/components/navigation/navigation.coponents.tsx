import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Feather";
import Favorites from "../../page/v1/favorites.page.v1";
import Accound from "../../page/v1/accound.page.v1";
import { PokedexNavigation } from "./pockemon.navigation";
const ImgPokebol = require( "../../assets/pokeball.png");

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          component={Favorites}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="home" color={color} size={size} />
            ),
            headerTitleStyle: stylesHeader.Text,
            headerStyle: stylesHeader.container,
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={PokedexNavigation}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                source={ImgPokebol && ImgPokebol}
                style={{ width: 60, height: 60, top: -7 }}
              />
            ),
            headerTitleStyle: stylesHeader.Text,
            headerStyle: stylesHeader.container,
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Accound}
          options={{
            tabBarLabel: "user",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
            headerTitle: "User",
            headerTitleAlign: "center",
            headerTitleStyle: stylesHeader.Text,
            headerStyle: stylesHeader.container,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// generate shadow
const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 55,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  Text: {
    fontSize: 20,
    color: "#000",
  },
});
