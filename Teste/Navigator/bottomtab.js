//navegação bottom tab

import Login from "./Screens/login";
import Home from "./Screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
 
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="login" component={Login}/> 
        <BottomTab.Screen name="home" component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
 
  );
}
