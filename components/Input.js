import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={styles.input}/>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: 30,
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default Input;
