import React from "react";
import { styles, colors, list_pockemons } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";

/**
 * Renders a list of pokemons using FlatList component.
 * @param {Object} props - The component props.
 * @param {Array} props.pokemons - The array of pokemons to be rendered.
 * @param {boolean} props.isloading - A boolean indicating if the list is currently loading.
 * @param {boolean} props.isNext - A boolean indicating if there are more pokemons to be loaded.
 * @param {number} props.isAfter - The index of the item to scroll to.
 * @returns {JSX.Element} - The rendered component.
 */
export default function ListPokemons({ pokemons, nextUrl, afterUrl }: any) {
  return (
    <FlatList
      data={pokemons}
      contentContainerStyle={list_pockemons.container}
      renderItem={({ item }) => <Pockecard item={item} />}
      ListEmptyComponent={loaddinglistpockemons}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      onEndReached={nextUrl ? nextUrl : () => {}}
      onEndReachedThreshold={5}
      // Remove the scrollToIndex prop
      scrollToIndex={afterUrl}
      ListFooterComponent={
        nextUrl && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

/**
 * React component for rendering a Pokemon card.
 * @param {Object} props - The component props.
 * @param {Object} props.item - The Pokemon object to render.
 * @returns {JSX.Element} - The rendered component.
 */
const Pockecard = React.memo( ({ item }: any) => {
  // Extraer el tipo del primer objeto o establecer a null si el array está vacío.
  const firstItemType = item?.type;
  const navigation = useNavigation();


  // Mapear 'type' a colores específicos.
  const backgroundColor = firstItemType
    ? colors.typesPokemon[firstItemType] || "black"
    : "white";

  return (
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Pokemon", { id: item.id });}}>
      <View
        style={[
          list_pockemons.Pockecard,
          item.type === firstItemType && { backgroundColor },
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={list_pockemons.Pockecard__image}
        />        
        <Text style={list_pockemons.Pockecard_name}>{item.name}</Text>
        <Text style={list_pockemons.Pockecard_order}>#0{item.order}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

/**
 * Renders a loading message when there are no elements in the list.
 * @returns {JSX.Element} A React component that displays a loading message.
 */
const loaddinglistpockemons = () => (
  <View style={list_pockemons.loaddinglistpockemons}>
    <Text style={{ fontSize: 18 }}>No hay elementos en la lista</Text>
  </View>
);
