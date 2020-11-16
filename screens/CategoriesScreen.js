import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/mock-data";
import { useSelector } from "react-redux";
import CategoryGridTile from "../components/CategoryGridTile";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import ThemeTitleText from "../components/ThemeTitleText";

/**
 * Screen to display recipe categories
 * @param {*} props
 */
const CategoriesScreen = props => {
  const filteredItems = useSelector(state => state.items.filteredItems);
  const favoriteItems = useSelector(state => state.items.favoriteItems);

  /** renders single item of a grid */
  const renderGridItem = itemData => {
    const filteredCategoryItems = filteredItems.filter(
      item => item.categoryIds.indexOf(itemData.item.id) > -1
    );
    /*console.log(
      "FILTERED CATEGORY " + itemData.item.title,
      filteredCategoryItems
    );*/

    if (!filteredCategoryItems || filteredCategoryItems.length === 0) {
      console.log("no filtered results in " + itemData.item.title);
      return null;
    }

    const isFavorite = favoriteItems.some(item => item.id === itemData.item.id);

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        coverImage={filteredCategoryItems[0].imageUrl}
        onSelect={() => {
          /*if (filteredCategoryItems.length === 1) {
            console.log(
              "only one item in category, redirecting to item details..."
            );
            // go directly to item details if only one item in category
            props.navigation.navigate({
              routeName: "Recipe",
              params: {
                id: itemData.item.id,
                isFavorite: isFavorite
              }
            });
          } else {*/
          // go to items page if more than one item in category
          console.log("opening category items view...");
          props.navigation.navigate({
            routeName: "Recipes",
            params: {
              categoryId: itemData.item.id
            }
          });
          //}
        }}
      />
    );
  };

  return (
    <View style={Theme.screen}>
      <FlatList
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 100 }}
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
  list: {
    padding: 10
  }
});

export default CategoriesScreen;
