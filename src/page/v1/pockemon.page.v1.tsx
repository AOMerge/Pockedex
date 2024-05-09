import React from "react";
import { View, ScrollView } from "react-native";
import PokemonComponent from "@components/pokemon/component";
import { LoadingPokemon } from "@components/pokemon/loadingPokemon"; // eslint-disable-line no-unused-vars
import hooks from "@hooks/v1/usePokemonGet";
import { NavigationProp, RouteProp } from "@react-navigation/native";

const apiurl = process.env.EXPO_PUBLIC_API_URL;

type ParamList = {
  Pokemon: {
    id: number | undefined ; // Cambiado de any a number para más especificidad, ajusta según necesario
  };
};

type PokemonProps = {
  route: RouteProp<ParamList, "Pokemon"> | any;
  navigation: NavigationProp<ParamList> ;
};

const Pockemon: React.FC<PokemonProps> = ({ route, navigation }) => {
  const id = route.params.id ?? 0;
  const Pockemon = new PokemonComponent();

  const { pockemon, PockemonPages, setPockemonPages } = hooks.useAllDataPokemon(
    id,
    apiurl
  );

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
};

export default Pockemon;
