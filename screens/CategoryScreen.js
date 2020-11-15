import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/mock-data";
import ItemTileList from "../components/ItemTileList";

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

CategoryScreen.propTypes = {};

CategoryScreen.defaultProps = {};

export default CategoryScreen;
