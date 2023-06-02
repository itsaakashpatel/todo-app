import React from "react";
import { View, ScrollView } from "react-native";
import Task from "./task";
import styles from "./styles";

function Tasks({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          id={task.id}
          status={task.done}
        />
      ))}
    </ScrollView>
  );
}

export default Tasks;
