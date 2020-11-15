# :iphone: React Native App - Frontend boilerplate with customizable theme config and Redux

This React Native app is configured for both Android and iOS. This sample app can be used as a template in any app that has a structure like this:

- Categories (e.g. Hamburgers, Salads, Pizza)
- Items (elements inside a category, array of items)
- Item details (a piece of item, e.g. Pizza Margharita)
- User can filter items
- User can add items as favorites

All styles are connected to UI using `constants/theme.js` file and by editing this file the style of the whole app will update on all screens.

If you want to add custom fonts, remember to load them in App.js first. This sample application uses **_Montserrat_** as a custom font.

The data setup in Redux is mock data and can be connected to actual data source.

## Screens

- :briefcase: Categories Overview (Grid)
- :file_folder: Items inside a category (FlatList)
- :page_facing_up: Item Details
- :bookmark: Filters
- :star: Favorites (FlatList)

## How to run this project

```
yarn install
yarn start
```

## How this project was configured

Create project

```
expo init react-native-recipes-app
```

Basic config

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

State navigation and state management

```
yarn add @react-navigation/native react-navigation-stack react-navigation-tabs react-navigation-drawer react-navigation-header-buttons react-navigation-material-bottom-tabs react-native-paper react-native-vector-icons redux react-redux
```

Optional dev tools

```
yarn add redux-devtools-extension --dev
```

## External Documention

- [Expo (Like CRA for React but for React Native)](https://docs.expo.io/)
- [React Navigation (Native)](https://reactnavigation.org/docs/getting-started)
