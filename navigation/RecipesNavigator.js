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

// Stack Navigator is a "stack" of screens that you can go back by pressing back button on top
const RecipesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Recipes: RecipeCategoryScreen,
  Recipe: RecipeDetailsScreen
});

// Note that basic export is not enough, you need createAppContainer
export default createAppContainer(RecipesNavigator);
