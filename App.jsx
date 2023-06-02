import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Tasks from "./src/components/Tasks";
import Form from "./src/components/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";

const TASKS_LIST = [
  {
    id: uuid(),
    description: "Walk the dog",
    done: true,
  },
  {
    id: uuid(),
    description: "Wash the car",
    done: false,
  },
  {
    id: uuid(),
    description: "Finish the lab",
    done: false,
  },
];

export default function App() {
  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone,
    });

    setTasks(updatedTasks);
  };

  const [tasks, setTasks] = useState(TASKS_LIST);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Tasks tasks={tasks} setTasks={setTasks} />
      <Form onAddTask={handleAddTask} />
    </SafeAreaView>
  );
}
