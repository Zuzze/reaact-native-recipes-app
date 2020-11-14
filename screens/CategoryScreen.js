import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import { CATEGORIES, ITEMS } from "../data/mock-data";
import ItemTile from "../components/ItemTile";
import Theme from "../constants/theme";

/**
 * Screen to display all recipes in a specific category
 * @param {*} props
 */
const CategoryScreen = props => {
  const renderItem = itemData => {
    return (
      <ItemTile
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "Recipe",
            params: { id: itemData.item.id }
          });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
  const categoryItems = ITEMS.filter(
    item => item.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryItems}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Theme.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default CategoryScreen;
