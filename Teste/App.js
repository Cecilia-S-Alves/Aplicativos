//Aulas de Soluções Mobile, 3ª fase do técnico de informática 2025A
//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
 
    <NavigationContainer>
      <BottomTab.Navigator  initialRouteName="home" screenOptions={{tabBarActiveTintColor:'#7575e0', tabBarActiveBackgroundColor:'#fad2dd', tabBarInactiveTintColor:'#fad2dd', headerStyle:{ backgroundColor:'#fad2dd'}, headerTintColor:'#a8a8ed', headerTitleAlign:'left'}}>
        <BottomTab.Screen name="login" component={Login}/> 
        <BottomTab.Screen name="home" component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
 
  );
}const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
