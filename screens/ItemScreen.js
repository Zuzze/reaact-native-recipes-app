import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ITEMS } from "../data/mock-data";
import Theme from "../constants/theme";

/**
 * Single recipe screen
 * @param {*} props
 */
const ItemScreen = props => {
  const ItemId = props.navigation.getParam("id");
  const selectedItem = ITEMS.find(item => item.id === ItemId);

  return (
    <View style={styles.screen}>
      <Text>{selectedItem.title}</Text>
    </View>
  );
};
ItemScreen.navigationOptions = navigationData => {
  const ItemId = navigationData.navigation.getParam("id");
  const selectedItem = ITEMS.find(item => item.id === ItemId);
  return {
    headerTitle: selectedItem.title
  };
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
