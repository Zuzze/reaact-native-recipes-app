import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ITEMS } from "../data/mock-data";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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
    headerTitle: selectedItem.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("fav")}
        />
      </HeaderButtons>
    )
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
