import React from "react";
import { View, ScrollView } from "react-native";
import PokemonComponent from "@components/pokemon/component";
import { LoadingPokemon } from "@components/pokemon/loadingPokemon"; // eslint-disable-line no-unused-vars
import hooks from "@hooks/v1/usePokemonGet";

const apiurl = process.env.EXPO_PUBLIC_API_URL;

export default function Pockemon(
  props: { route: { params: { id: any; }; }; }
) {
  const id = props.route.params.id;
  const Pockemon = new PokemonComponent();    

  const { pockemon, PockemonPages, setPockemonPages } =
    hooks.useAllDataPokemon(id, apiurl);  

  return (
    <View>
      {pockemon ? (
        <ScrollView>
          <View
            style={[
              pockemon?.type && pockemon.type[0] && { backgroundColor: "red" },
            ]}
          >
            <Pockemon.Header pockemon={pockemon} />
            <Pockemon.Body
              PockemonPages={PockemonPages}
              pockemon={pockemon}
              setPockemonPages={setPockemonPages}
            />           
          </View>
        </ScrollView>
      ) : (
        <LoadingPokemon />
      )}
    </View>
  );
}
