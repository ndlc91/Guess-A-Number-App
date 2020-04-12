import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View>
      <TextInput style={styles.input}/>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
