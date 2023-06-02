import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { baseTextStyle, headings } from "./../../styles/global";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <FontAwesome5 name="tasks" size={24} />
        <Text style={styles.titleText}>Just Do it</Text>
      </View>
      <Text style={styles.creditText}>by Aakash Patel</Text>
    </View>
  );
}

export default Header;
