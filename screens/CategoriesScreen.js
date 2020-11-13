import React from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";
import CategoryGridTile from "../components/CategoryGridTile";

/**
 * Screen to display recipe categories
 * @param {*} props
 */
const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Recipes",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.propTypes = {};

CategoriesScreen.defaultProps = {};

CategoriesScreen.navigationOptions = {
  // see header style documentation at https://reactnavigation.org/docs/headers/
  headerTitle: "Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
