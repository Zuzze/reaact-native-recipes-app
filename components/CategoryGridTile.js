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
        style={{ flex: 1 }}
        onPress={props.onSelect}
        background={TouchableNativeFeedback.Ripple(Theme.shadow, true)}
      >
        <View style={styles.tile}>
          <Image
            style={styles.gridImage}
            source={require("../assets/img/plate_watermelon.png")}
          />
          <ThemeTitleText style={styles.gridTitle}>
            {props.title}
          </ThemeTitleText>
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
    backgroundColor: Theme.card,
    borderRadius: Theme.cardBorderRadius,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
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
  gridImage: {
    width: "70%"
  },
  gridTitle: {
    textAlign: "right",
    fontSize: 16
  }
});

export default CategoryGridTile;
