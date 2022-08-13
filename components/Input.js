import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Input = (props) => {
    const [goal, setGoal] = useState("");

    const handleChange = (enteredText) => {
        setGoal(enteredText);
      };

  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleChange}
          value={goal}
        />
        {/* <Button title="ADD" onPress={props.goalHandler.bind(this, goal)} /> */}
        <Button title='ADD' onPress={() => props.goalHandler(goal)}/>
      </View>
  )
}

export default Input

const styles = StyleSheet.create({
    screen: {
      width: "100%",
      padding: 50,
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: "80%",
      borderColor: "black",
      borderWidth: 1,
      padding: 4,
    },
    
  });