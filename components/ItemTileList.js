import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Theme from "../constants/theme";
import ItemTile from "./ItemTile";
import { useSelector } from "react-redux";

/** A list to display a grooup of items */
const ItemTileList = props => {
  // you MUST use useSelector only on root level of the component
  const favoriteItems = useSelector(state => state.items.favoriteItems);

  const renderItem = itemData => {
    const isFavorite = favoriteItems.some(item => item.id === itemData.item.id);
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
            params: {
              id: itemData.item.id,
              isFavorite: isFavorite
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Theme.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default ItemTileList;
