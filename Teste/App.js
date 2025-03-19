//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";
//Use os dois abaixo para trocar de tela rapidamente!
// <Home/>
// <Login/>
export default function App() {
  return (
    <View style={styles.container}>
    <Login/>
    </View>
  );
}const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
