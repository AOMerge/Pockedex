import React, { useEffect, useState, useCallback } from "react";
import { styles, colors, list_pockemons } from "../../styles/styles";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";

export default function ListPokemons({ pokemons, isloading, isNext, isAfter }) {
  return (
    <FlatList
      data={pokemons}
      contentContainerStyle={list_pockemons.container}
      renderItem={({ item }) => <Pockecard item={item} />}
      ListEmptyComponent={loaddinglistpockemons}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      onEndReached={isNext && isloading}
      onEndReachedThreshold={5}
      scrollToIndex={isAfter}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="medium"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}
