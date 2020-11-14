import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image
} from "react-native";
import PropTypes from "prop-types";
import Theme from "../constants/theme";

/**
 * A touchable tile to display a category
 * @param {*} props
 */
const CategoryGridTile = props => {
  let TouchableTile = TouchableOpacity;

  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchableTile = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableTile style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.tile, ...{ backgroundColor: Theme.accent } }}>
          <Image
            style={styles.gridImage}
            source={require("../assets/img/plate_watermelon.png")}
          />
          <Text style={styles.gridTitle}>{props.title}</Text>
        </View>
      </TouchableTile>
    </View>
  );
};

CategoryGridTile.propTypes = {
  onSelect: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string
};

CategoryGridTile.defaultProps = {
  onSelect: () => {},
  color: "lightgray",
  title: "Category Name"
};

const styles = StyleSheet.create({
  tile: {
    borderRadius: Theme.borderRadius,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    overflow:
      Platform.OS === "android" && Platform.version >= 21
        ? "hidden"
        : "visible",
    elevation: 5
  },
  gridItem: {
    margin: 10,
    flex: 1,
    height: 150,
    shadowColor: Theme.shadow,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    textAlign: "center",
    borderRadius: Theme.borderRadius
  },
  gridImage: {
    width: "70%"
  },
  gridTitle: {
    fontFamily: Theme.titleFontFamily,
    color: Theme.fontColor,
    fontSize: 20,
    textAlign: "right"
  }
});

export default CategoryGridTile;
