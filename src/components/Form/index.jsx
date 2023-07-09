import React, { useState } from "react";
import {
  View,
  TextInput,
  Switch,
  Pressable,
  Text,
  Keyboard,
} from "react-native";
import styles from "./styles";
import database from "../../../firebaseConfig";
import { ref, push, set } from "firebase/database";
import showToast from "../../Utils/Toast";

function Form({ onAddTask, navigation }) {
  const [taskDescription, setTaskDescription] = useState(" ");
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDescriptionChange = (text) => {
    setTaskDescription(text);
  };

  const handleStatusChange = (value) => {
    setTaskDone(value);
  };

  const handleAddPress = () => {
    if (taskDescription) {
      //make an api call to add the task
      //if the api call is successful, then navigate to the tasks screen
      //if the api call fails, then show an error message
      addDataToDatabase(taskDescription, taskDone);
      onAddTask();
    } else {
      setErrorMessage("The description is required.");
    }
  };

  const addDataToDatabase = (taskDescription, taskDone) => {
    const listRef = ref(database, "/tasks");
    const pushRef = push(listRef);
    const data = { description: taskDescription, done: taskDone };
    set(pushRef, data)
      .then(() => {
        console.log("Task successfully added:", pushRef.key);
        showToast("Task successfully added!");
        setErrorMessage(null);
        setTaskDescription("");
        setTaskDone(false);
        Keyboard.dismiss();
      })
      .catch((error) => {
        console.log("Error:", error);
        setErrorMessage("An error occurred while adding the task.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new task</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Enter a task description"
          maxLength={150}
          onChangeText={handleDescriptionChange}
          value={taskDescription}
          style={styles.textInputContainer}
        />
        <Switch
          value={taskDone}
          onValueChange={handleStatusChange}
          style={{ marginLeft: "auto", marginRight: 20 }}
        />
        {errorMessage && (
          <View>
            <Text style={{ fontWeight: "bold" }}>Attention:</Text>
            <Text style={{ color: "red" }}>{errorMessage}</Text>
          </View>
        )}
      </View>
      <Pressable onPress={handleAddPress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </Pressable>
    </View>
  );
}

export default Form;
