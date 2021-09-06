import { StyleSheet, Text, View } from "react-native";

import React from "react";
import RootApp from "./src/Navigation/RootApp";
import SplashScreen from "./src/Screens/SplashScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return <RootApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
