/**
 * Note that in React Navigator 3+ you have to install and import navigators separately
 * import { createStackNavigator } from 'react-navigation-stack'
 * import { createDrawerNavigator } from 'react-navigation-drawer';
 * import { createBottomTabNavigator } from 'react-navigation-tabs';
 */
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ItemScreen from "../screens/ItemScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

import Theme from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

// Stack Navigator is a "stack" of screens that you can go back by pressing back button on top
const Navigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Recipes: CategoryScreen,
    Recipe: { screen: ItemScreen, navigationOptions: {} }
  },
  {
    // initialRouteName: "Categories", // first pair is default
    // mode: "modal", // card (default)
    defaultNavigationOptions: {
      // set up global nav style here
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Theme.header : Theme.background
      },
      headerTintColor: Theme.headerText
    }
  }
);

const bottomTabConfig = {
  Categories: {
    tabBarLabel: "Explore",

    screen: Navigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Theme.primary // android
    }
  },
  Favorites: {
    tabBarLabel: "Favorites",
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Theme.primary // android
    }
  }
};

// To create native like style for android, use Material style

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeTintColor: Theme.headerText,
        shifting: true // animated effect for android transition
        /* If you don't want animation, use this to change tab bg color
        barStyle: {
          backgroundColor: Theme.primary
        }*/
      })
    : createBottomTabNavigator(bottomTabConfig, {
        tabBarOptions: {
          activeTintColor: Theme.primary,
          inactiveTintColor: Theme.fontColor
        }
      });

// Note that basic export is not enough, you need createAppContainer
// App has a root navigator (where app starts) but you can nest new navigators inside the root navigator
export default createAppContainer(TabNavigator);
