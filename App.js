import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import GoalItem from "./components/GoalItem";
import Input from "./components/Input";

export default function App() {
  const [goalArray, setGoalArray] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const goalHandler = (goalTitle) => {
    // setGoalArray([...goalArray, goal])
    setGoalArray((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    // console.log(goalId)
    setGoalArray(currentGoals => {
      return currentGoals.filter((item) => {item.id !== goalId; });});
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
    <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <Input visible={isAddMode} goalHandler={goalHandler} onCancel={cancelGoalAdditionHandler}/>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalArray}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 50,
  },
});
