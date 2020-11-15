import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/mock-data";
import ItemTileList from "../components/ItemTileList";
import ThemeText from "../components/ThemeText";
import Theme from "../constants/theme";

/**
 * Screen to display all recipes in a specific category
 * @param {*} props
 */
const CategoryScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
  const availableItems = useSelector(state => state.items.filteredItems);
  const categoryItems = availableItems.filter(
    item => item.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  if (categoryItems.length === 0) {
    return (
      <View style={{ ...Theme.screen, ...styles.screen }}>
        <ThemeText>No recipes found with these filters</ThemeText>
      </View>
    );
  }
  return (
    <ItemTileList listData={categoryItems} navigation={props.navigation} />
  );
};

// navigatinOptions can be also dymanic if you use function
CategoryScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
  return {
    headerTitle: selectedCategory.title
  };
};

CategoryScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryScreen;
