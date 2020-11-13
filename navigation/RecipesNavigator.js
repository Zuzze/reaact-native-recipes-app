/**
 * Note that in React Navigator 3+ you have to install and import navigators separately
 * import { createStackNavigator } from 'react-navigation-stack'
 * import { createDrawerNavigator } from 'react-navigation-drawer';
 * import { createStackNavigator } from 'react-navigation-stack';
 */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

import Theme from "../constants/theme";
import { Platform } from "@unimodules/core";

// Stack Navigator is a "stack" of screens that you can go back by pressing back button on top
const RecipesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Recipes: RecipeCategoryScreen,
    Recipe: { screen: RecipeDetailsScreen, navigationOptions: {} }
  },
  {
    initialRouteName: "Categories", // first pair is default
    mode: "card", // modal, card (default)
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

// Note that basic export is not enough, you need createAppContainer
export default createAppContainer(RecipesNavigator);
