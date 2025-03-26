//Aulas de Soluções Mobile, 3ª fase do técnico de informática 2025A
//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/> 
        <Stack.Screen name="home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
