import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Tasks from "./src/components/Tasks";
import Form from "./src/components/Form";
import styles from "./src/styles/main";
import Navigation from "./src/components/Navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import database from "./firebaseConfig";
import { ref, onValue, update, remove } from "firebase/database";
const Tab = createBottomTabNavigator();

const TASKS_LIST = [];

const ERROR_MSGS = {
  NO_DATA_FOUND: "No data found",
  ERROR_RETRIEVING_DATA: "Opps, Error retrieving data",
  UPDATE_DATA: "Error updating data",
  REMOVE_DATA: "Error removing data",
};

export default function App() {
  const [tasks, setTasks] = useState(TASKS_LIST);
  const [loading, setLoading] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleAddTask = () => {
    fetchTasks();
  };

  useEffect(() => {
    //Make an API call to get the tasks
    setLoading(true);
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const tasks = [];
    try {
      (async () => {
        const dbRef = ref(database, "/tasks");
        onValue(
          dbRef,
          (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              tasks.push({ id: childKey, ...childData });
            });

            if (tasks.length === 0) {
              setNoDataFound(true);
              setLoading(false);
            } else {
              setTasks(tasks);
              setLoading(false);
            }
          },
          { onlyOnce: true }
        );
      })();
    } catch (error) {
      // Error retrieving data
      console.log("Error retrieving data", error);
      setErrorMsg(ERROR_MSGS.ERROR_RETRIEVING_DATA);
    }
  };

  const updateTasks = (id) => {
    console.log("🚀 ~ file: App.jsx:44 ~ updateTasks ~ id:", id);
    const getTasks = [...tasks];
    const index = getTasks.findIndex((task) => task.id === id);

    //if index is -1, then the task is not found
    if (index < 0) return;
    const updatedData = { ...getTasks[index] };
    updatedData.done = !updatedData.done;
    getTasks[index] = updatedData;

    updateTasksToDatabase(id, updatedData, getTasks);
  };

  const updateTasksToDatabase = (id, updatedData, getTasks) => {
    //make an api call to update the task
    const updates = {};
    updates["/tasks/" + id] = updatedData;

    update(ref(database), updates)
      .then(() => {
        console.log("User successfully updated!");
        setTasks(getTasks);
      })
      .catch((error) => {
        console.log("Error:", error);
        setErrorMsg(ERROR_MSGS.UPDATE_DATA);
      });
  };

  const onTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    //remove the task from the database
    removeTaskFromDatabase(id, updatedTasks);
  };

  const removeTaskFromDatabase = (id, updatedTasks) => {
    remove(ref(database, "/tasks/" + id))
      .then(() => {
        console.log("User successfully deleted!");
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log("Error:", error);
        setErrorMsg(ERROR_MSGS.REMOVE_DATA);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      {loading && <Text>Loading...</Text>}
      {noDataFound && <Text>No data found</Text>}
      {errorMsg && <Text>{errorMsg}</Text>}
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
