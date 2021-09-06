import {
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

import Constants from "expo-constants";
import React from "react";
import StartScreenStyles from "../Styles/StartScreenStyles";

const { width, height } = Dimensions.get("window");

const StartScreen = () => {
  return (
    <ImageBackground
      style={StartScreenStyles.ImageBackground}
      source={require("../Images/splashscreen.png")}
    >
      <View style={StartScreenStyles.Conatiner}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={StartScreenStyles.Image}
            source={require("../Images/SettingIcon.png")}
          />
          <Image
            style={StartScreenStyles.Image}
            source={require("../Images/SoundIcon.png")}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={StartScreenStyles.Image}
            source={require("../Images/buyIcon.png")}
          />
          <Image
            style={StartScreenStyles.Image}
            source={require("../Images/winIcon.png")}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => alert("hellow")}>
          <Image
            style={StartScreenStyles.StartButton}
            source={require("../Images/StartButton.png")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
