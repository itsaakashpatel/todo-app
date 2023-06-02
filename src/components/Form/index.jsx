import React, { useState } from "react";
import { View, TextInput, Switch, Button, Text, Keyboard } from "react-native";
import styles from "./styles";

function Form({ onAddTask }) {
  const [taskDescription, setTaskDescription] = useState("");
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

      <TextInput
        placeholder="Enter a task description"
        maxLength={150}
        onChangeText={handleDescriptionChange}
        value={taskDescription}
        style={styles.textInputContainer}
      />
      <View>
        <Text>Completed:</Text>
        <Switch value={taskDone} onValueChange={handleStatusChange} />
      </View>
      <Button title="Add" onPress={handleAddPress} />
    </View>
  );
}

export default Form;
