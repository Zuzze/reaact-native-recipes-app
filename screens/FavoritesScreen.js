import React from "react";
import PropTypes from "prop-types";
import ItemTileList from "../components/ItemTileList";
import { View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import ThemeText from "../components/ThemeText";
import ThemeTitleText from "../components/ThemeTitleText";
import Theme from "../constants/theme";

/**
 * Screen to display all reecipes that have been marked as favorites
 * @param {*} props
 */
const FavoritesScreen = props => {
  const favoriteItems = useSelector(state => state.items.favoriteItems);

  if (!favoriteItems || favoriteItems.length === 0) {
    return (
      <View style={{ ...Theme.screen, ...styles.screen }}>
        <Image
          style={styles.emptyFavorites}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_1280.jpg"
          }}
        />
        <ThemeTitleText>No favorites added</ThemeTitleText>
        <ThemeText style={styles.text}>
          Add recipes to your favorites by pressing star icon of the recipe you
          want to save
        </ThemeText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 10
  },
  emptyFavorites: {
    height: 150,
    width: 150,
    justifyContent: "center",
    borderRadius: 75,
    marginBottom: 30
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default FavoritesScreen;
