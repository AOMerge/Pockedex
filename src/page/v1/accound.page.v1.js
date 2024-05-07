import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";

export default function Accound() {
  return (
    <SafeAreaView>
      {/* img */}
      <Text>name</Text>
      <Text>email</Text>
      <TextInput placeholder="email" />
      <Text>password</Text>
      <TextInput placeholder="password" />
      <Text>phone</Text>
      <TextInput placeholder="phone" />
    </SafeAreaView>
  );
}
