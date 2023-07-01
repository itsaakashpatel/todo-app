import { StyleSheet } from "react-native";
import { baseTextStyle, headings, baseColors } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
    padding: 10,
  },
});

export default styles;
