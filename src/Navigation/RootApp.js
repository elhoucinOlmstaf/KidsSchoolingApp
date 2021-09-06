import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SplashScreen from "../Screens/SplashScreen";
import StartScreen from "../Screens/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
