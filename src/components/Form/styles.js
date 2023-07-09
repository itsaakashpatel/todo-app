import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#bcbcbc",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3b43d6",
    padding: 10,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    // width: Dimensions.get("window").width - 120,
    flex: 1,
  },
  addButton: {
    backgroundColor: "#3b43d6",
    padding: 10,
    margin: 20,
    color: "#fff",
  },
  addButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
