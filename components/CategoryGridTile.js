import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
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
        <View style={{ ...styles.tile, ...{ backgroundColor: props.color } }}>
          <Text style={styles.title}>{props.title}</Text>
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
    padding: 15
  },
  gridItem: {
    margin: 15,
    flex: 1,
    height: 150,
    overflow: "hidden",
    borderRadius: Theme.borderRadius
  },
  title: {
    fontFamily: Theme.titleFontFamily,
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoryGridTile;
