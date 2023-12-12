import { StyleSheet } from "react-native";
import { ColorsElements as Colors } from "../../utils/colors/colors";

export const PokemonEvolution = StyleSheet.create({
    container: {
        paddingVertical: 30,
        borderBlockColor: "black",
        borderTopEndRadius: 39,
        borderTopStartRadius: 39,
        minHeight: 400,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,        
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.white,
        marginBottom: 10,
    },
    bodyContainer:{
        flexDirection: "column",
        jualContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 20,
        width: "80%",
    },
    image: {
        width: 200,
        height: 200,
        paddingHorizontal: 20,
        alignSelf: "center",
        marginVertical: 20,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 20,

    },
    text: {
        fontSize: 19,
        color: Colors.white,
        fontWeight: "bold",
    },
});
