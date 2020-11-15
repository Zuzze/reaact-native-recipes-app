import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
// import { enableScreens } from "react-native-screens";

import Navigator from "./navigation/Navigator";

// enableScreens is a tool to improve performance using native Fragment (android) and UIViewController (iOS) screens
// https://github.com/software-mansion/react-native-screens
// enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // keeps splash screen open until fonts loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Navigator />;
}

const styles = StyleSheet.create({});
