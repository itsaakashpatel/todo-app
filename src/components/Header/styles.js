import { StyleSheet } from "react-native";
import { baseTextStyle, headings, baseColors } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "column",
    borderBottomColor: baseColors.primary,
    borderBottomWidth: 3,
    padding: 10,
  },
  titleContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  titleText: {
    ...headings.h1,
    color: baseColors.primary,
    margin: 10,
  },
  creditText: {
    ...baseTextStyle,
    color: baseColors.tertiary,
    fontSize: 12,
    textAlign: "right",
  },
});

export default styles;
