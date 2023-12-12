import { StyleSheet } from "react-native";
import { ColorsElements as Colors } from "../../utils/colors/colors";

export const PokemonBody = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: Colors.white,
    borderTopEndRadius: 39,
    borderTopStartRadius: 39,
    minHeight: 400,
  },
});
