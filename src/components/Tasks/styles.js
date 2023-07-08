import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#bcbcbc",
  },
  modal: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  crossButton: {
    marginLeft: "auto",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    textAlign: "center",
    margin: 20,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
