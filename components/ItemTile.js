import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Theme from "../constants/theme";

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
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.itemRow, ...styles.itemFooter }}>
            <Text style={styles.itemFooterText}>{props.duration}m</Text>
            <Text style={styles.itemFooterText}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.itemFooterText}>
              {props.affordability.toUpperCase()}
            </Text>
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
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20
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
    backgroundColor: Theme.light
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
