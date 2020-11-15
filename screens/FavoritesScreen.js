import React from "react";
import PropTypes from "prop-types";
import ItemTileList from "../components/ItemTileList";

import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

/**
 * Screen to display all reecipes that have been marked as favorites
 * @param {*} props
 */
const FavoritesScreen = props => {
  const favoriteItems = useSelector(state => state.items.favoriteItems);
  return (
    <ItemTileList listData={favoriteItems} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = navData => {
  // see header style documentation at https://reactnavigation.org/docs/headers/
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

FavoritesScreen.propTypes = {};

FavoritesScreen.defaultProps = {};

export default FavoritesScreen;
