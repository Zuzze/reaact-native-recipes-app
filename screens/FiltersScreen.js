import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform, Image } from "react-native";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Theme from "../constants/theme";
import ThemeText from "../components/ThemeText";
import ThemeTitleText from "../components/ThemeTitleText";
import { setFilters } from "../store/actions/items";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <ThemeText>{props.label}</ThemeText>
      <Switch
        trackColor={{ true: Theme.success, false: Theme.accent }}
        thumbColor={Theme.light}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

/**  Screen to filter recipes by category */
const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  // trigger only when filters [isGlutenFree, isLactoseFree, isVegan, isVegetarian] change
  // useCallback() often is used in conjunction with useEffect() because it allows you to prevent the re-creation of a function.
  // By wrapping it around a function declaration and defining the dependencies of the function, it ensures that the function is only re-created if its dependencies changed.
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    dispatch(setFilters(appliedFilters));
    console.log(appliedFilters);
    props.navigation.navigate({
      routeName: "Categories"
    });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // componendtDidUpdate when one of the filters changes
  // With a dependency array provided, useEffect() will only re-run the function you passed as a first argument, whenever one of the dependencies changed.
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2020/11/04/15/28/coffee-5712773_1280.jpg"
        }}
      />
      <View style={styles.content}>
        <ThemeTitleText style={styles.title}>Filter recipes</ThemeTitleText>
        <FilterSwitch
          label="Gluten-free"
          state={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-checkmark-circle"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

FiltersScreen.propTypes = {};

FiltersScreen.defaultProps = {};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.background
  },
  content: {
    alignItems: "center",
    width: "100%",
    backgroundColor: Theme.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -100
  },
  title: {
    fontFamily: Theme.titleFontFamily,
    color: Theme.dark,
    fontSize: 22,
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 5,
    ...Theme.shadow,
    backgroundColor: Theme.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Theme.cardBorderRadius
  },
  image: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    marginBottom: 30
  }
});

export default FiltersScreen;
