import React from "react";
import { Text, StyleSheet } from "react-native";
import Theme from "../constants/theme";
import PropTypes from "prop-types";

/** Default text used in body text of the app */
const ThemeText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

ThemeText.propTypes = {
  style: PropTypes.object
};

ThemeText.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor
  }
});

export default ThemeText;
