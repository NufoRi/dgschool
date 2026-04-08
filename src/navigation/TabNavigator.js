import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStackNavigator, MainStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ios from "../screens/Ios";
import Android from "../screens/Android";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#384053",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="video-stabilization"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ios"
        component={Ios}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Android"
        component={Android}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;