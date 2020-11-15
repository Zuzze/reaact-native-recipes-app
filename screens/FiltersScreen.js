import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import PropTypes from "prop-types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Theme from "../constants/theme";
import ThemeText from "../components/ThemeText";
import ThemeTitleText from "../components/ThemeTitleText";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <ThemeText>{props.label}</ThemeText>
      <Switch
        trackColor={{ true: Theme.success, false: Theme.danger }}
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

  // trigger only when filters [isGlutenFree, isLactoseFree, isVegan, isVegetarian] change
  // useCallback() often is used in conjunction with useEffect() because it allows you to prevent the re-creation of a function.
  // By wrapping it around a function declaration and defining the dependencies of the function, it ensures that the function is only re-created if its dependencies changed.
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // componendtDidUpdate when one of the filters changes
  // With a dependency array provided, useEffect() will only re-run the function you passed as a first argument, whenever one of the dependencies changed.
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <ThemeTitleText style={styles.title}>
        Available Filters / Restrictions
      </ThemeTitleText>
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
          iconName="ios-save"
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
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.background
  },
  title: {
    fontFamily: Theme.titleFontFamily,
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});

export default FiltersScreen;
