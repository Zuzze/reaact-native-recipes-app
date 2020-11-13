import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";

/**
 * Screen to display all recipes in a specific category
 * @param {*} props
 */
const RecipeCategoryScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Text>Recipes inside category</Text>
      <Button
        title="show recipe"
        onPress={() => {
          props.navigation.navigate({ routeName: "Recipe" });
        }}
      />
    </View>
  );
};

// navigatinOptions can be also dymanic if you use function
RecipeCategoryScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
  return {
    headerTitle: selectedCategory.title
  };
};

RecipeCategoryScreen.propTypes = {};

RecipeCategoryScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeCategoryScreen;
