//Aulas de Soluções Mobile, 3ª fase do técnico de informática 2025A
//import { ScrollView } from "react-native";
import { View,StyleSheet } from "react-native";
import Login from "./Screens/login";
import Home from "./Screens/home";
import Feed from "./Screens/feed";
import Counter from "./Screens/counter";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


function HomeTabs(){
  const BottomTab = createBottomTabNavigator();
  return(

  <BottomTab.Navigator initialRouteName="feed" screenOptions={{tabBarActiveTintColor:'#7575e0', tabBarActiveBackgroundColor:'#fad2dd', tabBarInactiveTintColor:'#fad2dd', headerStyle:{ backgroundColor:'#fad2dd'}, headerTintColor:'#a8a8ed', headerTitleAlign:'left', animation:"shift"}}>
        <BottomTab.Screen name="home" component={Home} options={{tabBarIcon:()=>(
          <MaterialIcons name="home" size={24} color="#7575e0" />
        )}}/>
        <BottomTab.Screen name="feed" component={Feed} options={{tabBarIcon:()=>(<MaterialIcons name="feed" size={24} color="#7575e0" />)}} />
        <BottomTab.Screen name="counter" component={Counter} options={{tabBarIcon:()=>(<MaterialCommunityIcons name="counter" size={24} color="#7575e0" />)}}/>
      </BottomTab.Navigator>)
}
const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="tabs" component={HomeTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
