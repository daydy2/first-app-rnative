import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    backgroundColor: "#fffdd0",
    borderColor: "#00000",
    marginVertical: 5,
    borderWidth: 1,
  },
});

export default GoalItem;
