import { StyleSheet } from "react-native";
import { ButtonComponent } from "./components/componentpokemon/button"
import {ColorsElements} from "./utils/colors/colors"
import { PockemonProfile, PockemonAbilities, PockemonDescription } from "./components/componentpokemon/about";
import { PokemonBody } from"./components/componentpokemon/body"
import { PockemonNavigation } from "./components/componentpokemon/navigation";
import { PokemonStats } from "./components/componentpokemon/stats";
import { PokemonEvolution } from "./components/componentpokemon/evolution";
/** **/
export const colors = ColorsElements ;
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
    header:{
      container:{
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        zIndex: 1,
      },
      Text:{
        fontSize: 20,
        color: "#000",
      },
      headerPokemon:{
        
      }
    },
    hola:  StyleSheet.create({
      container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        zIndex: 1,
        flex: 1,
      },
      Text: {
        fontSize: 20,
        color: "#000",
      },
    })

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
export const HeaderPockemon = StyleSheet.create(styles.componets.header);
export const PockemonButtonStyle = StyleSheet.create(
  ButtonComponent
);
export const PockemonProfileStyle = StyleSheet.create(PockemonProfile);
export const PockemonAbltiesStyle = StyleSheet.create(PockemonAbilities);
export const PockemonDescriptionStyle = StyleSheet.create(PockemonDescription);
export const PokemonBodyStyle = StyleSheet.create(PokemonBody.container);
export const PockemonNavigationStyle = StyleSheet.create(PockemonNavigation.container);
export const PockemonStatsStyle = StyleSheet.create(PokemonStats );
export const PockemonEvolutionStyle = StyleSheet.create(PokemonEvolution);
