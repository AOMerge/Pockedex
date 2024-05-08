import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Feather";
import Favorites from "../../page/v1/favorites.page.v1";
import Accound from "../../page/v1/accound.page.v1";
import { PokedexNavigation } from "./pockemon.navigation";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer
      style={{ backgroundColor: "red", height: "200px", color: "#000" }}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          style={{ backgroundColor: "#fff", color: "#000", top: -15 }}
          component={Favorites}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size, focused }) => (
              <Icon2 name="home" color={color} size={size} focused={focused} />
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
            tabBarIcon: () => renderPokeball(),
            headerTitleStyle: stylesHeader.Text,
            headerStyle: stylesHeader.container,
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Profile"
          style={{ backgroundColor: "#fff", color: "#000" }}
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

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 60, height: 60, top: -7 }}
    />
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
