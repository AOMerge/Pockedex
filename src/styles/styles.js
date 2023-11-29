import { StyleSheet } from "react-native";

/**
 * Defines a set of color constants for use in the application.
 * @typedef {Object} Colors
 * @property {string} white - The color white.
 * @property {string} black - The color black.
 * @property {Object.<string, string>} typesPokemon - The colors for different types of Pokemon.
 * @property {string} typesPokemon.grass - The color for grass type Pokemon.
 * @property {string} typesPokemon.fire - The color for fire type Pokemon.
 * @property {string} typesPokemon.water - The color for water type Pokemon.
 * @property {string} typesPokemon.bug - The color for bug type Pokemon.
 * @property {string} typesPokemon.normal - The color for normal type Pokemon.
 * @property {string} typesPokemon.poison - The color for poison type Pokemon.
 * @property {string} typesPokemon.electric - The color for electric type Pokemon.
 * @property {string} typesPokemon.ground - The color for ground type Pokemon.
 * @property {string} typesPokemon.fairy - The color for fairy type Pokemon.
 * @property {string} typesPokemon.fighting - The color for fighting type Pokemon.
 * @property {string} typesPokemon.psychic - The color for psychic type Pokemon.
 * @property {string} typesPokemon.rock - The color for rock type Pokemon.
 * @property {string} typesPokemon.ghost - The color for ghost type Pokemon.
 * @property {string} typesPokemon.ice - The color for ice type Pokemon.
 * @property {string} typesPokemon.dragon - The color for dragon type Pokemon.
 * @property {string} typesPokemon.dark - The color for dark type Pokemon.
 * @property {string} typesPokemon.steel - The color for steel type Pokemon.
 * @property {string} typesPokemon.flying - The color for flying type Pokemon.
 */
export const colors = {
  white: "#fff",
  black: "#000",
  typesPokemon: {
    grass: "#48D0B0",
    fire: "#FFA07A",
    water: "#00BFFF",
    bug: "#9ACD32",
    normal: "#C0C0C0",
    poison: "#800080",
    electric: "#FFFF00",
    ground: "#DEB887",
    fairy: "#FF69B4",
    fighting: "#FF0000",
    psychic: "#FF1493",
    rock: "#A52A2A",
    ghost: "#000080",
    ice: "#00FFFF",
    dragon: "#0000FF",
    dark: "#000000",
    steel: "#708090",
    flying: "#87CEFA",
  },
};

/**
 * Defines the styles for the AwesomeProject application.
 * @typedef {Object} Styles
 * @property {Object} home - The home style object.
 * @property {Object} screens - The screens style object.
 * @property {Object} screens.pockemon - The pockemon screen style object.
 * @property {Object} screens.pockemon.container - The container style object for the pockemon screen.
 * @property {Object} screens.pockemon.title - The title style object for the pockemon screen.
 * @property {Object} screens.pockemon.id - The id style object for the pockemon screen.
 * @property {Object} screens.pockemon.image - The image style object for the pockemon screen.
 * @property {Object} screens.pockemon.typesContainer - The types container style object for the pockemon screen.
 * @property {Object} screens.pockemon.type - The type style object for the pockemon screen.
 * @property {Object} screens.pockemon.description - The description style object for the pockemon screen.
 * @property {Object} screens.pockemon.loading - The loading style object for the pockemon screen.
 * @property {Object} componets - The components style object.
 * @property {Object} componets.list_pockemons - The list pockemons style object.
 * @property {Object} componets.list_pockemons.container - The container style object for the list pockemons.
 * @property {Object} componets.list_pockemons.Pockecard - The Pockecard style object for the list pockemons.
 * @property {Object} componets.list_pockemons.loaddinglistpockemons - The loading list pockemons style object for the list pockemons.
 * @property {Object} componets.list_pockemons.Pockecard__image - The Pockecard image style object for the list pockemons.
 * @property {Object} componets.list_pockemons.Pockecard_order - The Pockecard order style object for the list pockemons.
 * @property {Object} componets.list_pockemons.Pockecard_name - The Pockecard name style object for the list pockemons.
 * @property {Object} componets.navigation - The navigation style object.
 */
export const styles = StyleSheet.create({
  home: {
    minWidth: "100%",
    minHeight: "100%",
  },
  screens: {
    pockemon: {
      container: {
        height: 265,
      },
      title: {
        fontSize: 40,
        fontWeight: "bold",
        color: colors.white,
      },
      id: {
        fontSize: 25,
        color: colors.white,
        opacity: 0.8,
      },
      image: {
        position: "relative",
        top: -10,
        width: 200,
        height: 200,
        alignSelf: "center",
        marginVertical: 20,
        zIndex: 1,
      },
      typesContainer: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
        marginHorizontal: 20,
      },
      type: {
        color: colors.white,
        backgroundColor: colors.typesPokemon.grass,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        fontSize: 15,
      },
      description: {
        fontSize: 15,
        color: colors.black,
        opacity: 0.5,
      },
      main: {
        paddingVertical: 50,
        backgroundColor: "#fff",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,        
        minHeight: 400,
      },
      loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      },
    },
  },
  componets: {
    list_pockemons: {
      container: {
        paddingHorizontal: 5,
        paddingBottom: 20,
        position: "static",
        paddingTop: 20,
      },
      Pockecard: {
        margin: 10,
        marginVertical: 10,
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        flex: 1,
        width: 155,
        height: 120,
        borderRadius: 15,
        position: "static",
        padding: 10,
        overflow: "hidden",
      },
      loaddinglistpockemons: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      },
      Pockecard__image: {
        width: 105,
        height: 105,
        position: "absolute",
        bottom: -10,
        left: 60,
        opacity: 0.45,
      },
      Pockecard_order: {
        position: "absolute",
        top: 10,
        right: 15,
        color: "#fff",
        fontSize: 15,
        opacity: 0.75,
      },
      Pockecard_name: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    navigation: {
      container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        zIndex: 1,
      },
      Text: {
        fontSize: 20,
        color: "#000",
      },
    },
  },
});

/**
 * Creates a StyleSheet object for the list_pockemons component styles.
 * @function
 * @param {Object} styles - The styles object for the list_pockemons component.
 * @returns {Object} - The StyleSheet object for the list_pockemons component styles.
 */
export const list_pockemons = StyleSheet.create(styles.componets.list_pockemons);
export const ScreenPokemon = StyleSheet.create(styles.screens.pockemon);
export const NavPockemon = StyleSheet.create(styles.componets.navigation);
