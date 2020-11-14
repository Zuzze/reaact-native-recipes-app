import React from "react";
import PropTypes from "prop-types";
import ItemTileList from "../components/ItemTileList";
import { ITEMS } from "../data/mock-data";

/**
 * Screen to display all reecipes that have been marked as favorites
 * @param {*} props
 */
const FavoritesScreen = props => {
  const favoriteMeals = ITEMS.filter(
    item => item.id === "m1" || item.id === "m2"
  );
  return (
    <ItemTileList listData={favoriteMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your favorites"
};

FavoritesScreen.propTypes = {};

FavoritesScreen.defaultProps = {};

export default FavoritesScreen;
