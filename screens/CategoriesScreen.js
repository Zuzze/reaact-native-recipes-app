import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Theme from "../constants/theme";

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
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        keyExtractor={item => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
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
    backgroundColor: Theme.background
  },
  list: {
    padding: 10
  }
});

export default CategoriesScreen;
