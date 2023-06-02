import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function Task({ id, description, status }) {
  return (
    <View style={styles.task}>
      <Text>{description}</Text>
      <Text>Id: {id}</Text>
      <Text>Status: {status ? "Completed" : "Open"}</Text>
    </View>
  );
}

export default Task;
