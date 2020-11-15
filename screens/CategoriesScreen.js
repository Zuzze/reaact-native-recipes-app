import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = navData => {
  // see header style documentation at https://reactnavigation.org/docs/headers/
  return {
    headerTitle: "Categories",
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Theme.background
  },
  list: {
    padding: 10
  }
});

export default CategoriesScreen;
