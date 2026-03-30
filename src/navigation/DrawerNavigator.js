import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerActiveTintColor: "white",
      drawerActiveBackgroundColor: "#FF6347",
      drawerStyle: {
        width: "70%",
      },
    }}
  >
    <Drawer.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={24} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="About"
      component={AboutStackNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="video-stabilization"
            size={24}
            color={color}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
