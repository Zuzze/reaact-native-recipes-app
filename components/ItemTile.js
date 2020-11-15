import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Theme from "../constants/theme";
import ThemeText from "./ThemeText";
import ThemeTitleText from "./ThemeTitleText";

/** A tile to display a preview of a single item */
const ItemTile = props => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.itemRow, ...styles.itemHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <ThemeTitleText style={styles.title} numberOfLines={1}>
                  {props.title}
                </ThemeTitleText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.itemRow, ...styles.itemFooter }}>
            <ThemeText style={styles.itemFooterText}>
              {props.duration}m
            </ThemeText>
            <ThemeText style={styles.itemFooterText}>
              {props.complexity.toUpperCase()}
            </ThemeText>
            <ThemeText style={styles.itemFooterText}>
              {props.affordability.toUpperCase()}
            </ThemeText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: Theme.borderRadius,
    overflow: "hidden",
    marginBottom: 20,
    ...Theme.shadow
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
    height: "85%"
  },
  itemFooter: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  itemFooterText: {
    color: Theme.fontColor
  },
  titleContainer: {
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: Theme.titleFontFamily,
    fontSize: 20,
    color: Theme.fontColor,
    textAlign: "center"
  }
});

export default ItemTile;
