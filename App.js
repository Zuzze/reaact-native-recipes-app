// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// import { enableScreens } from "react-native-screens";

import Navigator from "./navigation/Navigator";
import itemsReducer from "./store/reducers/items";

// enableScreens is a tool to improve performance using native Fragment (android) and UIViewController (iOS) screens
// https://github.com/software-mansion/react-native-screens
// enableScreens();

// Redux setup
const rootReducer = combineReducers({
  items: itemsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
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

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
