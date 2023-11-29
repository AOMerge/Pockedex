import React from "react";
import { TextInput, Button, View } from "react-native";

export default function LoginForm() {
    return (
      <View>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <Button title="Login" />
      </View>
    );
}