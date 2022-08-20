import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export const TodosList = ({ todoList, removeTask }) => {
  // return <ScrollView style={{width:'100%'}}>
  //    {todoList.map(item => (
  //       <View
  //          key={item.id}
  //          style={styles.Item}
  //       >
  //          <Text style={{fontSize: 20}}>{item.text}</Text>
  //       </View>
  //    ))}
  // </ScrollView>

  return (
    <FlatList
      style={{ width: "100%" }}
      data={todoList}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => removeTask(item)}>
          <View style={styles.Item}>
            <Text style={{ fontSize: 20 }}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  Item: {
    width: "100%",
    backgroundColor: "#ECF0F1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
