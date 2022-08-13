import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Input from "./components/Input";

export default function App() {
  
  const [goalArray, setGoalArray] = useState([]);

  

  const goalHandler = (goalTitle) => {
    // setGoalArray([...goalArray, goal])
    setGoalArray((currentGoals) => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
  };
  return (
    <View style={styles.screen}>
     <Input goalHandler={goalHandler}/>

      <FlatList
      keyExtractor={(item, index) => item.id}
        data={goalArray}
        renderItem={(itemData) => (
          <GoalItem title={itemData.item.value}/>
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

