// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// comment out in Production!!
// import { composeWithDevTools } from "redux-devtools-extension";

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

let store = createStore(rootReducer);
/*if (__DEV__) {
  //  dev
  console.log("Development mode active");
  store = createStore(rootReducer, composeWithDevTools());
}*/
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
