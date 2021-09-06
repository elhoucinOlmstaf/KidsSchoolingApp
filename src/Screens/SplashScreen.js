import { Dimensions, ImageBackground } from "react-native";
import React, { useEffect } from "react";

import SplashScreebLoading from "../Lottie/SplashScreebLoading";

const { width, height } = Dimensions.get("window");
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("StartScreen");
    }, 1000);
    return () => clearTimeout();
  }, []);
  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
      }}
      source={require("../Images/splashscreen.png")}
    >
      <SplashScreebLoading />
    </ImageBackground>
  );
};

export default SplashScreen;
