import React from "react";
import { Platform, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../constants/theme";

/**
 * A Button to be displayed in header
 * @param {*} props
 */
const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      style={{ ...props.style, ...styles.headerButton }}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? Theme.headerText : Theme.header}
    />
  );
};

CustomHeaderButton.propTypes = {
  onSelect: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string
};

CustomHeaderButton.defaultProps = {
  onSelect: () => {},
  color: "lightgray",
  title: "Category Name"
};

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: 10
  }
});

export default CustomHeaderButton;
