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
      onAddTask(taskDescription, taskDone);
      setErrorMessage(null);
      setTaskDescription("");
      setTaskDone(false);
      Keyboard.dismiss();
      navigation.navigate("Tasks");
    } else {
      setErrorMessage("The description is required.");
    }
  };

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View>
          <Text style={{ fontWeight: "bold" }}>Attention:</Text>
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        </View>
      )}

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
      </View>
      <Pressable onPress={handleAddPress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </Pressable>
    </View>
  );
}

export default Form;
