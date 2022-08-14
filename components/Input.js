import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

const Input = (props) => {
  const [goal, setGoal] = useState("");

  const handleChange = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.goalHandler(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleChange}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>

        {/* <Button title='ADD' onPress={() => props.goalHandler(goal)}/> */}
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    marginVertical: 10,
  },
  buttonContainer: {
    width: "7 0%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  button: {
    width: "40%",
  },
});
