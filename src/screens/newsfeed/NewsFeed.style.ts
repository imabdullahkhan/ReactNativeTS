import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { fontH2, screenMainContainer } from "../../theme/styles";

interface Style {
    container: ViewStyle;
    titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
    container: {
        ...screenMainContainer
    },
    titleTextStyle: {
        color: 'black',
        fontSize: fontH2
    },
});
