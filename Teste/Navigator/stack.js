//navegação por stack

import Login from "./Screens/login";
import Home from "./Screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Stack() {
  const Stack = createStackNavigator();
  return (
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/> 
        <Stack.Screen name="home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
