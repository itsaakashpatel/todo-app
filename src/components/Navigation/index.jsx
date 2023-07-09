import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation({ children }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            console.log("ROUTE NAME", route.name);
            if (route.name === "Tasks") {
              iconName = "tasks";
            } else if (route.name === "Form") {
              iconName = "wpforms";
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={24} color="black" />;
          },
          headerShown: false,
        })}
      >
        {children}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
