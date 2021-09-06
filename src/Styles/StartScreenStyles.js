import { Dimensions, StyleSheet } from "react-native";

import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const StartScreenStyles = StyleSheet.create({
  ImageBackground: {
    width: width,
    height: height,
  },

  Conatiner: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Image: {
    marginTop: Constants.statusBarHeight - 10,
    width: 60,
    height: 60,
  },
  StartButton: {
    marginTop: Constants.statusBarHeight - 10,
    width: 120,
    height: 120,
  },
});
export default StartScreenStyles;
