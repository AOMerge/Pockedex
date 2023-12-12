import { StyleSheet } from "react-native";
import { ColorsElements as colors } from"../../utils/colors/colors"

export const PockemonNavigation = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 0,
    zIndex: 1,
    // border en el bottom
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
    borderStyle: "solid",    
  },

});
