import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import PropTypes from "prop-types";
import Theme from "../constants/theme";

/** Custom styled theme checkbox */
const ThemeCheckbox = props => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBox
      style={{ ...styles.checkbox, ...props.style }}
      disabled={false}
      value={isChecked}
      tintColors={{
        true: Theme.primary,
        false: "gray"
      }}
      onValueChange={newValue => setIsChecked(newValue)}
    />
  );
};

ThemeCheckbox.propTypes = {
  style: PropTypes.object
};

ThemeCheckbox.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  // documentation https://github.com/react-native-checkbox/react-native-checkbox
  checkbox:
    Platform.OS === "ios"
      ? {
          // iOS only
          boxType: "circle", // 'circle' or 'square'
          tintColor: Theme.light, // unchecked box color
          onCheckColor: Theme.primary, // checked checkmark color
          onFillColor: "transparent" // The color of the inside of the box when it is On. Defaults to transparent
        }
      : {}
  // android style is sset inline in `tintColors`
});

export default ThemeCheckbox;
