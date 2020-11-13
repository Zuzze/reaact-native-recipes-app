import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

/**
 * Screen to display recipe categories
 * @param {*} props
 */
const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button
        title="Recipes"
        onPress={() => {
          props.navigation.navigate({ routeName: "Recipes" });
        }}
      />
    </View>
  );
};

CategoriesScreen.propTypes = {};

CategoriesScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
