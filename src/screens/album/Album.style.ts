import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { fontFamily, fontH2, screenMainContainer, screenTitleStyles } from "../../theme/styles";

interface Style {
    container: ViewStyle;
    titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
    container: {
        ...screenMainContainer
    },
    titleTextStyle: {
        ...screenTitleStyles
    },
});
