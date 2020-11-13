import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

/**
 * Screen to display all recipes in a specific category
 * @param {*} props
 */
const RecipeCategoryScreen = props => {
  return (
    <View style={styles.screen}>
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
