import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/StackNavigator";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
