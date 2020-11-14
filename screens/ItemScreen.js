import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * Single recipe screen
 * @param {*} props
 */
const ItemScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Recipe</Text>
    </View>
  );
};

ItemScreen.propTypes = {};

ItemScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.background
  }
});

export default ItemScreen;
