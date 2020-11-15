import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import PropTypes from "prop-types";
import { ITEMS } from "../data/mock-data";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import ThemeTitleText from "../components/ThemeTitleText";
import ThemeText from "../components/ThemeText";

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
  const ItemId = props.navigation.getParam("id");
  const selectedItem = ITEMS.find(item => item.id === ItemId);

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
  const ItemId = navigationData.navigation.getParam("id");
  const selectedItem = ITEMS.find(item => item.id === ItemId);
  return {
    headerTitle: selectedItem.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("fav")}
        />
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
