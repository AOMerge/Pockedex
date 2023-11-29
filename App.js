import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import  LoginForm  from "./src/components/loginForm";
import TabNavigator from "./src/components/navigation/navigation.coponents";

export default function App() {
  return (
    <View style={styles.container}>                
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: "red",
  },
});
