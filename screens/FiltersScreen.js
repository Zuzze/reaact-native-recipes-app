import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**  Screen to filter recipes by category */
const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Filters</Text>
    </View>
  );
};

FiltersScreen.propTypes = {};

FiltersScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.background
  }
});

export default FiltersScreen;
