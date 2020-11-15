import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import ThemeTitleText from "../components/ThemeTitleText";
import ThemeText from "../components/ThemeText";
import { toggleFavorite } from "../store/actions/items";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <ThemeText>{props.children}</ThemeText>
    </View>
  );
};

/**
 * Single recipe screen
 * @param {*} props
 */
const ItemScreen = props => {
  const availableItems = useSelector(state => state.items.items);
  const itemId = props.navigation.getParam("id");
  const selectedItem = availableItems.find(item => item.id === itemId);
  const dispatch = useDispatch();

  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    props.navigation.setParams({ itemTitle: selectedItem.title });
  }, [selectedItem]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: handleToggleFavorite });
  }, [handleToggleFavorite]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: selectedItem.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <ThemeText>{selectedItem.duration}m</ThemeText>
          <ThemeText>{selectedItem.complexity.toUpperCase()}</ThemeText>
          <ThemeText>{selectedItem.affordability.toUpperCase()}</ThemeText>
        </View>
        <ThemeTitleText style={styles.title}>Ingredients</ThemeTitleText>
        {selectedItem.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <ThemeTitleText style={styles.title}>Steps</ThemeTitleText>
        <View style={styles.steps}>
          {selectedItem.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
ItemScreen.navigationOptions = navigationData => {
  const itemTitle = navigationData.navigation.getParam("itemTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFavorite");

  return {
    headerTitle: itemTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    )
  };
};

ItemScreen.propTypes = {};

ItemScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    marginVertical: 10,
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderRadius: Theme.cardBorderRadius,
    borderWidth: 1,
    padding: 10
  },
  steps: {
    marginBottom: 20
  }
});

export default ItemScreen;
