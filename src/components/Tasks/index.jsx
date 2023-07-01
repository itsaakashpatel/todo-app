import React from "react";
import { View, ScrollView } from "react-native";
import Task from "./task";
import styles from "./styles";

function Tasks({ tasks, updateTasks, onTaskRemoval }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            description={task.description}
            id={task.id}
            status={task.done}
            updateTasks={updateTasks}
            onTaskRemoval={onTaskRemoval}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Tasks;
