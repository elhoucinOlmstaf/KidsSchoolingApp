import { Dimensions, Text, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const SplashScreebLoading = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <LottieView
        style={{
          width: 400,
          height: 300,
          position: "absolute",
          top: height - height + 100,
        }}
        autoPlay
        source={require("../LottieFiles/24318-progress-loading-bar.json")}
      />
    </View>
  );
};

export default SplashScreebLoading;
