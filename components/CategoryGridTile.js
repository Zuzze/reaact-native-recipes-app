import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import Theme from "../constants/theme";
import ThemeTitleText from "./ThemeTitleText";

/**
 * A touchable tile to display a category
 * @param {*} props
 */
const CategoryGridTile = props => {
  let TouchableTile = TouchableOpacity;

  // note that Version is with capital V
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableTile = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableTile
        onPress={props.onSelect}
        background={TouchableNativeFeedback.Ripple(Theme.shadow, true)}
      >
        <View style={styles.tile}>
          <ImageBackground
            source={{ uri: props.coverImage }}
            style={styles.bgImage}
          >
            <View style={styles.gridTitleContainer}>
              <ThemeTitleText style={styles.gridTitle} numberOfLines={1}>
                {props.title}
              </ThemeTitleText>
            </View>
          </ImageBackground>
        </View>
      </TouchableTile>
    </View>
  );
};

CategoryGridTile.propTypes = {
  onSelect: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  coverImage: PropTypes.string
};

CategoryGridTile.defaultProps = {
  onSelect: () => {},
  color: "lightgray",
  title: "Category Name"
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: Theme.card,
    borderRadius: Theme.cardBorderRadius,

    height: "100%",
    width: "100%",
    justifyContent: "flex-end",

    padding: 0,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible"
  },
  gridItem: {
    ...Theme.shadow,
    margin: 10,
    flex: 1,
    height: 150,
    textAlign: "center",
    borderRadius: Theme.cardBorderRadius
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  gridTitleContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  gridTitle: {
    textAlign: "right",
    fontSize: 16,
    marginRight: 20
  }
});

export default CategoryGridTile;
