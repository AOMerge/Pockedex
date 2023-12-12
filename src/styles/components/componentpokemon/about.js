import { StyleSheet } from "react-native";
import { ColorsElements as Colors } from "../../utils/colors/colors";


export const PockemonProfile = StyleSheet.create({
  container: {
    marginTop: 40,
    marginVertical: 20,
    backgroundColor: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    borderStyle: "solid",
    opacity: 0.75,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {},
  text2: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.white,
  },
  bodycontainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {},
  subTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.black,
  },
});
export const PockemonAbilities = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    opacity: 0.75,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    opacity: 0.75,
    marginBottom: 10,
  },
  bodycontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    borderStyle: "solid",
    padding: 10,
  },
});
export const PockemonDescription = StyleSheet.create({ 
    container: {
      marginVertical:20,
    },
    Text:{
        fontSize: 20,
        color: Colors.black,
        opacity: 0.75,
        marginVertical: 10,
    },
    title:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        opacity: 0.75,
    }
});
