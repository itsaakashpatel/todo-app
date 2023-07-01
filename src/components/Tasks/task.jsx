import React, { useState } from "react";
import { View, Text, Pressable, Modal, Switch, Alert } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

function Task({ id, description, status, updateTasks, onTaskRemoval }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const taskRemovalHandler = () => {
    Alert.alert(
      "Remove Task",
      "This action will permanently delete this task. This action cannot be undone!",
      [
        {
          text: "Confirm",
          onPress: () => {
            onTaskRemoval(id);
            handleModalToggle();
          },
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  return (
    <>
      <Pressable style={styles.task} onPress={handleModalToggle}>
        <Text>{description}</Text>
        <Text>Id: {id}</Text>
        <Text>Status: {status ? "Completed" : "Open"}</Text>
      </Pressable>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <Pressable onPress={handleModalToggle} style={styles.crossButton}>
            <MaterialIcons name="cancel" size={24} color="gray" />
          </Pressable>
          <View style={styles.content}>
            <Text style={styles.modalText}>{description}</Text>
            <Switch
              value={status}
              onValueChange={() => updateTasks(id)}
              style={{ marginLeft: "auto", marginRight: 20 }}
            />
          </View>
          <Pressable onPress={taskRemovalHandler} style={styles.deleteButton}>
            <MaterialIcons name="delete" size={24} color="red" />
          </Pressable>
        </View>
      </Modal>
    </>
  );
}

export default Task;
