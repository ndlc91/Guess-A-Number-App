import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title="START GAME"
          onPress={props.startGameHandler}
          color={Colors.blue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default StartGameScreen;
