/**
 * Note that in React Navigator 3+ you have to install and import navigators separately
 * import { createStackNavigator } from 'react-navigation-stack'
 * import { createDrawerNavigator } from 'react-navigation-drawer';
 * import { createBottomTabNavigator } from 'react-navigation-tabs';
 */
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform, Image, StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ItemScreen from "../screens/ItemScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

import Theme from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

import ThemeTitleText from "../components/ThemeTitleText";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  // initialRouteName: "Categories", // first pair is default
  // mode: "modal", // card (default)
  // set up global nav style here
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Theme.header : Theme.background
  },
  // headerTransparent: true,
  /*headerBackground: () => (
    <Image
      style={StyleSheet.absoluteFill}
      source={require("../assets/img/green.png")}
    />
  ),*/

  headerTintColor: Platform.OS === "android" ? Theme.background : Theme.primary,
  // Header text
  headerTitleStyle: {
    fontFamily: Theme.titleFontFamily
  },
  // Back button text
  headerBackTitleStyle: {
    fontFamily: Theme.fontFamily
  },
  headerTitle: "Anonymous Screen"
};

// Stack Navigator is a "stack" of screens that you can go back by pressing back button on top
const Navigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Recipes: CategoryScreen,
    Recipe: { screen: ItemScreen, navigationOptions: {} }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Items: ItemScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const bottomTabConfig = {
  Categories: {
    screen: Navigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Theme.primary // android
    },
    tabBarLabel:
      Platform.OS === "android" ? (
        <ThemeTitleText>Recipes</ThemeTitleText>
      ) : (
        "Recipes"
      )
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Theme.primary // android
    },
    tabBarLabel:
      Platform.OS === "android" ? (
        <ThemeTitleText>Favorites</ThemeTitleText>
      ) : (
        "Favorites"
      )
  }
};

// To create native like style for android, use Material style

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeColor: Theme.headerText,
        inactiveColor: Theme.inactiveColor,
        shifting: true, // animated effect for android transition
        barStyle: {
          backgroundColor: Theme.primary
        }
      })
    : createBottomTabNavigator(bottomTabConfig, {
        // ios only
        tabBarOptions: {
          labelStyle: {
            fontFamily: Theme.titleFontFamily
          },
          activeTintColor: Theme.primary,
          inactiveTintColor: Theme.fontColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Favorites: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Recipes"
      }
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Theme.primary,
      labelStyle: {
        fontFamily: Theme.fontFamily
      }
    }
  }
);

// Note that basic export is not enough, you need createAppContainer
// App has a root navigator (where app starts) but you can nest new navigators inside the root navigator
export default createAppContainer(MainNavigator);
