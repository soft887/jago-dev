import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Home from "../screens/Home";
import LinkingConfiguration from "./LinkingConfiguration";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme !== "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}