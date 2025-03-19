//Aulas de Soluções Mobile, 3ª fase do técnico de informática 2025A
//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";
import 'react-native-gesture-handler';
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
