import { StyleSheet } from "react-native";
import { ColorsElements as Colors } from "../../utils/colors/colors";

export const PokemonStats = StyleSheet.create({
    container: {
        paddingVertical: 30,
        borderBlockColor: "black",
        borderTopEndRadius: 39,
        borderTopStartRadius: 39,
        minHeight: 400,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,        
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 19,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.white,
    },
    bodyContainer:{
        flexDirection: "row",
        jualContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 19,
        color: Colors.white,
        fontWeight: "bold",
    },
});