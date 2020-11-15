import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Theme from "../constants/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import ThemeTitleText from "../components/ThemeTitleText";
import ThemeText from "../components/ThemeText";
import { toggleFavorite } from "../store/actions/items";
import { Button, Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

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
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const onDismissSnackBar = () => setIsSnackbarVisible(false);

  const availableItems = useSelector(state => state.items.items);
  const itemId = props.navigation.getParam("id");
  const isCurrentItemFavorite = useSelector(state =>
    state.items.favoriteItems.some(item => item.id === itemId)
  );
  const selectedItem = availableItems.find(item => item.id === itemId);
  const dispatch = useDispatch();

  const handleToggleFavorite = useCallback(() => {
    setIsSnackbarVisible(!isSnackbarVisible);
    dispatch(toggleFavorite(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    props.navigation.setParams({ itemTitle: selectedItem.title });
  }, [selectedItem]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: handleToggleFavorite });
  }, [handleToggleFavorite]);

  useEffect(() => {
    props.navigation.setParams({ isFavorite: isCurrentItemFavorite });
  }, [isCurrentItemFavorite]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: selectedItem.imageUrl }} style={styles.image} />
        <View style={styles.card}>
          <View style={styles.details}>
            <View>
              <Ionicons
                style={styles.badgeTitle}
                name="md-stopwatch"
                size={22}
              />
              <ThemeText style={styles.badgeTitle}>Duration</ThemeText>
              <ThemeText style={styles.badge}>
                {selectedItem.duration} min
              </ThemeText>
            </View>

            <View>
              <Ionicons style={styles.badgeTitle} name="md-podium" size={22} />
              <ThemeText style={styles.badgeTitle}>Difficulty</ThemeText>
              <ThemeText style={styles.badge}>
                {selectedItem.complexity}
              </ThemeText>
            </View>

            <View>
              <Ionicons style={styles.badgeTitle} name="md-cash" size={22} />
              <ThemeText style={styles.badgeTitle}>Cost</ThemeText>
              <ThemeText style={styles.badge}>
                {selectedItem.affordability}
              </ThemeText>
            </View>
          </View>
          <ThemeTitleText style={styles.title}>Ingredients</ThemeTitleText>
          {selectedItem.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
          <ThemeTitleText style={styles.title}>
            <Ionicons
              name="ios-restaurant"
              size={22}
              style={styles.titleIcon}
            />{" "}
            Steps
          </ThemeTitleText>
          <View style={styles.steps}>
            {selectedItem.steps.map(step => (
              <ListItem key={step}>{step}</ListItem>
            ))}
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={isSnackbarVisible}
        theme={{
          roundness: 20,
          colors: {
            accent: Theme.fontColor,
            surface: Theme.fontColor,
            onSurface: Theme.accent
          },
          fonts: {
            regular: Theme.fontFamily,
            medium: Theme.fontFamily
          }
        }}
        duration={5000}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Close",
          onPress: () => {
            // Do something
          }
        }}
      >
        {!isCurrentItemFavorite
          ? "Recipe removed from favorites"
          : "Recipe added to favorites"}
      </Snackbar>
    </View>
  );
};

// You cannot communicate between navigation and redux directly
// you need navigation params to communicate between redux <=> react useEffect <=> navigation params
// if data is not set as parent props, there can be a delay
ItemScreen.navigationOptions = navigationData => {
  const itemTitle = navigationData.navigation.getParam("itemTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: itemTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

ItemScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.background
  },
  card: {
    backgroundColor: Theme.card,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -40,
    paddingTop: 10
  },
  image: {
    height: 350
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
  },
  badge: {
    ...Theme.badge,
    fontFamily: Theme.titleFontFamily
  },
  badgeTitle: {
    textAlign: "center",
    marginBottom: 5
  },
  titleIcon: {
    paddingRight: 10
  }
});

export default ItemScreen;

/**
 <Ionicons
  name="ios-basket"
  size={22}
  style={styles.titleIcon}
/>
 */
