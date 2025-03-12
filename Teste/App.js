//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";

export default function App() {
  return (
    <View style={styles.container}>
    <Home></Home>
    </View>
  );
}const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
