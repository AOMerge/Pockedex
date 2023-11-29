import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import styles from "../../styles/styles";

export default function About({ description}) {
    return (
      <View style={{ marginTop: 22, height: "100%", marginHorizontal: 20 }}>
        {description && (
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            {description.flavor_text_entries[0].flavor_text
              .replace(/\n/g, " ")
              .replace(/\f/g, " ")
              .replace(/\'/g, "'")}
          </Text>
        )}
      </View>
    );
}