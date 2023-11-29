import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import styles from "../../styles/styles";

export default function NavPockemon({ setPockemonPages }) {
  return (
    <View style>
      <Button title="Go back" onPress={() => setPockemonPages(1)} />
      <Button title="Go back" onPress={() => setPockemonPages(2)} />
      <Button title="Go back" onPress={() => setPockemonPages(3)} />
      <Button title="Go back" onPress={() => setPockemonPages(4)} />
    </View>
  );
}