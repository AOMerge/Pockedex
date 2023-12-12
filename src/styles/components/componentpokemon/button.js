import { StyleSheet } from "react-native";
import { ColorsElements as color, ColorsElementsolors } from "../../utils/colors/colors";


export const ButtonComponent = StyleSheet.create({
  container: {
    backgroundColor: "",    
    width: 80,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    paddingBottom: 20,
    opacity: 0.45,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activate: {
    borderBottomWidth: 3,
    opacity: 1,
  },
});
