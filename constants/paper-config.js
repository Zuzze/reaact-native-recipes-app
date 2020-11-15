import { configureFonts, DefaultTheme } from "react-native-paper";
import Theme from "./theme";

export const fontConfig = {
  default: {
    regular: {
      fontFamily: Theme.fontFamily,
      fontWeight: "normal"
    },
    medium: {
      fontFamily: Theme.titleFontFamily,
      fontWeight: "bold"
    }
  }
};

export const PaperTheme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    primary: Theme.primary,
    accent: Theme.accent
  }
};
