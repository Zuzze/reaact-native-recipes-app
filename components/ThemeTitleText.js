import React from "react";
import { Text, StyleSheet } from "react-native";
import Theme from "../constants/theme";
import PropTypes from "prop-types";

/** Default text used in title text of the app */
const ThemeTitleText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

ThemeTitleText.propTypes = {
  style: PropTypes.object
};

ThemeTitleText.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.titleFontFamily,
    fontSize: Theme.titleFontSize,
    color: Theme.titleFontColor
  }
});

export default ThemeTitleText;
