import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Platform
} from "react-native";
import Theme from "../constants/theme";
import ThemeText from "./ThemeText";
import ThemeTitleText from "./ThemeTitleText";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

/** A tile to display a preview of a single item */
const ItemTile = props => {
  let TouchableTile = TouchableOpacity;

  // note that Version is with capital V
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableTile = TouchableNativeFeedback;
  }

  return (
    <View style={styles.item}>
      <TouchableTile
        onPress={props.onSelect}
        background={TouchableNativeFeedback.Ripple(Theme.shadow, true)}
      >
        <View>
          <View>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.itemTextContainer}>
                <View style={{ ...styles.itemRow, ...styles.itemHeader }}>
                  <ThemeTitleText style={styles.title}>
                    {props.title}
                  </ThemeTitleText>
                </View>
                <View style={{ ...styles.itemRow, ...styles.itemFooter }}>
                  <ThemeText style={styles.itemFooterText}>
                    <Ionicons
                      name="md-stopwatch"
                      style={styles.icon}
                      size={16}
                    />{" "}
                    {props.duration} min
                  </ThemeText>
                  <ThemeText style={styles.itemFooterText}>
                    <Ionicons name="md-podium" style={styles.icon} size={16} />{" "}
                    {props.complexity}
                  </ThemeText>
                  <ThemeText style={styles.itemFooterText}>
                    <Ionicons name="md-cash" style={styles.icon} size={16} />{" "}
                    {props.affordability}
                  </ThemeText>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableTile>
    </View>
  );
};

ItemTile.propTypes = {
  onSelect: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  complexity: PropTypes.string,
  affordability: PropTypes.string
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    minWidth: "100%",
    height: 250,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  itemRow: {
    flexDirection: "row"
  },
  itemHeader: {
    paddingVertical: 10
  },
  itemFooter: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    color: "white",
    alignItems: "center"
    // backgroundColor: "rgba(255,255,255,0.8)"
  },
  itemFooterText: {
    color: Theme.light,
    marginTop: 10
  },
  itemTextContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 0,
    paddingHorizontal: 12
  },
  icon: {
    paddingRight: 10
  },
  title: {
    fontFamily: Theme.titleFontFamily,
    fontSize: 18,
    color: Theme.light,
    textAlign: "center"
  }
});

export default ItemTile;
