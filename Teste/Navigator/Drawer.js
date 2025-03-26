// navegação em drawer
import Login from "./Screens/login";
import Home from "./Screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
 
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="login" component={Login}/> 
        <Drawer.Screen name="home" component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
 
  );
}
