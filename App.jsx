import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Tasks from "./src/components/Tasks";
import Form from "./src/components/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import Navigation from "./src/components/Navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

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

  const updateTasks = (id) => {
    console.log("🚀 ~ file: App.jsx:44 ~ updateTasks ~ id:", id);
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const onTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const [tasks, setTasks] = useState(TASKS_LIST);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Navigation>
        <Tab.Screen name={"Tasks"}>
          {(props) => (
            <Tasks
              {...props}
              tasks={tasks}
              setTasks={setTasks}
              updateTasks={updateTasks}
              onTaskRemoval={onTaskRemoval}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name={"Form"}>
          {(props) => <Form {...props} onAddTask={handleAddTask} />}
        </Tab.Screen>
      </Navigation>
    </SafeAreaView>
  );
}
