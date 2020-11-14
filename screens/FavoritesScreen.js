import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * Screen to display all reecipes that have been marked as favorites
 * @param {*} props
 */
const FavoritesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Favorites</Text>
    </View>
  );
};

FavoritesScreen.propTypes = {};

FavoritesScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.background
  }
});

export default FavoritesScreen;
